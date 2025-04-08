"use client"

import type React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollNavigation from "@/components/scroll-navigation"
import WhatsAppButton from "@/components/whatsapp-button"
import SocialLinks from "@/components/social-links"
import { AnimatePresence } from "framer-motion"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${poppins.variable} font-poppins`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
          <ScrollNavigation />
          <WhatsAppButton />
          <SocialLinks />
        </ThemeProvider>
      </body>
    </html>
  )
}

