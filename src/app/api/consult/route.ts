import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAIL_TO = process.env.MAIL_TO || "contact@interpulseglobal.com";

type ConsultPayload = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendWithWeb3Forms(payload: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}) {
  // Web3Forms access keys are designed to be usable from apps/websites.
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY ||
    "54498212-f6a4-402c-8d9f-88da39f90fd3";
  if (!accessKey) return null;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "New Get Consultation request - InterPulse Global",
      from_name: "InterPulse Global Website",
      name: `${payload.firstName} ${payload.lastName}`,
      email: payload.email,
      phone: payload.phone,
      replyto: payload.email,
      message: [
        "A new consultation request was submitted on InterPulse Global.",
        "",
        `Name: ${payload.firstName} ${payload.lastName}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
      ].join("\n"),
    }),
  });

  const result = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "Web3Forms email failed");
  }

  return true;
}

async function sendWithSmtp(payload: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT || "465");
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"InterPulse Global Website" <${user}>`,
    to: MAIL_TO,
    replyTo: payload.email,
    subject: "New Get Consultation request - InterPulse Global",
    text: [
      "A new consultation request was submitted on InterPulse Global.",
      "",
      `Name: ${payload.firstName} ${payload.lastName}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
    ].join("\n"),
    html: `
      <h2>New consultation request</h2>
      <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
    `,
  });

  return true;
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

    const payload = { firstName, lastName, phone, email };

    const viaWeb3 = await sendWithWeb3Forms(payload);
    if (viaWeb3) {
      return NextResponse.json({ ok: true });
    }

    const viaSmtp = await sendWithSmtp(payload);
    if (viaSmtp) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      {
        error:
          "Email is not configured yet. Please add WEB3FORMS_ACCESS_KEY in Vercel environment variables.",
      },
      { status: 503 },
    );
  } catch (error) {
    console.error("Consultation form error:", error);
    return NextResponse.json(
      { error: "Unable to send your request right now. Please try again." },
      { status: 500 },
    );
  }
}
