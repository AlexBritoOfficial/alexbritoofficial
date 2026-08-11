import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ServicesBooking } from "@/components/services-booking";
import { pricingFootnote, pricingTiers, serviceSteps, trustItems } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
};

// TODO: swap these for real contact details before launch.
const contact = {
  name: "Alex Brito",
  email: "ajbrito93@gmail.com",
  phone: "857-260-9759",
  site: "www.alexbritoofficial.com",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <PageHeader
        eyebrow="Services"
        title="Services"
        intro="I design and build websites for local small businesses — contractors and trades, shops, studios, restaurants, and more — turning local searches into booked jobs and new customers. Here's what working with me looks like."
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
            Websites for local small businesses
          </div>
          <h2 className="max-w-[17ch] font-display text-3xl font-bold leading-[1.05] sm:text-4xl">
            When they search, <span className="text-accent">you show up.</span> When they call, you&apos;re booked.
          </h2>
          <p className="mt-[18px] max-w-[54ch] text-[15px] text-muted">
            We build and run a professional website that puts your business at the top of local searches — so the
            customer who needs what you offer right now finds you first and reaches you in one tap. You stay focused on
            running your business; the website brings you the next customer.
          </p>
        </div>

        {/* Trust bar */}
        <div className="grid grid-cols-2 bg-accent text-accent-ink sm:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="border-b border-r border-accent-ink/20 px-2 py-3 text-center font-display text-xs font-bold last:border-r-0">
              {item}
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 bg-bg text-white sm:grid-cols-3">
          {serviceSteps.map((step) => (
            <div
              key={step.n}
              className="border-b border-border px-7 py-6 sm:border-b-0 sm:border-r last:border-r-0">
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
              One-time setup, then a simple monthly plan · cancel anytime after year one
            </div>
          </div>

          {/* Founding-rate callout — reduced (not waived) one-time setup for the first few clients */}
          <div className="mb-[18px] flex flex-col gap-4 rounded-xl border border-accent bg-surface-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-accent px-2.5 py-1 font-display text-[9.5px] font-bold uppercase tracking-[0.08em] text-accent-ink">
                  First 5 clients
                </span>
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
                  Founding rate
                </span>
              </div>
              <h4 className="font-display text-lg font-bold text-fg">Founding rate — get online for less</h4>
              <p className="mt-1 max-w-[52ch] text-[13px] text-muted">
                For my first few small-business clients: a reduced one-time setup, then the standard $99/mo. Same site,
                same support — just an easier start.
              </p>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <div className="font-display text-[28px] font-bold leading-none text-accent">
                $399
                <span className="ml-1.5 align-middle text-[13px] font-semibold text-faint line-through">$699</span>
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-faint">
                one-time setup
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl border p-5 ${
                  tier.featured ? "border-bg bg-bg" : "border-border bg-surface-2"
                }`}>
                {tier.featured ? (
                  <div className="absolute -top-2.5 left-[18px] rounded-full bg-accent px-2.5 py-1 font-display text-[9.5px] font-bold uppercase tracking-[0.08em] text-accent-ink">
                    Most popular
                  </div>
                ) : null}
                <div
                  className={`font-display text-sm font-bold tracking-[0.02em] ${
                    tier.featured ? "text-accent" : "text-fg"
                  }`}>
                  {tier.name}
                </div>
                <div
                  className={`mt-2 font-display text-[34px] font-bold leading-none ${
                    tier.featured ? "text-white" : "text-muted"
                  }`}>
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
                      }`}>
                      <span className="absolute left-0 top-[6px] h-[9px] w-[9px] rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.05em] text-faint">{tier.who}</div>
              </div>
            ))}
          </div>

          <p className="mt-3.5 text-[12px] leading-relaxed text-faint">
            The one-time setup covers building your site. Monthly covers hosting, security, edits, and keeping you
            ranking.
          </p>
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
            <b className="text-white">Run the numbers on your own work.</b> If your average job is worth several hundred
            dollars or more, a single extra call a month more than pays for your plan — and most working websites bring
            in far more than one.
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
