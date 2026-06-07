import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F1E] border-t border-[rgba(211,171,94,0.2)]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link href="/" className="logo-lockup">
            <span className="logo-wordmark">MAZA</span>
            <span className="logo-subtitle">Mediterranean Cuisine</span>
          </Link>

          <p className="text-[#B8B8B8] max-w-md">
            Big portions. Real ingredients. Honest prices.
          </p>

          <div className="text-sm text-[#B8B8B8] space-y-1">
            <p>3491 W Frye Rd, Suite 2 · Chandler, AZ 85226</p>
            <p>(480) 534-6550</p>
            <p className="pt-2">Open daily 10am – 8pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
