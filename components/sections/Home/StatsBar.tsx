"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsBar() {
  const stats = [
    { label: "Discovery Phase", value: "2–4 weeks" },
    { label: "Design & Planning", value: "3–6 weeks" },
    { label: "Development", value: "8–16 weeks" },
    { label: "Support & Optimization", value: "Ongoing" },
  ];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  // Hide scroll hint after first scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (el.scrollLeft > 8) setShowHint(false);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-0 sm:px-6">
      {/* Mobile: horizontal scroll, snap, fade/arrow hint */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto -mx-4 px-4 py-2 md:grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:gap-4 md:overflow-x-visible md:px-0 md:py-0 scrollbar-thin hide-scrollbar scroll-snap-x snap-mandatory"
        tabIndex={0}
        aria-label="Project stats"
        style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            aria-label={`${s.label}: ${s.value}`}
            className="flex-shrink-0 min-w-[70%] max-w-xs snap-start rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm transition-all duration-200 md:min-w-0 md:max-w-none md:snap-none md:shadow-none md:p-6"
            style={{ minHeight: 72 }}
          >
            <div className="font-bold text-[clamp(1.25rem,4vw,2rem)] leading-tight">
              {s.value}
            </div>
            <div className="text-[clamp(0.9rem,2.5vw,1.1rem)] text-white/70 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      {/* Fade/arrow scroll hint (mobile only, one-time) */}
      {showHint && (
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-full flex items-center md:hidden"
          aria-hidden="true"
        >
          <div className="h-12 w-10 bg-gradient-to-r from-[#0B1020] via-[#0B1020cc] to-transparent" />
          <div className="flex-1" />
          <div className="flex items-center pr-2">
            <span className="inline-block animate-bounce-x text-white/60 text-2xl">→</span>
          </div>
          <div className="h-12 w-6 bg-gradient-to-l from-[#0B1020] via-[#0B1020cc] to-transparent" />
        </div>
      )}
    </section>
  );
}