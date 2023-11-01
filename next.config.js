/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.xosoaladin.com"],
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
    NEXT_PUBLIC_API_DOMAIN: "https://api.dongdoi.com/",
    NEXT_PUBLIC_SCHEMA_NAME: "dongdoi",
    NEXT_PUBLIC_SCHEMA_URL: "https://dongdoi.com",
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
};

module.exports = nextConfig;
