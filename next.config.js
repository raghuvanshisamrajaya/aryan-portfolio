const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages specific configuration
  basePath: process.env.NODE_ENV === 'production' ? '/aryan-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aryan-portfolio/' : '',
}

module.exports = nextConfig
