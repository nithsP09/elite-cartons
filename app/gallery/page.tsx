import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Elite Cartons and Packaging",
  description:
    "Explore our gallery showcasing a wide range of premium packaging products including cake boxes, tissue boxes, paper bags, and eco-friendly food packaging made in Kerala.",
  keywords: [
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
    "packaging gallery",
    "premium packaging Kerala",
    "eco-friendly packaging gallery",
    "cake boxes gallery",
    "tissue boxes gallery",
    "food packaging Kerala",
    "food packaging Kochi",
    "paper bags Kerala",
    "custom packaging designs",
    "carton manufacturers Kerala",
    "carton manufacturers Kochi",
  ],
  openGraph: {
    title: "Gallery | Elite Cartons and Packaging",
    description:
      "Discover our gallery of beautifully crafted packaging products — from cake boxes to eco-friendly food containers.",
    url:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com/gallery"
        : "http://localhost:3000/gallery",
    siteName: "Elite Cartons and Packaging",
    images: [
      {
        url: "/logo_in_seo.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Cartons Packaging Gallery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical:
      process.env.NODE_ENV === "production"
        ? "https://www.elitecartons.com/gallery"
        : "http://localhost:3000/gallery",
  },
}

export default function Gallery() {
  const images = Array.from({ length: 28 }, (_, i) => ({
    id: i + 1,
    src: `/gallery_set/Packaging_Product_${i + 1}.png`,
  }))

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Explore our diverse range of high-quality packaging solutions
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg bg-muted aspect-square cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={`Packaging Product ${image.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-none/40 transition-colors duration-300 flex items-end p-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
