/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: false,
  },
  images: {
    domains: ["https://particles.js.org", "upload.wikimedia.org", "i.imgur.com"]
  }
};

module.exports = nextConfig;
