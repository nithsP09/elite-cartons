/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
          // Optional: Uncomment below for extra strictness (can break inline scripts)
          // {
          //   key: "Content-Security-Policy",
          //   value: "default-src 'self'; img-src * data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
          // },
        ],
      },
    ]
  },
}

export default nextConfig
