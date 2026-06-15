import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Plain anon-key client for public read-only queries on pages that don't
 * need the cookie-based session (e.g. generateStaticParams, public pages).
 */
export function createClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
