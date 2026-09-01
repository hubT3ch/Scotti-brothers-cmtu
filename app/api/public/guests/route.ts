import {
  getSupabaseAdminClient,
  SupabaseConfigurationError,
} from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PublicGuestRow = {
  id: string;
  guest_id: string;
  guest_name: string;
  guest_image_path: string | null;
  air_date: string | null;
  published: boolean;
};

function publicHeaders() {
  return {
    "Cache-Control": "no-store, max-age=0",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

/*
 * =========================================================
 * PUBLIC GUESTS API
 * =========================================================
 *
 * This endpoint reads ONLY from cmtu_public_guests.
 *
 * Only guests with published = true are returned.
 *
 * The endpoint uses the application's existing
 * server-side Supabase client so it uses the same
 * SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY configuration
 * already used by the CMTU Management Hub.
 *
 * It does not expose the service-role key to the browser.
 * =========================================================
 */

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: publicHeaders(),
  });
}

export async function GET() {
  try {
    const supabase = getSupabaseAdminClient();

    const { data, error } = await supabase
      .from("cmtu_public_guests")
      .select(
        "id, guest_id, guest_name, guest_image_path, air_date, published",
      )
      .eq("published", true)
      .order("air_date", {
        ascending: true,
        nullsFirst: false,
      });

    if (error) {
      console.error(
        "[CMTU] Public guest query failed:",
        error,
      );

      return Response.json(
        {
          error: "Unable to load public guests.",
        },
        {
          status: 500,
          headers: publicHeaders(),
        },
      );
    }

    const guests = (data as PublicGuestRow[]).map(
      (guest) => ({
        id: guest.id,
        guestId: guest.guest_id,
        name: guest.guest_name,
        image: guest.guest_image_path
  ? `/api/public/guest-image/${encodeURIComponent(
      guest.guest_id,
    )}`
  : null,
        airDate: guest.air_date,
      }),
    );

    return Response.json(
      {
        guests,
      },
      {
        status: 200,
        headers: publicHeaders(),
      },
    );
  } catch (error) {
    console.error(
      "[CMTU] Public guests API failed:",
      error,
    );

    if (error instanceof SupabaseConfigurationError) {
      return Response.json(
        {
          error: "Public guest storage is not configured.",
        },
        {
          status: 503,
          headers: publicHeaders(),
        },
      );
    }

    return Response.json(
      {
        error: "Unable to load public guests.",
      },
      {
        status: 500,
        headers: publicHeaders(),
      },
    );
  }
}
