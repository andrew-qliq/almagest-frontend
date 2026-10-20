import Link from "next/link";
import { Network, Scale, Landmark } from "lucide-react";
import { Subtitle } from "@/components/shared/subtitle";
import { SectionContainer } from "@/components/shared/section-container";
import { FeatureCard } from "@/components/shared/feature-card";
import { AudienceSection } from "@/components/home/audience-section";

const METHOD_CARDS = [
  {
    icon: Network,
    number: "01",
    title: "Systems",
    description:
      "How money, markets and technology fit together — and why they behave as they do.",
  },
  {
    icon: Scale,
    number: "02",
    title: "Incentives",
    description:
      "The forces that drive institutions, companies and individuals to act.",
  },
  {
    icon: Landmark,
    number: "03",
    title: "Histories",
    description:
      "The patterns that repeat beneath every headline — once you know where to look.",
  },
] as const;

/**
 * "The Premise" section.
 * Split layout (heading left, body right) + 3-column method cards below.
 * The method cards appear on other pages too — import FeatureCard directly there.
 */
export function PremiseSection() {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24 lg:py-32">
      <SectionContainer>
        {/* ── Split header ───────────────────────────────────────── */}
        <div className="mb-14 grid grid-cols-1 gap-12 lg:mb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* Left — watermark + heading */}
          <div className="relative max-w-2xl">
            <div className="relative pt-4">
              <Subtitle
                size="md"
                tone="gold"
                tracking="wider"
                className="mb-6"
                weight="bold"
              >
                The Premise
              </Subtitle>

              <h2 className="max-w-xl font-heading text-[38px] font-medium leading-[1.06] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
                The world changes.
                <br />
                Your understanding should too.
              </h2>

              <div className="mt-9 max-w-xl border-t border-navy/15 pt-7">
                <p className="max-w-lg font-heading text-[17px] font-semibold leading-[1.55] text-navy/85 sm:text-lg">
                  Durable progress rarely comes from reacting faster to noise.
                </p>
              </div>
            </div>
          </div>

          {/* Right — body copy + CTA */}
          <div className="flex flex-col justify-center gap-5 border-l border-gold/70 pl-6 sm:pl-9 lg:mt-12 lg:pl-12">
            <p className="max-w-lg text-[15px] leading-7 text-slate-500 sm:text-base">
              Most people try to keep up with headlines. They scan, react and
              forget. The result is busyness mistaken for progress — motion
              without direction.
            </p>
            <p className="max-w-lg text-[15px] leading-7 text-slate-500 sm:text-base">
              Almagest Academy teaches the frameworks beneath the news: the
              systems, incentives and histories that explain why things happen
              the way they do, and what is likely to come next.
            </p>
            <Link
              href="/learning-path"
              className="group mt-2 inline-flex w-fit items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:text-navy"
            >
              Our Method
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ── Method cards ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {METHOD_CARDS.map((card) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              number={card.number}
              title={card.title}
              description={card.description}
              variant="light"
            />
          ))}
        </div>

        <div className="mt-16 lg:mt-20">
          <AudienceSection />
        </div>
      </SectionContainer>
    </section>
  );
}
