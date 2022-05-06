/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cloudflare-ipfs.com'],
  },
};

module.exports = nextConfig;
