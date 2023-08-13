/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['jotai-devtools'],
  env: {
    API_BASE_URL: process.env['API_BASE_URL'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
      },
    ],
  },
};

module.exports = nextConfig;
