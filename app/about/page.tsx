import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle, Award, Users, TrendingUp, Shield, Clock, HeartHandshake, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-lg text-secondary uppercase tracking-wider font-medium">ABOUT US</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            About <span className="text-secondary">Annapoorna Interio</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-tl-3xl z-0"></div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="About Annapoorna Interio"
                className="rounded-lg shadow-xl relative z-10 w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-br-3xl z-0"></div>

              <div className="absolute top-1/4 -left-8 bg-white p-4 rounded-lg shadow-xl z-20">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-secondary" />
                  <p className="font-semibold text-primary">10+ Years Experience</p>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white p-4 rounded-lg shadow-xl z-20">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                  <p className="font-semibold text-primary">500+ Projects Completed</p>
                </div>
              </div>

              <div className="absolute bottom-1/4 -left-8 bg-white p-4 rounded-lg shadow-xl z-20">
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-secondary" />
                  <p className="font-semibold text-primary">100% Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 mb-6">
                Annapoorna Interio is a premier interior design and construction company dedicated to transforming
                spaces into functional and aesthetically pleasing environments. With years of experience in the
                industry, we have established ourselves as a trusted name for quality craftsmanship and innovative
                design solutions.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                Our mission is to create spaces that reflect our clients' personalities, meet their functional needs,
                and exceed their expectations in terms of design and quality. We believe that every space has the
                potential to be both beautiful and practical, and we work tirelessly to achieve this balance in all our
                projects.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary text-lg">Premium Quality Materials</h3>
                    <p className="text-gray-600">We use only the highest quality materials for all our projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary text-lg">Expert Design Team</h3>
                    <p className="text-gray-600">
                      Our team of designers brings creativity and expertise to every project
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary text-lg">Timely Project Completion</h3>
                    <p className="text-gray-600">We value your time and ensure projects are completed on schedule</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                Why Choose <span className="text-secondary">Us</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Annapoorna Interio, we pride ourselves on our commitment to excellence and customer satisfaction. Our
                approach combines creativity, technical expertise, and attention to detail to deliver exceptional
                results that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our team brings years of industry experience to every project</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <HeartHandshake className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">We tailor our services to meet your specific needs and preferences</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Quality Materials</h3>
                    <p className="text-gray-600">
                      We use only high-quality materials and craftsmanship in all our work
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <ThumbsUp className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">Clear pricing with no hidden costs or unexpected charges</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Timely Completion</h3>
                    <p className="text-gray-600">We value your time and ensure projects are completed on schedule</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">After-Service Support</h3>
                    <p className="text-gray-600">Comprehensive support even after your project is completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/services">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage

