/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.rbxcdn.com'
      }
    ]
  }
};

export default nextConfig;
