
import Link from "next/link";
import Image from "next/image";

// ---- CONFIG ----
const PRIMARY_CTA = process.env.NEXT_PUBLIC_PRIMARY_CTA || ""; // route to your booking page

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      {/* BG gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#8B5CF6] to-[#3B82F6] opacity-25 blur-3xl" />
        <div className="absolute -bottom-40 right-10 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#60A5FA] via-[#8B5CF6] to-[#EC4899] opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center mx-auto max-w-3xl lg:max-w-4xl px-4 sm:px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-base text-white/80">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Trusted by 500+ Companies
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-3xl lg:max-w-4xl mx-auto mb-6">
          AI Solutions That Drive{' '}
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
            Business Growth
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Transform your business with cutting‑edge AI. We design and deploy custom solutions that automate processes, enhance decision‑making and unlock new revenue streams.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center w-full mb-10">
          <Link
            href={PRIMARY_CTA}
            className="w-full sm:w-auto py-3.5 px-6 text-base rounded-xl bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#8B5CF6] font-semibold shadow-lg shadow-indigo-900/30 transition hover:scale-[1.02]"
          >
            Start Your AI Journey
          </Link>
          <Link
            href="#cases"
            className="w-full sm:w-auto py-3.5 px-6 text-base rounded-xl border border-white/15 bg-white/5 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            View Case Studies
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl mx-auto">
          {[
            { v: "500+", l: "Projects Delivered" },
            { v: "98%", l: "Client Satisfaction" },
            { v: "250M", l: "Data Points Processed" },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col items-center"
            >
              <div className="text-2xl font-bold">{s.v}</div>
              <div className="text-sm text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}