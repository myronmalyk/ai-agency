

export function Input({ label, name, type = "text", required = false, placeholder = "" }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; }) {
  return (
    <label className="group grid gap-1 text-sm">
      <span className="text-white/80">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-[#0E1230]/60 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-indigo-400/60 focus:bg-[#0E1230]"
      />
    </label>
  );
}