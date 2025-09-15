'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Testimonials() {
  const testimonials = [
    {
      quote: "Myron's Agency transformed our customer service with their AI chatbot. We've seen a 300% increase in customer satisfaction and reduced response times by 90%. The ROI was evident within the first month.",
      author: "Sarah Chen",
      position: "Chief Technology Officer",
      company: "TechFlow Solutions",
      rating: 5,
      avatar: "SC"
    },
    {
      quote: "Their predictive analytics solution helped us optimize our supply chain and reduce costs by $2.5M annually. The team's expertise and professionalism exceeded our expectations at every step.",
      author: "Michael Rodriguez",
      position: "Operations Director",
      company: "LogisticsPro Global",
      rating: 5,
      avatar: "MR"
    },
    {
      quote: "Working with Myron's Agency was a game-changer for our healthcare facility. Their AI diagnostic tool has improved our accuracy rates and patient outcomes significantly. Highly recommended!",
      author: "Dr. Emily Watson",
      position: "Chief Medical Officer",
      company: "HealthTech Medical Center",
      rating: 5,
      avatar: "EW"
    },
    {
      quote: "The automated document processing system they built for us processes 10,000+ documents daily with 99.8% accuracy. It's freed up our team to focus on strategic initiatives rather than manual tasks.",
      author: "James Thompson",
      position: "VP of Operations",
      company: "Financial Services Corp",
      rating: 5,
      avatar: "JT"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
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
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders say about working with Myron&apos;s Agency.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
              &quot;{testimonials[currentIndex].quote}&quot;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].author}</div>
                <div className="text-gray-600">{testimonials[currentIndex].position}</div>
                <div className="text-blue-600 font-medium">{testimonials[currentIndex].company}</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Secondary Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                &quot;{testimonial.quote.slice(0, 120)}...&quot;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{testimonial.author}</div>
                  <div className="text-gray-600 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}