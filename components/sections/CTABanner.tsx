'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const WEBHOOK_URL = 'https://myronmalyk.app.n8n.cloud/webhook/d21b3f6b-afea-43e6-a435-61ce63dd016b'; // <-- PROD URL

type Msg = { who: 'user' | 'ai'; text: string };

export function CTABanner() {
  // --- Chat state ---
  const [msgs, setMsgs] = useState<Msg[]>([
    { who: 'ai', text: 'Hi! 👋 How can I help you today?' },
  ]);
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>('');

  // Keep one session per browser
  useEffect(() => {
    sessionIdRef.current = localStorage.getItem('sessionId') || crypto.randomUUID();
    localStorage.setItem('sessionId', sessionIdRef.current);
  }, []);

  // Auto-scroll on new message
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, sending]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    const message = inputRef.current?.value.trim() || '';
    if (!message) return;

    // optimistic UI
    setMsgs(m => [...m, { who: 'user', text: message }]);
    inputRef.current!.value = '';
    setSending(true);

    try {
      const res = await fetch(
        `${WEBHOOK_URL}?sessionId=${encodeURIComponent(sessionIdRef.current)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message }), // tu webhook ya soporta body.message
        }
      );

      // Si respondes texto plano desde "Respond to Webhook"
      const replyText = await res.text();
      setMsgs(m => [...m, { who: 'ai', text: replyText || '…' }]);
    } catch (err) {
      console.error(err);
      setMsgs(m => [
        ...m,
        { who: 'ai', text: 'There was a network problem. Please try again.' },
      ]);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-900 relative overflow-hidden font-sans"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text & CTA (igual que lo tenías) */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-semibold tracking-wide">
                Free Strategy Session
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
            >
              Let&apos;s Build Your AI <br />
              <span className="text-cyan-300 drop-shadow-lg">Advantage</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium"
            >
              Ready to transform your business with AI? Schedule a free consultation with our
              experts and discover how we can accelerate your digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Free Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:border-cyan-300 hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (672) 208-8280</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto md:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">30 min</div>
                <div className="text-blue-200 text-sm font-medium">Strategy Session</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">No Cost</div>
                <div className="text-blue-200 text-sm font-medium">Initial Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24h</div>
                <div className="text-blue-200 text-sm font-medium">Response Time</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Chat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md mx-auto border border-blue-100 flex flex-col"
          >
            <h3 className="text-2xl font-extrabold text-blue-700 mb-6 text-center tracking-tight">
              Chat with AI
            </h3>

            {/* Messages */}
            <div
              ref={listRef}
              className="flex-1 overflow-y-auto mb-4 max-h-72 space-y-2 pr-1"
              id="chat-messages"
            >
              {msgs.map((m, i) =>
                m.who === 'ai' ? (
                  <div key={i} className="mb-2 flex">
                    <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-2xl rounded-bl-none max-w-[75%]">
                      {m.text}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="mb-2 flex justify-end">
                    <div className="bg-cyan-500 text-white px-4 py-2 rounded-2xl rounded-br-none max-w-[75%]">
                      {m.text}
                    </div>
                  </div>
                )
              )}

              {sending && (
                <div className="mb-2 flex">
                  <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-2xl rounded-bl-none max-w-[75%] opacity-70">
                    …
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form className="flex gap-2" autoComplete="off" onSubmit={send}>
              <input
                ref={inputRef}
                type="text"
                name="message"
                placeholder={sending ? 'Sending…' : 'Type your message...'}
                className="flex-1 px-4 py-3 rounded-xl border border-blue-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 bg-white text-blue-900 placeholder-blue-400 transition font-medium disabled:opacity-60"
                disabled={sending}
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 disabled:opacity-60"
                disabled={sending}
                aria-label="Send message"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="text-xs text-blue-400 mt-2 text-center">Powered by n8n</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}