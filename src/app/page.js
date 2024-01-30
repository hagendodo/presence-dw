"use client";

import { submitPresence } from "./supabase";

export default function Home() {
  return (
    <>
      <button onClick={submitPresence}>Presence</button>
    </>
  );
}
