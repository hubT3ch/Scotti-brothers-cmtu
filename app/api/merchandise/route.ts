import { cookies } from "next/headers";
import { randomUUID } from "crypto";

import { getSupabaseAdminClient } from "@/lib/supabase-server";
import {
  isManagementSessionValid,
  MANAGEMENT_SESSION_COOKIE,
} from "@/lib/management-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function mapProduct(
  product: any,
  images: any[] = [],
) {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    sku: product.sku,
    category: product.category,
    price: Number(product.price ?? 0),
    salePrice:
      product.sale_price === null
        ? null
        : Number(product.sale_price),
    images: images
      .sort(
        (a, b) =>
          a.display_order -
          b.display_order,
      )
      .map(
        (image) =>
          image.public_url,
      ),
    active: product.active,
    publicDisplay:
      product.public_display,
    featured: product.featured,
    inventoryQuantity:
      product.inventory_quantity,
    displayOrder:
      product.display_order,
  };
}

/**
 * Attach public Storage URLs to image rows.
 */
function mapImages(
  supabase: ReturnType<
    typeof getSupabaseAdminClient
  >,
  images: any[],
) {
  return images.map((image) => ({
    ...image,
    public_url:
      supabase.storage
        .from("cmtu-merchandise")
        .getPublicUrl(
          image.storage_path,
        ).data.publicUrl,
  }));
}

/*
 * PUBLIC CATALOG
 *
 * GET /api/merchandise
 *
 * Returns only products that are:
 *
 *   active = true
 *   public_display = true
 */
export async function GET() {
  try {
    const supabase =
      getSupabaseAdminClient();

    const {
      data: products,
      error,
    } = await supabase
      .from(
        "merchandise_products",
      )
      .select("*")
      .eq("active", true)
      .eq(
        "public_display",
        true,
      )
      .order(
        "display_order",
        {
          ascending: true,
        },
      );

    if (error) {
      console.error(
        "Merchandise catalog error:",
        error,
      );

      return Response.json(
        {
          error:
            "Unable to load merchandise catalog.",
        },
        {
          status: 500,
        },
      );
    }

    const productIds =
      (products ?? []).map(
        (product) =>
          product.id,
      );

    let images: any[] = [];

    if (
      productIds.length > 0
    ) {
      const {
        data: imageRows,
        error: imageError,
      } = await supabase
        .from(
          "merchandise_product_images",
        )
        .select("*")
        .in(
          "product_id",
          productIds,
        )
        .order(
          "display_order",
          {
            ascending: true,
          },
        );

      if (imageError) {
        console.error(
          "Merchandise image lookup error:",
          imageError,
        );
      }

      images =
        imageRows ?? [];
    }

    const mapped =
      (products ?? []).map(
        (product) => {
          const productImages =
            images.filter(
              (image) =>
                image.product_id ===
                product.id,
            );

          return mapProduct(
            product,
            mapImages(
              supabase,
              productImages,
            ),
          );
        },
      );

    return Response.json({
      products: mapped,
    });
  } catch (error) {
    console.error(
      "Merchandise API error:",
      error,
    );

    return Response.json(
      {
        error:
          "Merchandise service is not configured.",
      },
      {
        status: 503,
      },
    );
  }
}

/*
 * MANAGEMENT SAVE
 *
 * POST /api/merchandise
 *
 * Used by the protected Merchandise Desk.
 *
 * Rules:
 *
 *   1. Existing products retain their UUID.
 *   2. New products receive a real UUID.
 *   3. Only one Featured product is allowed
 *      within a category.
 */
