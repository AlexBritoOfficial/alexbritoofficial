import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

// Expandable case-study card (PORT-11). Uses native <details>/<summary> so
// expand/collapse is keyboard-accessible with no client JS. Projects with a
// `detail` block also link out to a full /projects/[slug] case study.
export function ProjectCard({ project }: { project: Project }) {
  // Use the project's first screenshot as the card thumbnail; fall back to the
  // striped placeholder for projects that don't have a case study yet.
  const thumb = project.detail?.screenshots[0];
  return (
    <details className="group overflow-hidden rounded-xl border border-border-soft bg-surface transition-colors hover:border-border">
      <summary className="flex cursor-pointer list-none items-start gap-5 p-5 [&::-webkit-details-marker]:hidden">
        {thumb ? (
          <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-lg border border-border-soft sm:block">
            <Image
              src={thumb.src}
              alt=""
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            aria-hidden
            className="hidden h-20 w-28 shrink-0 rounded-lg bg-[repeating-linear-gradient(45deg,var(--color-surface-2)_0,var(--color-surface-2)_9px,var(--color-bg)_9px,var(--color-bg)_18px)] sm:block"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-accent">{project.category}</span>
            <span className="shrink-0 text-xs text-faint">{project.year}</span>
          </div>
          <h2 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-fg">{project.title}</h2>
          <p className="mt-1.5 text-muted-2">{project.blurb}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border-soft px-2.5 py-0.5 text-xs text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          className="mt-1 h-5 w-5 shrink-0 text-faint transition-transform duration-200 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M5 8l5 5 5-5" />
        </svg>
      </summary>
      <div className="border-t border-border-soft px-5 pb-6 pt-5 sm:pl-[calc(7rem+2.5rem)]">
        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Highlights</h3>
        <ul className="mt-3 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-relaxed text-muted-2">
              <span
                aria-hidden
                className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        {project.detail ? (
          <Link
            href={`/projects/${project.slug}`}
            className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-fg">
            View case study
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M4 10h11M11 5l5 5-5 5" />
            </svg>
          </Link>
        ) : null}
      </div>
    </details>
  );
}
