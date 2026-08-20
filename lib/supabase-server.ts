import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseAdmin: SupabaseClient | undefined;

export class SupabaseConfigurationError extends Error {
  constructor() {
    super("Supabase server configuration is missing.");
    this.name = "SupabaseConfigurationError";
  }
}

export function getSupabaseAdminClient() {
  if (supabaseAdmin) {
    return supabaseAdmin;
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new SupabaseConfigurationError();
  }

  supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });

  return supabaseAdmin;
}