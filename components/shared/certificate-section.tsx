import { Award, Check } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";
import { cn } from "@/lib/utils";

interface CertificateSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  points?: readonly string[];
  tone?: "light" | "navy";
  courseTitle?: string;
}

const DEFAULT_POINTS = [
  "Issued with a verifiable record",
  "Criteria: [Pending academic approval]",
  "Prerequisites: [Pending academic approval]",
] as const;

export function CertificateSection({
  eyebrow = "The Certificate",
  title = "A meaningful record of completed study.",
  description = "Awarded on completion of a course, as a record of study and not a professional qualification.",
  points = DEFAULT_POINTS,
  tone = "light",
  courseTitle = "[Course title]",
}: CertificateSectionProps) {
  const isNavy = tone === "navy";

  return (
    <section
      className={cn(
        "py-20 sm:py-24 lg:py-28",
        isNavy ? "bg-navy text-white" : "bg-[#f8f5ef] text-navy",
      )}
    >
      <SectionContainer>
        <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="max-w-xl">
            <Subtitle size="md" tone="gold" tracking="wider" weight="bold">
              {eyebrow}
            </Subtitle>
            <h2 className="mt-5 font-heading text-[38px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[46px] lg:text-[40px]">
              {title}
            </h2>
            <p
              className={cn(
                "mt-7 max-w-lg text-[15px] leading-8 sm:text-base",
                isNavy ? "text-white/55" : "text-slate-500",
              )}
            >
              {description}
            </p>
            <ul className="mt-8 space-y-5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 text-[15px] sm:text-base"
                >
                  <Check
                    className={cn(
                      "mt-0.5 h-5 w-5 shrink-0",
                      isNavy ? "text-gold" : "text-emerald-700",
                    )}
                    strokeWidth={1.8}
                  />
                  <span className={isNavy ? "text-white/80" : "text-navy/85"}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group mx-auto w-full max-w-[590px] py-4 lg:justify-self-end">
            <div className="relative overflow-hidden will-change-transform transform-gpu rotate-[2.75deg] border border-gold bg-[linear-gradient(135deg,#fff_0%,#fffdfa_72%,#fbf5e5_100%)] p-3 shadow-[0_22px_48px_rgba(116,85,18,0.12)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-0 group-hover:shadow-[0_30px_65px_rgba(116,85,18,0.19)] motion-reduce:rotate-0 motion-reduce:transition-none">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-1/2 top-0 z-20 h-full w-1/3 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,239,184,0.32),transparent)] opacity-0 transition-[transform,opacity] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[480%] group-hover:opacity-100 motion-reduce:hidden"
              />
              <div className="relative flex min-h-[320px] flex-col items-center border border-gold bg-[radial-gradient(circle_at_82%_18%,rgba(201,168,76,0.05),transparent_38%)] px-6 py-7 text-center sm:min-h-[340px] sm:px-9">
                <Award className="h-12 w-12 text-gold" strokeWidth={1.8} />
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#9b781e]">
                  Quantum Leap Academy
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">
                  Certificate of Completion
                </p>
                <p className="mt-8 font-secondary text-[30px] text-navy sm:text-[35px]">
                  [Learner name]
                </p>
                <p className="mt-4 text-sm italic text-slate-500">
                  has completed
                </p>
                <p className="mt-3 font-secondary text-[20px] text-navy sm:text-[23px]">
                  {courseTitle}
                </p>
                <div className="mt-auto flex w-full justify-between border-t border-slate-200 pt-5 text-[11px] tracking-[0.08em] text-slate-500">
                  <span>[Date]</span>
                  <span>[Certificate ID]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
