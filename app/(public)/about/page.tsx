import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { MissionMethodSection } from "@/components/about/mission-method-section";
import { AcademyPillarsSection } from "@/components/about/academy-pillars-section";
import { AcademyScopeSection } from "@/components/about/academy-scope-section";
import { DeliveryModelSection } from "@/components/about/delivery-model-section";
import { AboutAudienceSection } from "@/components/about/about-audience-section";
import { JoinNowBanner } from "../../../components/home/join-now-banner";

export async function generateMetadata(): Promise<Metadata> {
  const seo = {
    title: "About the Academy | Almagest Academy",
    description:
      "Learn how Almagest Academy develops clarity through history, incentives and decision-making frameworks.",
    ogImage: "/images/home/hero-banner.jpg",
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

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionMethodSection />
      <AcademyPillarsSection />
      <AcademyScopeSection />
      <DeliveryModelSection />
      <AboutAudienceSection />
      <JoinNowBanner />
    </>
  );
}
