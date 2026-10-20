import type { ReactNode } from "react";
import { Quote, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import { TESTIMONIALS } from "@/lib/constants/testimonials";

interface TestimonialsSectionProps {
  title: ReactNode;
  subtitle?: string;
  description?: string;
}

export function TestimonialsSection({
  title,
  subtitle = "Learner Perspectives",
  description = "We will only publish feedback from verified learners who have given explicit consent.",
}: TestimonialsSectionProps) {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <div className="max-w-4xl">
          <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
            {subtitle}
          </Subtitle>
          <h2 className="mt-5 font-heading text-[34px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[44px] lg:text-[40px]">
            {title}
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-slate-500 sm:text-base">
            {description}
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.number}
              className="group flex min-h-[300px] transform-gpu flex-col border border-slate-200 border-t-[2px] border-t-gold bg-white p-7 shadow-[0_12px_34px_rgba(13,27,42,0.04)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2.5 hover:border-b-gold/50 hover:shadow-[0_28px_60px_rgba(13,27,42,0.18)] sm:p-8 lg:min-h-[360px]"
            >
              <Quote
                aria-hidden
                className="h-7 w-7 rotate-180 text-gold"
                strokeWidth={1.7}
              />
              <blockquote className="mt-14 font-heading text-[19px] font-semibold leading-[1.48] tracking-[-0.015em] text-navy sm:text-[18px]">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-auto flex items-center gap-3 pt-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy font-heading text-xs font-semibold text-gold">
                  {testimonial.number}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-start gap-3 border-t border-slate-200 pt-5 text-slate-500">
          <ShieldCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700"
            strokeWidth={1.8}
          />
          <p className="max-w-4xl text-left text-xs leading-5">
            Sample wording shown for layout. Replace with verified, consented
            learner feedback before launch. Individual experiences vary.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
