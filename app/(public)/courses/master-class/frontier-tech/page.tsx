export const metadata = {
  title: "Master Class: Frontier Tech | Almagest Academy",
};

export default function FrontierTechPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Master Class: Frontier Tech</h1>
      <p className="mt-4 text-zinc-600 max-w-2xl">
        Second specialisation covering AI, web3 and other emerging technologies.
        Buy online or book a call first.
      </p>
      {/* Content placeholder — curriculum, price, buy/apply CTAs */}
      <div className="mt-8 flex gap-4">
        <a href="/checkout/master-class" className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
          Enrol Now
        </a>
        <a href="/apply" className="border px-6 py-3 rounded-full text-sm font-medium">
          Book a Call First
        </a>
      </div>
    </div>
  );
}
