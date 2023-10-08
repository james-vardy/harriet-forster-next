/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
  images: { unoptimized: true },
};

module.exports = nextConfig;
