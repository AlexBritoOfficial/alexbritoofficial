import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
};

// About page (PORT-1): the long-form story that used to live on the home hero.
// Home now leads punchy; this page carries the full background and personal side.
export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <PageHeader
        eyebrow="About · Consistency Over Talent"
        title="About me"
        intro="I'm a software engineer in Boston who believes great software is built the same way great careers are—through consistency, discipline, and a commitment to continuous improvement."
      />

      <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-2">
        <p>
          My journey has been shaped as much by perseverance as technology. From earning my computer science degree and
          building production software to continuing to learn, build, and grow through setbacks, I&apos;ve learned that
          progress comes from showing up every day. That mindset extends beyond engineering into marathon training,
          weightlifting, Brazilian Jiu-Jitsu, long-term sobriety, and serving my recovery community.
        </p>

        <p>
          I also design and build websites for local small businesses—turning local searches into booked jobs and new
          customers. My goal is to give businesses a strong online presence that helps them get found, establish
          credibility, generate leads, and ultimately drive more sales. The focus is on building a practical business
          tool that works for the company, with visual customization and refinement coming as needed.
        </p>

        <p>
          Whether I&apos;m designing data platforms, developing Android applications, or building websites for local
          businesses, I strive to create solutions that are reliable, maintainable, and built to last. Away from the
          keyboard, you&apos;ll usually find me reading, tackling technical challenges, training, traveling with my
          wife, or giving back to my recovery community. I&apos;m driven by curiosity, resilience, and the belief that
          the best engineers are lifelong students—of both technology and life.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-[opacity,transform] hover:opacity-90 active:translate-y-px">
          View projects
        </Link>

        <Link
          href="/resume"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-fg transition-[background-color,transform] hover:bg-surface active:translate-y-px">
          Read resume
        </Link>
      </div>
    </section>
  );
}
