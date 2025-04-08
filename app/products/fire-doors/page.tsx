import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, AlertTriangle } from "lucide-react"
import Link from "next/link"

const FireDoorsPage = () => {
  const features = [
    "Fire resistance ratings from 30 minutes to 4 hours",
    "Smoke seals to prevent smoke penetration",
    "Self-closing mechanisms for added safety",
    "Intumescent strips that expand when exposed to heat",
    "Compliant with fire safety regulations and standards",
    "Available in various designs and finishes",
    "Durable construction for long-term performance",
    "Professional installation and certification",
  ]

  const products = [
    {
      name: "Wooden Fire Doors",
      description:
        "Traditional wooden doors with fire-resistant core and finishes, suitable for residential and commercial spaces.",
      image: "/images/interior1.jpg",
    },
    {
      name: "Steel Fire Doors",
      description:
        "Heavy-duty steel doors offering maximum fire protection, ideal for industrial settings and high-security areas.",
      image: "/images/interior2.jpg",
    },
    {
      name: "Glazed Fire Doors",
      description:
        "Fire doors with fire-rated glass panels, providing visibility while maintaining fire safety standards.",
      image: "/images/interior3.jpg",
    },
    {
      name: "Acoustic Fire Doors",
      description:
        "Dual-purpose doors offering both fire protection and sound insulation for areas requiring noise control.",
      image: "/images/interior4.jpg",
    },
    {
      name: "Emergency Exit Fire Doors",
      description: "Specially designed fire doors for emergency exits with panic hardware and easy-open mechanisms.",
      image: "/images/construction1.jpg",
    },
    {
      name: "Double Fire Doors",
      description: "Paired fire doors for wider openings, commonly used in corridors and main entrances.",
      image: "/images/construction2.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Fire Doors</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Safety-compliant fire doors designed to prevent the spread of fire and smoke in buildings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/images/interior2.jpg"
                alt="Fire Doors"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Life-Saving Fire Door Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our fire doors are designed to compartmentalize buildings, preventing the spread of fire and smoke to
                protect lives and property. Each door is manufactured to meet strict safety standards and regulations,
                providing crucial time for building evacuation during a fire emergency.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We offer a comprehensive range of fire doors suitable for various applications, from residential
                properties to commercial and industrial buildings, all designed with both safety and aesthetics in mind.
              </p>

              <div className="flex items-center mb-6 bg-red-50 p-4 rounded-lg border border-red-100">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-4" />
                <p className="text-gray-700">
                  Fire doors are a critical safety feature and must be properly installed and maintained by qualified
                  professionals to ensure they function correctly in an emergency.
                </p>
              </div>

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
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Fire Door Range</h2>
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

export default FireDoorsPage

