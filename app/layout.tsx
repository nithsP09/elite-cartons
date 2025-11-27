import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { HeaderWrapper } from "@/components/HeaderWrapper"
import { Footer } from "@/components/footer"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfairDisplay = Playfair_Display({ subsets: ["latin"] })

// Your site URL — STATIC (don’t compute from env)
const SITE_URL = "https://www.elitecartons.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ElitE Cartons and Packaging",
  description:
    "Premium eco-friendly packaging solutions in Kochi, Kerala. Manufacturer and exporter of tissue boxes, paper bags, cake boxes, and food packaging.",

  icons: {
    icon: "/favicon.png",
  },

  verification: {
    google: "XPjZEHJm97dGwXNp7muW8Je1vMLd4iscf0mo_hBFSKc",
  },

  openGraph: {
    title: "ElitE Cartons and Packaging",
    description:
      "Premium eco-friendly packaging solutions in Kochi, Kerala. Explore tissue boxes, cake boxes, paper bags, and more.",
    url: SITE_URL,
    siteName: "ElitE Cartons and Packaging",
    images: [
      {
        url: "/logo_in_seo.jpg",
        width: 1200,
        height: 630,
        alt: "ElitE Cartons and Packaging Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ElitE Cartons and Packaging",
    description:
      "Premium eco-friendly packaging solutions in Kochi, Kerala — tissue boxes, paper bags, and cake boxes.",
    images: ["/logo_in_seo.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* ✅ LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ElitE Cartons and Packaging",
              image: `${SITE_URL}/logo_in_seo.jpg`,
              description:
                "Premium custom packaging manufacturer in Kochi, Kerala — specializing in eco-friendly food boxes, cake boxes, tissue boxes, and paper bags.",
              url: SITE_URL,
              telephone: "+91 8589818425",
              address: {
                "@type": "PostalAddress",
                streetAddress: "44/3161 Deshabhimani Road, Kaloor",
                addressLocality: "Kochi",
                postalCode: "682017",
                addressCountry: "IN",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "$$",
            }),
          }}
        />

        {/* 🚀 Organization JSON-LD → Google uses THIS to show your logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ElitE Cartons and Packaging",
              url: SITE_URL,
              logo: `${SITE_URL}/logo-512.png`,
            }),
          }}
        />
      </head>

      <body className="font-sans antialiased flex flex-col min-h-screen">
        <HeaderWrapper />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
