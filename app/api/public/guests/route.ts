import { createClient } from "@supabase/supabase-js";

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

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase server configuration is missing.");
  }

  return createClient(
    supabaseUrl,
    serviceRoleKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}

function publicHeaders() {
  return {
    "Cache-Control": "no-store, max-age=0",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

/*
 * Public guest endpoint.
 *
 * This endpoint intentionally exposes ONLY guests that have
 * been marked published in cmtu_public_guests.
 *
 * It does not read from or modify the guest submission process.
 */

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: publicHeaders(),
  });
}

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();

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
        image: guest.guest_image_path,
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
