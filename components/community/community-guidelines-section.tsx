import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const COMMUNITY_GUIDELINES = [
  {
    number: "01",
    title: "Be respectful",
    description: "Disagree with ideas, never with people.",
  },
  {
    number: "02",
    title: "Stay educational",
    description: "No signals, tips or promotion of financial products.",
  },
  {
    number: "03",
    title: "Protect privacy",
    description: "Do not share others' details or private messages.",
  },
  {
    number: "04",
    title: "Be honest",
    description: "Share experience as experience, not as advice.",
  },
] as const;

export function CommunityGuidelinesSection() {
  return (
    <section className="bg-[#f8f5ef] py-16 sm:py-20 lg:py-20">
      <SectionContainer>
        <div className="max-w-5xl">
          <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
            Community Guidelines
          </Subtitle>
          <h2 className="mt-5 font-heading text-[34px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[44px] lg:text-[40px]">
            Four principles for every conversation.
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-slate-500 sm:text-base">
            Sample draft. Final guidelines pending approval.
          </p>
        </div>

        <div className="mt-12 grid border border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {COMMUNITY_GUIDELINES.map((guideline, index) => (
            <article
              key={guideline.number}
              className={`flex min-h-[230px] flex-col justify-between p-7 sm:p-8 ${
                index > 0 ? "border-t border-slate-200 sm:border-t-0" : ""
              } ${index % 2 === 1 ? "sm:border-l sm:border-slate-200" : ""} ${
                index >= 2 ? "sm:border-t sm:border-slate-200 lg:border-t-0" : ""
              } ${index > 0 ? "lg:border-l lg:border-slate-200" : ""}`}
            >
              <span className="font-secondary text-[29px] leading-none text-gold">
                {guideline.number}
              </span>
              <div>
                <h3 className="font-heading text-[22px] font-medium tracking-[-0.03em] text-navy">
                  {guideline.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {guideline.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
