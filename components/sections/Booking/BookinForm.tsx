"use client";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";

// Lee desde .env.local (lado cliente necesita NEXT_PUBLIC_)
const N8N_WEBHOOK = process.env.NEXT_PUBLIC_N8N_WEBHOOK as string | undefined;

/** Convierte FormData a objeto plano de strings */
function serializeFormData(fd: FormData): Record<string, string> {
  const out: Record<string, string> = {};
  fd.forEach((value, key) => {
    if (typeof value === "string") {
      out[key] = value;
    } else if (value instanceof File) {
      // adapta si quieres subir el archivo
      out[key] = value.name || "file";
    } else {
      out[key] = String(value);
    }
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

    const payload = serializeFormData(formData);

    try {
      if (!N8N_WEBHOOK) throw new Error("N8N webhook URL is not configured.");

      // (Opcional) timeout para evitar que el fetch quede colgado
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 20000);

      const res = await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ source: "booking-page", ...payload }),
        signal: controller.signal,
      });

      clearTimeout(timer);

      if (!res.ok) {
        // intenta leer un mensaje del backend
        let detail = "";
        try { detail = (await res.text()).slice(0, 200); } catch {}
        throw new Error(`Request failed: ${res.status}${detail ? ` – ${detail}` : ""}`);
      }

      setOk("Thanks! We’ll be in touch shortly.");
    } catch (e: unknown) {
      setErr(errorMessage(e) || "Something went wrong. Try again or call us.");
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
