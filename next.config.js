/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [60, 70, 75, 80, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
