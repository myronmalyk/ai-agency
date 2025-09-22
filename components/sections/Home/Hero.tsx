
import Link from "next/link";
import Image from "next/image";

// ---- CONFIG ----
const PRIMARY_CTA = process.env.NEXT_PUBLIC_PRIMARY_CTA || ""; // route to your booking page

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* BG gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#8B5CF6] to-[#3B82F6] opacity-25 blur-3xl"/>
        <div className="absolute -bottom-40 right-10 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#60A5FA] via-[#8B5CF6] to-[#EC4899] opacity-20 blur-3xl"/>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-24 md:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Trusted by 500+ Companies
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl">
            AI Solutions That Drive <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Business Growth</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Transform your business with cutting‑edge AI. We design and deploy custom solutions that automate processes, enhance decision‑making and unlock new revenue streams.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href={PRIMARY_CTA} className="rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#8B5CF6] px-5 py-3 font-semibold shadow-lg shadow-indigo-900/30 transition hover:scale-[1.02]">Start Your AI Journey</Link>
            <Link href="#cases" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">View Case Studies</Link>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-left">
            {[{v:"500+",l:"Projects Delivered"},{v:"98%",l:"Client Satisfaction"},{v:"250M",l:"Data Points Processed"}].map((s,i)=> (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold">{s.v}</div>
                <div className="text-sm text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg hidden sm:block">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            {/* Replace with your hero image */}
            <div className="grid h-full w-full place-items-center text-white/60"><Image className="rounded-3xl" src="/img/hero.png" alt="Hero Image" layout="fill" objectFit="cover" /></div>
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
            <span className="font-semibold">2+ Years Experience</span>
          </div>
          <div className="absolute -bottom-6 right-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
            <span className="font-semibold">300+ Projects Completed</span>
          </div>
        </div>
      </div>
    </section>
  );
}