import { createClient } from "@supabase/supabase-js";

// I create a browser-safe client using the public anon key only.
// Server-side routes use the service role key when it is available.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type DemoRequest = {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  company?: string;
  team_size?: string;
  message: string;
  source?: string;
};
