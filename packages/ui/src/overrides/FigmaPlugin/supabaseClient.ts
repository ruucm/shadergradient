import { createClient } from '@supabase/supabase-js'

// TODO: Replace with your actual Supabase URL and Anon Key
// It is recommended to use environment variables if possible, but for a Figma plugin
// you might need to bundle them or use a proxy if security is a major concern.
const SUPABASE_URL = process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL'
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
