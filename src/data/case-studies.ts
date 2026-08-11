// Website concepts by trade (from the "Portfolio wireframe design" artifact).
// Each entry is a fully mocked-up placeholder business — the kind of site I'd
// build for a contractor, plumber, electrician, etc. The per-brand colors below
// are intentional sample-brand palettes for the preview mockups, NOT the site's
// own design tokens, so they live here as data rather than Tailwind classes.
//
// TODO: swap `liveUrl` for real deployed previews as they go live.
export type ConceptFeature = {
  title: string;
  desc: string;
};

export type TradeConcept = {
  slug: string;
  brand: string;
  trade: string;
  headline: string;
  desc: string;
  liveUrl: string;
  footerNote: string;
  features: ConceptFeature[];
  // Sample-brand palette used to render the preview mockup.
  palette: {
    navBg: string;
    navText: string;
    accent: string;
    imgBg: string;
    bodyBg: string;
    textColor: string;
    subText: string;
    ctaText: string;
  };
};

export const tradeConcepts: TradeConcept[] = [
  {
    slug: "buildpro-co",
    brand: "BuildPro Co.",
    trade: "General contracting, remodels & additions",
    headline: "Built right, the first time.",
    desc: "General contracting, remodels & additions",
    liveUrl: "https://alexbritoofficial.github.io/demo-sites/demo/buildpro",
    footerNote: "BuildPro Co. · Licensed & insured, 20+ years",
    features: [
      { title: "Remodels & Additions", desc: "Kitchens, baths, and room additions built in-house." },
      { title: "New Construction", desc: "Ground-up builds from licensed general contractors." },
      { title: "Free Estimates", desc: "On-site quotes within 48 hours." },
    ],
    palette: {
      navBg: "#1e2126",
      navText: "#ffffff",
      accent: "#d9711f",
      imgBg: "repeating-linear-gradient(45deg,#3a3f47,#3a3f47 14px,#2c3037 14px,#2c3037 28px)",
      bodyBg: "#ffffff",
      textColor: "#1e2126",
      subText: "#6b7078",
      ctaText: "#ffffff",
    },
  },
  {
    slug: "clearflow-plumbing",
    brand: "Clearflow Plumbing",
    trade: "Plumbing · 24/7 emergency service",
    headline: "Fast, reliable repairs",
    desc: "24/7 emergency service",
    liveUrl: "https://alexbritoofficial.github.io/demo-sites/demo/clearflow-plumbing/",
    footerNote: "Clearflow Plumbing · Licensed & insured",
    features: [
      { title: "Emergency Repairs", desc: "24/7 dispatch, 60-min average arrival" },
      { title: "Water Heaters", desc: "Install & replacement, all brands" },
      { title: "Drain Cleaning", desc: "Camera inspection included" },
    ],
    palette: {
      navBg: "#12283b",
      navText: "#ffffff",
      accent: "#2a6fb0",
      imgBg: "repeating-linear-gradient(45deg,#dbe7f0,#dbe7f0 12px,#c7dbe9 12px,#c7dbe9 24px)",
      bodyBg: "#ffffff",
      textColor: "#12283b",
      subText: "#5c6b78",
      ctaText: "#ffffff",
    },
  },
  {
    slug: "voltline-electric",
    brand: "Voltline Electric",
    trade: "Licensed master electricians",
    headline: "Powering your home safely",
    desc: "Licensed master electricians",
    liveUrl: "https://alexbritoofficial.github.io/demo-sites/demo/voltline-electric/",
    footerNote: "Voltline Electric · Master electricians on staff",
    features: [
      { title: "Panel Upgrades", desc: "200A service upgrades" },
      { title: "EV Chargers", desc: "Home charger installation" },
      { title: "Lighting", desc: "Indoor & outdoor fixture installs" },
    ],
    palette: {
      navBg: "#f4c227",
      navText: "#1a1c1f",
      accent: "#1a1c1f",
      imgBg: "repeating-linear-gradient(45deg,#fbeeb8,#fbeeb8 12px,#f6e08f 12px,#f6e08f 24px)",
      bodyBg: "#ffffff",
      textColor: "#1a1c1f",
      subText: "#5c5943",
      ctaText: "#ffffff",
    },
  },
  {
    slug: "summit-roofing",
    brand: "Summit Roofing",
    trade: "Roofing · Free storm damage inspection",
    headline: "Built to weather anything",
    desc: "Free storm damage inspection",
    liveUrl: "https://alexbritoofficial.github.io/demo-sites/demo/summit-roofing",
    footerNote: "Summit Roofing · Serving the metro area since 1998",
    features: [
      { title: "Storm Damage", desc: "Free inspection & insurance help" },
      { title: "Full Replacement", desc: "Asphalt, metal & tile roofing" },
      { title: "Gutter Guards", desc: "Lifetime warranty available" },
    ],
    palette: {
      navBg: "#232323",
      navText: "#ffffff",
      accent: "#a33b2f",
      imgBg: "repeating-linear-gradient(45deg,#e6e0da,#e6e0da 12px,#d7cec3 12px,#d7cec3 24px)",
      bodyBg: "#ffffff",
      textColor: "#232323",
      subText: "#6b6b6b",
      ctaText: "#ffffff",
    },
  },
  {
    slug: "airflow-hvac",
    brand: "Airflow HVAC",
    trade: "Heating & cooling install and repair",
    headline: "Comfort, all year round",
    desc: "Heating & cooling install and repair",
    liveUrl: "https://alexbritoofficial.github.io/demo-sites/demo/airflow-hvac",
    footerNote: "Airflow HVAC · Licensed & insured",
    features: [
      { title: "AC Repair & Install", desc: "Same-day cooling repairs" },
      { title: "Furnace Service", desc: "Tune-ups, repair & replacement" },
      { title: "Maintenance Plans", desc: "Seasonal check-ups, priority scheduling" },
    ],
    palette: {
      navBg: "#173040",
      navText: "#ffffff",
      accent: "#e2762e",
      imgBg: "repeating-linear-gradient(45deg,#d6e5ec,#d6e5ec 12px,#c2d8e2 12px,#c2d8e2 24px)",
      bodyBg: "#ffffff",
      textColor: "#173040",
      subText: "#5c7080",
      ctaText: "#ffffff",
    },
  },
  {
    slug: "evergreen-landscaping",
    brand: "Evergreen Landscaping",
    trade: "Lawn care, hardscaping & cleanup",
    headline: "Outdoor spaces that grow on you",
    desc: "Lawn care, hardscaping & cleanup",
    liveUrl: "https://alexbritoofficial.github.io/demo-sites/demo/evergreen-landscaping",
    footerNote: "Evergreen Landscaping · 10 years in business",
    features: [
      { title: "Lawn Care", desc: "Mowing, fertilizing, weed control" },
      { title: "Hardscaping", desc: "Patios, walkways, retaining walls" },
      { title: "Seasonal Cleanup", desc: "Spring & fall yard cleanup" },
    ],
    palette: {
      navBg: "#1e2b1c",
      navText: "#ffffff",
      accent: "#5a9142",
      imgBg: "repeating-linear-gradient(45deg,#dfeada,#dfeada 12px,#cbe0c4 12px,#cbe0c4 24px)",
      bodyBg: "#ffffff",
      textColor: "#1e2b1c",
      subText: "#4a5a46",
      ctaText: "#ffffff",
    },
  },
];
