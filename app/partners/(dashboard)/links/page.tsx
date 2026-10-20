export const metadata = {
  title: "My Links | Almagest Academy",
};

export default function PartnerLinksPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">My Links</h1>
      <p className="text-sm text-zinc-500">
        Your referral code, your short link, and a tool to add your code to any page on the site.
      </p>

      {/* Referral code card */}
      <div className="bg-white border rounded-xl p-5 space-y-4">
        <div>
          <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">Referral Code</p>
          <p className="font-mono text-lg">— placeholder —</p>
        </div>
        <div>
          <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">Short Link</p>
          <p className="font-mono text-sm text-zinc-600">— placeholder —</p>
        </div>
      </div>

      {/* Link builder placeholder */}
      <div className="bg-white border rounded-xl p-5">
        <p className="font-medium mb-2">Add Your Code to Any Page</p>
        <p className="text-sm text-zinc-500">Link builder tool placeholder — to be connected.</p>
      </div>
    </div>
  );
}
