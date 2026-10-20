import { ActionButton } from "@/components/shared/action-button";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

export function JoinNowBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-center sm:py-28 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,58,97,0.58),transparent_55%)]"
      />
      <SectionContainer className="relative">
        <div className="mx-auto max-w-4xl">
          <Subtitle
            size="md"
            tone="white-muted"
            tracking="widest"
            weight="bold"
          >
            Begin with Understanding
          </Subtitle>
          <h2 className="mt-8 font-heading text-[38px] font-medium leading-[1.1] tracking-[-0.045em] text-white sm:text-[50px] lg:text-[40px]">
            Your next quantum leap starts
            <br className="hidden sm:block" /> with what you understand.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-7 text-white/55 sm:text-base">
            The certificate marks progress. The real value is the framework you
            build along the way.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ActionButton
              href="/courses/foundation"
              variant="primary"
              size="hero"
            >
              Start the Foundation
            </ActionButton>
            <ActionButton href="/learning-path" variant="secondary" size="hero">
              Explore the Learning Path
            </ActionButton>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
