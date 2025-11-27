import { Metadata } from "next"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = {
title: "Our Services | ElitE Cartons - Custom Packaging Solutions",
  description:
    "Explore ElitE Cartons' range of premium packaging products including tissue boxes, paper bags, cake boxes, and food packaging. Eco-friendly, customizable, and durable solutions for your business.",
  keywords: [
    "Elite Cartons",
    "ElitE Cartons",
    "ElitE Cartons and Packaging",
    "Elite Cartons and Packaging",
    "packaging Kerala",
    "tissue boxes",
    "tissue",
    "pastry boxes",
    "boxes",
    "food boxes",
    "packaging boxes",
    "eco-friendly",
    "tissue manufacturing",
    "tissue manufacturers",
    "paper bags",
    "cake boxes",
    "food packaging",
    "eco-friendly packaging",
    "carton manufacturers",
    "custom packaging solutions",
    "custom tissue boxes",
    "wholesale packaging Kerala",
    "bakery packaging",
    "restaurant packaging",
    "paper packaging India",
    "sustainable packaging",
    "printed cartons",
    "corrugated boxes",
    "premium packaging",
  ],
  openGraph: {
    title: "Our Services | ElitE Cartons - Custom Packaging Solutions",
    description:
      "Discover high-quality, customizable packaging products — from tissue and cake boxes to paper bags and eco-friendly food packaging, crafted by Elite Cartons.",
    url:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com/services"
        : "https://elite-cartons.vercel.app/services",
    siteName: "ElitE Cartons and Packaging Cartons",
    images: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? "https://www.elitecartons.com/logo_in_seo.jpg"
            : "https://elite-cartons.vercel.app/logo_in_seo.jpg",
        width: 1200,
        height: 630,
        alt: "ElitE Cartons Packaging Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com/services"
        : "https://elite-cartons.vercel.app/services",
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
