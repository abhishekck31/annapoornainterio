"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Briefcase, Building, Paintbrush, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"

const services = [
  {
    title: "Home Interior",
    icon: <Home className="h-10 w-10 text-gold-500" />,
    description:
      "Transform your living spaces with our expert home interior design services tailored to local preferences.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services#home-interior",
  },
  {
    title: "Office Interior",
    icon: <Briefcase className="h-10 w-10 text-gold-500" />,
    description:
      "Create productive and inspiring workspaces with our office interior solutions designed for Bangalore businesses.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services#office-interior",
  },
  {
    title: "Construction",
    icon: <Building className="h-10 w-10 text-gold-500" />,
    description:
      "Build your dream property with our professional construction services that understand local regulations.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services#construction",
  },
  {
    title: "Renovation",
    icon: <Paintbrush className="h-10 w-10 text-gold-500" />,
    description:
      "Revitalize your existing spaces with our comprehensive renovation services tailored to Bangalore's architecture.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/services#renovation",
  },
]

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50 mt-16" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Our Services</span>
              <Sparkles className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4 heading-glow-scroll">
              Comprehensive Design & Construction Solutions
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-glow-scroll">
              We offer a complete range of interior design and construction services tailored to your specific needs and
              preferences
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Link href={service.link}>
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="h-full"
                >
                  <Card className="h-full transition-all duration-300 hover:border-gold-300 overflow-hidden rounded-xl">
                    <div className="h-40 overflow-hidden relative image-info-overlay">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-60"></div>
                      <div className="info">
                        <h4 className="text-white font-bold text-lg">{service.title}</h4>
                        <p className="text-white/90 text-sm">
                          Click to explore our {service.title.toLowerCase()} services
                        </p>
                      </div>
                    </div>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="mb-3 p-2 rounded-full bg-navy-50 transform transition-transform duration-300 hover:scale-110 -mt-8 bg-white shadow-lg border border-gray-100">
                        <motion.div
                          animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {service.icon}
                        </motion.div>
                      </div>
                      <h3 className="text-lg font-semibold mb-1 text-navy-900 heading-glow-scroll">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-3 text-gold-600 font-medium flex items-center group text-sm"
                      >
                        Learn More
                        <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

