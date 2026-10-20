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
