import Link from "next/link";

// Home hero (PORT-1). Copy grounded in the real resume, positioned as a
// balanced software engineer across data and mobile.
export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-accent">
          Software Engineer
        </p>
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-fg sm:text-6xl">
          Alex Brito
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-2">
          I&rsquo;m a software engineer in Boston building reliable data
          platforms and mobile apps — from Snowflake pipelines that process
          millions of records a day to Android apps in Kotlin and Jetpack
          Compose. I care about clean architecture, real tests, and shipping
          things that hold up in production.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-[opacity,transform] hover:opacity-90 active:translate-y-px"
          >
            View projects
          </Link>
          <Link
            href="/resume"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-fg transition-[background-color,transform] hover:bg-surface active:translate-y-px"
          >
            Read resume
          </Link>
        </div>
      </div>
    </section>
  );
}