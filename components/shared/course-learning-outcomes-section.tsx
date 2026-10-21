import { Check } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

interface CourseLearningOutcomesSectionProps {
  outcomes: string[];
  title?: string;
  description?: string;
  eyebrow?: string;
}

export function CourseLearningOutcomesSection({
  outcomes,
  title = "What you should be able to do.",
  description =
    "Outcomes describe learning, never financial results. Final wording is pending academic approval.",
  eyebrow = "Learning Outcomes",
}: CourseLearningOutcomesSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <div className="max-w-4xl">
          <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
            {eyebrow}
          </Subtitle>
          <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
            {title}
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-slate-500 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <article
              key={outcome}
              className="flex min-h-[170px] transform-gpu flex-col justify-between border border-slate-200 bg-white p-7 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2.5 hover:shadow-[0_24px_52px_rgba(13,27,42,0.13)]"
            >
              <Check className="h-6 w-6 text-gold" strokeWidth={2} />
              <p className="mt-8 text-[15px] font-semibold leading-6 text-navy">
                {outcome}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
