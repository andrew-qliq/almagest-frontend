import type { Metadata } from "next";
import { DiscoveryCallHeroSection } from "@/components/discovery-call/discovery-call-hero-section";
import { DiscoveryCallFormSection } from "@/components/discovery-call/discovery-call-form-section";

export const metadata: Metadata = {
  title: "Book a Discovery Call | Almagest Academy",
  description:
    "Book a focused conversation with Almagest Academy before choosing your next step.",
  openGraph: {
    title: "Book a Discovery Call | Almagest Academy",
    description:
      "Understand the Academy, ask questions and choose the next step that fits.",
    images: [{ url: "/images/home/hero-banner.jpg" }],
  },
};

export default function BookACallPage() {
  return (
    <>
      <DiscoveryCallHeroSection />
      <DiscoveryCallFormSection />
    </>
  );
}
