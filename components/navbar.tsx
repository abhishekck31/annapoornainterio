"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-1" : "bg-white py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Annapoorna Interio Logo"
                width={220}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`text-gray-700 hover:text-gold-600 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${
                activeLink === "/" ? "text-gold-600 font-semibold" : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-gray-700 hover:text-gold-600 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${
                activeLink === "/about" ? "text-gold-600 font-semibold" : ""
              }`}
            >
              About Us
            </Link>

            <Link
              href="/services"
              className={`text-gray-700 hover:text-gold-600 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${
                activeLink === "/services" ? "text-gold-600 font-semibold" : ""
              }`}
            >
              Services
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center text-gray-700 hover:text-gold-600 px-3 py-2 rounded-md font-medium transition-colors duration-300 bg-transparent hover:bg-transparent focus:bg-transparent ${
                    activeLink.includes("/products") ? "text-gold-600 font-semibold" : ""
                  }`}
                >
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg rounded-md overflow-hidden w-56">
                <DropdownMenuItem className="hover:bg-gold-50 focus:bg-gold-50 transition-colors duration-200">
                  <Link href="/products/upvc-windows-doors" className="w-full">
                    UPVC Windows & Doors
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gold-50 focus:bg-gold-50 transition-colors duration-200">
                  <Link href="/products/fire-doors" className="w-full">
                    Fire Doors
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gold-50 focus:bg-gold-50 transition-colors duration-200">
                  <Link href="/products/system-railings" className="w-full">
                    System Railings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gold-50 focus:bg-gold-50 transition-colors duration-200">
                  <Link href="/products/pvc-false-ceilings" className="w-full">
                    PVC False Ceilings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gold-50 focus:bg-gold-50 transition-colors duration-200">
                  <Link href="/products/workstations" className="w-full">
                    Workstations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gold-50 focus:bg-gold-50 transition-colors duration-200">
                  <Link href="/products/chairs" className="w-full">
                    Chairs
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/gallery"
              className={`text-gray-700 hover:text-gold-600 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${
                activeLink === "/gallery" ? "text-gold-600 font-semibold" : ""
              }`}
            >
              Gallery
            </Link>


            <Link href="/contact">
              <Button className="bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 rounded-md font-medium ml-2 shadow-md hover:shadow-lg transition-all duration-300 border border-navy-700">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gold-600 focus:outline-none transition-colors duration-300"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300 ${
                activeLink === "/" ? "text-gold-600 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300 ${
                activeLink === "/about" ? "text-gold-600 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              href="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300 ${
                activeLink === "/services" ? "text-gold-600 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>

            <div className="relative">
              <button
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300 ${
                  activeLink.includes("/products") ? "text-gold-600 font-semibold" : "text-gray-700"
                }`}
              >
                Products
              </button>
              <div className="pl-6 space-y-1">
                <Link
                  href="/products/upvc-windows-doors"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  UPVC Windows & Doors
                </Link>
                <Link
                  href="/products/fire-doors"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fire Doors
                </Link>
                <Link
                  href="/products/system-railings"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  System Railings
                </Link>
                <Link
                  href="/products/pvc-false-ceilings"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PVC False Ceilings
                </Link>
                <Link
                  href="/products/workstations"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Workstations
                </Link>
                <Link
                  href="/products/chairs"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Chairs
                </Link>
              </div>
            </div>

            <Link
              href="/gallery"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gold-600 hover:bg-gray-50 transition-colors duration-300 ${
                activeLink === "/gallery" ? "text-gold-600 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-navy-900 text-white hover:bg-navy-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar

