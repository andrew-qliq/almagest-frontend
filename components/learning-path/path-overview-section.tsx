import { Award, ChevronDown, ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

function DirectionArrow() {
  return (
    <div
      aria-hidden
      className="flex shrink-0 items-center justify-center text-gold"
    >
      <ChevronDown className="h-6 w-6 md:hidden" strokeWidth={1.8} />
      <ChevronRight className="hidden h-6 w-6 md:block" strokeWidth={1.8} />
    </div>
  );
}

export function PathOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(20,58,97,0.56),transparent_50%)]"
      />
      <SectionContainer className="relative">
        <Subtitle size="md" tone="white-muted" tracking="widest" weight="bold">
          The Path
        </Subtitle>
        <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[40px]">
          One foundation. Multiple directions.
        </h2>

        <div className="mt-14 flex flex-col items-stretch justify-center gap-5 md:mt-20 md:flex-row md:items-center">
          <div className="flex min-h-[170px] flex-1 flex-col justify-center border border-gold px-7 py-6 shadow-[inset_3px_0_0_#c9a84c] md:max-w-[320px]">
            <span className="text-[11px] tracking-[0.16em] text-gold">01</span>
            <h3 className="mt-4 text-xl font-semibold">Foundation</h3>
            <p className="mt-2 text-sm text-white/50">Shared starting point</p>
          </div>

          <DirectionArrow />

          <div className="flex flex-1 flex-col gap-4 md:max-w-[470px]">
            <div className="flex min-h-[142px] flex-col justify-center border border-white/15 bg-white/[0.025] px-7 py-5">
              <span className="text-[11px] tracking-[0.16em] text-gold">
                02A
              </span>
              <h3 className="mt-3 text-lg font-semibold">
                Bitcoin &amp; Monetary Systems
              </h3>
              <p className="mt-2 text-sm text-white/50">Master Class</p>
            </div>
            <div className="flex min-h-[142px] flex-col justify-center border border-white/15 bg-white/[0.025] px-7 py-5">
              <span className="text-[11px] tracking-[0.16em] text-gold">
                02B
              </span>
              <h3 className="mt-3 text-lg font-semibold">Frontier Tech</h3>
              <p className="mt-2 text-sm text-white/50">Master Class</p>
            </div>
          </div>

          <DirectionArrow />

          <div className="flex min-h-[170px] flex-1 flex-col items-center justify-center border border-gold px-7 py-6 text-center md:max-w-[270px]">
            <Award className="h-7 w-7 text-gold" strokeWidth={1.6} />
            <h3 className="mt-4 text-xl font-semibold text-gold">
              Certificate
            </h3>
            <p className="mt-2 text-sm text-white/50">After required study</p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
