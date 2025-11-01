import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/footer_logo.png"
                alt="ElitE Cartons and Packaging Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="font-serif font-bold text-lg">ElitE Cartons and Packaging</h3>
            </div>

            <p className="text-sm opacity-90 mb-4">
              Trusted packaging partners since 2014, serving businesses across Kerala with quality tissue boxes, paper
              bags, and food packaging solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#tissue-boxes" className="hover:text-accent transition-colors">
                  Tissue Boxes
                </Link>
              </li>
              <li>
                <Link href="/services#paper-bags" className="hover:text-accent transition-colors">
                  Paper Bags
                </Link>
              </li>
              <li>
                <Link href="/services#cake-boxes" className="hover:text-accent transition-colors">
                  Cake Boxes
                </Link>
              </li>
              <li>
                <Link href="/services#food-packaging" className="hover:text-accent transition-colors">
                  Food Packaging
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>44/3161 Deshabhimani Road Kaloor - 682 017</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+918589818425" className="hover:text-accent transition-colors">
                  +91 8589818425
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:elitecartonsekm@gmail.com" className="hover:text-accent transition-colors">
                  elitecartonsekm@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75 gap-4">      

            <p>&copy; {currentYear} ElitE Cartons and Packaging. All rights reserved.</p>

            <p className="text-center">
              Designed with ❤️ by{" "}
              <span className="font-bold" style={{ color: "#fffdd0" }}>
                Nithya Parvathy
              </span>
            </p>

            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
