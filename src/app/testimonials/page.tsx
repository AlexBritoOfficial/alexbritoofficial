import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
};

// PORT-4 frontend: quote cards. Quotes are placeholder until approved ones land.
export default function TestimonialsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <PageHeader
        eyebrow="References"
        title="Testimonials"
        intro="Words from managers and colleagues I've worked with."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <li key={t.name}>
            <Reveal delay={i * 0.06} className="h-full">
            <figure className="flex h-full flex-col rounded-xl border border-border-soft bg-surface p-6">
              <blockquote className="flex-1 text-lg leading-relaxed text-fg">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-fg">{t.name}</span>
                <span className="text-muted-2"> · {t.title}</span>
                <span className="mt-1 block text-faint">{t.relationship}</span>
              </figcaption>
            </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}