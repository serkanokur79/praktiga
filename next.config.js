
/** @type {import('next').NextConfig} */

const { patchWebpackConfig } = require("next-global-css");
const webpackNodeExternals = require("webpack-node-externals");

const withTM = require('next-transpile-modules')(["react-leaflet-cluster", "leaflet", "react-leaflet"]);

const nextConfig = withTM({
  // output: 'standalone',
  // distDir: 'build',
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
  // transpilePackages: ["react-leaflet-cluster", "react-leaflet"],
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === "production"
  //   // removeConsole: true,
  // },
  webpack: (config, options) => {
    patchWebpackConfig(config, options);
    if (options.isServer) {
      config.externals = webpackNodeExternals({
        allowlist: [/design-system/],
      });
    }
    // if (process.env.NODE_ENV === "production") {
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    // }
    return config;
  },
  // presets: ["next/babel"],
});

module.exports = nextConfig;


