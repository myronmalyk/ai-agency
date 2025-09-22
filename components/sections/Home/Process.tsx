

import SectionTitle from "@/components/ui/SectionTitle";

export default function Process() {
  const steps = [
    { n: "01", title: "Discover", desc: "We analyze your business, systems and goals to identify high‑ROI opportunities." },
    { n: "02", title: "Design", desc: "We craft a clear solution design, success metrics and a delivery plan." },
    { n: "03", title: "Build", desc: "We develop, train and integrate with your stack, shipping value in sprints." },
    { n: "04", title: "Scale", desc: "We deploy to production, monitor KPIs and optimize performance." },
  ];
  return (
    <section id="process" className="mt-16 flex flex-col items-center px-4 sm:px-8">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <SectionTitle kicker="Our Proven Process" title={<span>From idea to impact</span>} />
        <div className="mx-auto mt-6 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col items-center text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-sm">{s.n}</div>
              <h4 className="mt-4 text-lg font-semibold">{s.title}</h4>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}