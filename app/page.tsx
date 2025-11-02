import Link from "next/link"
import { ArrowRight, Package, Leaf, Award } from "lucide-react"
import { IndustryLeadersMarquee } from "@/components/industry-leaders-marquee"

export const metadata = {
  title: "ElitE Cartons and Packaging | Premium Packaging Solutions in Kerala",
  description:
    "Trusted packaging partners since 2014. Manufacturer of tissue boxes, paper bags, cake boxes, and eco-friendly food packaging in Kerala. Serving hotels, restaurants, and automotive brands.",
  keywords: [
    // Brand & general
    "ElitE",
    "ElitE Cartons",
    "ElitE Cartons and Packaging",
    "ElitE Cartons and Packaging Kerala",
    "ElitE Cartons and Packaging Kochi",
    "Elite",
    "Elite Cartons",
    "Elite Cartons and Packaging",
    "Elite Cartons and Packaging Kerala",
    "Elite Cartons and Packaging Kochi",
    "premium packaging solutions",
    "custom packaging Kerala",
    "packaging Kerala",
    "packaging Kochi",
    "tissue company kochi",
    "tissue company Kerala",

    // Product-based
    "tissue boxes",
    "tissue",
    "tissues",
    "facial tissue boxes",
    "paper bags",
    "boxes",
    "cake boxes",
    "pastry boxes",
    "packaging boxes",
    "bakery boxes",
    "cupcake boxes",
    "dessert boxes",
    "sweet boxes",
    "chocolate boxes",
    "food boxes",
    "burger boxes",
    "sandwich boxes",
    "pizza boxes",
    "takeaway packaging",
    "tissue manufacturing",
    "tissue manufacturers",
    "eco-friendly",
    "food packaging",
    "eco-friendly food boxes",
    "paper packaging boxes",
    "white packaging boxes",

    // Material & eco
    "eco-friendly packaging",
    "biodegradable packaging",
    "recyclable packaging",
    "sustainable packaging",
    "kraft paper boxes",
    "eco paper bags",
    "environment friendly packaging",

    // Industry focus
    "hotel packaging suppliers",
    "restaurant packaging suppliers",
    "bakery packaging suppliers",
    "cafe packaging solutions",
    "retail packaging Kerala",
    "corporate packaging",
    "custom logo packaging",
    "wholesale packaging boxes",

    // Manufacturing and services
    "carton manufacturers",
    "tissue manufacturers",
    "tissue manufacturing",
    "paper bag manufacturers",
    "packaging box manufacturers",
    "printing and packaging Kerala",
    "bulk packaging boxes",
    "custom packaging solutions",
    "packaging design Kerala",
    "local packaging supplier",
    "made in Kerala packaging",
  ],

  // Detects whether you’re on localhost or production
  metadataBase:
    process.env.NODE_ENV === "production"
      ? new URL("https://www.elitecartons.com")
      : new URL("https://elite-cartons.vercel.app"),

  openGraph: {
    title: "ElitE Cartons and Packaging",
    description:
      "Premium packaging solutions for hotels, restaurants, and retail brands. Trusted by industry leaders across Kerala.",
    url:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com"
        : "https://elite-cartons.vercel.app",
    siteName: "ElitE Cartons and Packaging",
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

  alternates: {
    canonical:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com"
        : "https://elite-cartons.vercel.app",
  },
}

const customers = [
  "Le Méridien",
  "Hotel Airlink Castle",
  "Golf View Hotel & Suites",
  "Keys Select Hotel",
  "Sarovaram",
  "SAJ Earth Resort & Convention Center",
  "Joys Palace Hotels & Resorts",
  "Grand Hotel",
  "Jeep",
  "Volkswagen",
  "Nissan",
  "Datsun",
  "Tata",
  "MG Motor",
  "MRF | Sangeetha Tyres",
  "Mahindra",
  "Skoda",
  "Honda",
  "Sree Subbiah Jewellers",
  "Manjali Jewellers",
  "Yuvarani Residency",
  "The Mercy Luxury Business Hotel",
  "Mountain Club",
  "De Cake World",
  "The Pastry World",
  "Intermas Marketing Company",
]

const industryLeaders = [
  { name: "Le Méridien", logo: "/LE-MERIDIAN-logo.png" },
  { name: "Hotel Airlink Castle", logo: "/Hotel-Airlink-Castle-logo.png" },
  { name: "Golf View Hotel & Suites", logo: "/Golf-View-Hotel-&-Suites-logo.png" },
  { name: "Keys Select Hotel", logo: "/Keys-Select-logo.png" },
  { name: "Sarovaram", logo: "/Sarovaram-logo.png" },
  { name: "SAJ Earth Resort & Convention Center", logo: "/SAJ-Earth-Resort-&-Convention-Center-logo.png" },
  { name: "Joys Palace Hotels & Resorts", logo: "/JOYS-Hotels-&-Resorts-logo.png" },
  { name: "Grand Hotel", logo: "/Grand-Hotel-logo.png" },
  { name: "Jeep", logo: "/Jeep-logo.png" },
  { name: "Volkswagen", logo: "/Volkswagen-logo.png" },
  { name: "Nissan", logo: "/nissan-logo.png" },
  { name: "Datsun", logo: "/Datsun-logo.png" },
  { name: "Tata", logo: "/Tata-logo.png" },
  { name: "MG Motor", logo: "/MG-Motor-logo.png" },
  { name: "MRF | Sangeetha Tyres", logo: "/MRF-logo.png" },
  { name: "Mahindra", logo: "/Mahindra-logo.png" },
  { name: "Skoda", logo: "/Skoda-logo.png" },
  { name: "Honda", logo: "/Honda-logo.png" },
  { name: "Sree Subbiah Jewellers", logo: "/Sree-Subbiah-Jewellers-logo.png" },
  { name: "Manjali Jewellers", logo: "/Manjali-Jewellers-logo.png" },
  { name: "Yuvarani Residency", logo: "/Yuvarani-Residency-logo.png" },
  { name: "The Mercy Luxury Business Hotel", logo: "/The-Mercy-Luxury-Business-Hotel-logo.png" },
  { name: "Mountain Club", logo: "/Mountain-Club-logo.png" },
  { name: "De Cake World", logo: "/De-Cake-World-logo.png" },
  { name: "The Pastry World", logo: "/The-Pastry-World-logo.png" },
  { name: "Intermas Marketing Company", logo: "/Intermas-Marketing-Company-logo.png" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-muted">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Premium Packaging Solutions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 text-balance">
            Trusted Packaging Partners Since 2014
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Manufacturer and exporter of tissue boxes, paper bags, cake boxes, and food packaging in Kerala. Serving
            hotels, restaurants, automotive, and retail businesses with quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Why Choose ElitE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quality Products</h3>
              <p className="text-muted-foreground">
                Premium packaging materials designed to protect and preserve your products with excellence.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Sustainable packaging solutions that care for the environment without compromising quality.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Trusted Partner</h3>
              <p className="text-muted-foreground">
                Over a decade of experience serving leading brands across hospitality, food, and automotive sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Customers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Trusted by Industry Leaders
          </h2>
          <IndustryLeadersMarquee items={industryLeaders} speed={80} pauseOnHover={true} />
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Tissue Boxes", description: "Premium tissue packaging for hospitality" },
              { title: "Paper Bags", description: "Durable and stylish paper bag solutions" },
              { title: "Cake Boxes", description: "Specialized packaging for bakery products" },
              { title: "Food Packaging", description: "Safe and hygienic food container solutions" },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-background hover:border-accent transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-lg opacity-90 mb-8 text-balance">
            Contact our team today to discuss your packaging needs and get a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
