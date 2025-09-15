'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export function CaseStudies() {
  const caseStudies = [
    {
      title: 'E-commerce Revenue Optimization',
      company: 'RetailTech Inc.',
      description: 'Implemented AI-driven personalization engine that increased conversion rates and customer lifetime value.',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NzgyMzUzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: 'Revenue Increase', value: '145%' },
        { icon: Users, label: 'Customer Retention', value: '89%' },
        { icon: DollarSign, label: 'ROI', value: '320%' }
      ],
      tags: ['Machine Learning', 'Personalization', 'E-commerce']
    },
    {
      title: 'Healthcare Diagnostic Assistant',
      company: 'MedCore Systems',
      description: 'Developed AI-powered diagnostic tool that assists radiologists in early disease detection with 95% accuracy.',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU3ODQ2NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: 'Accuracy Rate', value: '95%' },
        { icon: Users, label: 'Patients Helped', value: '50K+' },
        { icon: DollarSign, label: 'Cost Reduction', value: '60%' }
      ],
      tags: ['Computer Vision', 'Healthcare', 'Deep Learning']
    },
    {
      title: 'Supply Chain Optimization',
      company: 'LogisticsPro',
      description: 'Automated inventory management and demand forecasting system that reduced costs and improved delivery times.',
      image: 'https://images.unsplash.com/photo-1603202662706-62ead3176b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc1Nzc2OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: 'Efficiency Gain', value: '78%' },
        { icon: Users, label: 'Delivery Time', value: '-40%' },
        { icon: DollarSign, label: 'Cost Savings', value: '$2.5M' }
      ],
      tags: ['Predictive Analytics', 'Supply Chain', 'Automation']
    }
  ]

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
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
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we&apos;ve helped businesses transform their operations and achieve remarkable results with AI.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3">{study.company}</p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex justify-center mb-1">
                        <metric.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {/*<button className="group/btn flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>*/}
              </div>
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
            View All Case Studies
          </motion.button>
        </motion.div>*/}
      </div>
    </section>
  )
}