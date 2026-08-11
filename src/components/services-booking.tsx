"use client";

import { useId, useState, type FormEvent } from "react";

// Interactive booking block for the Services page (from the wireframe): a CTA
// that reveals a "book a free preview" form, plus a segmented "do you have a
// website today?" control. Split out as a Client Component so the rest of the
// Services page can stay a Server Component.

// TODO: point this at Alex's real inbox (or a form backend) before launch.
const CONTACT_EMAIL = "you@yourdomain.com";

const hasSiteOptions = ["Yes", "No", "Outdated"] as const;
type HasSite = (typeof hasSiteOptions)[number];

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-fg placeholder:text-faint";
const labelClass = "mb-1.5 block text-xs text-faint";

export function ServicesBooking() {
  const [open, setOpen] = useState(false);
  const [hasSite, setHasSite] = useState<HasSite | null>(null);
  const formId = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Business name: ${data.get("business") ?? ""}`,
      `Business type: ${data.get("trade") ?? ""}`,
      `Name: ${data.get("name") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Has a website today: ${hasSite ?? "—"}`,
      "",
      `${data.get("notes") ?? ""}`,
    ];
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Free website preview request",
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-6 bg-bg px-10 py-6 text-white">
        <div>
          <h4 className="font-display text-xl font-bold leading-[1.12]">
            See a <span className="text-accent">free preview</span> of your site.
          </h4>
          <p className="mt-1.5 max-w-[42ch] text-[13px] text-muted-2">
            We&apos;ll build a real preview using your business name, photos, and reviews — no cost, no
            commitment.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={formId}
          className="shrink-0 whitespace-nowrap rounded-lg bg-accent px-[22px] py-3.5 font-display text-sm font-bold text-accent-ink"
        >
          {open ? "Hide form ↑" : "Book your free preview →"}
        </button>
      </div>

      <div
        id={formId}
        className="overflow-hidden transition-[max-height] duration-[400ms] ease-in-out"
        style={{ maxHeight: open ? 900 : 0 }}
      >
        <form
          onSubmit={handleSubmit}
          className="mx-10 mb-[26px] rounded-xl border border-border bg-[oklch(0.14_0.01_250)] px-8 py-7"
        >
          <h4 className="font-display text-lg font-bold text-white">Book your free preview</h4>
          <p className="mb-5 mt-1 text-[13px] text-faint">
            Tell me about your business — I&apos;ll put together a real preview, no cost or commitment.
          </p>

          <div className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor={`${formId}-business`}>
                Business name
              </label>
              <input
                id={`${formId}-business`}
                name="business"
                type="text"
                placeholder="e.g. Rivera Plumbing or Bloom Café"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor={`${formId}-trade`}>
                Business type / service
              </label>
              <input
                id={`${formId}-trade`}
                name="trade"
                type="text"
                placeholder="e.g. Electrician, Bakery, Salon"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor={`${formId}-name`}>
                Your name
              </label>
              <input
                id={`${formId}-name`}
                name="name"
                type="text"
                placeholder="Full name"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor={`${formId}-phone`}>
                Phone number
              </label>
              <input
                id={`${formId}-phone`}
                name="phone"
                type="tel"
                placeholder="(555) 000-0000"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-3.5">
            <label className={labelClass} htmlFor={`${formId}-email`}>
              Email
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              placeholder="you@business.com"
              className={inputClass}
            />
          </div>

          <div className="mb-3.5">
            <span className={labelClass}>Do you have a website today?</span>
            <div className="flex gap-2">
              {hasSiteOptions.map((opt) => {
                const active = hasSite === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setHasSite(opt)}
                    className={`flex-1 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors ${
                      active
                        ? "border-accent bg-accent text-accent-ink"
                        : "border-border bg-surface text-muted"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-5">
            <label className={labelClass} htmlFor={`${formId}-notes`}>
              Anything else? (optional)
            </label>
            <textarea
              id={`${formId}-notes`}
              name="notes"
              rows={3}
              placeholder="Service area, current pain points, timeline..."
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-3 font-display text-sm font-bold text-accent-ink"
            >
              Submit request
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
