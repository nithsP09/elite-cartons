import { CheckCircle, Users, Zap, Globe, Shield } from "lucide-react"

export const metadata = {
  title: "About ElitE Cartons and Packaging | Trusted Packaging Manufacturer in Kerala",
  description:
    "Learn about ElitE Cartons and Packaging — Kerala’s trusted packaging manufacturer since 2014. Discover our journey, values, and commitment to quality, sustainability, and customer satisfaction.",
  keywords: [
    "Elite Cartons",
    "ElitE Cartons",
    "ElitE Cartons and Packaging",
    "Elite Cartons and Packaging",
    "About ElitE Cartons",
    "About Elite Cartons",
    "About ElitE Cartons and Packaging",
    "About Elite Cartons and Packaging",
    "about Elite Cartons Kerala",
    "packaging company Kerala",
    "carton manufacturers",
    "eco-friendly packaging Kerala",
    "tissue box manufacturers",
    "paper bag manufacturers Kerala",
    "cake box suppliers",
    "food packaging Kerala",
    "sustainable packaging solutions",
    "custom packaging manufacturers",
    "packaging partners Kerala",
    "packaging suppliers Kochi",
    "ElitE Cartons company profile",
    "Elite Cartons company profile",
    "Elite Cartons and Packaging company profile",
    "ElitE Cartons and Packaging company profile",
  ],
  openGraph: {
    title: "About ElitE Cartons and Packaging | Trusted Packaging Manufacturer in Kerala",
    description:
      "Discover the story of ElitE Cartons and Packaging — your reliable partner in sustainable, high-quality packaging since 2014.",
    url:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com/about"
        : "https://elite-cartons.vercel.app/about",
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
        ? "https://www.elitecartons.com/about"
        : "https://elite-cartons.vercel.app/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            About ElitE Cartons and Packaging
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            A decade of excellence in packaging innovation and customer satisfaction
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Founded in 2014, Elite Cartons and Packaging began with a simple vision: to provide high-quality, reliable
              packaging solutions to businesses across Kerala. What started as a small operation has grown into a
              trusted partner for leading brands in hospitality, food service, automotive, and retail sectors.
            </p>
            <p>
              Over the past decade, we've built our reputation on three core principles: quality, reliability, and
              customer-centric service. We understand that packaging is more than just a container : it's a reflection of
              your brand and a promise to your customers.
            </p>
            <p>
              Today, Elite Cartons serves hundreds of satisfied clients, from boutique hotels and restaurants to major
              automotive dealerships and jewelry retailers. Our commitment to excellence and innovation continues to
              drive us forward.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-lg border border-border bg-background">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver innovative, sustainable, and cost-effective packaging solutions that help our clients succeed
                in their markets while maintaining the highest standards of quality and environmental responsibility.
              </p>
            </div>

            {/* Values */}
            <div className="p-8 rounded-lg border border-border bg-background">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Quality in every product we deliver</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Integrity and transparency in business</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Environmental sustainability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Customer-first approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Why Choose ElitE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Expertise */}
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">10+ Years Experience</h3>
              <p className="text-sm text-muted-foreground">
                A decade of proven expertise in packaging solutions and customer service.
              </p>
            </div>

            {/* Diverse Clientele */}
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Diverse Clientele</h3>
              <p className="text-sm text-muted-foreground">
                Trusted by hotels, restaurants, automotive, and retail businesses across Kerala.
              </p>
            </div>

            {/* Sustainability */}
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Eco-Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Committed to sustainable practices and environmentally responsible packaging.
              </p>
            </div>

            {/* Quality */}
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous quality control ensures every product meets our high standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Details & Registration */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Business Details & Registration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Information */}
            <div className="p-8 rounded-lg border border-border bg-background">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-black" />
                Company Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Company Name</p>
                    <p className="text-sm text-muted-foreground">ElitE Cartons and Packaging</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Kochi, Kerala, India</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Business Type</p>
                    <p className="text-sm text-muted-foreground">Packaging Manufacturing & Distribution</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tax & Registration Details */}
            <div className="p-8 rounded-lg border border-border bg-background">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-black" />
                Tax & Registration
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">PAN Number</p>
                    <p className="text-sm text-muted-foreground font-mono">AAEFE94618</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">GSTIN</p>
                    <p className="text-sm text-muted-foreground font-mono">32AAEFE9461B1ZS</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Established</p>
                    <p className="text-sm text-muted-foreground">2014</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
