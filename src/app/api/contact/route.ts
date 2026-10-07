import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// I keep the demo request handler on the server so we can validate input
// and write to Supabase without exposing the service role key.

export async function POST(req: NextRequest) {
  let requestBody: string;
  try {
    requestBody = await req.text();
  } catch {
    return NextResponse.json(
      { error: "Unable to read your request. Please try again." },
      { status: 400 }
    );
  }

  if (Buffer.byteLength(requestBody, "utf8") > 16_384) {
    return NextResponse.json(
      { error: "Your request is too large." },
      { status: 413 }
    );
  }

  let body: unknown;
  try {
    body = JSON.parse(requestBody);
  } catch {
    return NextResponse.json({ error: "Please send valid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Please send valid form details." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const teamSize = typeof payload.team_size === "string" ? payload.team_size.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in name, email and a short message." },
      { status: 400 }
    );
  }

  if (
    name.length > 120 ||
    email.length > 254 ||
    company.length > 160 ||
    message.length > 5000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json(
      { error: "Please check your details and try again." },
      { status: 400 }
    );
  }

  if (teamSize && !["1-5", "6-15", "16-40", "41+"].includes(teamSize)) {
    return NextResponse.json(
      { error: "Please select a valid team size." },
      { status: 400 }
    );
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error("[contact] Supabase is not configured.");
    return NextResponse.json(
      { error: "We cannot receive demo requests right now. Please email us instead." },
      { status: 503 }
    );
  }

  try {
    const supabase = createClient(url, key);
    const { error } = await supabase.from("demo_requests").insert({
      name,
      email,
      company: company || null,
      team_size: teamSize || null,
      message,
      source: "website-demo",
    });

    if (error) {
      console.error("[contact] Supabase insert failed:", error.message);
      return NextResponse.json(
        { error: "We could not save your request. Please email us instead." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us." },
      { status: 500 }
    );
  }
}
