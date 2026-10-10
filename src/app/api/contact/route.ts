import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const MAX_BODY_BYTES = 16_384;
const TEAM_SIZES = new Set(["1-5", "6-15", "16-40", "41+"]);

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Please send a valid form submission." }, { status: 415 });
  }

  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return NextResponse.json({ error: "Unable to read your request. Please try again." }, { status: 400 });
  }

  if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Your request is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Please send valid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Please send valid form details." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;

  // A filled honeypot is treated as a successful submission without storing it.
  if (text(payload.website)) return NextResponse.json({ ok: true });

  const name = text(payload.name);
  const email = text(payload.email).toLowerCase();
  const company = text(payload.company);
  const teamSize = text(payload.team_size);
  const message = text(payload.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in name, email and a short message." }, { status: 400 });
  }

  if (
    name.length > 120 ||
    email.length > 254 ||
    company.length > 160 ||
    message.length > 5000 ||
    !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  }

  if (teamSize && !TEAM_SIZES.has(teamSize)) {
    return NextResponse.json({ error: "Please select a valid team size." }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    console.error("[contact] Server-side Supabase configuration is missing.");
    return NextResponse.json(
      { error: "We cannot receive demo requests right now. Please email us instead." },
      { status: 503 }
    );
  }

  try {
    const supabase = createClient(url, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
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
  } catch (error) {
    console.error("[contact] Unexpected request failure:", error instanceof Error ? error.message : "unknown error");
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us." },
      { status: 500 }
    );
  }
}
