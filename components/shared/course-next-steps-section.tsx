import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Globe2 } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import type {
  CourseNextStep,
  CourseNextStepIcon,
} from "@/lib/constants/course-next-steps";

const ICONS = {
  book: BookOpen,
  compass: Compass,
  globe: Globe2,
} satisfies Record<CourseNextStepIcon, typeof Compass>;

interface CourseNextStepsSectionProps {
  items: CourseNextStep[];
  title: string;
  eyebrow?: string;
}

export function CourseNextStepsSection({
  items,
  title,
  eyebrow = "Your Next Step",
}: CourseNextStepsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_48%,rgba(31,73,111,0.46),transparent_52%)]"
      />
      <SectionContainer className="relative">
        <Subtitle size="md" tone="white-muted" tracking="wider" weight="bold">
          {eyebrow}
        </Subtitle>
        <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[40px]">
          {title}
        </h2>

        <div className="mt-12 grid max-w-5xl md:grid-cols-2">
          {items.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex min-h-[270px] transform-gpu flex-col border border-white/15 p-8 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-gold/50 hover:bg-white/[0.04] hover:shadow-[0_24px_54px_rgba(0,0,0,0.18)]"
              >
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.7} />
                <div className="mt-auto">
                  <h3 className="font-heading text-[22px] font-medium leading-tight tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-7 text-white/55">
                    {item.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-400 transition-colors group-hover:text-gold">
                    {item.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
