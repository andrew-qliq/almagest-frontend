import { CalendarDays, ChevronDown, Globe2, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Subtitle } from "@/components/shared/subtitle";

const CALL_DETAILS = [
  { label: "Response time: [Pending]", icon: CalendarDays },
  { label: "Dubai, UAE", icon: Globe2 },
  { label: "Education only", icon: ShieldCheck },
];

const fieldClasses =
  "mt-2 h-12 w-full border border-slate-300 bg-white px-4 text-base text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold";

export function DiscoveryCallFormSection() {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-24">
      <SectionContainer className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Subtitle size="md" className="mb-7">What to expect</Subtitle>
          <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight text-navy sm:text-4xl">
            A thoughtful, practical conversation.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
            No aggressive sales scripts. No artificial scarcity. Just enough context to help you decide responsibly.
          </p>
          <ul className="mt-10 space-y-5">
            {CALL_DETAILS.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-4 text-base text-slate-500">
                <Icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.8} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <form className="border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(13,27,42,0.06)] sm:p-10">
          <div>
            <label htmlFor="call-name" className="text-sm font-semibold text-navy">Name</label>
            <input id="call-name" name="name" type="text" autoComplete="name" className={fieldClasses} />
          </div>
          <div className="mt-6">
            <label htmlFor="call-email" className="text-sm font-semibold text-navy">Email</label>
            <input id="call-email" name="email" type="email" autoComplete="email" className={fieldClasses} />
          </div>
          <div className="mt-6">
            <label htmlFor="call-whatsapp" className="text-sm font-semibold text-navy">WhatsApp</label>
            <input id="call-whatsapp" name="whatsapp" type="tel" autoComplete="tel" className={fieldClasses} />
          </div>
          <div className="mt-6">
            <label htmlFor="call-track" className="text-sm font-semibold text-navy">Track</label>
            <div className="relative">
              <select id="call-track" name="track" defaultValue="foundation" className={`${fieldClasses} appearance-none pr-12`}>
                <option value="foundation">Foundation</option>
                <option value="bitcoin">Bitcoin &amp; Monetary Systems</option>
                <option value="learning-path">Full learning path</option>
              </select>
              <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-slate-500" />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="call-outcome" className="text-sm font-semibold text-navy">Desired outcome</label>
            <textarea id="call-outcome" name="outcome" rows={6} className="mt-2 w-full resize-y border border-slate-300 bg-white px-4 py-3 text-base text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold" />
          </div>
          <button type="button" className="mt-6 h-12 w-full bg-gold px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-[#d6b75c] hover:shadow-[0_8px_22px_rgba(201,168,76,0.3)]">
            Continue to Calendar
          </button>
          <p className="mt-5 text-sm text-slate-500">Prototype only. This form does not transmit data.</p>
        </form>
      </SectionContainer>
    </section>
  );
}
