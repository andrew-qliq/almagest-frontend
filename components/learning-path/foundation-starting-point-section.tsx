import { BookOpen, Play, UsersRound } from "lucide-react";
import { ActionButton } from "@/components/shared/action-button";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const FOUNDATION_DETAILS = [
  { icon: Play, label: "Format", value: "Self-paced video" },
  { icon: UsersRound, label: "Access", value: "Member community" },
  { icon: BookOpen, label: "Curriculum", value: "Module list pending approval" },
] as const;

export function FoundationStartingPointSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div className="max-w-2xl">
            <span className="inline-flex border border-gold px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
              Step 01 · Start Here
            </span>
            <Subtitle
              size="md"
              tone="gold"
              tracking="widest"
              weight="bold"
              className="mt-10"
            >
              Foundation
            </Subtitle>
            <h2 className="mt-8 font-heading text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[48px] lg:text-[52px]">
              The shared starting point.
            </h2>
            <p className="mt-7 max-w-xl text-[15px] leading-8 text-slate-500 sm:text-base">
              A rigorous introduction to money, systems, incentives and long-term
              thinking. Every learner begins here, whatever direction they choose
              next.
            </p>
            <ActionButton
              href="/courses/foundation"
              variant="primary"
              size="hero"
              className="mt-9"
            >
              Explore the Foundation
            </ActionButton>
          </div>

          <aside className="relative border-t-[3px] border-gold bg-navy p-7 text-white shadow-[0_28px_65px_rgba(13,27,42,0.18)] sm:p-10">
            <span
              aria-hidden
              className="pointer-events-none absolute right-5 top-1 font-heading text-[110px] font-semibold leading-none text-gold/10"
            >
              01
            </span>
            <Subtitle size="sm" tone="gold" tracking="wider" weight="bold">
              At a Glance
            </Subtitle>
            <div className="relative mt-8">
              {FOUNDATION_DETAILS.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="border-t border-white/15 py-6 first:border-t-0 first:pt-0">
                    <div className="flex items-center gap-3 text-white/55">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                      <span className="text-xs uppercase tracking-[0.1em]">{detail.label}</span>
                    </div>
                    <p className={`mt-3 font-heading text-[24px] font-semibold ${detail.label === "Curriculum" ? "text-base italic text-white/50" : "text-white"}`}>
                      {detail.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </SectionContainer>
    </section>
  );
}
