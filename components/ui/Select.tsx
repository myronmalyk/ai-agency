

export function Select({ label, name, children }: { label: string; name: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-white/80">{label}</span>
      <select name={name} className="rounded-xl border border-white/10 bg-[#0E1230]/60 px-4 py-3 text-white outline-none transition focus:border-indigo-400/60 focus:bg-[#0E1230]">
        {children}
      </select>
    </label>
  );
}