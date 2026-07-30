import Link from "next/link";

// PORT-13. Real contact destinations.
const contactLinks = [
  { label: "Email", href: "mailto:ajbrito93@gmail.com", external: false },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexjonathanbrito/",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/AlexBritoOfficial", external: true },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-2 sm:flex-row">
        <p>© {year} Alex Brito</p>
        <ul className="flex items-center gap-4">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-fg"
              >
                {link.label}
                {link.external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
