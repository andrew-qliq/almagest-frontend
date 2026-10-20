import { BookOpen, Play, UsersRound } from "lucide-react";
import { ActionButton } from "@/components/shared/action-button";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const FOUNDATION_DETAILS = [
  { icon: Play, label: "Format", value: "Self-paced video" },
  { icon: UsersRound, label: "Access", value: "Member community" },
  {
    icon: BookOpen,
    label: "Curriculum",
    value: "Module list pending approval",
  },
] as const;

export function FoundationStartingPointSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-[3px] border border-gold bg-gold/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-navy shadow-[0_5px_16px_rgba(201,168,76,0.18)]">
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
            <h2 className="mt-5 font-heading text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[42px]">
              The shared starting point.
            </h2>
            <p className="mt-7 max-w-xl text-[15px] leading-8 text-slate-500 sm:text-base">
              A rigorous introduction to money, systems, incentives and
              long-term thinking. Every learner begins here, whatever direction
              they choose next.
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

          <aside className="relative w-full max-w-[530px] justify-self-end overflow-hidden border-t-[3px] border-gold bg-[linear-gradient(125deg,#0D1B2A_0%,#10243a_58%,#21384e_100%)] p-7 text-white shadow-[0_22px_50px_rgba(13,27,42,0.17)] lg:h-[395px]">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,rgba(255,255,255,0.12),transparent_38%)]"
            />
            <Subtitle size="sm" tone="gold" tracking="wider" weight="bold">
              At a Glance
            </Subtitle>
            <div className="relative mt-5">
              {FOUNDATION_DETAILS.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={detail.label}
                    className="border-t border-white/15 py-3.5 first:pt-3.5"
                  >
                    <div className="flex items-center gap-3 text-white/55">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                      <span className="text-xs uppercase tracking-[0.1em]">
                        {detail.label}
                      </span>
                    </div>
                    <p
                      className={`mt-2 font-secondary text-[19px] font-normal leading-tight sm:text-[20px] ${detail.label === "Curriculum" ? "text-[14px] italic text-white/50 sm:text-[15px]" : "text-white"}`}
                    >
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
