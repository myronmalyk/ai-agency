"use client";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";

/** Convierte FormData a objeto plano de strings */
function serializeFormData(fd: FormData): Record<string, string> {
  const out: Record<string, string> = {};
  fd.forEach((value, key) => {
    if (typeof value === "string") out[key] = value;
    else if (value instanceof File) out[key] = value.name || "file";
    else out[key] = String(value);
  });
  return out;
}

/** Mensaje seguro desde unknown */
function errorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  try { return JSON.stringify(err); } catch { return "Unexpected error"; }
}

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setOk(null);
    setErr(null);

    const payload = { source: "booking-page", ...serializeFormData(formData) };

    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 20000);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
        cache: "no-store",
      });

      clearTimeout(timer);

      if (!res.ok) {
        let detail = "";
        try { detail = (await res.text()).slice(0, 200); } catch {}
        throw new Error(`Request failed: ${res.status}${detail ? ` – ${detail}` : ""}`);
      }

      setOk("Thanks for your request! We'll get back to you soon.");
    } catch (e: unknown) {
      setErr(errorMessage(e) || "Something went wrong. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="mt-4 grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input name="name" label="Full Name" required />
        <Input name="email" type="email" label="Work Email" required />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input name="company" label="Company" />
        <Input name="phone" label="Phone" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Select name="service" label="Service">
          <option>AI Chatbots & Virtual Assistants</option>
          <option>Process Automation</option>
          <option>Predictive Analytics</option>
          <option>Data Strategy & Infrastructure</option>
          <option>Other</option>
        </Select>
        <Input
          name="preferred_time"
          label="Preferred Time (optional)"
          placeholder="e.g., Tue 3pm PT"
        />
      </div>

      <Textarea
        name="message"
        label="What would you like to accomplish with AI?"
        rows={5}
      />

      <button
        disabled={loading}
        className="mt-2 rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#8B5CF6] px-5 py-3 font-semibold shadow-lg shadow-indigo-900/30 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Request Timeslot"}
      </button>

      {ok && <p className="text-emerald-300">{ok}</p>}
      {err && <p className="text-rose-300">{err}</p>}
    </form>
  );
}
