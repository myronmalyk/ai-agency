

export default function StatsBar(){
  const stats = [
    {label:"Discovery Phase", value:"2–4 weeks"},
    {label:"Design & Planning", value:"3–6 weeks"},
    {label:"Development", value:"8–16 weeks"},
    {label:"Support & Optimization", value:"Ongoing"},
  ];
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {stats.map((s,i)=> (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-sm text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}