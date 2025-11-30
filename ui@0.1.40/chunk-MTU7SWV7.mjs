// src/overrides/FigmaPlugin/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";
var SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "YOUR_SUPABASE_URL";
var SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY";
var supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export {
  supabase
};
