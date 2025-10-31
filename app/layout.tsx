import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfairDisplay = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.elitecartons.com"
      : "http://localhost:3000"
  ),
  title: "Elite Cartons and Packaging",
  description:
    "Premium eco-friendly packaging solutions in Kochi, Kerala. Manufacturer and exporter of tissue boxes, paper bags, cake boxes, and food packaging.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Elite Cartons and Packaging",
    description:
      "Premium eco-friendly packaging solutions in Kochi, Kerala. Explore tissue boxes, cake boxes, paper bags, and more.",
    url:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com"
        : "http://localhost:3000",
    siteName: "Elite Cartons and Packaging",
    images: [
      {
        url: "/logo_in_seo.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Cartons and Packaging Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Cartons and Packaging",
    description:
      "Premium eco-friendly packaging solutions in Kochi, Kerala — tissue boxes, paper bags, and cake boxes.",
    images: ["/logo_in_seo.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
