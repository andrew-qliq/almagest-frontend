import Link from "next/link";
import { LoginPage } from "@/components/auth/login-page";

export const metadata = {
  title: "Partner Login | Almagest Academy",
};

export default function PartnersLoginPage() {
  return (
    <LoginPage
      portalLabel="Partner Login"
      footer={
        <p>
          No account yet? Partner access is created only after applying.{" "}
          <Link
            href="/referral-partners/apply"
            className="text-white/70 underline underline-offset-4 hover:text-gold"
          >
            Become a partner
          </Link>
        </p>
      }
    />
  );
}
