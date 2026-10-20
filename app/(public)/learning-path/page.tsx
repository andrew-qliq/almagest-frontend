import type { Metadata } from "next";
import { LearningPathHeroSection } from "@/components/learning-path/learning-path-hero-section";
import { SelfQualifySection } from "@/components/shared/self-qualify-section";
import { LEARNING_PATH_SELF_QUALIFY } from "@/lib/constants/self-qualify";
import { PathOverviewSection } from "@/components/learning-path/path-overview-section";
import { FoundationStartingPointSection } from "@/components/learning-path/foundation-starting-point-section";
import { CommunityExperienceSection } from "@/components/learning-path/community-experience-section";
import { CourseComparisonSection } from "@/components/learning-path/course-comparison-section";
import { CertificateSection } from "@/components/shared/certificate-section";
import { MasterclassCatalogueSection } from "@/components/learning-path/masterclass-catalogue-section";
import { LearningPathFaqSection } from "@/components/learning-path/learning-path-faq-section";
import { JoinNowBanner } from "../../../components/home/join-now-banner";

export async function generateMetadata(): Promise<Metadata> {
  // const res = await fetch(`${process.env.API_URL}/seo/learning-path`, {
  //   next: { revalidate: 3600 },
  // });
  // const seo = await res.json();

  const seo = {
    title: "Learning Path | Almagest Academy",
    description: "Explore our structured learning path from Bitcoin fundamentals to advanced frontier technology.",
    ogImage: "/images/og-learning-path.jpg",
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

export default function LearningPathPage() {
  return (
    <>
      <LearningPathHeroSection />
      <SelfQualifySection content={LEARNING_PATH_SELF_QUALIFY} />
      <PathOverviewSection />
      <FoundationStartingPointSection />
      <CommunityExperienceSection />
      <CourseComparisonSection />
      <CertificateSection />
      <MasterclassCatalogueSection />
      <LearningPathFaqSection />
      <JoinNowBanner />
    </>
  );
}
