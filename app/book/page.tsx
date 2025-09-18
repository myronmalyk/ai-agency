// app/booking/page.tsx

import { Inter } from "next/font/google";
import { Metadata } from "next";

import Hero from "@/components/sections/Booking/Hero";
import TrustStrip from "@/components/sections/Booking/TrustStrip";
import BookingSection from "@/components/sections/Booking/BookingSection";
import Benefits from "@/components/sections/Booking/Benefits";
import FAQ from "@/components/sections/Booking/FAQ";
import FooterCTA from "@/components/sections/Booking/FooterCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book a Free AI Strategy Call",
  description:
    "Schedule a 30-minute consultation to map high-ROI AI opportunities for your business.",
  alternates: { canonical: "/book" },
};

export default function BookingPage() {
  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-b from-[#0B1020] via-[#0C1130] to-[#0B1020] text-white`}>
          <Hero />
          <TrustStrip />
          <BookingSection />
          <Benefits />
          <FAQ />
          <FooterCTA />
      </main>
  );
}
