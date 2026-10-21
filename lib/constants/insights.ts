export interface InsightPreview {
  category: string;
  title: string;
  description: string;
  meta: string;
  href: string;
  image: string;
  imagePosition?: string;
}

export const LATEST_INSIGHTS: InsightPreview[] = [
  {
    category: "Money Mindset",
    title: "Why serious financial education begins with systems",
    description:
      "A framework for moving beyond headlines and understanding the incentives underneath.",
    meta: "Editorial preview · 7 min read",
    href: "/insights/financial-education-systems",
    image: "/images/home/hero-banner.jpg",
    imagePosition: "left center",
  },
  {
    category: "Macro History",
    title: "What monetary history teaches us about change",
    description:
      "The past does not repeat neatly, but it reveals the patterns worth studying.",
    meta: "Editorial preview · 6 min read",
    href: "/insights/monetary-history",
    image: "/images/home/hero-banner.jpg",
    imagePosition: "center center",
  },
  {
    category: "Frontier Tech",
    title: "How to think clearly at the edge of innovation",
    description:
      "A decision-making lens for emerging technology and accelerating change.",
    meta: "Editorial preview · 8 min read",
    href: "/insights/frontier-technology",
    image: "/images/home/hero-banner.jpg",
    imagePosition: "right center",
  },
];

export const INSIGHT_CATEGORIES = [
  "All", "Money Mindset", "Macro History", "Frontier Tech", "Bitcoin & Crypto", "UAE & GCC",
] as const;

export const INSIGHTS: InsightPreview[] = [
  ...LATEST_INSIGHTS,
  {
    category: "Bitcoin & Crypto",
    title: "Bitcoin beyond the price cycle",
    description: "A clearer way to examine monetary networks, adoption and long-term relevance.",
    meta: "Editorial preview · 7 min read",
    href: "/insights/bitcoin-beyond-price",
    image: "/images/home/meet-the-founder.jpg",
    imagePosition: "center 34%",
  },
  {
    category: "Money Mindset",
    title: "The discipline of thinking in systems",
    description: "Why durable financial judgement begins with relationships, feedback and incentives.",
    meta: "Editorial preview · 6 min read",
    href: "/insights/thinking-in-systems",
    image: "/images/home/community-banner.jpg",
    imagePosition: "center center",
  },
  {
    category: "UAE & GCC",
    title: "Dubai as a laboratory for ambitious growth",
    description: "What rapid development reveals about coordination, capital and long-term vision.",
    meta: "Editorial preview · 8 min read",
    href: "/insights/dubai-ambitious-growth",
    image: "/images/home/hero-banner.jpg",
    imagePosition: "left center",
  },
  {
    category: "Macro History",
    title: "Debt cycles and the stories we tell about them",
    description: "A long view of borrowing, confidence and correction.",
    meta: "Editorial preview · 8 min read",
    href: "/insights/debt-cycles",
    image: "/images/home/hero-banner.jpg",
    imagePosition: "center center",
  },
  {
    category: "Frontier Tech",
    title: "What AI changes about work, and what it does not",
    description: "A measured look at productivity, skills and institutions.",
    meta: "Editorial preview · 7 min read",
    href: "/insights/ai-and-work",
    image: "/images/home/meet-the-founder.jpg",
    imagePosition: "center 24%",
  },
  {
    category: "UAE & GCC",
    title: "Capital, cities and the shape of long-term growth",
    description: "What infrastructure investment reveals about strategy.",
    meta: "Editorial preview · 6 min read",
    href: "/insights/capital-cities-growth",
    image: "/images/home/community-banner.jpg",
    imagePosition: "center center",
  },
];
