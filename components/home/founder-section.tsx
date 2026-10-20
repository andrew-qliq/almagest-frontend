import Image from "next/image";
import { Quote } from "lucide-react";
import { ActionButton } from "@/components/shared/action-button";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

export function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_70%,rgba(20,58,97,0.42),transparent_44%)]"
      />
      <SectionContainer className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative min-h-[460px] overflow-hidden sm:min-h-[580px] lg:min-h-[650px]">
            <Image
              src="/images/home/meet-the-founder.jpg"
              alt="Marco Teora, founder of Quantum Leap Academy"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-navy/20" />
          </div>

          <div className="max-w-xl">
            <Subtitle size="md" tone="white-muted" tracking="widest" weight="bold">
              Founder-Led Education
            </Subtitle>
            <Quote
              aria-hidden
              className="mt-10 h-8 w-8 rotate-180 text-gold"
              strokeWidth={1.6}
            />
            <blockquote className="mt-8 font-heading text-[36px] font-medium leading-[1.12] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[50px]">
              “Understanding is the foundation of independent thought.”
            </blockquote>
            <p className="mt-8 text-[15px] leading-7 text-white/55 sm:text-base">
              Marco Teora founded Quantum Leap Academy to bring rigorous,
              long-term education to people navigating a world of monetary and
              technological change.
            </p>
            <ActionButton
              href="/founder"
              variant="secondary"
              size="hero"
              className="mt-9"
            >
              Meet the Founder
            </ActionButton>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
