import { PageHero } from "@/components/shared/page-hero";

export function ContactHeroSection() {
  return (
    <PageHero
      subtitle="Contact"
      heading="How can we help?"
      description="Course, partner, data and technical enquiries are routed to the right team."
      imageSrc="/images/insights/hero-banner.jpg"
      size="compact"
      className="md:min-h-[560px] lg:min-h-[580px]"
    />
  );
}
