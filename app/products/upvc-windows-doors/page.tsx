import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const UPVCWindowsDoorsPage = () => {
  const features = [
    "Energy efficient with excellent thermal insulation",
    "Sound insulation for a quieter environment",
    "Weather resistant and durable in all conditions",
    "Low maintenance and easy to clean",
    "Enhanced security features",
    "Variety of designs and finishes available",
    "Eco-friendly and recyclable materials",
    "UV resistant - won't fade or discolor",
  ]

  const products = [
    {
      name: "Sliding Windows",
      description: "Space-saving windows that slide horizontally, perfect for areas with limited space.",
      image: "/images/interior1.jpg",
    },
    {
      name: "Casement Windows",
      description: "Hinged windows that open outward, providing maximum ventilation and unobstructed views.",
      image: "/images/interior2.jpg",
    },
    {
      name: "Tilt and Turn Windows",
      description:
        "Versatile windows that can tilt inward for ventilation or open fully for cleaning and emergency exits.",
      image: "/images/interior3.jpg",
    },
    {
      name: "Sliding Doors",
      description: "Space-efficient doors that slide horizontally, ideal for patios and balconies.",
      image: "/images/interior4.jpg",
    },
    {
      name: "French Doors",
      description:
        "Elegant double doors that open outward, creating a wide opening to connect indoor and outdoor spaces.",
      image: "/images/construction1.jpg",
    },
    {
      name: "Folding Doors",
      description:
        "Multi-panel doors that fold to one side, creating a seamless transition between indoor and outdoor spaces.",
      image: "/images/construction2.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">UPVC Windows & Doors</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-quality, energy-efficient UPVC windows and doors for residential and commercial buildings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/images/interior1.jpg"
                alt="UPVC Windows and Doors"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Premium Quality UPVC Windows & Doors</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our UPVC windows and doors combine style, durability, and energy efficiency to enhance your home or
                office. Made from high-quality unplasticized polyvinyl chloride (UPVC), these products offer superior
                insulation, weather resistance, and security features.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're looking for windows that reduce your energy bills or doors that enhance your property's
                security, our UPVC solutions are designed to meet your specific needs and preferences.
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
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Our UPVC Product Range</h2>
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

export default UPVCWindowsDoorsPage

