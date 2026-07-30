// Real projects (PORT-2), from ResumeV3.pdf. Add more cards here as you build
// them — the Projects page renders whatever is in this array.
export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[]; // tech stack
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "spotify-elt-pipeline",
    title: "spotify-elt-pipeline",
    category: "Data Engineering",
    year: "2026",
    blurb:
      "An end-to-end ELT pipeline that turns personal Spotify listening data into an analytics-ready warehouse.",
    tags: ["Python", "PostgreSQL", "dbt", "Docker Compose", "Metabase", "pytest"],
    highlights: [
      "Extracts personal Spotify listening data through the Spotify and Last.fm APIs in Python, lands it raw in PostgreSQL, and transforms it in-warehouse with dbt.",
      "Models an analytics-ready star schema (fact_plays with dim_track, dim_artist, dim_genre, dim_date, and an artist–genre bridge) using layered dbt models across staging, intermediate, and mart layers.",
      "Enforces data quality with 39 dbt tests and a pytest suite covering API client units and idempotent loader integration, keeping runs fully replayable.",
    ],
  },
  {
    slug: "whatspackt",
    title: "WhatsPackt",
    category: "Android App",
    year: "2025",
    blurb:
      "A modular Android messaging app with real-time chat, built on feature-based Clean Architecture.",
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines",
      "Room",
      "Hilt",
      "Firebase",
      "Firestore",
    ],
    highlights: [
      "Architected the app with feature-based Clean Architecture — distinct auth, chat, create-chat, and profile modules for testability and scalability.",
      "Implemented Firebase Authentication with secure username-based sign-up and login, and integrated Firestore for real-time user and chat syncing and message delivery.",
      "Built a responsive, modern UI with Jetpack Compose, optimized for performance and accessibility.",
      "Used Room for offline message persistence and caching, and Firebase Cloud Storage to back up media and profile assets.",
    ],
  },
];