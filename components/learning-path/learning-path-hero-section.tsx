import { PageHero } from "@/components/shared/page-hero";

export function LearningPathHeroSection() {
  return (
    <PageHero
      subtitle="The Learning Path"
      heading={
        <>
          Everyone starts
          <br />
          in the same place.
        </>
      }
      description="A shared foundation creates the clarity required for serious specialisation."
      ctas={[
        {
          label: "Start the Foundation",
          href: "/courses/foundation",
          variant: "primary",
        },
      ]}
      imageSrc="/images/learning-path/hero-banner.jpg"
      size="full"
    />
  );
}
