import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function GET(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: session } = await supabase.auth.getSession();

  if (session.session === null) {
    return NextResponse.json({
      statusAuth: false,
    });
  }

  return NextResponse.json({
    statusAuth: true,
  });
}
