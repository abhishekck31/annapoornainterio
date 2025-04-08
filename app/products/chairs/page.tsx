import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const ChairsPage = () => {
  const features = [
    "Ergonomic designs for proper posture and comfort",
    "Adjustable features for personalized settings",
    "High-quality materials for durability",
    "Variety of styles to match any interior design",
    "Breathable fabrics and materials",
    "Lumbar support for back health",
    "Swivel and mobility options",
    "Weight capacity for different body types",
  ]

  const products = [
    {
      name: "Executive Chairs",
      description:
        "Premium chairs with high backs, padded armrests, and luxurious materials for management and executive offices.",
      image: "/images/office1.jpg",
    },
    {
      name: "Task Chairs",
      description:
        "Ergonomic chairs designed for daily use with adjustable features for optimal comfort during long work hours.",
      image: "/images/office2.jpg",
    },
    {
      name: "Conference Chairs",
      description:
        "Comfortable and professional chairs for meeting rooms and conference spaces, often with sleek designs.",
      image: "/images/interior1.jpg",
    },
    {
      name: "Visitor Chairs",
      description: "Stylish and comfortable chairs for reception areas, waiting rooms, and guest seating in offices.",
      image: "/images/interior2.jpg",
    },
    {
      name: "Mesh Chairs",
      description: "Breathable chairs with mesh backs for improved air circulation, ideal for warmer environments.",
      image: "/images/interior3.jpg",
    },
    {
      name: "Designer Chairs",
      description:
        "Statement pieces that combine unique aesthetics with functionality for spaces where design is paramount.",
      image: "/images/interior4.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Chairs</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comfortable, stylish, and ergonomic chairs for offices, homes, and commercial spaces
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/images/office2.jpg"
                alt="Office Chairs"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Ergonomic Seating Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our chair collection combines ergonomic design with aesthetic appeal, providing comfortable seating
                solutions for various environments. We understand that chairs are not just furniture but tools that
                impact productivity, health, and well-being, especially in office settings where people spend
                significant hours seated.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From executive chairs to task seating, conference room chairs to visitor seating, our range offers
                options for every need and budget. Each chair is selected for its quality construction, durability, and
                ergonomic features that support proper posture and reduce fatigue.
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
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Chair Collection</h2>
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

export default ChairsPage

