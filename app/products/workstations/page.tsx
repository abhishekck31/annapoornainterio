import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const WorkstationsPage = () => {
  const features = [
    "Ergonomic design for comfort and productivity",
    "Customizable configurations to fit your space",
    "High-quality materials for durability",
    "Cable management solutions for a clean look",
    "Modular designs for easy reconfiguration",
    "Storage options integrated into workstations",
    "Variety of finishes and colors available",
    "Space-efficient designs for maximum utilization",
  ]

  const products = [
    {
      name: "Open Plan Workstations",
      description:
        "Collaborative workstations designed for open office environments, promoting teamwork and communication.",
      image: "/images/office1.jpg",
    },
    {
      name: "Cubicle Workstations",
      description: "Semi-private workspaces with partitions, providing a balance of privacy and collaboration.",
      image: "/images/office2.jpg",
    },
    {
      name: "Bench Workstations",
      description: "Linear desk systems that maximize space efficiency while maintaining a clean, modern aesthetic.",
      image: "/images/interior1.jpg",
    },
    {
      name: "Executive Workstations",
      description: "Premium workstations with enhanced features and finishes for management and executive staff.",
      image: "/images/interior2.jpg",
    },
    {
      name: "Height-Adjustable Workstations",
      description:
        "Ergonomic workstations that can transition between sitting and standing positions for improved health and comfort.",
      image: "/images/interior3.jpg",
    },
    {
      name: "Collaborative Pods",
      description: "Enclosed or semi-enclosed workspaces designed for small group collaboration and focused work.",
      image: "/images/interior4.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Workstations</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ergonomic and efficient workstation solutions for modern office environments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/images/office1.jpg"
                alt="Office Workstations"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Productive Workspace Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our workstation solutions are designed to enhance productivity, comfort, and collaboration in modern
                office environments. We understand that the workspace plays a crucial role in employee satisfaction and
                efficiency, which is why we offer customizable workstations that adapt to your specific needs and office
                culture.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From open-plan collaborative spaces to private cubicles, our workstations combine functionality with
                aesthetics, creating environments where people can do their best work. Each solution is designed with
                ergonomics in mind, ensuring comfort during long working hours.
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
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Workstation Solutions</h2>
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

export default WorkstationsPage

