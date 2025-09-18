

export default function FooterCTA() {

    const phone = process.env.NEXT_PUBLIC_AGENCY_PHONE || "";

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-16">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1F2A5A] via-[#3B2B7A] to-[#1F2A5A] p-8 md:p-10">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <div className="text-sm text-white/80">Strategy Session</div>
            <h4 className="mt-1 text-2xl font-bold">Let’s Build Your AI Advantage</h4>
            <p className="mt-2 text-white/70">Book a free call or message us—average response time 24h.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#book" className="rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#8B5CF6] px-5 py-3 font-semibold shadow-lg shadow-indigo-900/30 transition hover:scale-[1.02]">Book Now</a>
              <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">Call {phone}</a>
            </div>
          </div>
          <div className="justify-self-end">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
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
