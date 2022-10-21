const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const plugins = require('next-compose-plugins')

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})
const withTM = require('next-transpile-modules')(['shadergradient'])

const nextConfig = {
  webpack(config, { isServer }) {
    // audio support
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    // shader support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })

    // Framer module support
    config.experiments = {
      buildHttp: {
        allowedUris: [
          'https://framer.com/m/',
          'https://framerusercontent.com/',
          'https://fonts.gstatic.com/',
          'https://ga.jspm.io/',
          'https://jspm.dev/',
          'https://gh.ruucm.work',
          'http://localhost:8001',
          'http://127.0.0.1:8001',
        ],
      },
      // buildHttp: true,
      // layers: true,
    }

    return config
  },
  pageExtensions: ['page.ts', 'page.tsx', 'api.ts', 'api.tsx'],
}

// manage i18n
if (process.env.EXPORT !== 'true') {
  nextConfig.i18n = {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  }
}

module.exports = plugins([[withPWA], withBundleAnalyzer], withTM(nextConfig))