export async function POST(
  request: Request,
) {
  const cookieStore =
    await cookies();

  const session =
    cookieStore.get(
      MANAGEMENT_SESSION_COOKIE,
    )?.value;

  if (
    !isManagementSessionValid(
      session,
    )
  ) {
    return Response.json(
      {
        error:
          "Authentication required.",
      },
      {
        status: 401,
      },
    );
  }

  try {
    const body =
      await request.json();

    const supabase =
      getSupabaseAdminClient();

    const existingId =
      typeof body.id ===
        "string" &&
      body.id.trim()
        ? body.id.trim()
        : null;

    const productId =
      existingId ??
      randomUUID();

    const name =
      String(
        body.name ?? "",
      ).trim();

    const description =
      String(
        body.description ?? "",
      );

    const sku =
      String(
        body.sku ?? "",
      ).trim();

    const category =
      String(
        body.category ??
          "Apparel",
      ).trim() ||
      "Apparel";

    const price =
      Number(
        body.price ?? 0,
      );

    const salePrice =
      body.salePrice ===
        null ||
      body.salePrice ===
        undefined ||
      body.salePrice ===
        ""
        ? null
        : Number(
            body.salePrice,
          );

    const active =
      Boolean(
        body.active,
      );

    const publicDisplay =
      Boolean(
        body.publicDisplay,
      );

    const featured =
      Boolean(
        body.featured,
      );

    const inventoryQuantity =
      Math.max(
        0,
        Number(
          body.inventoryQuantity ??
            0,
        ),
      );

    const displayOrder =
      Number(
        body.displayOrder ??
          0,
      );

    if (!name || !sku) {
      return Response.json(
        {
          error:
            "Product name and SKU are required.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !Number.isFinite(
        price,
      ) ||
      price < 0
    ) {
      return Response.json(
        {
          error:
            "Invalid product price.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      salePrice !== null &&
      (!Number.isFinite(
        salePrice,
      ) ||
        salePrice < 0)
    ) {
      return Response.json(
        {
          error:
            "Invalid sale price.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !Number.isFinite(
        inventoryQuantity,
      )
    ) {
      return Response.json(
        {
          error:
            "Invalid inventory quantity.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !Number.isFinite(
        displayOrder,
      )
    ) {
      return Response.json(
        {
          error:
            "Invalid display order.",
        },
        {
          status: 400,
        },
      );
    }

    /*
     * If this product is being made Featured,
     * remove Featured from every other product
     * in the same category.
     */
    if (featured) {
      const {
        error:
          clearFeaturedError,
      } = await supabase
        .from(
          "merchandise_products",
        )
        .update({
          featured: false,
        })
        .eq(
          "category",
          category,
        )
        .neq(
          "id",
          productId,
        );

      if (
        clearFeaturedError
      ) {
        console.error(
          "Featured product update error:",
          clearFeaturedError,
        );

        return Response.json(
          {
            error:
              "Unable to update the featured product for this category.",
          },
          {
            status: 500,
          },
        );
      }
    }

    /*
     * Save the product.
     */
    const product = {
      id: productId,
      name,
      description,
      sku,
      category,
      price,
      sale_price:
        salePrice,
      active,
      public_display:
        publicDisplay,
      featured,
      inventory_quantity:
        inventoryQuantity,
      display_order:
        displayOrder,
    };

    const {
      data,
      error,
    } = await supabase
      .from(
        "merchandise_products",
      )
      .upsert(
        product,
        {
          onConflict: "id",
        },
      )
      .select("*")
      .single();

    if (error) {
      console.error(
        "Merchandise save error:",
        error,
      );

      return Response.json(
        {
          error:
            error.code ===
            "23505"
              ? "A product with this SKU already exists."
              : "Product could not be saved.",
        },
        {
          status: 500,
        },
      );
    }

    /*
     * Return the saved product with its
     * current permanent images.
     */
    const {
      data: imageRows,
      error: imageError,
    } = await supabase
      .from(
        "merchandise_product_images",
      )
      .select("*")
      .eq(
        "product_id",
        data.id,
      )
      .order(
        "display_order",
        {
          ascending: true,
        },
      );

    if (imageError) {
      console.error(
        "Merchandise saved-image lookup error:",
        imageError,
      );
    }

    const productImages =
      mapImages(
        supabase,
        imageRows ??
          [],
      );

    return Response.json({
      product: mapProduct(
        data,
        productImages,
      ),
    });
  } catch (error) {
    console.error(
      "Merchandise POST error:",
      error,
    );

    return Response.json(
      {
        error:
          "Invalid merchandise request.",
      },
      {
        status: 400,
      },
    );
  }
}

/*
 * MANAGEMENT DELETE
 *
 * DELETE /api/merchandise?id=<product-id>
 */
export async function DELETE(
  request: Request,
) {
  const cookieStore =
    await cookies();

  const session =
    cookieStore.get(
      MANAGEMENT_SESSION_COOKIE,
    )?.value;

  if (
    !isManagementSessionValid(
      session,
    )
  ) {
    return Response.json(
      {
        error:
          "Authentication required.",
      },
      {
        status: 401,
      },
    );
  }

  const url =
    new URL(
      request.url,
    );

  const id =
    url.searchParams.get(
      "id",
    );

  if (!id) {
    return Response.json(
      {
        error:
          "Product ID is required.",
      },
      {
        status: 400,
      },
    );
  }

  try {
    const supabase =
      getSupabaseAdminClient();

    const {
      error,
    } = await supabase
      .from(
        "merchandise_products",
      )
      .delete()
      .eq("id", id);

    if (error) {
      console.error(
        "Merchandise delete error:",
        error,
      );

      return Response.json(
        {
          error:
            "Product could not be deleted.",
        },
        {
          status: 500,
        },
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Merchandise DELETE error:",
      error,
    );

    return Response.json(
      {
        error:
          "Merchandise service is not configured.",
      },
      {
        status: 503,
      },
    );
  }
}
