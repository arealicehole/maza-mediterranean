import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#2C1810] text-[#FDF5E6] py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#D4A017] mb-6">
            Maza Mediterranean
          </h1>
          <p className="text-xl md:text-2xl text-[#F5E6D3] mb-8 leading-relaxed">
            Authentic Mediterranean flavors crafted with tradition and passion,<br className="hidden md:block" />
            served in the heart of Chandler, Arizona.
          </p>
          <Link
            href="/menu"
            className="inline-block bg-[#D4A017] hover:bg-[#B8860B] text-[#2C1810] font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
          >
            View Our Menu
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#8B4513] mb-6">
            Welcome to Maza
          </h2>
          <p className="text-[#2C1810] text-lg leading-relaxed">
            Since opening our doors, Maza has been a gathering place for families, friends, and food lovers who share a passion for Mediterranean cuisine. We bring together time-honored recipes passed down through generations, fresh ingredients sourced daily, and the warm hospitality that defines the Mediterranean table.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-[#F5E6D3] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-serif text-xl font-bold text-[#8B4513] mb-3">Authentic Recipes</h3>
              <p className="text-[#2C1810]">
                Traditional dishes from Greece, Turkey, Lebanon, and beyond, prepared the way they were meant to be.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-serif text-xl font-bold text-[#8B4513] mb-3">Fresh Ingredients</h3>
              <p className="text-[#2C1810]">
                We source the finest olive oil, spices, and produce daily to ensure every dish is bursting with flavor.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="font-serif text-xl font-bold text-[#8B4513] mb-3">Family Atmosphere</h3>
              <p className="text-[#2C1810]">
                A warm, welcoming space where every guest feels like part of the family from the moment they walk in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#8B4513] mb-6">
            Ready to Experience Maza?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-[#8B4513] hover:bg-[#6B3410] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              Explore Menu
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-[#F5E6D3] text-[#8B4513] font-semibold px-8 py-4 rounded-lg border-2 border-[#8B4513] transition-colors duration-200 text-lg"
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}