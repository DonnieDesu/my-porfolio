/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: '/my-porfolio',
  assetPrefix: '/my-porfolio/',
};

module.exports = nextConfig;
