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
  verification: {
    google: "XPjZEHJm97dGwXNp7muW8Je1vMLd4iscf0mo_hBFSKc",
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
        {/* ✅ LocalBusiness JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Elite Cartons and Packaging",
              "image":
                process.env.NODE_ENV === "production"
                  ? "https://www.elitecartons.com/logo_in_seo.jpg"
                  : "https://elite-cartons.vercel.app/logo_in_seo.jpg",
              "description":
                "Premium custom packaging manufacturer in Kochi, Kerala — specializing in eco-friendly food boxes, cake boxes, tissue boxes, and paper bags.",
              "url":
                process.env.NODE_ENV === "production"
                  ? "https://www.elitecartons.com"
                  : "https://elite-cartons.vercel.app",
              "telephone": "+91 8589818425",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "44/3161 Deshabhimani Road, Kaloor",
                "addressLocality": "Kochi",
                "postalCode": "682017",
                "addressCountry": "IN",
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",              
            }),
          }}
        />

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
