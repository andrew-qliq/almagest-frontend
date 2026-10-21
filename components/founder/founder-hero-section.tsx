import { PageHero } from "@/components/shared/page-hero";

export function FounderHeroSection() {
  return (
    <PageHero
      subtitle="Meet the Founder"
      heading="Marco Teora"
      description="Founder of Almagest Academy. Approved biography and credentials pending final client sign-off."
      ctas={[{ label: "Start the Foundation", href: "/courses/foundation", variant: "primary" }]}
      imageSrc="/images/insights/hero-banner.jpg"
      size="compact"
      className="md:min-h-[560px] lg:min-h-[580px]"
    />
  );
}
