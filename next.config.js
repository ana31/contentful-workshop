/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    SPACE_ID: process.env.SPACE_ID,
    PROD_CONTENTFUL_DELIVERY_KEY: process.env.PROD_CONTENTFUL_DELIVERY_KEY,
  }
}

module.exports = nextConfig
