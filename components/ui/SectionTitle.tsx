"use client";
import React from "react";

export default function SectionTitle({
  kicker,
  title,
}: {
  kicker: string;
  title: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-6 text-center">
        <div className="text-sm text-white/70">{kicker}</div>
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      </div>
    </div>
  );
}
