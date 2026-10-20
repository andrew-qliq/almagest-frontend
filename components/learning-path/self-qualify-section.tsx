import { Check, X } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const QUALIFICATION_CARDS = [
  {
    label: "For You",
    title: "You value depth over noise.",
    items: [
      "You want durable mental models",
      "You are willing to question assumptions",
      "You prefer education to prediction",
    ],
    positive: true,
  },
  {
    label: "Not For You",
    title: "You want shortcuts or signals.",
    items: [
      "Guaranteed returns",
      "Trading calls or hype",
      "Passive consumption without application",
    ],
    positive: false,
  },
] as const;

export function SelfQualifySection() {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <div className="max-w-4xl">
          <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
            Self-Qualify
          </Subtitle>
          <h2 className="mt-7 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[50px]">
            Is this the right path for you?
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-slate-500 sm:text-base">
            An honest filter, so the right people begin and the wrong expectations
            do not.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16">
          {QUALIFICATION_CARDS.map((card) => {
            const StatusIcon = card.positive ? Check : X;

            return (
              <article
                key={card.label}
                className="transform-gpu border border-slate-200 bg-white p-7 shadow-[0_12px_34px_rgba(13,27,42,0.04)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2.5 hover:shadow-[0_28px_60px_rgba(13,27,42,0.16)] sm:p-9 lg:min-h-[390px]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <Subtitle size="sm" tone="gold" tracking="wider" weight="bold">
                      {card.label}
                    </Subtitle>
                    <h3 className="mt-6 font-heading text-[24px] font-medium leading-tight tracking-[-0.03em] text-navy sm:text-[28px]">
                      {card.title}
                    </h3>
                  </div>
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white ${card.positive ? "bg-emerald-700" : "bg-slate-500"}`}
                  >
                    <StatusIcon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                </div>

                <ul className="mt-9 border-t border-slate-200">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 border-b border-slate-200 py-5 text-[15px] text-navy/85 last:border-b-0"
                    >
                      <StatusIcon
                        className={`h-4 w-4 shrink-0 ${card.positive ? "text-emerald-700" : "text-red-600"}`}
                        strokeWidth={1.8}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
