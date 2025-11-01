import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Elite Cartons - Custom Packaging Solutions",
  description:
    "Explore Elite Cartons' range of premium packaging products including tissue boxes, paper bags, cake boxes, and food packaging. Eco-friendly, customizable, and durable solutions for your business.",
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
    title: "Our Services | Elite Cartons - Custom Packaging Solutions",
    description:
      "Discover high-quality, customizable packaging products — from tissue and cake boxes to paper bags and eco-friendly food packaging, crafted by Elite Cartons.",
    url:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com/services"
        : "http://localhost:3000/services",
    siteName: "Elite Cartons",
    images: [
      {
        url: "/logo_in_seo.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Cartons Packaging Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com/services"
        : "http://localhost:3000/services",
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: "Tissue Boxes",
      description: "Premium tissue packaging solutions for hospitality and commercial use",
      features: [
        "Customizable designs and sizes",
        "High-quality tissue material",
        "Durable and long-lasting",
        "Perfect for hotels and restaurants",
        "Bulk order discounts available",
        "Delivery within 10–12 days",
      ],
      image: "/Tissue_Boxes.png",
    },
    {
      title: "Paper Bags",
      description: "Stylish and durable paper bags for retail and food service",
      features: [
        "Eco-friendly materials",
        "Custom branding options",
        "Various sizes available",
        "Reinforced handles",
        "Food-safe options",
        "Delivery within 10–12 days",
      ],
      image: "/Paper_Bags.png",
    },
    {
      title: "Cake Boxes",
      description: "Specialized packaging for bakery and confectionery products",
      features: [
        "Secure closure design",
        "Protective interior padding",
        "Attractive exterior finish",
        "Multiple size options",
        "Custom printing available",
        "Delivery within 10–12 days",
      ],
      image: "/Cake_Boxes.png",
    },
    {
      title: "Food Packaging",
      description: "Safe and hygienic packaging for food service and retail",
      features: [
        "Food-grade materials",
        "Leak-proof design",
        "Temperature resistant",
        "Customizable branding",
        "Bulk order support",
        "Delivery within 10–12 days",
      ],
      image: "/Food_Packaging.png",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">Our Services</h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            Comprehensive packaging solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div id={service.title.toLowerCase().replace(/\s+/g, "-")} key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-full h-80 rounded-lg border-2 border-border overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description:
                  "Every product undergoes rigorous quality checks to ensure it meets our high standards and your expectations.",
              },
              {
                title: "Customization",
                description:
                  "We offer custom designs, sizes, and branding options to perfectly match your business requirements.",
              },
              {
                title: "Competitive Pricing",
                description:
                  "Bulk discounts and wholesale pricing available for businesses of all sizes without compromising quality.",
              },
              {
                title: "Fast Delivery",
                description: "Efficient production and logistics ensure your orders are delivered on time, every time.",
              },
              {
                title: "Eco-Friendly Options",
                description: "Sustainable packaging solutions that help your business reduce environmental impact.",
              },
              {
                title: "Expert Support",
                description:
                  "Our experienced team is ready to help you find the perfect packaging solution for your needs.",
              },
            ].map((benefit, index) => (
              <div key={index} className="p-6 rounded-lg border border-border bg-background">
                <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Custom Packaging Solutions?</h2>
          <p className="text-lg opacity-90 mb-8 text-balance">
            Contact our team to discuss your specific requirements and get a personalized quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
