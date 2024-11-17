/** @type {import('next').NextConfig} */

const { patchWebpackConfig } = require("next-global-css");
const webpackNodeExternals = require("webpack-node-externals");

const withTM = require('next-transpile-modules')([
  "react-leaflet-cluster", 
  "leaflet", 
  "react-leaflet"
]);

const nextConfig = withTM({
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icons8.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = webpackNodeExternals({
        allowlist: [/design-system/],
      });
    }

    return config;
  },
});

module.exports = nextConfig;
