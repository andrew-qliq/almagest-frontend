"use client";

import { useState } from "react";
import { CalendarDays, Check, ChevronDown, CircleDollarSign, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import type { CheckoutCourse } from "@/lib/constants/checkout-courses";
import { formatCheckoutPrice } from "@/lib/constants/checkout-courses";
import { cn } from "@/lib/utils";

interface CourseCheckoutProps {
  course: CheckoutCourse;
}

const fieldClasses =
  "mt-2 h-12 w-full border border-slate-300 bg-white px-4 text-base text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold";

export function CourseCheckout({ course }: CourseCheckoutProps) {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "later">("card");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const formattedPrice = formatCheckoutPrice(course);
  const total = course.price === null ? "To be confirmed" : formattedPrice;

  return (
    <section className="bg-[#f8f5ef] pb-24 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h1 className="text-3xl font-medium tracking-tight text-navy sm:text-4xl">
          Complete your details.
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
          No payment will be processed. Pricing and provider information remain pending approval.
        </p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(400px,0.85fr)] xl:grid-cols-[minmax(0,1.4fr)_480px]">
          <form className="border border-slate-200 bg-white p-7 sm:p-10">
            <h2 className="text-xl font-medium text-navy">1. Buyer details</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <TextField label="Full name" autoComplete="name" />
              <TextField label="Email" type="email" autoComplete="email" />
              <TextField label="WhatsApp" type="tel" autoComplete="tel" />
              <div>
                <label htmlFor="checkout-country" className="text-sm font-semibold text-navy">Country</label>
                <div className="relative">
                  <select id="checkout-country" name="country" defaultValue="United Arab Emirates" className={`${fieldClasses} appearance-none pr-12`}>
                    <option>United Arab Emirates</option>
                    <option>Saudi Arabia</option>
                    <option>Bahrain</option>
                    <option>Kuwait</option>
                    <option>Oman</option>
                    <option>Qatar</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-slate-500" />
                </div>
              </div>
            </div>

            <h2 className="mt-10 text-xl font-medium text-navy">2. Payment method</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <PaymentOption active={paymentMethod === "card"} onClick={() => setPaymentMethod("card")} icon={CircleDollarSign} title="Card" description="Secure card payment" />
              <PaymentOption active={paymentMethod === "later"} onClick={() => setPaymentMethod("later")} icon={CalendarDays} title="Buy Now, Pay Later" description="[Provider pending]" />
            </div>

            {paymentMethod === "card" ? (
              <div className="mt-7">
                <TextField label="Card number" placeholder="•••• •••• •••• ••••" inputMode="numeric" />
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <TextField label="Expiry" placeholder="MM / YY" inputMode="numeric" />
                  <TextField label="Security code" placeholder="CVC" inputMode="numeric" />
                </div>
              </div>
            ) : (
              <div className="mt-7 border border-slate-200 bg-[#f8f5ef] px-6 py-5 text-sm leading-6 text-slate-500">
                Instalment provider and payment terms will be displayed here once approved.
              </div>
            )}

            <label className="mt-7 flex cursor-pointer items-start gap-4 border border-slate-200 bg-[#f8f5ef] px-5 py-5 text-sm leading-6 text-navy">
              <input type="checkbox" checked={acceptedTerms} onChange={(event) => setAcceptedTerms(event.target.checked)} className="mt-0.5 h-5 w-5 accent-gold" />
              I agree to the provisional Terms &amp; Refunds and understand this is a prototype.
            </label>
            <button
              type="button"
              disabled={!acceptedTerms}
              onClick={() => router.push(`/checkout/${course.slug}/success`)}
              className="mt-6 h-12 w-full bg-gold px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-[#d6b75c] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Complete Prototype Payment
            </button>
          </form>

          <OrderSummary course={course} formattedPrice={formattedPrice} total={total} />
        </div>
      </div>
    </section>
  );
}

function OrderSummary({ course, formattedPrice, total }: { course: CheckoutCourse; formattedPrice: string; total: string }) {
  return (
    <aside className="static w-full self-start bg-navy p-8 text-white shadow-[0_24px_55px_rgba(13,27,42,0.18)] sm:p-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/55">Order summary</p>
      <h2 className="mt-5 text-xl font-medium leading-snug">{course.title}</h2>
      <div className="mt-7 border-t border-white/15 pt-6">
        <div className="flex items-center justify-between gap-6 text-sm">
          <span className="text-white/70">Course access</span>
          <span className="font-semibold">{formattedPrice}</span>
        </div>
        <div className="mt-6 flex gap-2">
          <input aria-label="Promo or referral code" placeholder="Promo or referral code" className="h-11 min-w-0 flex-1 bg-white px-4 text-sm text-navy outline-none focus:ring-2 focus:ring-gold" />
          <button type="button" className="bg-blue-700 px-4 text-[10px] font-bold uppercase tracking-wider transition-colors hover:bg-blue-600">Apply</button>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-6 text-gold">
        <span>Total</span><span className="font-semibold">{total}</span>
      </div>
      <div className="mt-7 flex items-start gap-3 text-xs leading-5 text-white/55">
        <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0" />
        <p>Secure prototype checkout<br />Refund terms: [{course.refundTerms}]</p>
      </div>
    </aside>
  );
}

function PaymentOption({ active, onClick, icon: Icon, title, description }: { active: boolean; onClick: () => void; icon: typeof Check; title: string; description: string }) {
  return (
    <button type="button" onClick={onClick} className={cn("flex min-h-20 items-center gap-4 border px-5 text-left transition-colors", active ? "border-blue-700 bg-blue-50" : "border-slate-200 bg-white hover:border-gold")}>
      <Icon className="h-5 w-5 shrink-0 text-navy" />
      <span><span className="block text-sm font-semibold text-navy">{title}</span><span className="mt-1 block text-xs text-slate-500">{description}</span></span>
    </button>
  );
}

function TextField({ label, type = "text", autoComplete, placeholder, inputMode }: { label: string; type?: string; autoComplete?: string; placeholder?: string; inputMode?: "numeric" }) {
  const id = `checkout-${label.toLowerCase().replaceAll(" ", "-")}`;
  return <div className={label === "Card number" ? "sm:col-span-2" : undefined}><label htmlFor={id} className="text-sm font-semibold text-navy">{label}</label><input id={id} name={id} type={type} autoComplete={autoComplete} placeholder={placeholder} inputMode={inputMode} className={fieldClasses} /></div>;
}
