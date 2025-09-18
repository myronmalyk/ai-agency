
import { GradientBadge } from "@/components/ui/GradientBadge";

export default function Hero() {

    const AGENCY_PHONE = process.env.NEXT_PUBLIC_AGENCY_PHONE || "";

  return (
    <section className="relative overflow-hidden">
      {/* background visuals */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#6D28D9] to-[#3B82F6] opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 right-10 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#60A5FA] via-[#8B5CF6] to-[#EC4899] opacity-20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pb-16 pt-28 text-center">
        <GradientBadge>Free Strategy Session · 30 min · No Cost</GradientBadge>
        <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl">
          Book Your <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">AI Strategy Call</span>
        </h1>
        <p className="max-w-2xl text-lg text-white/70">
          Ready to automate workflows and boost revenue? Schedule a call with our experts to map the highest-ROI AI opportunities for your business.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#book" className="rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#8B5CF6] px-5 py-3 font-semibold shadow-lg shadow-indigo-900/30 transition hover:scale-[1.02]">
            Book a Free Call
          </a>
          <a href={`tel:${AGENCY_PHONE.replace(/[^+\d]/g, "")}`} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
            Call {AGENCY_PHONE}
          </a>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 text-left sm:w-full sm:max-w-3xl">
          {[
            { label: "Projects Delivered", value: "500+" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Data Points Processed", value: "250M" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}