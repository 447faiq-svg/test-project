import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAIL_TO =
  process.env.MAIL_TO?.trim() || "contact@interpulseglobal.com";
const MAIL_FROM =
  process.env.RESEND_FROM?.trim() ||
  "InterPulse Global <onboarding@resend.dev>";

function getResendApiKey() {
  return (
    process.env.RESEND_API_KEY?.trim() ||
    process.env.key1?.trim() ||
    ""
  );
}

export async function POST(request: Request) {
  const apiKey = getResendApiKey();
  if (!apiKey) {
    return NextResponse.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();

  if (!firstName || !lastName || !phone || !email) {
    return NextResponse.json(
      { success: false, message: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: MAIL_FROM,
    to: [MAIL_TO],
    replyTo: email,
    subject: "New Get Consultation request - InterPulse Global",
    text: [
      "A new consultation request was submitted on InterPulse Global.",
      "",
      `Name: ${firstName} ${lastName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Unable to send your request.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
