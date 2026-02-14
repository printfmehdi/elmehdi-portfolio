import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  social: z.string().url().optional().or(z.literal("")),
});

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  const contactEmail = process.env.RESEND_FROM_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resend || !contactEmail) {
    const missing = [
      !process.env.RESEND_API_KEY ? "RESEND_API_KEY" : null,
      !contactEmail ? "CONTACT_EMAIL" : null,
    ].filter(Boolean);

    return NextResponse.json(
      { error: `Missing required env vars: ${missing.join(", ")}` },
      { status: 500 }
    );
  }

  try {
    const json = await req.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, email, message, social } = parsed.data;
    const socialLine = social ? `Social: ${social}\n` : "";

    const { error } = await resend.emails.send({
      from: `Portfolio <${fromEmail}>`,
      to: [contactEmail],
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n${socialLine}\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
