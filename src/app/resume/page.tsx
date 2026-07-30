import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { jobs } from "@/data/experience";

export const metadata: Metadata = {
  title: "Resume",
};

// PORT-12: wired to the resume PDF in /public.
const RESUME_PDF = "/ResumeV3.pdf";

const skillGroups = [
  {
    label: "Languages",
    items: ["Kotlin", "Java", "Python", "SQL", "JavaScript", "HTML/CSS", "C#"],
  },
  {
    label: "Android",
    items: [
      "Jetpack Compose",
      "Android Jetpack",
      "Coroutines",
      "Room",
      "Hilt",
      "Firebase",
    ],
  },
  { label: "Frameworks", items: ["Spring Boot", "React"] },
  { label: "Data", items: ["Snowflake", "PostgreSQL", "dbt", "pandas", "NumPy"] },
  {
    label: "Tools",
    items: ["Docker", "Kubernetes", "Git", "IntelliJ", "Android Studio", "VS Code"],
  },
];

const education = [
  {
    credential: "B.S., Computer Science",
    school: "Wentworth Institute of Technology",
    period: "May 2022",
  },
];

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageHeader
          eyebrow="Background"
          title="Resume"
          intro="The full history, on one page — or download the PDF."
        />
        <a
          href={RESUME_PDF}
          download
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-[opacity,transform] hover:opacity-90 active:translate-y-px"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-14 space-y-12">
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Experience
          </h2>
          <ul className="mt-5 space-y-6">
            {jobs.map((job) => (
              <li
                key={`${job.company}-${job.period}`}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
              >
                <div className="max-w-2xl">
                  <h3 className="font-medium text-fg">
                    {job.role} · {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted-2">{job.summary}</p>
                </div>
                <span className="text-sm text-faint">{job.period}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Skills
          </h2>
          <dl className="mt-5 space-y-4">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-2 sm:flex-row sm:gap-4"
              >
                <dt className="w-28 shrink-0 pt-1 text-sm text-faint">
                  {group.label}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border-soft px-3 py-1 text-sm text-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Education
          </h2>
          <ul className="mt-5 space-y-4">
            {education.map((ed) => (
              <li
                key={ed.credential}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
              >
                <h3 className="font-medium text-fg">
                  {ed.credential} · {ed.school}
                </h3>
                <span className="text-sm text-faint">{ed.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}