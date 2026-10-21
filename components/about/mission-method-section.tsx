import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const METHOD_LENSES = [
  {
    number: "01",
    title: "History",
    description:
      "How money and technology shifted power before, and what patterns repeat.",
  },
  {
    number: "02",
    title: "Incentives",
    description: "Who gains, who bears risk, and why systems behave as they do.",
  },
  {
    number: "03",
    title: "Decisions",
    description:
      "Frameworks for acting with clarity, discipline and honest risk awareness.",
  },
] as const;

export function MissionMethodSection() {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
              Our Mission
            </Subtitle>
            <h2 className="mt-6 max-w-xl font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
              Develop clarity for consequential decisions.
            </h2>
          </div>

          <div className="border-l-2 border-gold pl-7 text-[15px] leading-8 text-slate-500 sm:text-base">
            <p>
              We teach the histories, incentives and systems behind financial
              and technological change. We do not sell signals, financial
              products or guaranteed outcomes.
            </p>
            <p className="mt-6">
              Designed for professionals, entrepreneurs, executives and
              thoughtful investors across the UAE, GCC and wider world.
            </p>
          </div>
        </div>

        <div className="mt-24 sm:mt-28">
          <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
            Our Method
          </Subtitle>
          <h2 className="mt-6 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
            Three lenses, applied in sequence.
          </h2>

          <div className="mt-14 grid border-t border-navy md:grid-cols-3">
            {METHOD_LENSES.map((lens, index) => (
              <article
                key={lens.number}
                className={`py-8 md:px-8 md:first:pl-0 ${index > 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""}`}
              >
                <p className="font-secondary text-[18px] text-gold">
                  {lens.number}
                </p>
                <h3 className="mt-5 font-heading text-xl font-semibold text-navy">
                  {lens.title}
                </h3>
                <p className="mt-2 max-w-md text-[14px] leading-6 text-slate-500 sm:text-[15px]">
                  {lens.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
