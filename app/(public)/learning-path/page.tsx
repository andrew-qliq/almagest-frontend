import { LearningPathHeroSection } from "@/components/learning-path/learning-path-hero-section";
import { SelfQualifySection } from "@/components/learning-path/self-qualify-section";
import { PathOverviewSection } from "@/components/learning-path/path-overview-section";
import { FoundationStartingPointSection } from "@/components/learning-path/foundation-starting-point-section";
import { CommunityExperienceSection } from "@/components/learning-path/community-experience-section";

export const metadata = { title: "Learning Path | Quantum Leap Academy" };

export default function LearningPathPage() {
  return (
    <>
      <LearningPathHeroSection />
      <SelfQualifySection />
      <PathOverviewSection />
      <FoundationStartingPointSection />
      <CommunityExperienceSection />
    </>
  );
}
