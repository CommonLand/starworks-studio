export interface Opportunity {
  slug: string;
  title: string;
  category: string;
  type: string;
  location: string;
  summary: string;
  requirements: string[];
}

export const opportunityCategories = [
  "Writing",
  "Animation",
  "Production",
  "Performance",
  "Marketing",
  "Operations",
] as const;

export const opportunities: Opportunity[] = [
  {
    slug: "staff-writer",
    title: "Staff Writer",
    category: "Writing",
    type: "Project",
    location: "Remote",
    summary: "Develop original short and feature material with the StarWorks story team.",
    requirements: [
      "Portfolio of original written work",
      "Comfort working from outline through production draft",
      "Collaborative notes process",
    ],
  },
  {
    slug: "2d-animator",
    title: "2D Animator",
    category: "Animation",
    type: "Contract",
    location: "Remote",
    summary: "Character and effects animation for StarWorks original animated work.",
    requirements: ["Reel required", "Strong draftsmanship and timing", "Experience in a production pipeline"],
  },
  {
    slug: "line-producer",
    title: "Line Producer",
    category: "Production",
    type: "Project",
    location: "Atlanta, GA",
    summary: "Budgeting, scheduling and on-set production management for StarWorks features.",
    requirements: ["Feature or long-form credit", "Budget ownership experience", "Crew and vendor network"],
  },
  {
    slug: "open-casting",
    title: "Open Casting Call",
    category: "Performance",
    type: "Ongoing",
    location: "Multiple",
    summary: "Submit interest for upcoming StarWorks productions.",
    requirements: ["Headshot and reel", "Availability window", "Union status if applicable"],
  },
  {
    slug: "brand-marketing-lead",
    title: "Brand & Marketing Lead",
    category: "Marketing",
    type: "Full time",
    location: "Atlanta, GA",
    summary: "Own the StarWorks brand voice across releases, festival and creator programs.",
    requirements: ["Entertainment or culture brand experience", "Campaign ownership", "Editorial instinct"],
  },
  {
    slug: "operations-coordinator",
    title: "Operations Coordinator",
    category: "Operations",
    type: "Full time",
    location: "Atlanta, GA",
    summary: "Keep productions, events and the studio calendar running.",
    requirements: ["Highly organised", "Event or production coordination", "Clear written communication"],
  },
];

export const getOpportunity = (slug: string) =>
  opportunities.find((o) => o.slug === slug);
