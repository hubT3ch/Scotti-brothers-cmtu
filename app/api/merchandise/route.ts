import { cookies } from "next/headers";

import { getSupabaseAdminClient } from "@/lib/supabase-server";
import {
  isManagementSessionValid,
  MANAGEMENT_SESSION_COOKIE,
} from "@/lib/management-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function mapProduct(product: any, images: any[] = []) {
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
          a.display_order - b.display_order,
      )
      .map((image) => image.public_url),
    active: product.active,
    publicDisplay: product.public_display,
    featured: product.featured,
    inventoryQuantity:
      product.inventory_quantity,
    displayOrder: product.display_order,
  };
}

/*
 * PUBLIC CATALOG
 *
 * GET /api/merchandise
 *
 * Returns only products that are:
 *   active = true
 *   public_display = true
 */
export async function GET() {
  try {
    const supabase =
      getSupabaseAdminClient();

    const { data: products, error } =
      await supabase
        .from("merchandise_products")
        .select("*")
        .eq("active", true)
        .eq("public_display", true)
        .order("display_order", {
          ascending: true,
        });

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
        { status: 500 },
      );
    }

    const productIds =
      (products ?? []).map(
        (product) => product.id,
      );

    let images: any[] = [];

    if (productIds.length > 0) {
      const { data: imageRows } =
        await supabase
          .from(
            "merchandise_product_images",
          )
          .select("*")
          .in(
            "product_id",
            productIds,
          )
          .order("display_order", {
            ascending: true,
          });

      images = imageRows ?? [];

      const {
        data: publicBucket,
      } = await supabase.storage
        .from("cmtu-merchandise")
        .list();

      void publicBucket;
    }

    const mapped =
      (products ?? []).map(
        (product) => {
          const productImages =
            images
              .filter(
                (image) =>
                  image.product_id ===
                  product.id,
              )
              .map((image) => ({
                ...image,
                public_url:
                  supabase.storage
                    .from(
                      "cmtu-merchandise",
                    )
                    .getPublicUrl(
                      image.storage_path,
                    ).data
                    .publicUrl,
              }));

          return mapProduct(
            product,
            productImages,
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
      { status: 503 },
    );
  }
}

/*
 * MANAGEMENT SAVE
 *
 * POST /api/merchandise
 *
 * Used by the protected Merchandise Desk.
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
      { status: 401 },
    );
  }

  try {
    const body =
      await request.json();

    const supabase =
      getSupabaseAdminClient();

    const product = {
      id: body.id,
      name:
        String(body.name ?? "").trim(),
      description:
        String(
          body.description ?? "",
        ),
      sku:
        String(body.sku ?? "").trim(),
      category:
        String(
          body.category ??
            "Apparel",
        ),
      price:
        Number(body.price ?? 0),
      sale_price:
        body.salePrice ===
        null ||
        body.salePrice ===
          undefined ||
        body.salePrice ===
          ""
          ? null
          : Number(
              body.salePrice,
            ),
      active:
        Boolean(body.active),
      public_display:
        Boolean(
          body.publicDisplay,
        ),
      featured:
        Boolean(body.featured),
      inventory_quantity:
        Math.max(
          0,
          Number(
            body.inventoryQuantity ??
              0,
          ),
        ),
      display_order:
        Number(
          body.displayOrder ??
            0,
        ),
    };

    if (
      !product.name ||
      !product.sku
    ) {
      return Response.json(
        {
          error:
            "Product name and SKU are required.",
        },
        { status: 400 },
      );
    }

    if (
      !Number.isFinite(
        product.price,
      ) ||
      product.price < 0
    ) {
      return Response.json(
        {
          error:
            "Invalid product price.",
        },
        { status: 400 },
      );
    }

    const { data, error } =
      await supabase
        .from(
          "merchandise_products",
        )
        .upsert(product, {
          onConflict: "id",
        })
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
            "Product could not be saved.",
        },
        { status: 500 },
      );
    }

    return Response.json({
      product: mapProduct(
        data,
        [],
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
      { status: 400 },
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
      { status: 401 },
    );
  }

  const url =
    new URL(request.url);

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
      { status: 400 },
    );
  }

  try {
    const supabase =
      getSupabaseAdminClient();

    const { error } =
      await supabase
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
        { status: 500 },
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
      { status: 503 },
    );
  }
}
