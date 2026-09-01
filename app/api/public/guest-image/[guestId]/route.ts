import {
  getSupabaseAdminClient,
  SupabaseConfigurationError,
} from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CMTU_BUCKET = "cmtu-submissions";

function publicImageHeaders(contentType: string) {
  return {
    "Content-Type": contentType,
    "Cache-Control": "no-store, max-age=0",
    "Access-Control-Allow-Origin": "*",
  };
}

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ guestId: string }>;
  },
) {
  try {
    const { guestId } = await params;

    if (!guestId) {
      return new Response("Guest ID is required.", {
        status: 400,
      });
    }

    const supabase = getSupabaseAdminClient();

    /*
     * Only retrieve an image belonging to a published
     * public guest record.
     */
    const { data: guest, error: guestError } = await supabase
      .from("cmtu_public_guests")
      .select(
        "guest_id, guest_image_path, published",
      )
      .eq("guest_id", guestId)
      .eq("published", true)
      .maybeSingle();

    if (guestError) {
      console.error(
        "[CMTU] Public guest image lookup failed:",
        guestError,
      );

      return new Response(
        "Unable to load guest image.",
        {
          status: 500,
        },
      );
    }

    if (!guest) {
      return new Response(
        "Guest image not found.",
        {
          status: 404,
        },
      );
    }

    const storagePath = guest.guest_image_path;

    if (!storagePath) {
      return new Response(
        "Guest does not have a promotional image.",
        {
          status: 404,
        },
      );
    }

    /*
     * Promotional guest photos are stored under
     * guest-files/.
     *
     * Keep this endpoint restricted to that storage
     * location rather than allowing arbitrary bucket
     * paths to be requested.
     */
    if (!storagePath.startsWith("guest-files/")) {
      console.error(
        "[CMTU] Invalid public guest image path:",
        storagePath,
      );

      return new Response(
        "Invalid guest image.",
        {
          status: 400,
        },
      );
    }

    if (storagePath.includes("..")) {
      return new Response(
        "Invalid guest image.",
        {
          status: 400,
        },
      );
    }

    const { data: imageFile, error: imageError } =
      await supabase.storage
        .from(CMTU_BUCKET)
        .download(storagePath);

    if (imageError || !imageFile) {
      console.error(
        "[CMTU] Public guest image download failed:",
        imageError,
      );

      return new Response(
        "Unable to load guest image.",
        {
          status: 404,
        },
      );
    }

    const contentType =
      imageFile.type || "image/jpeg";

    return new Response(
      await imageFile.arrayBuffer(),
      {
        status: 200,
        headers:
          publicImageHeaders(contentType),
      },
    );
  } catch (error) {
    console.error(
      "[CMTU] Public guest image API failed:",
      error,
    );

    if (
      error instanceof
      SupabaseConfigurationError
    ) {
      return new Response(
        "Public guest storage is not configured.",
        {
          status: 503,
        },
      );
    }

    return new Response(
      "Unable to load guest image.",
      {
        status: 500,
      },
    );
  }
}
