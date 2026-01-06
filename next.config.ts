import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Required for static hosting like Netlify to serve local images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },

      // ✅ ADD THIS
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

