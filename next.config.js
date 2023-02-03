/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'trishalim.com',
      'cdn.sanity.io',
      'portfollioapp.vercel.app',
    ],
  },
  async headers() {
    const headers = [];
    headers.push({
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'index',
        },
      ],
      source: '*',
    });
    return headers;
  },
};

module.exports = nextConfig;
