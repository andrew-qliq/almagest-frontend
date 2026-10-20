import { HeroSection } from "@/components/home/hero-section";
import { TrustBar } from "@/components/home/trust-bar";
import { PremiseSection } from "@/components/home/premise-section";
import { FrameworksSection } from "@/components/home/frameworks-section";
import { LearningPathSection } from "@/components/home/learning-path-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FounderSection } from "@/components/home/founder-section";
import { CommunitySection } from "@/components/home/community-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { LatestInsightsSection } from "@/components/home/latest-insights-section";
import { ReferralPartnersBanner } from "@/components/home/referral-partners-banner";
import { FaqSection } from "@/components/home/faq-section";
import { JoinNowBanner } from "@/components/home/join-now-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PremiseSection />
      <FrameworksSection title="A disciplined framework for a changing world." />
      <LearningPathSection />
      <TestimonialsSection />
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
