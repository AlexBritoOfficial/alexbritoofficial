import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { jobs } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
};

// PORT-3 frontend: timeline of roles. Entries are placeholder until confirmed.
export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <PageHeader
        eyebrow="Career"
        title="Experience"
        intro="A timeline of roles, companies, and what I worked on at each."
      />
      <ol className="mt-12 border-l border-border-soft">
        {jobs.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
            />
            <Reveal delay={i * 0.06}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="font-display text-lg font-semibold tracking-tight text-fg">
                {job.role}{" "}
                <span className="font-sans font-normal text-muted-2">
                  · {job.company}
                </span>
              </h2>
              <span className="text-sm text-faint">{job.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-faint">{job.location}</p>
            <p className="mt-2 max-w-2xl text-muted-2">{job.summary}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}