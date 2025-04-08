import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const SystemRailingsPage = () => {
  const features = [
    "Modern and elegant designs",
    "Durable materials including stainless steel, aluminum, and glass",
    "Customizable to fit any space and style",
    "Corrosion-resistant for indoor and outdoor applications",
    "Easy to clean and maintain",
    "Compliant with safety standards and building codes",
    "Professional installation services",
    "Long-lasting finish and structural integrity",
  ]

  const products = [
    {
      name: "Glass Railings",
      description:
        "Sleek and modern railings with tempered glass panels for unobstructed views and contemporary aesthetics.",
      image: "/images/interior1.jpg",
    },
    {
      name: "Stainless Steel Railings",
      description:
        "Durable and elegant railings made from high-quality stainless steel, perfect for both indoor and outdoor applications.",
      image: "/images/interior2.jpg",
    },
    {
      name: "Aluminum Railings",
      description: "Lightweight yet strong railings that are corrosion-resistant and ideal for outdoor environments.",
      image: "/images/interior3.jpg",
    },
    {
      name: "Cable Railings",
      description:
        "Minimalist railings with horizontal cables that provide safety while maintaining views and a modern look.",
      image: "/images/interior4.jpg",
    },
    {
      name: "Combination Railings",
      description:
        "Custom railings that combine multiple materials like glass, metal, and wood for unique design statements.",
      image: "/images/construction1.jpg",
    },
    {
      name: "Decorative Railings",
      description:
        "Ornate railings with decorative elements and patterns for spaces requiring a more elaborate aesthetic.",
      image: "/images/construction2.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">System Railings</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern, customizable railing systems for staircases, balconies, and other applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/images/interior3.jpg"
                alt="System Railings"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Elegant & Functional Railing Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our system railings combine aesthetics with functionality, providing safety while enhancing the visual
                appeal of your space. Whether for staircases, balconies, terraces, or other applications, our railings
                are designed to complement your interior or exterior design.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We offer a wide range of materials, styles, and finishes to match your specific requirements and design
                preferences. Each railing system is custom-designed and professionally installed to ensure perfect fit
                and compliance with safety standards.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">Key Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/#contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Railing Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/#contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Us for More Information
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default SystemRailingsPage

