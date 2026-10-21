"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = ["About You", "Your Audience", "Advertiser Permit", "Consent", "Submitted"];

interface ApplicationData {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  channel: string;
  audienceSize: string;
  profileUrl: string;
  audienceDescription: string;
  permitName: string;
  accuracyConsent: boolean;
  permitConsent: boolean;
  termsConsent: boolean;
}

const initialData: ApplicationData = {
  fullName: "",
  email: "",
  whatsapp: "",
  country: "United Arab Emirates",
  channel: "Instagram",
  audienceSize: "",
  profileUrl: "",
  audienceDescription: "",
  permitName: "",
  accuracyConsent: false,
  permitConsent: false,
  termsConsent: false,
};

const fieldClasses =
  "mt-2 h-12 w-full border border-slate-300 bg-white px-4 text-base text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold";

export function PartnerApplicationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ApplicationData>(initialData);

  function update<K extends keyof ApplicationData>(key: K, value: ApplicationData[K]) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function goForward() {
    setStep((current) => Math.min(current + 1, STEPS.length));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setStep((current) => Math.max(current - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[#f8f5ef] pb-24 pt-8 sm:pt-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Link
          href="/referral-partners"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600 transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Referral Partners
        </Link>

        <ol className="relative mx-auto mt-10 grid max-w-4xl grid-cols-5 before:absolute before:left-[10%] before:right-[10%] before:top-5 before:h-px before:bg-slate-200 sm:mt-12">
          {STEPS.map((label, index) => {
            const number = index + 1;
            const isReached = number <= step;
            return (
              <li key={label} className="relative z-10 flex flex-col items-center text-center">
                <span className={cn("flex h-10 w-10 items-center justify-center rounded-full border text-sm", isReached ? "border-gold bg-[#ead078] text-navy" : "border-slate-200 bg-white text-slate-500")}>{number}</span>
                <span className="mt-3 hidden text-xs text-slate-500 sm:block">{label}</span>
              </li>
            );
          })}
        </ol>

        <div className="mx-auto mt-14 max-w-4xl border-t-4 border-gold bg-white px-6 py-10 shadow-[0_18px_50px_rgba(13,27,42,0.07)] sm:px-12 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Step {step} of 5</p>
          {step === 1 && <AboutYouStep data={data} update={update} />}
          {step === 2 && <AudienceStep data={data} update={update} />}
          {step === 3 && <PermitStep data={data} update={update} />}
          {step === 4 && <ConsentStep data={data} update={update} />}
          {step === 5 && <SubmittedStep />}

          {step < 5 && (
            <div className="mt-10 flex justify-end gap-3">
              {step > 1 && <SecondaryButton onClick={goBack} />}
              <button
                type="button"
                onClick={goForward}
                disabled={step === 4 && !(data.accuracyConsent && data.permitConsent && data.termsConsent)}
                className="inline-flex h-12 items-center justify-center gap-4 bg-gold px-7 text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-[#d6b75c] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {step === 4 ? "Submit Application" : "Continue"}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

type Update = <K extends keyof ApplicationData>(key: K, value: ApplicationData[K]) => void;

function AboutYouStep({ data, update }: { data: ApplicationData; update: Update }) {
  return (
    <>
      <h1 className="mt-6 text-3xl font-medium tracking-tight text-navy sm:text-4xl">About You</h1>
      <div className="mt-9 grid gap-6 sm:grid-cols-2">
        <TextField label="Full name" value={data.fullName} onChange={(value) => update("fullName", value)} autoComplete="name" />
        <TextField label="Email" type="email" value={data.email} onChange={(value) => update("email", value)} autoComplete="email" />
        <TextField label="WhatsApp" type="tel" value={data.whatsapp} onChange={(value) => update("whatsapp", value)} autoComplete="tel" />
        <SelectField label="Country" value={data.country} onChange={(value) => update("country", value)} options={["United Arab Emirates", "Saudi Arabia", "Bahrain", "Kuwait", "Oman", "Qatar", "Other"]} />
      </div>
    </>
  );
}

function AudienceStep({ data, update }: { data: ApplicationData; update: Update }) {
  return (
    <>
      <h1 className="mt-6 text-3xl font-medium tracking-tight text-navy sm:text-4xl">Your Audience</h1>
      <div className="mt-9 grid gap-6 sm:grid-cols-2">
        <SelectField label="Primary channel" value={data.channel} onChange={(value) => update("channel", value)} options={["Instagram", "YouTube", "LinkedIn", "X", "Newsletter", "Community", "Other"]} />
        <TextField label="Audience size" value={data.audienceSize} onChange={(value) => update("audienceSize", value)} />
        <TextAreaField label="Profile or channel URL" value={data.profileUrl} onChange={(value) => update("profileUrl", value)} />
        <TextAreaField label="Tell us about your audience" value={data.audienceDescription} onChange={(value) => update("audienceDescription", value)} />
      </div>
    </>
  );
}

function PermitStep({ data, update }: { data: ApplicationData; update: Update }) {
  return (
    <>
      <h1 className="mt-6 text-3xl font-medium tracking-tight text-navy sm:text-4xl">Advertiser Permit</h1>
      <div className="mt-7 flex gap-5 border-l-4 border-amber-600 bg-amber-50 px-6 py-5 text-amber-950">
        <ShieldCheck className="h-6 w-6 shrink-0" />
        <div><p className="font-semibold">Permit verification</p><p className="mt-2 text-sm leading-6 text-amber-900/80">Your UAE advertiser permit must be verified before a commission relationship can begin.</p></div>
      </div>
      <label className="mt-7 flex min-h-[190px] cursor-pointer items-center justify-center border-2 border-dashed border-slate-300 bg-slate-50 px-6 text-center transition-colors hover:border-gold">
        <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="sr-only" onChange={(event) => update("permitName", event.target.files?.[0]?.name ?? "")} />
        <span><Upload className="mx-auto h-7 w-7 text-gold" /><span className="mt-4 block font-semibold text-navy">{data.permitName || "Drop permit file here"}</span><span className="mt-2 block text-sm text-slate-500">PDF, JPG or PNG · Prototype upload only</span></span>
      </label>
    </>
  );
}

function ConsentStep({ data, update }: { data: ApplicationData; update: Update }) {
  const items: Array<[keyof ApplicationData, string]> = [
    ["accuracyConsent", "I confirm the information supplied is accurate."],
    ["permitConsent", "I understand permit verification is required."],
    ["termsConsent", "I agree to the provisional partner terms."],
  ];
  return (
    <>
      <h1 className="mt-6 text-3xl font-medium tracking-tight text-navy sm:text-4xl">Consent</h1>
      <div className="mt-9 space-y-4">
        {items.map(([key, label]) => (
          <label key={key} className="flex cursor-pointer items-center gap-4 border border-slate-200 bg-[#f8f5ef] px-6 py-5 text-sm text-navy sm:text-base">
            <input type="checkbox" checked={Boolean(data[key])} onChange={(event) => update(key, event.target.checked)} className="h-5 w-5 accent-gold" />{label}
          </label>
        ))}
      </div>
    </>
  );
}

function SubmittedStep() {
  return (
    <div className="py-4 text-center sm:py-8">
      <h1 className="mt-6 text-left text-3xl font-medium tracking-tight text-navy sm:text-4xl">Submitted</h1>
      <div className="mx-auto mt-12 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-700 text-white"><Check className="h-8 w-8" /></div>
      <h2 className="mt-6 text-2xl font-medium text-navy">Application prepared.</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
        Your application will be reviewed along with your advertiser permit. Once your account is approved, you will receive an email with instructions to create and access your partner account.
      </p>
      <Link href="/referral-partners" className="mt-8 inline-flex h-12 items-center justify-center bg-gold px-7 text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-[#d6b75c]">Back to Referral Partners</Link>
    </div>
  );
}

function SecondaryButton({ onClick }: { onClick: () => void }) {
  return <button type="button" onClick={onClick} className="inline-flex h-12 items-center justify-center gap-2 border border-slate-300 px-5 text-[11px] font-bold uppercase tracking-[0.16em] text-navy hover:border-gold"><ArrowLeft className="h-4 w-4" />Back</button>;
}

function TextField({ label, value, onChange, type = "text", autoComplete }: { label: string; value: string; onChange: (value: string) => void; type?: string; autoComplete?: string }) {
  const id = `partner-${label.toLowerCase().replaceAll(" ", "-")}`;
  return <div><label htmlFor={id} className="text-sm font-semibold text-navy">{label}</label><input id={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} autoComplete={autoComplete} className={fieldClasses} /></div>;
}

function TextAreaField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  const id = `partner-${label.toLowerCase().replaceAll(" ", "-")}`;
  return <div><label htmlFor={id} className="text-sm font-semibold text-navy">{label}</label><textarea id={id} value={value} onChange={(event) => onChange(event.target.value)} rows={5} className="mt-2 w-full resize-y border border-slate-300 bg-white px-4 py-3 text-base text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold" /></div>;
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  const id = `partner-${label.toLowerCase().replaceAll(" ", "-")}`;
  return <div><label htmlFor={id} className="text-sm font-semibold text-navy">{label}</label><div className="relative"><select id={id} value={value} onChange={(event) => onChange(event.target.value)} className={`${fieldClasses} appearance-none pr-12`}>{options.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-slate-500" /></div></div>;
}
