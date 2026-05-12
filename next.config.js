/** @type {import('next').NextConfig} */
const repo = 'bevium-landingpage'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig