export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-[#FDF5E6] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#D4A017] mb-4">Maza Mediterranean Cuisine</h3>
            <p className="text-[#F5E6D3] leading-relaxed">
              Authentic Mediterranean flavors crafted with tradition and passion in the heart of Chandler, Arizona.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#D4A017] mb-4">Hours</h4>
            <div className="text-[#F5E6D3] space-y-1">
              <p>Monday – Saturday: 11am – 9pm</p>
              <p>Sunday: 12pm – 8pm</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[#D4A017] mb-4">Location</h4>
            <div className="text-[#F5E6D3] space-y-1">
              <p>1830 E Germann Rd</p>
              <p>Chandler, AZ 85286</p>
              <p className="mt-2">(480) 555-0192</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#D4A017]/30 mt-8 pt-8 text-center text-sm text-[#F5E6D3]/70">
          <p>© {new Date().getFullYear()} Maza Mediterranean Cuisine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}