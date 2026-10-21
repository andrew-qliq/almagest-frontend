import type { Metadata } from "next";
import { FoundationHeroSection } from "@/components/foundation/foundation-hero-section";
import { CourseOverviewSection } from "@/components/shared/course-overview-section";
import { SelfQualifySection } from "@/components/shared/self-qualify-section";
import { FOUNDATION_SELF_QUALIFY } from "@/lib/constants/self-qualify";
import { FrameworksSection } from "../../../../components/shared/frameworks-section";
import { CurriculumSection } from "@/components/shared/curriculum-section";
import { CourseLearningOutcomesSection } from "@/components/shared/course-learning-outcomes-section";
import { CourseFormatAccessSection } from "@/components/shared/course-format-access-section";
import { CertificateSection } from "@/components/shared/certificate-section";
import { CourseInstructorSection } from "@/components/shared/course-instructor-section";
import { CourseNextStepsSection } from "@/components/shared/course-next-steps-section";
import { CourseEnrollmentFaqSection } from "@/components/shared/course-enrollment-faq-section";
import { TestimonialsSection } from "../../../../components/shared/testimonials-section";
import { FOUNDATION_CURRICULUM } from "@/lib/constants/curricula";
import { FOUNDATION_NEXT_STEPS } from "@/lib/constants/course-next-steps";
import {
  COURSE_INSTRUCTOR,
  COURSE_PRICING_STATES,
  FOUNDATION_FAQS,
  FOUNDATION_FORMAT_FEATURES,
  FOUNDATION_OUTCOMES,
} from "@/lib/constants/course-sections";

export async function generateMetadata(): Promise<Metadata> {
  const seo = {
    title: "Foundation Course | Almagest Academy",
    description:
      "A rigorous introduction to money, systems, incentives and long-term thinking.",
    ogImage: "/images/home/hero-banner.jpg",
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

export default function FoundationCoursePage() {
  return (
    <>
      <FoundationHeroSection />
      <CourseOverviewSection
        subtitle="The Purpose"
        title="Build the foundation beneath every informed decision."
        description="This course is designed for serious learners who want structured understanding rather than shortcuts, predictions or exaggerated promises."
        checkoutHref="/checkout/foundation"
        format="Self-paced video"
        access="Member community"
        recognition="Certificate pathway"
      />
      <SelfQualifySection
        content={FOUNDATION_SELF_QUALIFY}
        background="white"
        cardBackgrounds="positive-only"
      />
      <FrameworksSection
        title="Six pillars. One coherent perspective."
        subtitle="THE FRAMEWORK"
        background="cream"
      />
      <CurriculumSection modules={FOUNDATION_CURRICULUM} />
      <CourseLearningOutcomesSection outcomes={FOUNDATION_OUTCOMES} />
      <CourseFormatAccessSection features={FOUNDATION_FORMAT_FEATURES} />
      <CertificateSection
        tone="navy"
        eyebrow="Certificate"
        title="A record of completed study."
        description="Complete the approved criteria to receive a certificate for Foundation. A record of study, not a professional qualification."
        points={[
          "Issued on completion of the course",
          "Criteria: [Pending academic approval]",
          "Verifiable record: [Pending approval]",
        ]}
        courseTitle="Foundation"
      />
      <TestimonialsSection title="Evidence, not exaggeration." />
      <CourseInstructorSection {...COURSE_INSTRUCTOR} />
      <CourseNextStepsSection
        items={FOUNDATION_NEXT_STEPS}
        title="After the Foundation, choose a direction."
      />
      <CourseEnrollmentFaqSection
        faqs={FOUNDATION_FAQS}
        pricingStates={COURSE_PRICING_STATES}
        checkoutHref="/checkout/foundation"
      />
    </>
  );
}
