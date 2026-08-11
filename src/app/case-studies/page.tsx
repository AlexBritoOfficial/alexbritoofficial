import type { Metadata } from "next";
import { CaseStudyGallery } from "@/components/case-study-gallery";
import { PageHeader } from "@/components/page-header";
import { tradeConcepts } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
};

export default function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <PageHeader
        eyebrow="Case Studies"
        title="Website Concepts by Trade"
        intro="Full mocked-up websites, built with placeholder businesses and content, showing exactly what I'd build for a contractor, electrician, plumber, HVAC company, or landscaper. Click any one to open the live preview."
      />
      <CaseStudyGallery concepts={tradeConcepts} />
    </section>
  );
}
