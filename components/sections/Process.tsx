'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Code, Rocket } from 'lucide-react'

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      icon: Search,
      description: 'We analyze your business challenges, data landscape, and objectives to identify AI opportunities.',
      details: [
        'Business process audit',
        'Data assessment',
        'Stakeholder interviews',
        'ROI analysis'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Design',
      icon: Lightbulb,
      description: 'Our experts craft a comprehensive AI strategy and architecture tailored to your specific needs.',
      details: [
        'Solution architecture',
        'Technical specifications',
        'Implementation roadmap',
        'Success metrics definition'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Build',
      icon: Code,
      description: 'We develop, train, and rigorously test AI models using industry best practices and cutting-edge tools.',
      details: [
        'Model development',
        'Training & validation',
        'Quality assurance',
        'Performance optimization'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'Scale',
      icon: Rocket,
      description: 'Deploy solutions into production with ongoing support, monitoring, and continuous improvement.',
      details: [
        'Production deployment',
        'Performance monitoring',
        'Continuous optimization',
        'Team training & support'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Proven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to full deployment, we follow a structured approach that ensures successful AI implementation.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-6">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-200 to-purple-200"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2-4 weeks</div>
              <div className="text-gray-600">Discovery Phase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3-6 weeks</div>
              <div className="text-gray-600">Design & Planning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">8-16 weeks</div>
              <div className="text-gray-600">Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Ongoing</div>
              <div className="text-gray-600">Support & Optimization</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}