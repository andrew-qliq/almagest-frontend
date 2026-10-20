export const metadata = {
  title: "Statements | Almagest Academy",
};

export default function PartnerStatementsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Statements</h1>
      <p className="text-sm text-zinc-500">
        Monthly statements showing sales and commission. Download as PDF.
      </p>
      {/* Content placeholder — statements list with download links */}
      <div className="bg-white border rounded-xl p-5">
        <p className="text-sm text-zinc-400">No statements yet — placeholder.</p>
      </div>
    </div>
  );
}
