"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const apiKey = process.env.NEXT_PUBLIC_WEB3FORM_API_KEY

  // ✅ Custom validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Full name is required."
    if (!formData.email.trim()) newErrors.email = "Email address is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address."

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required."
    else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number."

    if (!formData.company.trim()) newErrors.company = "Company name is required."

    if (!formData.subject.trim()) newErrors.subject = "Please select a subject."

    // Message is optional
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => ({ ...prev, [name]: "" })) // clear error when user types
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const errors = validateForm()
    setFieldErrors(errors)

    if (Object.keys(errors).length > 0) {
      setLoading(false)
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: apiKey,
          ...formData,
          subject:
            formData.subject === "quote"
              ? "Request a Quote"
              : formData.subject === "inquiry"
              ? "General Inquiry"
              : "Other",
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        })
        setFieldErrors({})
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Network error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <a href="mailto:elitecartonsekm@gmail.com" className="text-black hover:underline">
                      elitecartonsekm@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp in same card, but listed separately */}
              <div className="p-6 rounded-lg border border-border bg-card space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-black">+91 8589818425</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <FaWhatsapp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-black">+91 8589818425</p>
                  </div>
                </div>
              </div>


              {/* Location */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Location</h3>
                    <p className="text-black-foreground">44/3161 Deshabhimani Road Kaloor - 682 017</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
                    <p className="text-[15px] text-black-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-[15px] text-black-foreground">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-lg border border-border bg-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                    ✅ Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">{error}</div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent"
                    />
                    {fieldErrors.name && <p className="text-red-600 text-sm mt-1">{fieldErrors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent"
                    />
                    {fieldErrors.email && <p className="text-red-600 text-sm mt-1">{fieldErrors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <div className="flex items-center">
                      <span className="px-3 py-2 bg-muted border border-border rounded-l-lg text-foreground select-none">+91</span>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your number"
                        className="w-full px-4 py-2 border border-border bg-background text-foreground focus:ring-2 focus:ring-accent rounded-r-lg"
                      />
                    </div>
                    {fieldErrors.phone && <p className="text-red-600 text-sm mt-1">{fieldErrors.phone}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                    <input
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent"
                    />
                    {fieldErrors.company && <p className="text-red-600 text-sm mt-1">{fieldErrors.company}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <Select
                      value={formData.subject}
                      onValueChange={(val) => setFormData({ ...formData, subject: val })}
                    >
                      <SelectTrigger
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-base focus:ring-2 focus:ring-accent focus:outline-none min-h-[42px]"
                      >
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border rounded-lg">
                        <SelectItem value="inquiry">General Inquiry</SelectItem>
                        <SelectItem value="quote">Request a Quote</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>



                  {/* Message (Optional) */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your packaging needs..."
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                      loading
                        ? "bg-primary/70 cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What is your minimum order quantity?",
                answer:
                  "We work with businesses of all sizes. Contact us to discuss your specific requirements and we'll provide a customized quote.",
              },
              {
                question: "Do you offer custom designs?",
                answer:
                  "Yes! We offer full customization services including custom designs, sizes, colors, and branding options.",
              },
              {
                question: "What is your typical delivery time?",
                answer:
                  "Delivery times vary based on order size and customization. We typically deliver within 2-4 weeks. Rush orders may be available.",
              },
              {
                question: "Are your products eco-friendly?",
                answer:
                  "We offer eco-friendly packaging options made from sustainable materials. Ask us about our green packaging solutions.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
