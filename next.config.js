/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'cloudflare-ipfs.com',
      'loremflickr.com',
      'unsplash.com',
      'picsum.photos',
    ],
  },
};

module.exports = nextConfig;
