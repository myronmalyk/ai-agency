'use client'

import { motion } from 'framer-motion';

export function TrustedLogos() {
  const logos = [
    { name: 'TechCorp', width: 120 },
    { name: 'InnovateLab', width: 140 },
    { name: 'DataFlow', width: 110 },
    { name: 'CloudSync', width: 130 },
    { name: 'FutureScale', width: 125 },
    { name: 'SmartEdge', width: 115 }
  ]

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div 
                className="bg-gray-400 rounded-lg flex items-center justify-center text-white font-bold text-xs px-4 py-2"
                style={{ width: logo.width }}
              >
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}