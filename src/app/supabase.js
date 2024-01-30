// Initialize the JS client
import { createClient } from "@supabase/supabase-js";

// Create Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function submitPresence() {
  const { error } = await supabase
    .from("presences")
    .insert({ name: "Denmark" });

  console.log(error);
}

// Export Supabase client
export { submitPresence };
