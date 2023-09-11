/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pbs.twimg.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
