
import Link from "next/link";

// ---- CONFIG: tweak to your agency ----

const AGENCY_NAME = process.env.NEXT_PUBLIC_AGENCY_NAME || "Myron's Agency";
const PRIMARY_CTA = process.env.NEXT_PUBLIC_PRIMARY_CTA || "/book"; // route to your booking page

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] font-bold">M</div>
          <span className="text-lg font-semibold">{AGENCY_NAME}</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="#services" className="hover:text-white">Services</Link>
          <Link href="#cases" className="hover:text-white">Case Studies</Link>
          <Link href="#about" className="hover:text-white">About</Link>
          <Link href="#process" className="hover:text-white">Process</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </nav>
        <Link href={PRIMARY_CTA} className="rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#8B5CF6] px-4 py-2 text-sm font-semibold shadow-lg shadow-indigo-900/30">Get Started</Link>
      </div>
    </header>
  );
}