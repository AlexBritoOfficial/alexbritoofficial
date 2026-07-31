// Real projects (PORT-2), from ResumeV3.pdf. Add more cards here as you build
// them — the Projects page renders whatever is in this array.
export type ProjectScreenshot = {
  src: string; // path under /public
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type PipelineStep = {
  label: string;
  tech?: string;
};

export type ProjectDetail = {
  overview: string;
  architecture: PipelineStep[];
  screenshots: ProjectScreenshot[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[]; // tech stack
  highlights: string[];
  // Optional deeper case study — projects with this get a /projects/[slug] page.
  detail?: ProjectDetail;
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
      "Extracts personal Spotify listening data through the Spotify Web API in Python, lands it raw in PostgreSQL, and transforms it in-warehouse with dbt.",
      "Models an analytics-ready star schema (fact_plays with dim_track, dim_artist, dim_genre, dim_date, and an artist–genre bridge) using layered dbt models across staging, intermediate, and mart layers.",
      "Enforces data quality with 39 dbt tests and a pytest suite covering API client units and idempotent loader integration, keeping runs fully replayable.",
    ],
    detail: {
      overview:
        "An end-to-end ELT pipeline that turns my own Spotify listening history into an analytics-ready warehouse. A Python job pulls play data from the Spotify Web API and lands it raw in PostgreSQL; dbt then models it into a star schema across staging, intermediate, and mart layers; and Metabase sits on top for exploration. The whole stack runs on Docker Compose and is covered by 39 dbt tests plus a pytest suite, so every run is reproducible and fully replayable.",
      architecture: [
        { label: "Spotify Web API", tech: "Source" },
        { label: "Raw JSON", tech: "Extract · Python" },
        { label: "PostgreSQL — raw", tech: "Load" },
        { label: "PostgreSQL — analytics", tech: "Transform · dbt" },
        { label: "Metabase", tech: "Serve · BI" },
      ],
      screenshots: [
        {
          src: "/projects/spotify-artists.png",
          alt: "Nested Metabase donut breaking down 27 plays by artist (outer ring) grouped by genre (inner ring): Creedence Clearwater Revival 22%, The Doors 15%, Pink Floyd 11%, then Foo Fighters, Nirvana, Dire Straits, Ja Rule, Jimi Hendrix, Larry June, and Pearl Jam at ~7% each.",
          caption: "Plays by artist, grouped by genre — served from the dbt marts in Metabase",
          width: 2080,
          height: 656,
        },
        {
          src: "/projects/spotify-query.png",
          alt: "Metabase SQL editor running the genre-by-plays query — SELECT genre_name, count(*) joining analytics.fact_plays to dim_genre through the artist–genre bridge — with the 144-play result rendered as a donut: rock 28%, classic rock 17%, alternative rock 10%, hip hop 10%, rap 9%.",
          caption: "The genre query in Metabase, running against the star schema",
          width: 2874,
          height: 1392,
        },
      ],
    },
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