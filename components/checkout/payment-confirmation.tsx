import Link from "next/link";
import { Award, CheckCircle2 } from "lucide-react";
import type { CheckoutCourse } from "@/lib/constants/checkout-courses";
import { formatCheckoutPrice } from "@/lib/constants/checkout-courses";

export function PaymentConfirmation({ course }: { course: CheckoutCourse }) {
  const amount = course.price === null ? "Price pending" : formatCheckoutPrice(course);

  return (
    <section className="bg-[#f8f5ef] px-6 pb-24 pt-12 sm:pt-16 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f5dd8c] via-gold to-[#b78c1c] text-navy shadow-[0_10px_30px_rgba(201,168,76,0.28)]">
          <Award className="h-7 w-7" strokeWidth={1.8} aria-hidden />
        </span>
        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
          Enrolment confirmed
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-medium tracking-tight text-navy sm:text-4xl">
          Your next chapter begins with understanding.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
          Your order is confirmed. A receipt and access instructions will be sent to your email.
        </p>

        <dl className="mt-10 grid border border-slate-200 bg-white text-left shadow-[0_18px_45px_rgba(13,27,42,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          <ConfirmationDetail label="Order reference" value="ALM-DEMO-2026" />
          <ConfirmationDetail label="Course" value={course.title} />
          <ConfirmationDetail label="Amount" value={amount} />
          <ConfirmationDetail label="Payment method" value="Prototype card" />
        </dl>

        <div className="mt-8 flex items-start gap-4 border-l-4 border-[#178764] bg-[#e8f4ef] px-6 py-5 text-left">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#178764]" aria-hidden />
          <div>
            <h2 className="text-sm font-semibold text-[#12644d]">Your course is ready</h2>
            <p className="mt-1 text-xs leading-5 text-[#477368]">
              Continue to the member area to begin your learning experience.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/members/login"
            className="inline-flex h-12 items-center justify-center bg-gold px-8 text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-[#d6b75c]"
          >
            Go to my courses
          </Link>
          <Link
            href="/community"
            className="inline-flex h-12 items-center justify-center bg-blue-700 px-8 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-blue-600"
          >
            Join the community
          </Link>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Receipt confirmation will be delivered by email.
        </p>
      </div>
    </section>
  );
}

function ConfirmationDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-slate-200 px-6 py-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
      <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</dt>
      <dd className="mt-2 text-sm font-semibold leading-5 text-navy">{value}</dd>
    </div>
  );
}
