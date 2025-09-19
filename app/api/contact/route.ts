// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// ====== CONFIG ======
const resend = new Resend(process.env.RESEND_API_KEY);
// Receptor principal (tu email)
const TO_EMAIL = process.env.TO_EMAIL;
// Dirección de envío configurada en Resend (tu dominio verificado)
const FROM_EMAIL = process.env.FROM_EMAIL || "AI Agency <onboarding@resend.dev>";
// (Opcional) Webhook de n8n en servidor
const N8N_WEBHOOK = process.env.N8N_WEBHOOK;

function safeStr(v: unknown) {
  if (typeof v === "string") return v.trim();
  return v == null ? "" : String(v);
}

function buildHtml(payload: Record<string, string>) {
  const rows = Object.entries(payload)
    .map(([k, v]) => `<tr><td style="padding:6px 10px;border:1px solid #eee;"><b>${k}</b></td><td style="padding:6px 10px;border:1px solid #eee;">${(v || "").replace(/\n/g, "<br/>")}</td></tr>`)
    .join("");
  return `
  <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial;">
    <h2 style="margin:0 0 10px;">Nuevo lead desde Booking</h2>
    <table style="border-collapse:collapse;width:100%;max-width:700px;">${rows}</table>
    <p style="color:#666;margin-top:16px;">Enviado automáticamente por tu sitio.</p>
  </div>`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const payload = {
      source: safeStr(body.source || "booking-page"),
      name: safeStr(body.name),
      email: safeStr(body.email),
      company: safeStr(body.company),
      phone: safeStr(body.phone),
      service: safeStr(body.service),
      preferred_time: safeStr(body.preferred_time),
      message: safeStr(body.message),
      timestamp: new Date().toISOString(),
      ip: safeStr(req.headers.get("x-forwarded-for") || ""),
      ua: safeStr(req.headers.get("user-agent") || ""),
    };

    // Validación mínima
    if (!payload.name || !payload.email) {
      return NextResponse.json({ error: "Faltan campos requeridos (name, email)." }, { status: 400 });
    }
    if (!TO_EMAIL) {
      return NextResponse.json({ error: "Configura TO_EMAIL en el servidor." }, { status: 500 });
    }

    // 1) Enviar email con Resend
    const subject = `Nuevo Booking — ${payload.name}${payload.service ? ` (${payload.service})` : ""}`;
    const html = buildHtml(payload);
    const text = Object.entries(payload)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject,
      html,
      text,
      replyTo: payload.email || undefined,
    });

    // 2) (Opcional) Reenviar a n8n si está configurado en el servidor
    if (N8N_WEBHOOK) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 20_000);
      try {
        await fetch(N8N_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
          cache: "no-store",
        });
      } catch {
        // No rompemos la respuesta si falla n8n; ya se envió el email
      } finally {
        clearTimeout(timer);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unexpected error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
