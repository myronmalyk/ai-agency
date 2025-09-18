

export default function TrustedStrip(){
  const items = ["TechCorp","InnovateLab","DataFlow","CloudSync","FutureScale","SmartEdge"];
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-center text-xs tracking-wide text-white/60">TRUSTED BY INDUSTRY LEADERS</div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {items.map((x)=> (
            <div key={x} className="rounded-full bg-white/10 px-4 py-2 text-center text-sm text-white/80">{x}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
