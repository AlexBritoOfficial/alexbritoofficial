import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume — PDF",
};

// PORT-12: full-page PDF viewer, reached from the "View PDF" button on /resume.
const RESUME_PDF = "/ResumeV3.pdf";

export default function ResumeViewPage() {
  return (
    <section className="mx-auto flex h-[calc(100dvh-4rem)] max-w-5xl flex-col px-6 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/resume"
          className="text-sm text-muted-2 transition-colors hover:text-fg"
        >
          ← Back to resume
        </Link>
        <a
          href={RESUME_PDF}
          download
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-[opacity,transform] hover:opacity-90 active:translate-y-px"
        >
          Download PDF
        </a>
      </div>

      <iframe
        src={RESUME_PDF}
        title="Alex Brito — Resume (PDF)"
        className="mt-6 min-h-0 w-full flex-1 rounded-lg border border-border-soft bg-surface"
      />
    </section>
  );
}
