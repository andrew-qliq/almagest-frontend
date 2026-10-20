import Link from "next/link";
import { Award, ChevronDown, ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const COURSES = [
  {
    subtitle: "The Essential Starting Point",
    title: "Foundation",
    description:
      "A rigorous introduction to money, systems, incentives and long-term thinking.",
    details: ["Self-paced video", "Member community"],
    href: "/courses/foundation",
  },
  {
    subtitle: "Master Class",
    title: "Bitcoin & Monetary Systems",
    description:
      "Understand Bitcoin in its technological, monetary and macroeconomic context.",
    details: ["Advanced study", "Price to be confirmed"],
    href: "/courses/master-class/bitcoin-crypto",
  },
  {
    subtitle: "Master Class",
    title: "Frontier Tech & Economic Singularity",
    description:
      "Explore AI, innovation and the forces reshaping economic possibility.",
    details: ["Advanced study", "Price to be confirmed"],
    href: "/courses/master-class/frontier-tech",
  },
] as const;

function PathArrow() {
  return (
    <div
      aria-hidden
      className="flex shrink-0 items-center justify-center text-gold"
    >
      <ChevronDown className="h-5 w-5 md:hidden" strokeWidth={1.8} />
      <ChevronRight className="hidden h-5 w-5 md:block" strokeWidth={1.8} />
    </div>
  );
}

export function LearningPathSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_32%,rgba(20,58,97,0.58),transparent_45%)]"
      />
      <SectionContainer className="relative">
        <div className="max-w-3xl">
          <Subtitle size="md" tone="white-muted" tracking="wider" weight="bold">
            Your Learning Path
          </Subtitle>
          <h2 className="mt-5 font-heading text-[34px] font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[40px]">
            Begin with fundamentals. Then specialise.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/55 sm:text-base">
            A coherent path from shared understanding to focused study. The
            Foundation and two Master Classes are available in the current
            catalogue.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-col items-stretch justify-center gap-4 md:mt-16 md:flex-row md:items-center">
          <div className="flex min-h-[148px] flex-1 flex-col justify-center border border-gold px-7 py-6 shadow-[inset_3px_0_0_#c9a84c] md:max-w-[310px]">
            <span className="text-[11px] font-medium tracking-[0.16em] text-gold">
              01
            </span>
            <h3 className="mt-3 text-lg font-semibold text-white">
              Foundation
            </h3>
            <p className="mt-2 text-sm text-white/50">Shared starting point</p>
          </div>

          <PathArrow />

          <div className="flex flex-1 flex-col gap-4 md:max-w-[390px]">
            <div className="flex min-h-[132px] flex-col justify-center border border-white/15 bg-white/[0.025] px-7 py-5">
              <span className="text-[11px] font-medium tracking-[0.16em] text-gold">
                02A
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Bitcoin &amp; Monetary Systems
              </h3>
              <p className="mt-2 text-sm text-white/50">Master Class</p>
            </div>
            <div className="flex min-h-[132px] flex-col justify-center border border-white/15 bg-white/[0.025] px-7 py-5">
              <span className="text-[11px] font-medium tracking-[0.16em] text-gold">
                02B
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Frontier Tech
              </h3>
              <p className="mt-2 text-sm text-white/50">Master Class</p>
            </div>
          </div>

          <PathArrow />

          <div className="flex min-h-[148px] flex-1 flex-col items-center justify-center border border-gold px-7 py-6 text-center md:max-w-[270px]">
            <Award className="h-6 w-6 text-gold" strokeWidth={1.6} />
            <h3 className="mt-3 text-lg font-semibold text-gold">
              Certificate
            </h3>
            <p className="mt-2 text-sm text-white/50">After required study</p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {COURSES.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="group flex min-h-[340px] flex-col border border-white/15 bg-[#102844]/55 p-7 transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-gold hover:bg-[#102844] hover:shadow-[0_22px_50px_rgba(0,0,0,0.2)] focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:p-8"
            >
              <Subtitle
                size="xs"
                tone="white-muted"
                tracking="widest"
                weight="bold"
              >
                {course.subtitle}
              </Subtitle>
              <h3 className="mt-6 font-heading text-2xl font-medium tracking-[-0.03em] text-white">
                {course.title}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-white/55">
                {course.description}
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                {course.details.map((detail) => (
                  <p key={detail} className="text-xs leading-6 text-white/45">
                    {detail}
                  </p>
                ))}
              </div>

              <span className="mt-auto inline-flex items-center gap-3 pt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                Explore Course
                <span
                  aria-hidden
                  className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
