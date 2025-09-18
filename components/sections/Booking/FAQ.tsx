

export default function FAQ() {
  const faqs = [
    { q: "How long is the call?", a: "30 minutes. We’ll explore goals, systems, and quick‑win opportunities." },
    { q: "Do you build custom solutions?", a: "Yes. From chatbots and RPA to predictive analytics and data platforms." },
    { q: "What industries do you serve?", a: "E‑commerce, services, healthcare, logistics, finance, manufacturing—and more." },
    { q: "What’s the pricing?", a: "We scope after discovery. Typical starter engagements range $2k–$10k." },
  ];
  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h3 className="text-center text-3xl font-bold">FAQ</h3>
      <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
        {faqs.map((f, i) => (
          <details key={i} className="group p-5 open:bg-white/5">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-white/70">Q{i + 1}.</span>{f.q}
            </summary>
            <p className="mt-2 text-white/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}