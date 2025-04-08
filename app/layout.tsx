import type React from "react"
import type { Metadata } from "next"
import ClientRootLayout from "./client-layout"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Annapoorna Interio | Premium Interior & Construction Services in Bangalore",
  description:
    "Top-rated interior design and construction services in Bangalore and Yelahanka. Specializing in home and office interiors, construction, renovation, and premium products.",
  keywords:
    "interior design Bangalore, construction services Yelahanka, office interior Bangalore, home renovation Yelahanka, UPVC windows Bangalore, fire doors Yelahanka, system railings, PVC false ceilings, workstations Bangalore, interior designers near me",
  authors: [{ name: "Annapoorna Interio" }],
  creator: "Annapoorna Interio",
  publisher: "Annapoorna Interio",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://annapoornainterio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Annapoorna Interio | Premium Interior & Construction Services in Bangalore",
    description:
      "Top-rated interior design and construction services in Bangalore and Yelahanka. Transform your space with our expert team.",
    url: "https://annapoornainterio.com",
    siteName: "Annapoorna Interio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <StructuredData />
      <ClientRootLayout>{children}</ClientRootLayout>
    </>
  )
}



import './globals.css'