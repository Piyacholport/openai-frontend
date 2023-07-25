/** @type {import('next').NextConfig} */
require('dotenv').config();
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
  eslint: { ignoreDuringBuilds: process.env.NEXT_PUBLIC_APP_PORT !== 'production' },
  rewrites: async () => {
    
    if (process.env.NEXT_PUBLIC_APP_PORT !== 'local') return []
    return [
      {
        source: '/api/:slug*',
        destination: `${process.env.NEXT_PUBLIC_BASE_API}/api/:slug*`,
        basePath: false,
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

module.exports = {
  env: {
    appName: process.env.NEXT_PUBLIC_ENV,
    appUrl: process.env.NEXT_PUBLIC_APP_PORT,
  },
}