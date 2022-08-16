/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    URL_BACKEND: process.env.URL_BACKEND,
    URL_CLOUDINARY: process.env.URL_CLOUDINARY
  },images: {
    domains: ["res.cloudinary.com"],
  }
}

module.exports = nextConfig
