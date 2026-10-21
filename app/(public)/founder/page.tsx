import type { Metadata } from "next";
import { FounderHeroSection } from "@/components/founder/founder-hero-section";
import { FounderIntroductionSection } from "@/components/founder/founder-introduction-section";
import { FounderStorySection } from "@/components/founder/founder-story-section";
import { FounderTimelineSection } from "@/components/founder/founder-timeline-section";
import { FounderMediaSection } from "@/components/founder/founder-media-section";
import { JoinNowBanner } from "../../../components/home/join-now-banner";

export async function generateMetadata(): Promise<Metadata> {
  const seo = {
    title: "Meet the Founder | Almagest Academy",
    description:
      "Meet Marco Teora, founder of Almagest Academy, and learn about the thinking behind the institution.",
    ogImage: "/images/insights/hero-banner.jpg",
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

export default function FounderPage() {
  return (
    <>
      <FounderHeroSection />
      <FounderIntroductionSection />
      <FounderStorySection />
      <FounderTimelineSection />
      <FounderMediaSection />
      <JoinNowBanner />
    </>
  );
}
