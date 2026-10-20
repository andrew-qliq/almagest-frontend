import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const COMPARISON_COURSES = [
  {
    eyebrow: "The Essential Starting Point",
    title: "Foundation",
    description:
      "A rigorous introduction to money, systems, incentives and long-term thinking.",
    details: ["Self-paced video", "Member community"],
    href: "/courses/foundation",
  },
  {
    eyebrow: "Master Class",
    title: "Bitcoin Mastery",
    description:
      "Understand Bitcoin in its technological, monetary and macroeconomic context.",
    details: ["Advanced study", "Price to be confirmed"],
    href: "/courses/master-class/bitcoin-crypto",
  },
] as const;

export function CourseComparisonSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <header>
          <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
            Enrollment Comparison
          </Subtitle>
          <h2 className="mt-6 font-heading text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[42px]">
            Compare the courses
          </h2>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {COMPARISON_COURSES.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="group flex min-h-[330px] transform-gpu flex-col border border-slate-200 bg-white p-7 shadow-[0_12px_34px_rgba(13,27,42,0.04)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2.5 hover:shadow-[0_28px_60px_rgba(13,27,42,0.16)] focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:p-9"
            >
              <Subtitle size="xs" tone="muted" tracking="widest" weight="bold">
                {course.eyebrow}
              </Subtitle>
              <h3 className="mt-2 font-heading text-[24px] font-medium leading-tight tracking-[-0.03em] text-navy">
                {course.title}
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-slate-500">
                {course.description}
              </p>

              <div className="mt-7 border-t border-slate-200 pt-5">
                {course.details.map((detail) => (
                  <p key={detail} className="text-sm leading-7 text-slate-500">
                    {detail}
                  </p>
                ))}
              </div>

              <span className="mt-auto inline-flex items-center gap-3 pt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                Explore Course
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </span>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
