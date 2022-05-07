/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cloudflare-ipfs.com', 'loremflickr.com'],
  },
};

module.exports = nextConfig;
