import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const DELIVERY_STEPS = [
  {
    number: "01",
    title: "Online",
    description: "Structured modules delivered digitally.",
  },
  {
    number: "02",
    title: "Self-paced",
    description: "Progress at the speed your work allows.",
  },
  {
    number: "03",
    title: "Community",
    description: "WhatsApp discussion and broadcasts.",
  },
  {
    number: "04",
    title: "In person",
    description: "Future Dubai gatherings for members.",
  },
] as const;

export function DeliveryModelSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(31,73,111,0.44),transparent_54%)]"
      />
      <SectionContainer className="relative">
        <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
          Delivery Model
        </Subtitle>
        <h2 className="mt-6 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[40px]">
          Learn on your schedule, think in company.
        </h2>

        <div className="mt-14 grid border border-white/40 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERY_STEPS.map((step, index) => (
            <article
              key={step.number}
              className={`flex min-h-[250px] flex-col p-8 ${index > 0 ? "border-t border-white/40 sm:border-l sm:border-t-0" : ""} ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}
            >
              <p className="font-secondary text-[28px] text-gold">
                {step.number}
              </p>
              <div className="mt-auto">
                <h3 className="font-heading text-[21px] font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-[13px] leading-6 text-white/35">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
