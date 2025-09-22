

import Link from "next/link";

import SectionTitle from "@/components/ui/SectionTitle";

// ---- CONFIG ----
const PRIMARY_CTA = process.env.NEXT_PUBLIC_PRIMARY_CTA || ""; // route to your booking page

export default function Services(){
  const cards = [
    {icon:"📝", title:"Generative AI & Content Creation", desc:"We help you create and scale content with AI—faster and smarter.", bullets:["Social media posts","Blog articles & newsletters","Images & video generation","SEO optimization"], color:"from-[#2A6AF7] to-[#7C3AED]"},
    {icon:"🎯", title:"AI Personalization & Customer Experience", desc:"We use AI to personalize every interaction with your customers.", bullets:["Dynamic websites","Personalized emails","Smart recommendations","Customer segmentation"], color:"from-[#7C3AED] to-[#8B5CF6]"},
    {icon:"💼", title:"AI for Sales & Revenue Growth", desc:"We bring AI into your sales process to help you close more deals.", bullets:["Lead scoring & prioritization","Sales forecasting","AI chatbots for sales","CRM integration"], color:"from-[#3B82F6] to-[#60A5FA]"},
    {icon:"✅", title:"AI Audit & Governance", desc:"We make sure your AI is safe, fair, and compliant.", bullets:["Bias & fairness checks","Data privacy compliance","Responsible AI policies","Ongoing monitoring"], color:"from-[#8B5CF6] to-[#3B82F6]"},
  ];
  return (
    <section id="services" className="mt-14">
      <SectionTitle kicker="Our AI Services" title={<span>We deliver end‑to‑end <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">AI solutions</span></span>} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        {cards.map((c) => (
          <article key={c.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className={`inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br ${c.color} px-3 py-2 text-lg font-semibold`}>{c.icon}<span>{c.title}</span></div>
            <p className="mt-3 text-white/70">{c.desc}</p>
            <ul className="mt-4 space-y-2 text-white/80">
              {c.bullets.map((b)=> (<li key={b} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/60"/> {b}</li>))}
            </ul>
            <Link href={PRIMARY_CTA} className="mt-5 inline-flex items-center gap-2 text-sm text-indigo-300 hover:underline">Learn More →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}