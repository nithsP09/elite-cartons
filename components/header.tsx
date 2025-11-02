"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  console.log("menu open:", isOpen);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-[9999] w-full border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/favicon.png"
              alt="ElitE Cartons and Packaging Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="hidden sm:inline font-serif font-bold text-lg text-foreground">
              ElitE Cartons and Packaging
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-muted-foreground transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              console.log("Button clicked!");
              setIsOpen((prev) => !prev);
            }}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors outline-none focus:outline-none focus-visible:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 bg-white border border-red-500">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
