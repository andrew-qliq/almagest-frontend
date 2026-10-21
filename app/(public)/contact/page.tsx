import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/contact/contact-hero-section";
import { ContactFormSection } from "@/components/contact/contact-form-section";

export const metadata: Metadata = {
  title: "Contact | Almagest Academy",
  description:
    "Contact Almagest Academy about courses, partnerships, data or technical enquiries.",
  openGraph: {
    title: "Contact | Almagest Academy",
    description:
      "Course, partner, data and technical enquiries are routed to the right team.",
    images: [{ url: "/images/insights/hero-banner.jpg" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
    </>
  );
}
