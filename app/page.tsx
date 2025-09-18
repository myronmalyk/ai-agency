// app/page.tsx
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

import Hero from "@/components/sections/Home/Hero";
import StatsBar from "@/components/sections/Home/StatsBar";
import TrustedStrip from "@/components/sections/Home/TrustedStrip";
import Services from "@/components/sections/Home/Services";
import CaseStudies from "@/components/sections/Home/CaseStudies";
import Process from "@/components/sections/Home/Process";
import Testimonials from "@/components/sections/Home/Testimonials";
import CTA from "@/components/sections/Home/CTA";

export const metadata: Metadata = {
  title: "AI Agency in Vancouver — Automation, Chatbots & Analytics",
  description:
    "Partner with a senior AI team to automate processes, deploy chatbots, and forecast demand. 500+ projects delivered. Book a free 30-min strategy call.",
};

export default function HomePage() {
  return (
    <main className={`${inter.className} min-h-screen bg-[#0B1020] text-white`}> 
      <Hero />
      <StatsBar />
      <TrustedStrip />
      <Services />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}


