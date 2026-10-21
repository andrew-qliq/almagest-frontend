import { PageHero } from "@/components/shared/page-hero";

export function InsightsHeroSection() {
  return (
    <PageHero
      subtitle="The Journal"
      heading="Ideas for a changing world."
      description="Editorial thinking across money, macro history, technology, the UAE and long-term decision-making."
      imageSrc="/images/insights/hero-banner.jpg"
      size="compact"
      className="md:min-h-[560px] lg:min-h-[580px]"
    />
  );
}
