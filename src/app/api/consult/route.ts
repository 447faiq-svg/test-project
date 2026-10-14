import { NextResponse } from "next/server";

const CONTACT_EMAIL = "contact@interpulseglobal.com";

type ConsultPayload = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConsultPayload;
    const firstName = body.firstName?.trim() ?? "";
    const lastName = body.lastName?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";

    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const payload = {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      firstName,
      lastName,
      _replyto: email,
      _subject: "New Get Consultation request — InterPulse Global",
      _template: "table",
      message: [
        "A new consultation request was submitted on InterPulse Global.",
        "",
        `Name: ${firstName} ${lastName}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
      ].join("\n"),
    };

    const response = await fetch(
      `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      const details = await response.text();
      console.error("Consultation email failed:", details);
      return NextResponse.json(
        { error: "Unable to send your request right now. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Consultation form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
