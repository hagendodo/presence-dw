// Initialize the JS client
import { createClient } from "@supabase/supabase-js";

// Create Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function submitPresence(email, nim, saranMasukan, activityId) {
  const { error } = await supabase.from("presences").insert({
    email: email,
    nim: nim,
    saran_masukan: saranMasukan,
    activity_id: activityId,
  });

  return error;
}

async function addActivity(data) {
  const { error } = await supabase.from("activities").insert({
    name: data.name,
    start_date: data.start,
    end_date: data.end,
    description: data.description,
  });

  return error;
}

async function getAllActivity() {
  return await supabase.from("activities").select();
}

async function getNearestActivity() {
  const today = new Date().toISOString().split("T")[0];

  return await supabase
    .from("activities")
    .select()
    .gt("start_date", today)
    .order("start_date", { ascending: true })
    .limit(3);
}

async function getActivityById(id) {
  return await supabase.from("activities").select().eq("id", id);
}

async function deleteActivity(id) {
  return await supabase.from("activities").delete().eq("id", id);
}

async function getPresenceByActivityId(id) {
  return await supabase.from("presences").select().eq("activity_id", id);
}

async function getAllMember(from, to) {
  return await supabase.from("members").select().range(from, to);
}

async function register(email, password) {
  return await supabase.auth.signUp({
    email: email,
    password: password,
  });
}

async function login(email, password) {
  return await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
}

async function checkSession() {
  return await supabase.auth.getSession();
}

async function logout() {
  await supabase.auth.signOut();
  window.location.href = "/login";
}

// Export Supabase client
export {
  submitPresence,
  register,
  login,
  addActivity,
  getAllActivity,
  getActivityById,
  deleteActivity,
  getPresenceByActivityId,
  getAllMember,
  checkSession,
  logout,
  getNearestActivity,
};
