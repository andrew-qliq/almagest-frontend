import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaymentConfirmation } from "@/components/checkout/payment-confirmation";
import { CHECKOUT_COURSES, getCheckoutCourse } from "@/lib/constants/checkout-courses";

interface PaymentConfirmationPageProps {
  params: Promise<{ course: string }>;
}

export const metadata: Metadata = {
  title: "Enrolment Confirmed | Almagest Academy",
};

export function generateStaticParams() {
  return Object.keys(CHECKOUT_COURSES).map((course) => ({ course }));
}

export default async function PaymentConfirmationPage({ params }: PaymentConfirmationPageProps) {
  const { course: courseSlug } = await params;
  const course = getCheckoutCourse(courseSlug);

  if (!course) notFound();

  return <PaymentConfirmation course={course} />;
}
