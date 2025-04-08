"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["All", "Home Interior", "Office Interior", "Construction"]

const galleryItems = [
  // Home Interior
  {
    id: 1,
    title: "Modern Living Room",
    category: "Home Interior",
    description: "Contemporary living room design with minimalist furniture and warm color palette",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Luxury Bedroom",
    category: "Home Interior",
    description: "Elegant master bedroom with custom headboard and ambient lighting",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Designer Kitchen",
    category: "Home Interior",
    description: "Modern kitchen with premium appliances and custom cabinetry",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Contemporary Bathroom",
    category: "Home Interior",
    description: "Spa-inspired bathroom with walk-in shower and freestanding tub",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Dining Area",
    category: "Home Interior",
    description: "Elegant dining space with custom lighting and statement furniture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Home Office",
    category: "Home Interior",
    description: "Functional home office with built-in storage and ergonomic design",
    image: "/placeholder.svg?height=400&width=600",
  },

  // Office Interior
  {
    id: 7,
    title: "Executive Office",
    category: "Office Interior",
    description: "Premium executive office with custom desk and sophisticated design",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    title: "Open Plan Workspace",
    category: "Office Interior",
    description: "Collaborative open office design with flexible workstations",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 9,
    title: "Conference Room",
    category: "Office Interior",
    description: "Modern meeting space with integrated technology and comfortable seating",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 10,
    title: "Reception Area",
    category: "Office Interior",
    description: "Welcoming reception space that reflects company branding",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 11,
    title: "Breakout Space",
    category: "Office Interior",
    description: "Casual lounge area for employee relaxation and informal meetings",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 12,
    title: "Private Office Pods",
    category: "Office Interior",
    description: "Soundproof office pods for focused work and privacy",
    image: "/placeholder.svg?height=400&width=600",
  },

  // Construction
  {
    id: 13,
    title: "Luxury Villa",
    category: "Construction",
    description: "Custom-built luxury residence with premium finishes",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 14,
    title: "Commercial Building",
    category: "Construction",
    description: "Multi-story commercial complex with modern architecture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 15,
    title: "Residential Apartment",
    category: "Construction",
    description: "High-end apartment building with premium amenities",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 16,
    title: "Retail Space",
    category: "Construction",
    description: "Custom retail environment designed for optimal customer experience",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 17,
    title: "Restaurant Construction",
    category: "Construction",
    description: "Turnkey restaurant build with custom kitchen and dining areas",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 18,
    title: "Office Building",
    category: "Construction",
    description: "Modern office building with sustainable design features",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState<number | null>(null)

  const filteredGallery =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Our Gallery</span>
              <Sparkles className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Portfolio</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of completed projects and get inspired
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-navy-900 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setSelectedImage(item.id)}
                  onMouseEnter={() => setIsHovered(item.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <CardContent className="p-0 relative group">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="text-white text-center p-6 transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-white/80 mt-1">{item.category}</p>
                        {isHovered === item.id && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-white/90 mt-2 text-sm"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox for selected image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryItems.find((item) => item.id === selectedImage) && (
                <>
                  <img
                    src={galleryItems.find((item) => item.id === selectedImage)?.image || "/placeholder.svg"}
                    alt={galleryItems.find((item) => item.id === selectedImage)?.title}
                    className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
                  />
                  <div className="text-white text-center mt-6 bg-navy-900/50 p-4 rounded-lg backdrop-blur-sm">
                    <h3 className="text-2xl font-bold">
                      {galleryItems.find((item) => item.id === selectedImage)?.title}
                    </h3>
                    <p className="text-gold-400 mt-1">
                      {galleryItems.find((item) => item.id === selectedImage)?.category}
                    </p>
                    <p className="text-gray-300 mt-3">
                      {galleryItems.find((item) => item.id === selectedImage)?.description}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}

