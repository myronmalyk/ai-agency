import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  if (!N8N_WEBHOOK_URL) {
    return NextResponse.json({ error: "N8N_WEBHOOK_URL is not set" }, { status: 500 });
  }

  const body = await req.json().catch(() => ({}));

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20_000);

  try {
    const upstream = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
      cache: "no-store",
    });

    const ct = upstream.headers.get("content-type") || "";
    const data = ct.includes("application/json") ? await upstream.json() : await upstream.text();

    clearTimeout(timer);

    if (!upstream.ok) {
      // Propaga detalles para depurar desde el cliente (status + fragmento)
      return NextResponse.json(
        { error: "Upstream error", status: upstream.status, data: typeof data === "string" ? data.slice(0, 300) : data },
        { status: upstream.status }
      );
    }

    // Normaliza: si n8n devuelve string, lo envolvemos en { reply }
    return NextResponse.json(typeof data === "string" ? { reply: data } : data);
  } catch (e: unknown) {
    clearTimeout(timer);
    const msg = e instanceof Error ? e.message : "Network error";
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}

// Si tu app usa caché agresiva en rutas, puedes forzar dinámico:
// export const dynamic = "force-dynamic";
