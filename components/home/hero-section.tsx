import { PageHero } from "@/components/shared/page-hero";

/**
 * Home-page hero — full viewport, all slots populated.
 * Swap imageSrc for the real Dubai skyline asset when available.
 */
export function HeroSection() {
  return (
    <PageHero
      subtitle="QUANTUM LEAP ACADEMY"
      heading={
        <>
          Build the knowledge behind
          <br />
          your next quantum leap.
        </>
      }
      description="A sophisticated educational platform for understanding money, macroeconomics, Bitcoin, technology, entrepreneurship and the forces shaping the future."
      ctas={[
        {
          label: "Start the Foundation",
          href: "/courses/foundation",
          variant: "primary",
        },
        {
          label: "Explore Master Classes",
          href: "/learning-path",
          variant: "secondary",
        },
      ]}
      tags={["Premium education", "Self-paced learning", "Global community"]}
      // sectionNumber="01"
      // location="Dubai · Global"
      size="full"
      imageSrc="/images/home/hero-banner.jpg"
    />
  );
}
