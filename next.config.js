/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint: {
  //   dirs: ['src'],
  //   ignoreDuringBuilds: true,
  // },

  reactStrictMode: true,
  swcMinify: true,


  // Uncoment to add domain whitelist
  images: {
    //  ⬇️ common mobile/desktop breakpoints
    deviceSizes: [640, 768, 1024, 1280, 1600],
    // allow your S3 / CDN domains
    domains: ['strapi.odinschool.com', 'www.odinschool.com', 'odinschool-20029733.hs-sites.com'],
    // or use fine-grained patterns (v14+)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.odinschool.com',
      },
      {
        protocol: 'https',
        hostname: 'www.odinschool.com', // ✅ added this block
      },
      {
        protocol: 'https',
        hostname: 'www.odinschool-20029733.hs-sites.com', // ✅ added this block
      },
    ],
    // modern formats first
    formats: ['image/avif', 'image/webp'],
    // 24 h CDN cache
    minimumCacheTTL: 60 * 60 * 24,
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
