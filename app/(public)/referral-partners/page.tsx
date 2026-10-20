export const metadata = {
  title: "Referral Partners | Almagest Academy",
};

export default function ReferralPartnersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Referral Partner Programme</h1>
      <p className="mt-4 text-zinc-600 max-w-2xl">
        Earn commission by referring students to Almagest Academy. Open to influencers and
        content creators who hold a valid UAE advertiser permit.
      </p>
      <a href="/referral-partners/apply" className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
        Apply to Become a Partner
      </a>
    </div>
  );
}
