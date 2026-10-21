import type { Metadata } from "next";
import { ReferralHeroSection } from "@/components/referral-partners/referral-hero-section";
import { ReferralAudienceSection } from "@/components/referral-partners/referral-audience-section";
import { ProfessionalPartnershipSection } from "@/components/referral-partners/professional-partnership-section";
import { PartnerDashboardPreviewSection } from "@/components/referral-partners/partner-dashboard-preview-section";
import { ReferralFaqSection } from "@/components/referral-partners/referral-faq-section";

export const metadata: Metadata = {
  title: "Referral Partners | Almagest Academy",
  description:
    "Apply to become an Almagest Academy referral partner and introduce serious learners to the Academy.",
  openGraph: {
    title: "Referral Partners | Almagest Academy",
    description:
      "A professional referral partnership for creators, educators and community owners.",
    images: [{ url: "/images/home/hero-banner.jpg" }],
  },
};

export default function ReferralPartnersPage() {
  return (
    <>
      <ReferralHeroSection />
      <ReferralAudienceSection />
      <ProfessionalPartnershipSection />
      <PartnerDashboardPreviewSection />
      <ReferralFaqSection />
    </>
  );
}
