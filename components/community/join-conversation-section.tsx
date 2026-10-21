import { ActionButton } from "@/components/shared/action-button";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

export function JoinConversationSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-center text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_70%_at_50%_50%,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.045)_36%,transparent_72%)]"
      />
      <SectionContainer className="relative">
        <Subtitle size="md" tone="white-muted" tracking="wider" weight="bold">
          Join the Conversation
        </Subtitle>
        <h2 className="mx-auto mt-5 max-w-5xl font-heading text-[34px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[40px]">
          Learn with people who take ideas seriously.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-white/55 sm:text-base">
          Start with the open broadcast, or begin the Foundation to join the
          member community.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ActionButton
            href="#whatsapp-broadcast"
            variant="primary"
            size="hero"
          >
            Join the Broadcast
          </ActionButton>
          <ActionButton href="/learning-path" variant="secondary" size="hero">
            Start the Foundation
          </ActionButton>
        </div>
      </SectionContainer>
    </section>
  );
}
