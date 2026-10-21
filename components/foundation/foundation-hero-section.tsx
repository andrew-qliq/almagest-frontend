import { PageHero } from "@/components/shared/page-hero";

export function FoundationHeroSection() {
  return (
    <PageHero
      subtitle="The Essential Starting Point"
      heading="Foundation"
      description="A rigorous introduction to money, systems, incentives and long-term thinking."
      ctas={[
        {
          label: "Enrol Now",
          href: "/checkout/foundation",
          variant: "primary",
        },
      ]}
      size="full"
      imageSrc="/images/home/hero-banner.jpg"
    />
  );
}
