/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edit.harrietforster.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
