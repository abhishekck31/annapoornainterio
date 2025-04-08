import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const PVCFalseCeilingsPage = () => {
  const features = [
    "Lightweight and easy to install",
    "Water and moisture resistant",
    "Fire retardant options available",
    "Low maintenance and easy to clean",
    "Excellent thermal and acoustic insulation",
    "Wide range of designs, colors, and patterns",
    "Resistant to termites and pests",
    "Long-lasting and durable",
  ]

  const products = [
    {
      name: "PVC Ceiling Panels",
      description: "Flat panels available in various designs and finishes for a clean, modern look.",
      image: "/images/interior1.jpg",
    },
    {
      name: "PVC Ceiling Tiles",
      description:
        "Individual tiles that can be installed in a grid system, allowing for easy access to the plenum space.",
      image: "/images/interior2.jpg",
    },
    {
      name: "PVC Ceiling Planks",
      description: "Long, narrow panels that create a linear look, ideal for contemporary spaces.",
      image: "/images/interior3.jpg",
    },
    {
      name: "Decorative PVC Ceilings",
      description: "Ornate designs with embossed patterns and textures for spaces requiring decorative elements.",
      image: "/images/interior4.jpg",
    },
    {
      name: "Perforated PVC Ceilings",
      description: "Panels with small perforations that improve acoustics and add visual interest.",
      image: "/images/construction1.jpg",
    },
    {
      name: "Backlit PVC Ceilings",
      description: "Translucent panels designed to be illuminated from behind, creating a soft, diffused light effect.",
      image: "/images/construction2.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">PVC False Ceilings</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lightweight, water-resistant, and easy-to-install PVC false ceiling solutions for various spaces
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/images/interior4.jpg"
                alt="PVC False Ceilings"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Modern PVC Ceiling Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our PVC false ceilings offer a perfect combination of aesthetics, functionality, and durability. These
                lightweight ceiling solutions are ideal for both residential and commercial spaces, providing a clean,
                modern look while concealing wiring, ductwork, and other overhead elements.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                PVC ceilings are particularly suitable for areas with high humidity like bathrooms, kitchens, and
                swimming pools due to their water-resistant properties. They're also an excellent choice for quick
                renovations as they can be installed directly over existing ceilings.
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
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Our PVC Ceiling Options</h2>
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

export default PVCFalseCeilingsPage

