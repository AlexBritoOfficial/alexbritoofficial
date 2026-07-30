import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

// Wire the wireframe's type system: Space Grotesk (display) + Work Sans (body).
// Exposed as CSS variables consumed by --font-display / --font-sans in globals.css.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Alex Brito";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexbritoofficial.com"),
  title: {
    default: `${siteName} — Portfolio`,
    template: `%s · ${siteName}`,
  },
  description:
    "Alex Brito is a software engineer in Boston working across data platforms and mobile — selected work, experience, and resume.",
  openGraph: {
    title: `${siteName} — Portfolio`,
    description:
      "Alex Brito is a software engineer in Boston working across data platforms and mobile — selected work, experience, and resume.",
    type: "website",
    siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex-1 w-full">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
