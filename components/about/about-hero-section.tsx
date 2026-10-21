import { PageHero } from "@/components/shared/page-hero";

export function AboutHeroSection() {
  return (
    <PageHero
      subtitle="About the Academy"
      heading="What is Almagest Academy?"
      description="An institution for understanding the systems shaping money, technology and the future."
      ctas={[
        {
          label: "View the Learning Path",
          href: "/learning-path",
          variant: "primary",
        },
      ]}
      size="full"
      imageSrc="/images/home/hero-banner.jpg"
    />
  );
}
