'use client'

import { motion } from 'framer-motion'
import { Bot, TrendingUp, Cog, Database, ArrowRight } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that enhances customer experience and automates support workflows with natural language processing.',
      features: ['24/7 Customer Support', 'Multi-language Support', 'CRM Integration', 'Advanced NLP'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics & Forecasting',
      description: 'Data-driven insights that predict market trends, customer behavior, and business outcomes to optimize strategic decisions.',
      features: ['Market Trend Analysis', 'Customer Behavior Prediction', 'Risk Assessment', 'Revenue Forecasting'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cog,
      title: 'Process Automation & Optimization',
      description: 'Streamline operations with intelligent automation solutions that reduce costs and improve efficiency across all departments.',
      features: ['Workflow Automation', 'Document Processing', 'Quality Control', 'Performance Monitoring'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Data Strategy & Infrastructure',
      description: 'Build robust data foundations with modern architectures that enable AI-driven insights and scalable analytics solutions.',
      features: ['Data Architecture Design', 'ETL Pipeline Development', 'Data Governance', 'Cloud Migration'],
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
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
            Our AI <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive AI solutions tailored to your business needs, from intelligent automation to advanced analytics.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="group/btn flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More 
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/*<motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Services
          </motion.button>
        </motion.div>*/}
      </div>
    </section>
  )
}