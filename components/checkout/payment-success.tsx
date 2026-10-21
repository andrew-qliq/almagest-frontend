import Link from "next/link";
import { Check } from "lucide-react";
import type { CheckoutCourse } from "@/lib/constants/checkout-courses";

export function PaymentSuccess({ course }: { course: CheckoutCourse }) {
  return (
    <section className="bg-[#f8f5ef] px-6 pb-24 pt-12 sm:pt-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
          Secure enrolment
        </p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-navy sm:text-4xl">
          Payment complete.
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
          Your prototype payment for {course.title} has been approved.
        </p>

        <div className="mt-10 flex min-h-[370px] items-center justify-center border border-slate-200 bg-white px-6 py-16 shadow-[0_22px_55px_rgba(13,27,42,0.08)]">
          <div className="max-w-lg text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#178764] text-white">
              <Check className="h-7 w-7" strokeWidth={2} aria-hidden />
            </span>
            <h2 className="mt-7 text-xl font-medium text-navy">Prototype payment approved.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Continue to view your order and course-access confirmation.
            </p>
            <Link
              href={`/checkout/${course.slug}/confirmation`}
              className="mt-7 inline-flex h-12 items-center justify-center bg-gold px-8 text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-[#d6b75c]"
            >
              View confirmation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
