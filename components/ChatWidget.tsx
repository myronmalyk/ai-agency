// components/ChatWidget.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const API_ENDPOINT = "/api/agent"; // ← ahora llamamos al API Route (proxy al webhook de n8n)
const gradient = "from-[#3B82F6] via-[#7C3AED] to-[#8B5CF6]"; // blue → violet

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I’m your AI assistant. How can I help today?" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const sessionId = useMemo(() => getOrCreateSession(), []);

  // auto-scroll to bottom when messages change or panel opens
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setLoading(true);
    setError(null);

    const userMsg: Message = { role: "user", content: text };
    // añadimos primero el mensaje del usuario al estado
    setMessages((m) => [...m, userMsg]);

    // usamos el historial actualizado para el backend (evita enviar un historial desfasado)
    const historyToSend = [...messages, userMsg];

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ sessionId, message: text, history: historyToSend }),
        cache: "no-store",
      });

      // leemos la respuesta (texto o json)
      const ct = res.headers.get("content-type") || "";
      const data = ct.includes("application/json") ? await res.json() : await res.text();

      if (!res.ok) {
        // si el proxy retornó detalles, muéstralos
        const detail =
          typeof data === "string"
            ? data.slice(0, 300)
            : typeof data === "object" && data !== null
            ? JSON.stringify(data).slice(0, 300)
            : "";
        const msg = `Upstream error ${res.status}${detail ? ` — ${detail}` : ""}`;
        setError(msg);
        setMessages((m) => [
          ...m,
          { role: "assistant", content: "Sorry, I couldn’t reach the agent. Please try again." },
        ]);
        return;
      }

      // normalizamos la respuesta
      let reply = "(No reply)";
      if (typeof data === "string") {
        reply = data;
      } else if (typeof data === "object" && data !== null) {
        const maybe = data as Record<string, unknown>;
        reply =
          (typeof maybe.reply === "string" && maybe.reply) ||
          (typeof maybe.result === "string" && maybe.result) ||
          (typeof maybe.text === "string" && maybe.text) ||
          "(No reply)";
      }

      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error";
      setError(msg);
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Sorry, I couldn’t reach the agent. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* FAB */}
      <button
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
        className={`group flex items-center gap-3 rounded-full bg-gradient-to-r ${gradient} px-4 py-3 font-semibold shadow-lg shadow-indigo-900/30 transition hover:scale-[1.03]`}
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path
              d="M21 15a4 4 0 01-4 4H8l-5 4V7a4 4 0 014-4h10a4 4 0 014 4v8z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="hidden sm:block">Chat with AI</span>
      </button>

      {/* Panel */}
      {open && (
        <div className="mt-3 w-[92vw] max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0B1020]/95 shadow-2xl backdrop-blur">
          <Header onClose={() => setOpen(false)} />
          <div ref={listRef} className="h-80 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} content={m.content} />
            ))}
            {loading && <Typing />}
          </div>
          {error && <div className="px-4 pb-2 text-sm text-rose-300">{error}</div>}
          <form onSubmit={sendMessage} className="border-t border-white/10 p-3">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Type your message…"
                className="max-h-32 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-indigo-400/60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className={`rounded-2xl bg-gradient-to-r ${gradient} px-4 py-2 text-sm font-semibold shadow-lg shadow-indigo-900/30 transition disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {loading ? "Sending…" : "Send"}
              </button>
            </div>
            <div className="mt-1 px-1 text-[11px] text-white/40">
              Press Enter to send • Shift+Enter for new line
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

function Header({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
      <div className="flex items-center gap-2">
        <div className={`grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br ${gradient} font-bold`}>AI</div>
        <div>
          <div className="text-sm font-semibold">Myron&apos;s Agency</div>
          <div className="text-[11px] text-white/60">Powered by n8n</div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="rounded-lg bg-white/10 p-1.5 text-white/70 hover:text-white"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function Bubble({ role, content }: { role: "user" | "assistant"; content: string }) {
  const isUser = role === "user";
  return (
    <div className={`mb-3 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] whitespace-pre-wrap rounded-2xl border p-3 text-sm shadow-sm ${
          isUser
            ? `border-white/10 bg-gradient-to-r ${gradient} text-white`
            : "border-white/10 bg-white/5 text-white"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="mb-3 flex justify-start">
      <div className="flex max-w-[80%] items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">
        <span className="inline-flex gap-1">
          <Dot /> <Dot style={{ animationDelay: "120ms" }} /> <Dot style={{ animationDelay: "240ms" }} />
        </span>
        Typing…
      </div>
    </div>
  );
}

function Dot(props: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white/60" {...props} />;
}

function getOrCreateSession() {
  if (typeof window === "undefined") return "server";
  const key = "myron-chat-session";
  let id = window.localStorage.getItem(key);
  if (!id) {
    id = cryptoRandomId();
    window.localStorage.setItem(key, id);
  }
  return id;
}

function cryptoRandomId() {
  if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
    const buf = new Uint8Array(16);
    crypto.getRandomValues(buf);
    return Array.from(buf).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return Math.random().toString(36).slice(2);
}
