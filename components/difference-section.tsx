"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Shield, Clock, Users, ThumbsUp, HeartHandshake } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

const differencePoints = [
  {
    title: "Expert Team",
    description: "Our team brings years of industry experience to every project",
    icon: <Users className="h-6 w-6 text-gold-500" />,
  },
  {
    title: "Personalized Approach",
    description: "We tailor our services to meet your specific needs and preferences",
    icon: <HeartHandshake className="h-6 w-6 text-gold-500" />,
  },
  {
    title: "Quality Materials",
    description: "We use only high-quality materials and craftsmanship in all our work",
    icon: <Shield className="h-6 w-6 text-gold-500" />,
  },
  {
    title: "Transparent Pricing",
    description: "Clear pricing with no hidden costs or unexpected charges",
    icon: <ThumbsUp className="h-6 w-6 text-gold-500" />,
  },
  {
    title: "Timely Completion",
    description: "We value your time and ensure projects are completed on schedule",
    icon: <Clock className="h-6 w-6 text-gold-500" />,
  },
  {
    title: "After-Service Support",
    description: "Comprehensive support even after your project is completed",
    icon: <Check className="h-6 w-6 text-gold-500" />,
  },
]

const DifferenceSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="inline-flex items-center justify-start mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
              Why We Are <span className="text-gold-600">Different</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 mb-8">
              At Annapoorna Interio, we pride ourselves on our commitment to excellence and customer satisfaction. Our
              approach combines creativity, technical expertise, and attention to detail to deliver exceptional results
              that exceed expectations.
            </p>

            <div className="space-y-6">
              {differencePoints.map((point, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <motion.div
                    whileHover={{ x: 5, backgroundColor: "rgba(234, 179, 8, 0.05)" }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start group p-4 rounded-lg"
                  >
                    <div className="flex-shrink-0 mt-1 bg-navy-50 p-2 rounded-full group-hover:bg-gold-100 transition-colors duration-300">
                      {point.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-navy-900 group-hover:text-gold-600 transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation className="relative">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-xl relative image-info-overlay"
              >
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Our work 1"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "250px" }}
                />
                <div className="info">
                  <h4 className="text-white font-bold">Luxury Living Room</h4>
                  <p className="text-white/90 text-sm">Modern design with premium materials</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="mt-12 rounded-2xl overflow-hidden shadow-xl relative image-info-overlay"
              >
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Our work 2"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "250px" }}
                />
                <div className="info">
                  <h4 className="text-white font-bold">Executive Office</h4>
                  <p className="text-white/90 text-sm">Elegant workspace design</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-xl relative image-info-overlay"
              >
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Our work 3"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "250px" }}
                />
                <div className="info">
                  <h4 className="text-white font-bold">Modern Villa</h4>
                  <p className="text-white/90 text-sm">Luxury construction project</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="mt-12 rounded-2xl overflow-hidden shadow-xl relative image-info-overlay"
              >
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Our work 4"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "250px" }}
                />
                <div className="info">
                  <h4 className="text-white font-bold">Designer Kitchen</h4>
                  <p className="text-white/90 text-sm">Contemporary kitchen renovation</p>
                </div>
              </motion.div>
            </div>

            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white py-4 px-8 rounded-full shadow-xl z-10">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-navy-900">500+</p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
                <div className="h-10 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-navy-900">10+</p>
                  <p className="text-sm text-gray-600">Years</p>
                </div>
                <div className="h-10 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-navy-900">100%</p>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default DifferenceSection

