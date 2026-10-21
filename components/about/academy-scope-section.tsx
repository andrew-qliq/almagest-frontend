import { Check, ShieldCheck, X } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const WE_TEACH = [
  "Monetary and macroeconomic systems",
  "Technology and strategic thinking",
  "Responsible decision frameworks",
] as const;

const WE_DO_NOT = [
  "Investment advice",
  "Trading signals",
  "Guaranteed outcomes",
] as const;

export function AcademyScopeSection() {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24">
      <SectionContainer>
        <div className="max-w-3xl">
          <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
            Our Scope
          </Subtitle>
          <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
            Education, clearly defined.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
          <article className="border-t-[3px] border-emerald-700 bg-white p-8 sm:p-10">
            <Subtitle size="sm" tone="gold" tracking="wider" weight="bold">
              We Teach
            </Subtitle>
            <ul className="mt-8 space-y-5">
              {WE_TEACH.map((item) => (
                <li key={item} className="flex items-center gap-4 text-[15px] text-navy">
                  <Check className="h-4 w-4 shrink-0 text-emerald-700" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="border-t-[3px] border-slate-500 bg-white p-8 sm:p-10">
            <Subtitle size="sm" tone="gold" tracking="wider" weight="bold">
              We Do Not
            </Subtitle>
            <ul className="mt-8 space-y-5">
              {WE_DO_NOT.map((item) => (
                <li key={item} className="flex items-center gap-4 text-[15px] text-slate-500">
                  <X className="h-3.5 w-3.5 shrink-0" strokeWidth={1.7} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="flex gap-4 border-l-[5px] border-blue-600 bg-blue-50 px-7 py-5">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-blue-800" strokeWidth={1.7} />
          <div>
            <h3 className="text-sm font-semibold text-blue-950">Legal entity</h3>
            <p className="mt-1 text-[13px] leading-6 text-blue-900/75">
              [Registered legal name, trade licence and approved entity wording pending verification]
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
