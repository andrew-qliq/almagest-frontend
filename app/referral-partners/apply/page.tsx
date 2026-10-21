import type { Metadata } from "next";
import { PartnerApplicationForm } from "@/components/referral-partners/partner-application-form";

export const metadata: Metadata = {
  title: "Partner Application | Almagest Academy",
  description:
    "Apply to become an Almagest Academy referral partner through the five-step application process.",
};

export default function PartnerApplicationPage() {
  return <PartnerApplicationForm />;
}
