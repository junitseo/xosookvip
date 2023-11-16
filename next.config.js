/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.xosoaladin.com", "xosoaladin.com"],
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  env: {
    NEXT_PUBLIC_API_DOMAIN: "https://api.xosookvip.com/",
    NEXT_PUBLIC_SCHEMA_NAME: "xosookvip",
    NEXT_PUBLIC_SCHEMA_URL: "https://xosookvip.com",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
};

module.exports = nextConfig;
