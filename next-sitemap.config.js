/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.elitecartons.com"
    : "https://elite-cartons.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000, // optional but good for large sites
  changefreq: "weekly",
  priority: 0.7,
};
