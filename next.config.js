/** @type {import('next').NextConfig} */
const nextConfig = {
  output: {
    export: true,
  },
  images: {
    domains: ['cdn.imagin.studio']
  }
}

module.exports = nextConfig
