import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { TrustBar } from "@/components/home/trust-bar";
import { PremiseSection } from "@/components/home/premise-section";
import { FrameworksSection } from "@/components/shared/frameworks-section";
import { LearningPathSection } from "@/components/home/learning-path-section";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { FounderSection } from "@/components/home/founder-section";
import { CommunitySection } from "@/components/home/community-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { LatestInsightsSection } from "@/components/home/latest-insights-section";
import { ReferralPartnersBanner } from "@/components/home/referral-partners-banner";
import { FaqSection } from "@/components/home/faq-section";
import { JoinNowBanner } from "@/components/home/join-now-banner";

export async function generateMetadata(): Promise<Metadata> {
  // const res = await fetch(`${process.env.API_URL}/seo/home`, {
  //   next: { revalidate: 3600 }, // revalidate every hour
  // });
  // const seo = await res.json();

  const seo = {
    title: "Almagest Academy",
    description: "Learn the foundations of Bitcoin, crypto and frontier technology.",
    ogImage: "/images/og-home.jpg",
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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PremiseSection />
      <FrameworksSection title="A disciplined framework for a changing world." />
      <LearningPathSection />
      <TestimonialsSection title="Evidence, not exaggeration." />
      <FounderSection />
      <CommunitySection />
      <InstagramSection />
      <LatestInsightsSection />
      <ReferralPartnersBanner />
      <FaqSection />
      <JoinNowBanner />
    </>
  );
}
