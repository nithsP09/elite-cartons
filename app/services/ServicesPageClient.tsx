"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ServicesPageClient() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
        const scrollToElement = () => {
            const header = document.querySelector("header") // or your header selector
            const headerHeight = header ? header.getBoundingClientRect().height : 0
            const yOffset = -(headerHeight + 40)
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
        }

        // Run it twice: once now, again slightly later after layout settles
        setTimeout(scrollToElement, 500)
        setTimeout(scrollToElement, 1000)
        }
      }
    }
  }, [pathname])

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
              <div
                id={service.title.toLowerCase().replace(/\s+/g, "-")}
                key={index}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
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
    </main>
  )
}
