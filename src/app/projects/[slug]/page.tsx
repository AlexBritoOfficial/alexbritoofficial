import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PipelineDiagram } from "@/components/pipeline-diagram";
import { ScreenshotFigure } from "@/components/screenshot-figure";
import { projects } from "@/data/projects";

// Only projects with a `detail` block get a case-study page.
const caseStudies = projects.filter((p) => p.detail);

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.blurb };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project || !project.detail) notFound();

  const { detail } = project;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/projects"
        className="text-sm text-muted-2 transition-colors hover:text-fg"
      >
        ← All projects
      </Link>

      <header className="mt-8">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            {project.category}
          </span>
          <span className="text-xs text-faint">{project.year}</span>
        </div>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-2">
          {detail.overview}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border-soft px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <section className="mt-14">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">
          Architecture
        </h2>
        <div className="mt-5">
          <PipelineDiagram steps={detail.architecture} />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">
          In the dashboard
        </h2>
        <div className="mt-5 flex flex-col gap-8">
          {detail.screenshots.map((shot) => (
            <ScreenshotFigure key={shot.src} shot={shot} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">
          Highlights
        </h2>
        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 leading-relaxed text-muted-2"
            >
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
