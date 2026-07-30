// Shared header for each route so type scale + spacing stay consistent (PORT-8).
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-2">{intro}</p>
      ) : null}
    </header>
  );
}