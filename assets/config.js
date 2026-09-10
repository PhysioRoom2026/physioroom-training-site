// ============================================================
//  Supabase connection settings
// ============================================================
//  Replace the two placeholder values below with YOUR project's
//  values from the Supabase dashboard:
//    Project Settings  ->  API
//      * Project URL        -> SUPABASE_URL
//      * Project API key "anon" / "public"  -> SUPABASE_ANON_KEY
//
//  NOTE: The "anon" key is DESIGNED to be public and is safe to
//  live in this file. It is protected by Row Level Security in the
//  database. NEVER paste the "service_role" key here — that one is
//  a master key and must never be in your website or on GitHub.
// ============================================================

const SUPABASE_URL = "https://titexwsqmrxukeukvome.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_X19w8YI0Ij8Ts_kF8GKK1Q_9GMX2io1";

// Passing score (percent) required to mark a module complete.
const PASS_PERCENT = 80;

// Who is allowed to create an account. Only email addresses ending in
// one of these domains can sign up. Add more domains to the list if you
// want to include other teams (e.g. "globalphysiotraining.com").
const ALLOWED_EMAIL_DOMAINS = ["physioroomco.com"];
