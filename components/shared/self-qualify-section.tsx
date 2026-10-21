import { Check, X } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import type { SelfQualifyContent } from "@/lib/constants/self-qualify";

export function SelfQualifySection({
  content,
  cardBackgrounds = "positive-only",
  background = "cream",
}: {
  content: SelfQualifyContent;
  cardBackgrounds?: "positive-only" | "all";
  background?: "cream" | "white";
}) {
  return (
    <section
      className={`${background === "white" ? "bg-white" : "bg-[#f8f5ef]"} py-20 sm:py-24 lg:py-28`}
    >
      <SectionContainer>
        <div className="max-w-4xl">
          <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
            {content.subtitle}
          </Subtitle>
          <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
            {content.title}
          </h2>
          {content.description && (
            <p className="mt-5 text-[15px] leading-7 text-slate-500 sm:text-base">
              {content.description}
            </p>
          )}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16">
          {content.cards.map((card) => {
            const StatusIcon = card.positive ? Check : X;
            return (
              <article
                key={card.label}
                className={`transform-gpu border border-t-[3px] p-5 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2.5 hover:shadow-[0_28px_60px_rgba(13,27,42,0.16)] sm:p-9 lg:min-h-[320px] border-slate-200 shadow-[0_12px_34px_rgba(13,27,42,0.04)] ${card.positive ? "border-t-emerald-700" : "border-t-slate-500"} ${
                  cardBackgrounds === "all" || card.positive
                    ? "bg-white"
                    : "bg-transparent"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <Subtitle
                      size="sm"
                      tone="gold"
                      tracking="wider"
                      weight="bold"
                    >
                      {card.label}
                    </Subtitle>
                    <h3 className="mt-6 font-heading text-[24px] font-medium leading-tight tracking-[-0.03em] text-navy sm:text-[24px]">
                      {card.title}
                    </h3>
                  </div>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${card.positive ? "bg-emerald-700" : "bg-slate-500"}`}
                  >
                    <StatusIcon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                </div>
                <ul className="mt-5 border-t border-slate-200">
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
