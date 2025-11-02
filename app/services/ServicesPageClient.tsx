"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ServicesPageClient() {
  const pathname = usePathname()

  useEffect(() => {
        if (typeof window === "undefined") return

        // Try a few header selectors so you don't depend on <header> tag specifically
        const findHeader = () =>
            document.querySelector(
            "header, [role='banner'], .site-header, .main-header, #header"
            ) as HTMLElement | null

        // Scroll function that will compute offset and scroll smoothly
        const performScroll = (hash: string) => {
            if (!hash) return
            const query = hash.startsWith("#") ? hash : `#${hash}`

            // try multiple times until success (element may render later)
            let attempts = 0
            const maxAttempts = 8
            const attemptDelay = 250 // ms

            const tryScroll = () => {
            attempts++
            const element = document.querySelector(query) as HTMLElement | null
            const header = findHeader()
            const headerHeight = header ? header.getBoundingClientRect().height : 0

            console.log("[scroll-debug] attempt", attempts, { query, element, headerHeight })

            if (element) {
                // compute final y with header offset + small gap
                const gap = 20 // extra space below header
                const y = Math.round(element.getBoundingClientRect().top + window.scrollY - (headerHeight + gap))

                // ensure y is non-negative
                const finalY = Math.max(0, y)
                window.scrollTo({ top: finalY, behavior: "smooth" })
                return
            }

            if (attempts < maxAttempts) {
                setTimeout(tryScroll, attemptDelay)
            } else {
                console.warn("[scroll-debug] element not found after retries:", query)
            }
            }

            // Run first try slightly later to let rendering finish
            setTimeout(tryScroll, 120) // initial small delay
        }

        // When page loads, handle any existing hash
        if (window.location.hash) {
            performScroll(window.location.hash)
        }

        // Listen to hash changes (user clicks anchor, or programmatic change)
        const onHashChange = () => {
            performScroll(window.location.hash)
        }
        window.addEventListener("hashchange", onHashChange)

        // Also listen for popstate (back/forward)
        window.addEventListener("popstate", onHashChange)

        // Clean up
        return () => {
            window.removeEventListener("hashchange", onHashChange)
            window.removeEventListener("popstate", onHashChange)
        }
    }, []) // empty deps — run once on client

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
