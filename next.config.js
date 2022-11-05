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
  },
  i18n: {
    locales: ["cs",'en', 'de', 'ru', "fr", "hr", "et", "fi", "zh-CN", "zh-HK", "zh_tw" ,"hu", "ga", "iw", "it", "ja", "lv", "lt", "nl", "pt", "sr", "sl", "sv", "sk"],
    defaultLocale: 'cs',
  },
};

module.exports = nextConfig;
