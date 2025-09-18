

import SectionTitle from "@/components/ui/SectionTitle";

export default function CaseStudies(){
  const cases = [
    {title:"E‑commerce Revenue Optimization", company:"RetailTech Inc.", tags:["Machine Learning","Personalization","E‑commerce"], stats:[{k:"Revenue Increase",v:"145%"},{k:"Customer Retention",v:"89%"},{k:"ROI",v:"320%"}]},
    {title:"Healthcare Diagnostic Assistant", company:"MedCore Systems", tags:["Computer Vision","Healthcare","Deep Learning"], stats:[{k:"Accuracy Rate",v:"95%"},{k:"Patients Helped",v:"50K+"},{k:"Cost Reduction",v:"60%"}]},
    {title:"Supply Chain Optimization", company:"LogisticsPro", tags:["Predictive Analytics","Supply Chain","Automation"], stats:[{k:"Efficiency Gain",v:"78%"},{k:"Delivery Time",v:"-40%"},{k:"Cost Savings",v:"$2.5M"}]},
  ];
  return (
    <section id="cases" className="mt-16">
      <SectionTitle kicker="Success Stories" title={<span>Our <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Case Studies</span></span>} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {cases.map((c)=> (
          <article key={c.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="aspect-[16/9] rounded-2xl border border-white/10 bg-white/5"/>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t)=> (<span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">{t}</span>))}
            </div>
            <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
            <div className="text-sm text-white/60">{c.company}</div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              {c.stats.map((s)=> (
                <div key={s.k} className="rounded-xl bg-black/20 p-3">
                  <div className="text-base font-bold">{s.v}</div>
                  <div className="text-white/60">{s.k}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}