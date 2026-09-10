import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const supabase =
  url && key
    ? createClient(url, key, {
        auth: {
          flowType: "implicit",
          detectSessionInUrl: false,
          persistSession: true,
          autoRefreshToken: true,
        },
      })
    : null;

// Check the public auth configuration before registration so this flow never
// starts email confirmation when the dashboard still requires it.
export async function passwordSignupReady() {
  const response = await fetch(`${url}/auth/v1/settings`, {
    headers: { apikey: key },
  });
  if (!response.ok) throw new Error("Auth settings unavailable");
  const settings = await response.json();
  return settings.mailer_autoconfirm === true;
}
