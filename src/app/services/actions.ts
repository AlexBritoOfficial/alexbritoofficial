"use server";

import { Resend } from "resend";

// Server Action for the Services "Book a free preview" form. Runs on the server,
// so the Resend API key never reaches the browser. Delivers the lead to Alex's
// inbox and sets reply-to to the lead's email so a reply goes straight to them.
//
// Requires RESEND_API_KEY in the environment (see .env.example). Until the
// domain is verified in Resend, PREVIEW_FROM_EMAIL falls back to Resend's
// sandbox sender, which can only deliver to the account owner's own address.

const TO_EMAIL = "ajbrito93@gmail.com";
// `|| `(not `??`) so an empty PREVIEW_FROM_EMAIL= in .env still falls back to
// Resend's sandbox sender instead of sending an empty (invalid) from address.
const FROM_EMAIL = process.env.PREVIEW_FROM_EMAIL?.trim() || "Alex Brito Portfolio <onboarding@resend.dev>";

export type PreviewRequestState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendPreviewRequest(
  _prevState: PreviewRequestState | null,
  formData: FormData,
): Promise<PreviewRequestState> {
  // Honeypot — real users never fill this hidden field. Pretend success so bots
  // don't learn they were caught, but send nothing.
  if (field(formData, "company_website")) {
    return { ok: true, message: "Thanks! Your request is in — I'll get back to you shortly." };
  }

  const business = field(formData, "business");
  const businessType = field(formData, "trade");
  const name = field(formData, "name");
  const phone = field(formData, "phone");
  const email = field(formData, "email");
  const hasSite = field(formData, "hasSite") || "—";
  const notes = field(formData, "notes");

  // Need at least a name and one way to reach them back.
  if (!name || (!email && !phone)) {
    return {
      ok: false,
      message: "Please add your name and a phone number or email so I can reach you.",
    };
  }
  if (email && !EMAIL_RE.test(email)) {
    return { ok: false, message: "That email doesn't look right — mind double-checking it?" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[preview-request] RESEND_API_KEY is not set");
    return {
      ok: false,
      message: "Something went wrong on our end. Please email me directly at ajbrito93@gmail.com.",
    };
  }

  const text = [
    `Business name: ${business || "—"}`,
    `Business type:  ${businessType || "—"}`,
    `Contact name:   ${name}`,
    `Phone:          ${phone || "—"}`,
    `Email:          ${email || "—"}`,
    `Has a website:  ${hasSite}`,
    "",
    "Notes:",
    notes || "(none)",
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New preview request${business ? ` — ${business}` : ""}`,
      replyTo: email || undefined,
      text,
    });

    if (error) {
      console.error("[preview-request] Resend error:", error);
      return {
        ok: false,
        message: "Couldn't send just now. Please try again, or email me at ajbrito93@gmail.com.",
      };
    }
  } catch (err) {
    console.error("[preview-request] send threw:", err);
    return {
      ok: false,
      message: "Couldn't send just now. Please try again, or email me at ajbrito93@gmail.com.",
    };
  }

  return { ok: true, message: "Thanks! Your request is in — I'll get back to you shortly." };
}
