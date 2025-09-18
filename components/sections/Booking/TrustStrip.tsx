

export default function TrustStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-4">
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/70">
        {[
          "Trusted by 500+ companies",
          "ISO 27001-ready security",
          "$250k+ client value generated",
          "Partnerships: AWS · Google · Microsoft",
        ].map((txt, i) => (
          <span key={i} className="text-sm">{txt}</span>
        ))}
      </div>
    </section>
  );
}