// Services page content (from the "Portfolio wireframe design" artifact) — a
// pitch for building/running websites for contractors & trades businesses.
export type ServiceStep = {
  n: string;
  title: string;
  desc: string;
};

export type PricingTier = {
  name: string;
  price: string;
  setup: string;
  featured: boolean;
  features: string[];
  who: string;
};

export const trustItems: string[] = [
  "Ranks on Google",
  "One-tap call",
  "Reviews up front",
  "Quote requests 24/7",
];

export const serviceSteps: ServiceStep[] = [
  {
    n: "STEP 1",
    title: "We build it & get you on Google",
    desc: "Your site plus a dialed-in Google Business Profile — built from your logo, job photos, and reviews. Live in about a week.",
  },
  {
    n: "STEP 2",
    title: "You show up locally",
    desc: 'Optimized so you appear for "[your trade] near me" and every town you serve.',
  },
  {
    n: "STEP 3",
    title: "The calls come in",
    desc: "Click-to-call and quote forms turn visitors into booked jobs.",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "STARTER",
    price: "$99",
    setup: "or $99/mo + $699 setup, monthly",
    featured: false,
    features: [
      "Up to 5 pages, mobile-ready",
      "Hosting, SSL & backups",
      "Click-to-call & quote form",
      "Google Business Profile setup",
      "2 content edits / month",
    ],
    who: "Best for: getting online fast",
  },
  {
    name: "GROWTH",
    price: "$179",
    setup: "Setup waived on annual plan",
    featured: false,
    features: [
      "Everything in Starter, up to 10 pages",
      "Service-area pages (rank in each town)",
      "Job-photo gallery & reviews",
      "Local SEO optimization",
      "4 edits / month, 2-day turnaround",
    ],
    who: "Best for: steady growth",
  },
  {
    name: "LEAD-GEN PRO",
    price: "$299",
    setup: "Setup waived on annual plan",
    featured: true,
    features: [
      "Everything in Growth, unlimited pages",
      "Call tracking — see every lead",
      "Campaign landing pages",
      "Advanced local SEO + monthly report",
      "Priority edits + quarterly call",
    ],
    who: "Best for: filling the schedule",
  },
];

export const pricingFootnote =
  "Plans are billed monthly on a 12-month term, then continue month-to-month — cancel anytime after year one. Setup fee waived when you choose annual billing. Prices in USD.";
