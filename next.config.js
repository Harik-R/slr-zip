/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  }
    module.exports = {
  basePath: "",
  output: "standalone",
  experimental: {
  appDir: true,
},
};

module.exports = nextConfig;
