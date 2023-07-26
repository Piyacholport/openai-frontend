/** @type {import('next').NextConfig} */
const withLess = require('next-with-less')
const withImages = require('next-images');

const nextConfig = withLess({
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  rewrites: async () => {
    
    return [
      {
        source: '/api/:slug*',
        destination: `https://27b6-2001-44c8-4710-635d-5c94-9708-97c7-4221.ngrok-free.app/api/:slug*`,
      },
    ]
  },
})

module.exports = nextConfig
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

