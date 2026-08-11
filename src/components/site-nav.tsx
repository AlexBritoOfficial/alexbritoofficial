"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/testimonials", label: "Testimonials" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-bg/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-fg"
        >
          Alex Brito
        </Link>
        <ul className="flex items-center gap-1 text-sm">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-2 transition-colors hover:text-fg ${
                    active ? "text-accent" : "text-muted-2"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
