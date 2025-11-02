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
          // Security Headers
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },

          // ✅ FIXED CSP: allows hydration + analytics
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              img-src * data:;
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              connect-src 'self' vitals.vercel-insights.com;
              frame-ancestors 'none';
            `.replace(/\n/g, "")
          },

          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
