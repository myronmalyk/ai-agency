
import BookingForm from "./BookinForm";

export default function BookingSection() {

    const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "";
    const AGENCY_PHONE = process.env.NEXT_PUBLIC_AGENCY_PHONE || "";

  return (
    <section id="book" className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <h2 className="text-2xl font-bold md:text-3xl">Pick a Time</h2>
        <p className="mt-2 text-white/70">Lock in a 30‑minute strategy session. We’ll confirm by email right away.</p>
        {CALENDLY_URL ? (
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {/* Calendly embed */}
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0b1020&text_color=ffffff&primary_color=7c3aed`}
              className="h-[720px] w-full"
              title="Book a call"
            />
          </div>
        ) : (
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">Set <code>CALENDLY_URL</code> in this file to enable the embedded calendar.</div>
        )}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <h3 className="text-xl font-semibold">Or Send a Request</h3>
        <p className="mt-2 text-white/70">Prefer email? Fill this form and we’ll propose 2–3 slots within 24h.</p>
        <BookingForm />
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 5-9 12-9 12S3 15 3 10a9 9 0 1118 0z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="10" r="3" fill="currentColor"/></svg>
          <div>
            <div className="text-sm">Vancouver, BC · Remote worldwide</div>
            <a className="text-sm text-indigo-300 underline-offset-2 hover:underline" href={`tel:${AGENCY_PHONE.replace(/[^+\d]/g, "")}`}>Call {AGENCY_PHONE}</a>
          </div>
        </div>
      </div>
    </section>
  );
}