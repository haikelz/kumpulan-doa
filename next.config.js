/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
