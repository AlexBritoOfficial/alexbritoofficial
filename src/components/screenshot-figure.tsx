import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { ProjectScreenshot } from "@/data/projects";

// PORT-6. Renders the real screenshot once the file exists in /public; until
// then it shows a clean placeholder (checked at build time), so dropping the
// image in — same filename — upgrades the page with no code change.
export function ScreenshotFigure({ shot }: { shot: ProjectScreenshot }) {
  const exists = existsSync(join(process.cwd(), "public", shot.src));

  return (
    <figure>
      {exists ? (
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full rounded-lg border border-border-soft"
        />
      ) : (
        <div
          style={{ aspectRatio: `${shot.width} / ${shot.height}` }}
          className="flex w-full items-center justify-center rounded-lg border border-dashed border-border bg-surface p-6 text-center text-sm text-faint"
        >
          <span>
            Screenshot pending — add{" "}
            <code className="text-muted">public{shot.src}</code>
          </span>
        </div>
      )}
      <figcaption className="mt-2.5 text-sm text-faint">{shot.caption}</figcaption>
    </figure>
  );
}
