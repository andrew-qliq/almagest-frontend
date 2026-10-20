import { Briefcase, Building2, User, TrendingUp } from "lucide-react";
import { Subtitle } from "@/components/shared/subtitle";
import { FeatureCard } from "@/components/shared/feature-card";

const AUDIENCE_CARDS = [
  {
    icon: Briefcase,
    number: "01",
    title: "Entrepreneurs",
    description:
      "Building and steering ventures that depend on clear strategic thinking.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Executives",
    description:
      "Leading teams and capital decisions in a rapidly shifting landscape.",
  },
  {
    icon: User,
    number: "03",
    title: "Professionals",
    description:
      "Growing careers with sharper judgement and a longer time horizon.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Long-term investors",
    description:
      "Thinking in decades, not headlines — and building conviction to match.",
  },
] as const;

/**
 * Inset audience panel rendered inside the cream Premise section.
 */
export function AudienceSection() {
  return (
    <section
      id="audience"
      aria-labelledby="audience-heading"
      className="relative overflow-hidden border-t-[3px] border-gold bg-navy px-6 py-12 sm:px-10 sm:py-14 lg:flex lg:min-h-[444px] lg:items-center lg:px-14 lg:py-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-32 h-96 w-96 rounded-full border border-gold/20 bg-white/[0.025]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-36 -right-20 h-72 w-72 rounded-full border border-gold/20"
      />

      <div className="relative grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[0.78fr_1.72fr] lg:gap-16">
        {/* Left — heading */}
        <div className="max-w-sm">
          <Subtitle size="xs" tone="gold" tracking="wider" className="mb-6">
            Built for Serious Learners
          </Subtitle>
          <h2
            id="audience-heading"
            className="font-heading text-[20px] font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[20px]"
          >
            For people making decisions that carry weight.
          </h2>
        </div>

        {/* Right — 2×2 grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {AUDIENCE_CARDS.map((card) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              number={card.number}
              title={card.title}
              description={card.description}
              variant="dark"
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}
