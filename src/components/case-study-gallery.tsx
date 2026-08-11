"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TradeConcept } from "@/data/case-studies";

// Ported from the "Portfolio wireframe design" artifact: a grid of trade-site
// concepts, each opening a preview modal. Interactive (select + dialog), so it's
// a Client Component; the surrounding page stays a Server Component.
export function CaseStudyGallery({ concepts }: { concepts: TradeConcept[] }) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selected = concepts.find((c) => c.slug === selectedSlug) ?? null;

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setSelectedSlug(null), []);

  const open = useCallback((slug: string) => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setSelectedSlug(slug);
  }, []);

  // Escape to close + lock body scroll while the dialog is open. Restore focus
  // to the card that opened it on close.
  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      lastFocusedRef.current?.focus();
    };
  }, [selected, close]);

  return (
    <>
      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept) => (
          <li key={concept.slug}>
            <button
              type="button"
              onClick={() => open(concept.slug)}
              className="group block w-full overflow-hidden rounded-xl border border-border-soft bg-surface text-left transition-colors hover:border-accent"
            >
              <span
                className="flex items-center justify-between px-[18px] py-3.5"
                style={{ background: concept.palette.navBg }}
              >
                <span
                  className="text-[13px] font-bold uppercase tracking-wide"
                  style={{ color: concept.palette.navText }}
                >
                  {concept.brand}
                </span>
                <span
                  aria-hidden
                  className="h-3.5 w-3.5 rounded-[3px]"
                  style={{ background: concept.palette.accent }}
                />
              </span>
              <span className="block h-[100px]" style={{ background: concept.palette.imgBg }} />
              <span className="block px-[18px] py-4">
                <span className="block text-base font-bold text-fg">{concept.headline}</span>
                <span className="mt-1 block text-[13px] text-faint">{concept.desc}</span>
                <span className="mt-3 block text-xs font-semibold text-accent">
                  View full site preview →
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="concept-preview-title"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-[760px] overflow-y-auto rounded-2xl shadow-2xl"
            style={{ background: selected.palette.bodyBg }}
          >
            <div
              className="flex items-center justify-between px-8 py-4"
              style={{ background: selected.palette.navBg }}
            >
              <span
                className="text-[15px] font-bold uppercase tracking-wide"
                style={{ color: selected.palette.navText }}
              >
                {selected.brand}
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label="Close preview"
                className="text-2xl leading-none"
                style={{ color: selected.palette.navText }}
              >
                ×
              </button>
            </div>

            <div
              className="flex flex-col items-center justify-center gap-3 px-8 py-14 text-center"
              style={{ background: selected.palette.imgBg }}
            >
              <div
                id="concept-preview-title"
                className="text-3xl font-bold"
                style={{ color: selected.palette.textColor }}
              >
                {selected.headline}
              </div>
              <div
                className="max-w-[440px] text-sm"
                style={{ color: selected.palette.subText }}
              >
                {selected.desc}
              </div>
              <a
                href={selected.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 rounded-md px-[26px] py-3.5 text-[13px] font-bold no-underline"
                style={{
                  background: selected.palette.accent,
                  color: selected.palette.ctaText,
                }}
              >
                View live site ↗
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-3">
              {selected.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg border border-black/10 p-4"
                >
                  <div
                    className="mb-1.5 text-sm font-bold"
                    style={{ color: selected.palette.textColor }}
                  >
                    {feature.title}
                  </div>
                  <div className="text-xs" style={{ color: selected.palette.subText }}>
                    {feature.desc}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="px-8 pb-7 text-center text-xs"
              style={{ color: selected.palette.subText }}
            >
              {selected.footerNote}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
