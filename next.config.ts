/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    optimizePackageImports: ["react", "react-dom"],
  },
  swcMinify: true,  
};

module.exports = nextConfig;
