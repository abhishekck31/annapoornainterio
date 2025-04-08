"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Sparkles } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Contact Us</span>
              <Sparkles className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Get In Touch</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question or ready to start your project? Reach out to us and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="w-full border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      className="w-full border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="w-full border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="w-full border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-700 text-navy-900 font-semibold py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-navy-900 text-white p-8 rounded-xl shadow-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gold-400">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-navy-800 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold-300 mb-1">Our Location</h4>
                      <p className="text-gray-300">123 Design Street, Creative Avenue, City, State, 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-navy-800 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold-300 mb-1">Email Us</h4>
                      <p className="text-gray-300">info@annapoornainterio.com</p>
                      <p className="text-gray-300">support@annapoornainterio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-navy-800 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold-300 mb-1">Call Us</h4>
                      <p className="text-gray-300">+91 98765 43210</p>
                      <p className="text-gray-300">+91 98765 43211</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9848478716456!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1680698273780!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Annapoorna Interio Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

