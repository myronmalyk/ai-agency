

export default function Benefits() {
  const items = [
    { icon: "🚀", title: "Rapid Deployment", desc: "Proven frameworks accelerate time‑to‑value 3× faster than industry average." },
    { icon: "🔒", title: "Security First", desc: "Data privacy, SOC2/ISO practices and zero‑retention vendor configs." },
    { icon: "📈", title: "Measurable ROI", desc: "Clear KPI baselines and dashboards to prove impact within 30 days." },
    { icon: "🤝", title: "Senior Team", desc: "15+ specialists across ML, data, and automation for end‑to‑end delivery." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h3 className="text-center text-3xl font-bold">What You Get</h3>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {items.map((b, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-2xl">{b.icon}</div>
            <div className="mt-2 font-semibold">{b.title}</div>
            <p className="mt-1 text-sm text-white/70">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}