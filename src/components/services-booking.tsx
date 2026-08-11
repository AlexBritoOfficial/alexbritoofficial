"use client";

import { useActionState, useId, useState } from "react";
import { sendPreviewRequest } from "@/app/services/actions";

// Interactive booking block for the Services page (from the wireframe): a CTA
// that reveals a "book a free preview" form, plus a segmented "do you have a
// website today?" control. Split out as a Client Component so the rest of the
// Services page can stay a Server Component. Submissions post to a Server Action
// that emails Alex via Resend (see src/app/services/actions.ts).

const hasSiteOptions = ["Yes", "No", "Outdated"] as const;
type HasSite = (typeof hasSiteOptions)[number];

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-fg placeholder:text-faint";
const labelClass = "mb-1.5 block text-xs text-faint";

export function ServicesBooking() {
  const [open, setOpen] = useState(false);
  const [hasSite, setHasSite] = useState<HasSite | null>(null);
  const formId = useId();
  const [state, formAction, pending] = useActionState(sendPreviewRequest, null);

  const succeeded = state?.ok === true;

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
        style={{ maxHeight: open ? 1000 : 0 }}
      >
        {succeeded ? (
          <div className="mx-10 mb-[26px] rounded-xl border border-accent bg-[oklch(0.14_0.01_250)] px-8 py-12 text-center">
            <h4 className="font-display text-lg font-bold text-white">Request sent — thank you!</h4>
            <p className="mx-auto mt-2 max-w-[44ch] text-[13px] text-muted-2" aria-live="polite">
              {state?.message}
            </p>
          </div>
        ) : (
          <form
            action={formAction}
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
                  autoComplete="name"
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
                  autoComplete="tel"
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
                autoComplete="email"
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

            {/* Carries the segmented control's value into the submitted FormData. */}
            <input type="hidden" name="hasSite" value={hasSite ?? ""} />

            {/* Honeypot: off-screen and non-focusable; real users never fill it, bots do. */}
            <div aria-hidden style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
              <label htmlFor={`${formId}-company-website`}>Company website (leave blank)</label>
              <input
                id={`${formId}-company-website`}
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {state && !state.ok ? (
              <p className="mb-3 text-[12.5px] font-medium text-[oklch(0.7_0.18_25)]" aria-live="polite">
                {state.message}
              </p>
            ) : null}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={pending}
                aria-busy={pending}
                className="rounded-lg bg-accent px-6 py-3 font-display text-sm font-bold text-accent-ink transition-opacity disabled:opacity-60"
              >
                {pending ? "Sending…" : "Submit request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
