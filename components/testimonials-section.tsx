"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

const testimonials = [
  {
    name: "Priya Sharma",
    position: "Homeowner in Yelahanka",
    project: "Villa Interior Design",
    testimonial:
      "Annapoorna Interio transformed our Yelahanka house into a dream home. Their attention to detail and commitment to quality is unmatched. We couldn't be happier with the results!",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    position: "Business Owner in Bangalore",
    project: "Office Renovation",
    testimonial:
      "Working with Annapoorna Interio for our office renovation in Bangalore was a fantastic experience. They understood our requirements perfectly and delivered a space that enhances productivity and impresses our clients.",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
  },
  {
    name: "Sunita Reddy",
    position: "Property Developer in Yelahanka",
    project: "Luxury Apartment Complex",
    testimonial:
      "As a property developer in Yelahanka, I've worked with many interior design firms, but Annapoorna Interio stands out for their professionalism, creativity, and reliability. They're now our go-to partners for all our Bangalore projects.",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
  },
  {
    name: "Arun Patel",
    position: "Restaurant Owner in Bangalore",
    project: "Restaurant Interior Design",
    testimonial:
      "The team at Annapoorna Interio designed our restaurant in Bangalore with such creativity and functionality. Our customers frequently compliment the ambiance, which has significantly contributed to our success.",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Testimonials</span>
              <Sparkles className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with us
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <Card className="bg-white border-none shadow-xl rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-50 to-gold-50 opacity-30"></div>
                    <CardContent className="p-8 md:p-12 relative z-10">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gold-200 rounded-full transform -rotate-6"></div>
                          <img
                            src={testimonials[currentIndex].image || "/placeholder.svg"}
                            alt={testimonials[currentIndex].name}
                            className="h-32 w-32 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md z-20">
                            <Quote className="h-6 w-6 text-gold-500" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex mb-4">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                            ))}
                          </div>

                          <p className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                            "{testimonials[currentIndex].testimonial}"
                          </p>

                          <div>
                            <h4 className="font-bold text-xl text-navy-900">{testimonials[currentIndex].name}</h4>
                            <p className="text-gold-600 font-medium">{testimonials[currentIndex].position}</p>
                            <p className="text-gray-600 mt-1">Project: {testimonials[currentIndex].project}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-navy-900" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-navy-900" />
            </motion.button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gold-500 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default TestimonialsSection

