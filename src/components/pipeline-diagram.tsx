import { Fragment } from "react";
import type { PipelineStep } from "@/data/projects";

// Native architecture flow (PORT-6). Horizontal on desktop, stacked on mobile —
// no diagram library, styled with the site's own tokens.
export function PipelineDiagram({ steps }: { steps: PipelineStep[] }) {
  return (
    <ol className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
      {steps.map((step, i) => (
        <Fragment key={step.label}>
          <li className="flex-1 rounded-lg border border-border-soft bg-surface px-4 py-3 text-center">
            <div className="font-display text-sm font-semibold text-fg">
              {step.label}
            </div>
            {step.tech ? (
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-accent">
                {step.tech}
              </div>
            ) : null}
          </li>
          {i < steps.length - 1 ? (
            <li aria-hidden className="flex shrink-0 justify-center text-faint">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 rotate-90 md:rotate-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </li>
          ) : null}
        </Fragment>
      ))}
    </ol>
  );
}
