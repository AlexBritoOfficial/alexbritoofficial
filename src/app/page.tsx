import Link from "next/link";

// Home hero (PORT-1). Punchy and straight to the point: who I am, the three
// disciplines I work across, and where to go next. The long-form story lives
// on /about.
const focusAreas = [
  {
    title: "Software Engineering",
    desc: "Reliable, maintainable systems — data platforms, backends, and mobile apps built to last.",
  },
  {
    title: "Design",
    desc: "Clean, purposeful interfaces that make products clear, credible, and easy to use.",
  },
  {
    title: "Web Development",
    desc: "Fast, modern websites that help local businesses get found and turn searches into customers.",
  },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-accent">
          Software Engineer · Designer · Web Developer
        </p>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-fg sm:text-6xl">
          Alex Brito
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-muted-2 sm:text-2xl">
          I design and build software that works — from data platforms and mobile apps to websites that bring local
          businesses more customers.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link
            href="/projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-[opacity,transform] hover:opacity-90 active:translate-y-px">
            View projects
          </Link>

          <Link
            href="/services"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-fg transition-[background-color,transform] hover:bg-surface active:translate-y-px">
            Web design services
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-accent transition-opacity hover:opacity-80">
            About me →
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {focusAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-xl border border-border-soft bg-surface p-6">
            <h2 className="font-display text-base font-bold text-fg">{area.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-2">{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
