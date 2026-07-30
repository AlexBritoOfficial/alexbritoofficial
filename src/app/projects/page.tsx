import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

// PORT-11: expandable case-study cards. Copy is placeholder until PORT-2.
export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <PageHeader
        eyebrow="Selected Work"
        title="Projects"
        intro="Things I've built — the stack behind each and the details that mattered. Select a card to expand it."
      />
      <ul className="mt-12 flex flex-col gap-4">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
