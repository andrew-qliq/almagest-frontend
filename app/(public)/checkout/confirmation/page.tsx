export const metadata = {
  title: "Order Confirmed | Almagest Academy",
};

export default function OrderConfirmationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-3xl font-bold tracking-tight">You&apos;re enrolled!</h1>
      <p className="mt-4 text-zinc-600">
        Your purchase is confirmed. Head to your member area to start learning.
      </p>
      <a href="/members/dashboard" className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
        Go to My Courses
      </a>
    </div>
  );
}
