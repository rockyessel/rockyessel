/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'trishalim.com', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;
