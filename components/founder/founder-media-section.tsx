import Link from "next/link";
import { ArrowRight, Share2 } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const SOCIALS = ["LinkedIn: [Handle pending]", "X: [Handle pending]", "YouTube: [Channel pending]"];

export function FounderMediaSection() {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24">
      <SectionContainer className="grid gap-8 lg:grid-cols-2">
        <article className="border-t-4 border-emerald-700 bg-white px-8 py-10 shadow-[0_18px_45px_rgba(13,27,42,0.06)] sm:px-10">
          <Subtitle className="mb-8">Social channels</Subtitle>
          <ul className="space-y-5">
            {SOCIALS.map((social) => (
              <li key={social} className="flex items-center gap-4 text-base text-navy">
                <Share2 className="h-5 w-5 shrink-0 text-emerald-700" strokeWidth={1.8} />{social}
              </li>
            ))}
          </ul>
        </article>
        <article className="border-t-4 border-slate-500 bg-white px-8 py-10 shadow-[0_18px_45px_rgba(13,27,42,0.06)] sm:px-10">
          <Subtitle className="mb-8">Media &amp; speaking</Subtitle>
          <h2 className="text-2xl font-medium tracking-tight text-navy">No appearances listed yet.</h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
            Verified interviews, talks and press features will appear here once approved. For speaking enquiries,{" "}
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-blue-700 transition-colors hover:text-blue-900">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>.
          </p>
        </article>
      </SectionContainer>
    </section>
  );
}
