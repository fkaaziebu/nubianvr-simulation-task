/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pbs.twimg.com", "swapi.dev", "picsum.photos"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
