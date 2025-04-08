"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ProcessTimeline from "@/components/process-timeline"
import DifferenceSection from "@/components/difference-section"
import TestimonialsSection from "@/components/testimonials-section"
import ExpertiseSection from "@/components/expertise-section"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import CTASection from "@/components/cta-section"
import StatsSection from "@/components/stats-section"
import FAQSection from "@/components/faq-section"

export default function Home() {
  // Initialize scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll")
      const textGlowElements = document.querySelectorAll(".text-glow-scroll, .heading-glow-scroll")

      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight * 0.85) {
          element.classList.add("animate-active")
        }
      })

      textGlowElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight * 0.85 && elementPosition > 0) {
          element.classList.add("glow-active")
        } else {
          element.classList.remove("glow-active")
        }
      })
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ExpertiseSection />
      <AboutSection />
      <ProcessTimeline />
      <DifferenceSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  )
}

