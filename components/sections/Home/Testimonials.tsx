

import SectionTitle from "@/components/ui/SectionTitle";

export default function Testimonials(){
  const items = [
    {quote:"Myron's Agency transformed our customer service with their AI chatbot. We saw a 300% increase in satisfaction and 90% faster responses.", name:"COO, RetailTech Inc."},
    {quote:"Their predictive analytics revealed demand patterns that cut inventory costs by 40%.", name:"VP Ops, LogisticsPro"},
  ];
  return (
    <section className="mt-16">
      <SectionTitle kicker="What Our Clients Say" title={<span>Real results, <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">real impact</span></span>} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        {items.map((t,i)=> (
          <blockquote key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-1 text-[#FBBF24]">★★★★★</div>
            <p className="mt-3 text-white/80">“{t.quote}”</p>
            <cite className="mt-3 block text-sm text-white/60">{t.name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}