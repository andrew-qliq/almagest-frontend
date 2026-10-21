import { PageHero } from "@/components/shared/page-hero";

export function DiscoveryCallHeroSection() {
  return (
    <PageHero
      subtitle="Book a Call"
      heading={<>A focused conversation<br />before you decide.</>}
      description="Understand the Academy, ask questions and choose the next step that fits."
      imageSrc="/images/home/hero-banner.jpg"
      size="full"
    />
  );
}
