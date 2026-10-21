import type { Metadata } from "next";
import { InsightsHeroSection } from "@/components/insights/insights-hero-section";
import { InsightsGridSection } from "@/components/insights/insights-grid-section";
import { BriefingSection } from "@/components/insights/briefing-section";

export async function generateMetadata(): Promise<Metadata> {
  // const res = await fetch(`${process.env.API_URL}/seo/insights`, {
  //   next: { revalidate: 3600 },
  // });
  // const seo = await res.json();

  const seo = {
    title: "Insights | Almagest Academy",
    description:
      "Editorial thinking across money, macro history, technology, the UAE and long-term decision-making.",
    ogImage: "/images/og-insights.jpg",
  };

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [{ url: seo.ogImage }],
    },
  };
}

export default function InsightsPage() {
  return (
    <>
      <InsightsHeroSection />
      <InsightsGridSection />
      <BriefingSection />
    </>
  );
}
