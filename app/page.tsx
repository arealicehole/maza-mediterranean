import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A1F1E] pt-20 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="logo-lockup mb-6">
            <span className="logo-wordmark">MAZA</span>
            <span className="logo-subtitle">Mediterranean Cuisine</span>
          </div>

          <p className="text-2xl md:text-3xl text-[#F5F1E8] max-w-3xl mx-auto leading-tight mb-10">
            Big portions. Real ingredients.<br />Honest prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="inline-block bg-[#D3AB5E] hover:bg-[#A87C3D] text-[#0A1F1E] font-semibold px-10 py-4 rounded transition-colors text-lg tracking-wide"
            >
              View the Menu
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-[#D3AB5E] text-[#D3AB5E] hover:bg-[#D3AB5E] hover:text-[#0A1F1E] font-semibold px-10 py-4 rounded transition-colors text-lg tracking-wide"
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#0E0E0E] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Made In-House",
              text: "Everything from our marinades to our sauces is made fresh daily. No shortcuts.",
            },
            {
              title: "Generous Portions",
              text: "Plates come with two kebabs, rice, salad, hummus, and tahini. You leave full.",
            },
            {
              title: "Real Ingredients",
              text: "Quality olive oil, fresh spices, and real food — never frozen, never processed.",
            },
          ].map((item, i) => (
            <div key={i} className="card p-8 rounded-lg text-center">
              <h3 className="font-display text-2xl text-[#D3AB5E] mb-4 tracking-wide">{item.title}</h3>
              <p className="text-[#F5F1E8]/80">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0A1F1E] py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-4xl text-[#D3AB5E] tracking-wide mb-4">Open Daily, 10am–8pm</h2>
          <p className="text-[#F5F1E8]/80 mb-8 text-lg">Dine in or grab it to go. We’re here every day.</p>
          <Link
            href="/menu"
            className="inline-block bg-[#D3AB5E] hover:bg-[#A87C3D] text-[#0A1F1E] font-semibold px-10 py-4 rounded text-lg tracking-wide"
          >
            See the Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
