import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Elite Cartons | Custom Packaging Solutions Kochi",
  description:
    "Get in touch with Elite Cartons for custom packaging solutions in Kochi. Reach us via phone, email, or our contact form for inquiries and quotes.",
  keywords: [
    "Elite contact",
    "ElitE contact",
    "ElitE Kerala contact",
    "Elite Kerala contact",
    "ElitE Kochi contact",
    "Elite Kochi contact",
    "Elite Cartons contact",
    "ElitE Cartons contact",
    "ElitE Cartons Kerala contact",
    "ElitE Cartons Kochi contact",
    "Elite Cartons Kerala contact",
    "Elite Cartons Kochi contact",
    "ElitE Cartons and Packaging Kerala contact",
    "Elite Cartons and Packaging Kerala contact",
    "ElitE Cartons and Packaging Kochi contact",
    "Elite Cartons and Packaging Kochi contact",
    "custom packaging Kochi",
    "packaging manufacturers Kerala",
  ],
  openGraph: {
    title: "Contact Elite Cartons | Custom Packaging Solutions Kochi",
    description:
      "Have questions? Contact Elite Cartons today for premium packaging solutions tailored to your business needs.",
    url:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com/contact"
        : "https://elite-cartons.vercel.app/contact",
    siteName: "Elite Cartons",
    images: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? "https://www.elitecartons.com/logo_in_seo.jpg"
            : "https://elite-cartons.vercel.app/logo_in_seo.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Cartons Packaging Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Elite Cartons | Custom Packaging Solutions Kochi",
    description:
      "Get in touch with Elite Cartons for inquiries, quotes, or custom packaging solutions in Kochi.",
    images: ["/logo_in_seo.jpg"],
  },
  alternates: {
    canonical:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com/contact"
        : "https://elite-cartons.vercel.app/contact",
  },
}
