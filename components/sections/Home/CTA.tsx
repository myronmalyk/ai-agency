

import Link from "next/link";

// ---- CONFIG ----
const AGENCY_PHONE = process.env.NEXT_PUBLIC_AGENCY_PHONE || "+1 (672) 208-8280"; // change if needed
const PRIMARY_CTA = process.env.NEXT_PUBLIC_PRIMARY_CTA || "/book"; // route to your booking page

export default function CTA() {
  return (
    <section id="contact" className="mx-auto mt-16 max-w-7xl px-4 sm:px-8 pb-10 flex justify-center">
      <div className="w-full max-w-3xl flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1F2A5A] via-[#3B2B7A] to-[#1F2A5A] p-8 md:p-10">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-col items-center text-center">
            <div className="text-sm text-white/80">Free Strategy Session</div>
            <h3 className="mt-1 text-2xl font-bold">Let&apos;s Build Your AI Advantage</h3>
            <p className="mt-2 text-white/70">Book a free call—average response time 24h.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href={PRIMARY_CTA} className="rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#8B5CF6] px-5 py-3 font-semibold shadow-lg shadow-indigo-900/30 transition hover:scale-[1.02]">Book a Free Call</Link>
              <a href={`tel:${AGENCY_PHONE.replace(/[^+\d]/g, "")}`} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">Call {AGENCY_PHONE}</a>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 w-full max-w-md">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-black/20 p-3"><div className="text-xl font-bold">30m</div><div className="text-white/60">Session</div></div>
                <div className="rounded-xl bg-black/20 p-3"><div className="text-xl font-bold">$0</div><div className="text-white/60">No Cost</div></div>
                <div className="rounded-xl bg-black/20 p-3"><div className="text-xl font-bold">24h</div><div className="text-white/60">Response</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}