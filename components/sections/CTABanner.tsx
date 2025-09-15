'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Phone } from 'lucide-react'

export function CTABanner() {
  return (
    <section id='contact' className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-900 relative overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text & CTA */}
        <div className="text-center md:text-left">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span className="text-sm text-white font-semibold tracking-wide">Free Strategy Session</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
        >
          Let&apos;s Build Your AI <br/>
          <span className="text-cyan-300 drop-shadow-lg">Advantage</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium"
        >
          Ready to transform your business with AI? Schedule a free consultation with our experts 
          and discover how we can accelerate your digital transformation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12"
        >
          <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
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

        {/* Trust Indicators */}
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

        {/* Right Side: Contact Form */}
        <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md mx-auto border border-blue-100"
        >
        <h3 className="text-2xl font-extrabold text-blue-700 mb-6 text-center tracking-tight">Contact Us</h3>
        <form className="space-y-5">
          <div>
          <label className="block text-blue-800 font-semibold mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 bg-white text-blue-900 placeholder-blue-400 transition font-medium"
            placeholder="Your Name"
          />
          </div>
          <div>
          <label className="block text-blue-800 font-semibold mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 bg-white text-blue-900 placeholder-blue-400 transition font-medium"
            placeholder="you@email.com"
          />
          </div>
          <div>
          <label className="block text-blue-800 font-semibold mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 bg-white text-blue-900 placeholder-blue-400 transition resize-none font-medium"
            placeholder="How can we help you?"
          />
          </div>
          <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
          <ArrowRight className="w-5 h-5" />
          Send Message
          </button>
        </form>
        </motion.div>
      </div>
      </div>
    </section>
  )
}