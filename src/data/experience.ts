// Real work history (PORT-3), from ResumeV3.pdf. Also feeds the Resume page.
export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
};

export const jobs: Job[] = [
  {
    role: "Software Developer",
    company: "State Street Corporation",
    period: "May 2022 — July 2024",
    location: "Boston, MA",
    summary:
      "Built and maintained scalable Snowflake data warehouse solutions and ETL/ELT pipelines processing millions of records daily. Optimized complex SQL and data models to cut query time 30–40%, and automated ingestion and deployment with Docker, Helm, and Azure Kubernetes Service.",
  },
  {
    role: "Android Mobile Engineer Intern",
    company: "ASICS Digital",
    period: "June 2019 — August 2019",
    location: "Boston, MA",
    summary:
      "Contributed features to the ASICS RunKeeper Android app — building XML layouts and custom views, fixing image-rendering and metric distance-accuracy issues, and writing JUnit/Mockito tests validating component quality and edge cases.",
  },
];