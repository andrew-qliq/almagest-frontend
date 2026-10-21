import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CourseCheckout } from "@/components/checkout/course-checkout";
import {
  CHECKOUT_COURSES,
  getCheckoutCourse,
} from "@/lib/constants/checkout-courses";

interface CheckoutPageProps {
  params: Promise<{ course: string }>;
}

export function generateStaticParams() {
  return Object.keys(CHECKOUT_COURSES).map((course) => ({ course }));
}

export async function generateMetadata({
  params,
}: CheckoutPageProps): Promise<Metadata> {
  const { course } = await params;
  const checkoutCourse = getCheckoutCourse(course);

  if (!checkoutCourse) {
    return { title: "Checkout | Almagest Academy" };
  }

  return {
    title: `${checkoutCourse.shortTitle} Checkout | Almagest Academy`,
    description: `Complete your enrolment details for ${checkoutCourse.title}.`,
  };
}

export default function CheckoutPage({ params }: CheckoutPageProps) {
  return (
    <Suspense fallback={<CheckoutPageSkeleton />}>
      <CheckoutContent params={params} />
    </Suspense>
  );
}

async function CheckoutContent({ params }: CheckoutPageProps) {
  const { course } = await params;
  const checkoutCourse = getCheckoutCourse(course);

  if (!checkoutCourse) notFound();

  return <CourseCheckout course={checkoutCourse} />;
}

function CheckoutPageSkeleton() {
  return (
    <section className="bg-[#f8f5ef] pb-24 pt-12 sm:pt-16" aria-label="Loading checkout">
      <div className="mx-auto max-w-7xl animate-pulse px-6 lg:px-10">
        <div className="h-10 w-80 max-w-full bg-slate-200" />
        <div className="mt-4 h-5 w-[520px] max-w-full bg-slate-200/80" />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(400px,0.85fr)] xl:grid-cols-[minmax(0,1.4fr)_480px]">
          <div className="h-[680px] border border-slate-200 bg-white" />
          <div className="h-[350px] bg-navy/90" />
        </div>
      </div>
    </section>
  );
}
