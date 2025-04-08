"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Users, Home, Sparkles, Phone, Pencil, CreditCard } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"

const processSteps = [
  {
    number: 1,
    title: "Raise a Request",
    description: "Contact us with your requirements and project details to get started.",
    icon: <Phone className="h-8 w-8 text-gold-500" />,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Contact form illustration",
  },
  {
    number: 2,
    title: "Meet our Expert",
    description: "Our design experts will meet you to understand your vision and requirements in detail.",
    icon: <Users className="h-8 w-8 text-gold-500" />,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Meeting with experts illustration",
  },
  {
    number: 3,
    title: "Book with Us",
    description: "Finalize the project scope, timeline, and budget to begin the design process.",
    icon: <CreditCard className="h-8 w-8 text-gold-500" />,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Contract signing illustration",
  },
  {
    number: 4,
    title: "Receive Designs",
    description: "Our team creates detailed designs and plans tailored to your requirements.",
    icon: <Pencil className="h-8 w-8 text-gold-500" />,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Design blueprints illustration",
  },
  {
    number: 5,
    title: "Track & Transact",
    description: "Monitor the progress of your project and make payments as milestones are achieved.",
    icon: <Clock className="h-8 w-8 text-gold-500" />,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Project tracking illustration",
  },
  {
    number: 6,
    title: "Settle In",
    description: "Move into your beautifully designed and perfectly executed space.",
    icon: <Home className="h-8 w-8 text-gold-500" />,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Completed home illustration",
  },
]

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev === 6 ? 1 : prev + 1))
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber)
    setIsAutoPlaying(false)

    // Resume auto-playing after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 10000)
  }

  return (
    <section className="py-20 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Our Process</span>
              <Sparkles className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">
              How It <span className="text-gold-600">Works</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our simple 6-step process ensures a smooth journey from initial consultation to your finished space
            </p>
          </div>
        </ScrollAnimation>

        {/* Process Steps Display */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-200 rounded-full"></div>

            {/* Active Line (animated) */}
            <motion.div
              className="hidden md:block absolute top-12 left-0 h-1 bg-gradient-to-r from-gold-500 to-navy-900 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / 6) * 100}%` }}
              transition={{ duration: 0.5 }}
            />

            {/* Steps */}
            <div className="hidden md:flex justify-between relative">
              {processSteps.map((step) => (
                <div key={step.number} className="relative flex flex-col items-center">
                  <motion.button
                    onClick={() => handleStepClick(step.number)}
                    className={`w-24 h-24 rounded-full flex flex-col items-center justify-center z-10 transition-all duration-300 cursor-pointer ${
                      activeStep >= step.number
                        ? "bg-gradient-to-br from-navy-600 to-navy-800 shadow-lg"
                        : "bg-white border-2 border-gray-200"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={
                      activeStep === step.number
                        ? {
                            scale: [1, 1.05, 1],
                            boxShadow: [
                              "0px 0px 0px rgba(0,0,0,0.1)",
                              "0px 10px 25px rgba(0,0,0,0.2)",
                              "0px 5px 15px rgba(0,0,0,0.15)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      repeat: activeStep === step.number ? Number.POSITIVE_INFINITY : 0,
                      repeatType: "reverse",
                    }}
                  >
                    <div className="mb-1 text-navy-900">{step.icon}</div>
                    <span className={`text-xl font-bold ${activeStep >= step.number ? "text-white" : "text-navy-900"}`}>
                      {step.number}
                    </span>
                  </motion.button>

                  <div
                    className={`mt-4 text-center transition-all duration-300 ${
                      activeStep === step.number ? "text-gold-600 font-semibold" : "text-gray-600"
                    }`}
                  >
                    <p className="text-sm md:text-base">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Steps */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
                {processSteps.map((step) => (
                  <motion.button
                    key={step.number}
                    onClick={() => handleStepClick(step.number)}
                    className={`flex-shrink-0 w-20 flex flex-col items-center ${
                      activeStep === step.number ? "scale-110" : ""
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                        activeStep >= step.number
                          ? "bg-gradient-to-br from-gold-500 to-gold-600"
                          : "bg-white border-2 border-gray-200"
                      }`}
                    >
                      <div className={activeStep >= step.number ? "text-white" : "text-gray-600"}>{step.icon}</div>
                    </div>
                    <p
                      className={`text-xs text-center ${
                        activeStep === step.number ? "text-gold-600 font-semibold" : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Step Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-navy-100 p-3 rounded-full mr-4 text-navy-600">
                      {processSteps[activeStep - 1].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900">
                        Step {activeStep}: {processSteps[activeStep - 1].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">{processSteps[activeStep - 1].description}</p>

                  <div className="flex space-x-2">
                    {processSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleStepClick(index + 1)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index + 1 === activeStep ? "bg-gold-500 w-8" : "bg-gray-300"
                        }`}
                        aria-label={`Go to step ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-br from-gold-200 to-navy-100 rounded-full opacity-50 blur-lg"></div>
                    <Image
                      src={processSteps[activeStep - 1].image || "/placeholder.svg"}
                      alt={processSteps[activeStep - 1].alt}
                      width={200}
                      height={200}
                      className="rounded-full border-4 border-white shadow-lg relative z-10"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline

