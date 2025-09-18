

export function Textarea({ label, name, rows = 4 }: { label: string; name: string; rows?: number }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-white/80">{label}</span>
      <textarea
        name={name}
        rows={rows}
        className="rounded-xl border border-white/10 bg-[#0E1230]/60 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-indigo-400/60 focus:bg-[#0E1230]"
      />
    </label>
  );
}