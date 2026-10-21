import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaymentSuccess } from "@/components/checkout/payment-success";
import { CHECKOUT_COURSES, getCheckoutCourse } from "@/lib/constants/checkout-courses";

interface PaymentSuccessPageProps {
  params: Promise<{ course: string }>;
}

export const metadata: Metadata = {
  title: "Payment Complete | Almagest Academy",
};

export function generateStaticParams() {
  return Object.keys(CHECKOUT_COURSES).map((course) => ({ course }));
}

export default async function PaymentSuccessPage({ params }: PaymentSuccessPageProps) {
  const { course: courseSlug } = await params;
  const course = getCheckoutCourse(courseSlug);

  if (!course) notFound();

  return <PaymentSuccess course={course} />;
}
