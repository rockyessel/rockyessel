/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'images2.imgbox.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'media.licdn.com' },
      { hostname: 'source.unsplash.com' },
      { hostname: 'localhost' },
      { hostname: 'local.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'app.local.com' },
      { hostname: 'cdn.sanity.io' },
      { hostname: 'lootrush-website-assets.s3.us-east-1.amazonaws.com' },
      { hostname: 'pbs.twimg.com' },
      { hostname: 'import.cdn.thinkific.com' },
      { hostname: 'encrypted-tbn0.gstatic.com' },
      { hostname: 'vara.network' },
      { hostname: 'generated.vusercontent.net' },
      { hostname: 'ipfs.io' },
      { hostname: 'hackernoon.imgix.net' },
      { hostname: 'symbion.com' },
      { hostname: 'symbionapi.vercel.app' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'descriptive-ostrich-350.convex.cloud' },
    ],
  },
};

export default nextConfig;
