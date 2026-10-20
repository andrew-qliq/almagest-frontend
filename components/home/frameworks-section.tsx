import type { ReactNode } from "react";
import Link from "next/link";
import {
  BookOpen,
  Compass,
  Cpu,
  Landmark,
  Scale,
  Target,
  type LucideIcon,
} from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

interface FrameworkCard {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  href: string;
}

interface FrameworksSectionProps {
  title: ReactNode;
}

const FRAMEWORK_CARDS: FrameworkCard[] = [
  {
    icon: Landmark,
    number: "01",
    title: "Finance Knowledge",
    description:
      "Build a disciplined understanding of money, capital and value.",
    href: "/learning-path#pillar-01",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Macro-Economic History",
    description: "See today’s systems through the decisions that shaped them.",
    href: "/learning-path#pillar-02",
  },
  {
    icon: Cpu,
    number: "03",
    title: "Frontier Tech",
    description:
      "Study the technologies redefining institutions and opportunity.",
    href: "/learning-path#pillar-03",
  },
  {
    icon: Scale,
    number: "04",
    title: "Risk Appetite",
    description:
      "Develop frameworks for uncertainty, trade-offs and resilience.",
    href: "/learning-path#pillar-04",
  },
  {
    icon: Compass,
    number: "05",
    title: "New Opportunities",
    description: "Recognise structural change without chasing noise or hype.",
    href: "/learning-path#pillar-05",
  },
  {
    icon: Target,
    number: "06",
    title: "Taking Action",
    description:
      "Turn informed conviction into deliberate, responsible decisions.",
    href: "/learning-path#pillar-06",
  },
];

export function FrameworksSection({ title }: FrameworksSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <div className="max-w-5xl">
          <Subtitle tone="gold" tracking="wider" weight="bold" size="md">
            The Six Pillars
          </Subtitle>
          <h2 className="mt-3 font-heading text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[44px] lg:text-[40px]">
            {title}
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-slate-500 sm:text-base">
            Each pillar develops a different dimension of financial and
            strategic intelligence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {FRAMEWORK_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.number}
                href={card.href}
                className="group relative flex min-h-[300px] flex-col overflow-hidden border border-slate-200 border-t-[3px] border-t-gold bg-white p-7 transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-navy hover:border-t-gold hover:bg-navy hover:shadow-[0_20px_50px_rgba(13,27,42,0.16)] focus-visible:-translate-y-1 focus-visible:border-navy focus-visible:bg-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold text-gold transition-[color,background-color] duration-300 group-hover:bg-gold group-hover:text-navy group-focus-visible:bg-gold group-focus-visible:text-navy">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <span className="select-none font-heading text-[42px] font-semibold leading-none text-navy/[0.07] transition-colors duration-300 group-hover:text-gold/30 group-focus-visible:text-gold/30">
                    {card.number}
                  </span>
                </div>

                <div className="mt-9">
                  <h3 className="font-heading text-[22px] font-medium leading-tight tracking-[-0.025em] text-navy transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-6 text-slate-500 transition-colors duration-300 group-hover:text-white/60 group-focus-visible:text-white/60">
                    {card.description}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <div className="h-px bg-slate-200 transition-colors duration-300 group-hover:bg-white/15 group-focus-visible:bg-white/15" />
                  <span className="mt-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 transition-colors duration-300 group-hover:text-gold group-focus-visible:text-gold">
                    Pillar {card.number}
                    <span
                      aria-hidden
                      className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
