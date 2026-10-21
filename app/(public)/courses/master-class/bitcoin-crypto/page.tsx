import type { Metadata } from "next";
import { BitcoinHeroSection } from "@/components/bitcoin/bitcoin-hero-section";
import { CourseOverviewSection } from "@/components/shared/course-overview-section";
import { CurriculumSection } from "@/components/shared/curriculum-section";
import { SelfQualifySection } from "@/components/shared/self-qualify-section";
import { FOUNDATION_SELF_QUALIFY } from "@/lib/constants/self-qualify";
import { FOUNDATION_CURRICULUM } from "@/lib/constants/curricula";
import { CourseLearningOutcomesSection } from "@/components/shared/course-learning-outcomes-section";
import { CourseFormatAccessSection } from "@/components/shared/course-format-access-section";
import { CertificateSection } from "@/components/shared/certificate-section";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { CourseInstructorSection } from "@/components/shared/course-instructor-section";
import { CourseNextStepsSection } from "@/components/shared/course-next-steps-section";
import { CourseEnrollmentFaqSection } from "@/components/shared/course-enrollment-faq-section";
import { BITCOIN_NEXT_STEPS } from "@/lib/constants/course-next-steps";
import {
  BITCOIN_FAQS,
  BITCOIN_FORMAT_FEATURES,
  BITCOIN_OUTCOMES,
  COURSE_INSTRUCTOR,
  COURSE_PRICING_STATES,
} from "@/lib/constants/course-sections";

export async function generateMetadata(): Promise<Metadata> {
  const seo = {
    title: "Bitcoin & Monetary Systems | Almagest Academy",
    description:
      "Understand Bitcoin in its technological, monetary and macroeconomic context.",
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

export default function BitcoinCryptoPage() {
  return (
    <>
      <BitcoinHeroSection />
      <CourseOverviewSection
        subtitle="The Purpose"
        title="Understand the monetary and technological context."
        description="This course is designed for serious learners who want structured understanding rather than shortcuts, predictions or exaggerated promises."
        checkoutHref="/checkout/master-class"
        format="Advanced study"
        access="Price to be confirmed"
        recognition="Certificate pathway"
        secondaryCtaLabel="Book a Discovery Call"
        secondaryCtaHref="/book-a-call"
      />
      <SelfQualifySection
        content={FOUNDATION_SELF_QUALIFY}
        background="white"
        cardBackgrounds="positive-only"
      />
      <CurriculumSection modules={FOUNDATION_CURRICULUM} />
      <CourseLearningOutcomesSection outcomes={BITCOIN_OUTCOMES} />
      <CourseFormatAccessSection features={BITCOIN_FORMAT_FEATURES} />
      <CertificateSection
        tone="navy"
        eyebrow="Certificate"
        title="A record of completed study."
        description="Complete the approved criteria to receive a certificate for Bitcoin & Monetary Systems. A record of study, not a professional qualification."
        points={[
          "Issued on completion of the course",
          "Criteria: [Pending academic approval]",
          "Verifiable record: [Pending approval]",
        ]}
        courseTitle="Bitcoin & Monetary Systems"
      />
      <TestimonialsSection title="Evidence, not exaggeration." />
      <CourseInstructorSection {...COURSE_INSTRUCTOR} />
      <CourseNextStepsSection
        items={BITCOIN_NEXT_STEPS}
        title="Continue through the wider learning path."
      />
      <CourseEnrollmentFaqSection
        faqs={BITCOIN_FAQS}
        pricingStates={COURSE_PRICING_STATES}
        checkoutHref="/checkout/master-class"
      />
    </>
  );
}
