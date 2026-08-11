import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ServicesBooking } from "@/components/services-booking";
import {
  pricingFootnote,
  pricingTiers,
  serviceSteps,
  trustItems,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
};

// TODO: swap these for real contact details before launch.
const contact = {
  name: "Alex Brito",
  email: "you@yourdomain.com",
  phone: "(555) 000-0000",
  site: "yourdomain.com",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <PageHeader
        eyebrow="Services"
        title="Services"
        intro="I design and build websites for contractors and trades businesses — turning local searches into booked jobs. Here's what working with me looks like."
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface">
        {/* Business-card header */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-bg px-6 py-6 text-fg sm:px-10">
          <div className="font-display text-xl font-bold">
            {contact.name}
            <span className="text-accent">.</span>
          </div>
          <div className="text-right text-[13px] leading-relaxed text-faint">
            <b className="text-muted">{contact.email}</b>
            <br />
            {contact.phone} · {contact.site}
          </div>
        </div>

        {/* Hero */}
        <div className="bg-bg px-6 pb-10 pt-2 text-fg sm:px-10">
          <div className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.15em] text-accent">
            Websites for contractors &amp; the trades
          </div>
          <h2 className="max-w-[17ch] font-display text-3xl font-bold leading-[1.05] sm:text-4xl">
            When they search, <span className="text-accent">you show up.</span> When they call, you&apos;re
            booked.
          </h2>
          <p className="mt-[18px] max-w-[54ch] text-[15px] text-muted">
            We build and run a professional website that puts your business at the top of local searches —
            so the homeowner who needs a plumber, electrician, or contractor right now finds you first and
            reaches you in one tap. You stay on the job. The website brings you the next one.
          </p>
        </div>

        {/* Trust bar */}
        <div className="grid grid-cols-2 bg-accent text-accent-ink sm:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="border-b border-r border-accent-ink/20 px-2 py-3 text-center font-display text-xs font-bold last:border-r-0"
            >
              {item}
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 bg-bg text-white sm:grid-cols-3">
          {serviceSteps.map((step) => (
            <div key={step.n} className="border-b border-border px-7 py-6 sm:border-b-0 sm:border-r last:border-r-0">
              <div className="font-display text-xs font-bold tracking-[0.04em] text-accent">{step.n}</div>
              <h3 className="mb-1.5 mt-[7px] font-display text-[15px] font-bold">{step.title}</h3>
              <p className="text-[12.5px] leading-relaxed text-muted-2">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="px-6 pb-2.5 pt-8 text-fg sm:px-10">
          <div className="mb-1 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-faint">
            Simple monthly plans
          </div>
          <div className="mb-[18px] flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-bold">Pick a plan. We keep the phone ringing.</h3>
            <div className="text-[13px] font-semibold text-accent">
              $0 setup on annual plans · cancel anytime after year one
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl border p-5 ${
                  tier.featured ? "border-bg bg-bg" : "border-border bg-surface-2"
                }`}
              >
                {tier.featured ? (
                  <div className="absolute -top-2.5 left-[18px] rounded-full bg-accent px-2.5 py-1 font-display text-[9.5px] font-bold uppercase tracking-[0.08em] text-accent-ink">
                    Recommended for trades
                  </div>
                ) : null}
                <div
                  className={`font-display text-sm font-bold tracking-[0.02em] ${
                    tier.featured ? "text-accent" : "text-fg"
                  }`}
                >
                  {tier.name}
                </div>
                <div
                  className={`mt-2 font-display text-[34px] font-bold leading-none ${
                    tier.featured ? "text-white" : "text-muted"
                  }`}
                >
                  {tier.price}
                  <span className="text-xs font-medium text-faint">/mo</span>
                </div>
                <div className="mt-1.5 text-[11px] font-semibold text-accent">{tier.setup}</div>
                <ul className="mt-3.5 flex-1 border-t border-border pt-3.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`relative mb-2 pl-[18px] text-[12.4px] leading-snug ${
                        tier.featured ? "text-white" : "text-muted"
                      }`}
                    >
                      <span className="absolute left-0 top-[6px] h-[9px] w-[9px] rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.05em] text-faint">
                  {tier.who}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI callout */}
        <div className="mx-6 mt-[26px] flex items-center gap-5 rounded-xl border border-[oklch(0.32_0.1_60)] bg-[oklch(0.24_0.08_60)] px-6 py-[18px] sm:mx-10">
          <div className="whitespace-nowrap text-center font-display text-3xl font-bold leading-none text-[oklch(0.78_0.16_60)]">
            1 job
            <small className="mt-[3px] block text-[11px] font-bold tracking-[0.03em] text-[oklch(0.68_0.12_60)]">
              CAN COVER THE YEAR
            </small>
          </div>
          <p className="text-[13.5px] text-[oklch(0.85_0.05_60)]">
            <b className="text-white">Run the numbers on your own work.</b> If your average job is worth
            several hundred dollars or more, a single extra call a month more than pays for your plan — and
            most working websites bring in far more than one.
          </p>
        </div>

        {/* Booking CTA + form (interactive) */}
        <div className="mt-[26px]">
          <ServicesBooking />
        </div>

        {/* Legal footnote */}
        <div className="border-t border-border bg-bg px-6 py-6 text-[10.5px] leading-relaxed text-faint sm:px-10">
          {pricingFootnote}
        </div>
      </div>
    </section>
  );
}
