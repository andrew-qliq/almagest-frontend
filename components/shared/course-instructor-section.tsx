import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

interface CourseInstructorSectionProps {
  eyebrow: string;
  title: string;
  name: string;
  role: string;
  biography: string;
  tags: string[];
  note: string;
  linkLabel: string;
  linkHref: string;
  imageCaption: string;
}

export function CourseInstructorSection(props: CourseInstructorSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <div className="relative flex min-h-[440px] items-center justify-center border-b-[3px] border-gold bg-[linear-gradient(145deg,#143657_0%,#0D1B2A_100%)] p-5 shadow-[0_20px_50px_rgba(13,27,42,0.13)] sm:min-h-[520px]">
              <div className="absolute inset-4 border border-gold/45" />
              <GraduationCap className="h-16 w-16 text-gold/75" strokeWidth={1.5} />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.08em] text-slate-500">
              {props.imageCaption}
            </p>
          </div>

          <div className="max-w-3xl">
            <Subtitle size="md" tone="muted" tracking="wider" weight="bold">
              {props.eyebrow}
            </Subtitle>
            <h2 className="mt-5 font-heading text-[36px] font-medium leading-[1.08] tracking-[-0.045em] text-navy sm:text-[46px] lg:text-[40px]">
              {props.title}
            </h2>
            <div className="mt-8 border-t border-navy pt-8">
              <h3 className="font-secondary text-[28px] text-navy sm:text-[32px]">
                {props.name}
              </h3>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9b781e]">
                {props.role}
              </p>
              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-slate-500 sm:text-base">
                {props.biography}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {props.tags.map((tag) => (
                  <span key={tag} className="border border-slate-300 px-4 py-2 text-xs text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-7 text-xs italic text-slate-500">{props.note}</p>
              <Link
                href={props.linkHref}
                className="group mt-8 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 transition-colors hover:text-gold"
              >
                {props.linkLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
