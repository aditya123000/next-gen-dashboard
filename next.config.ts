import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better performance
  reactStrictMode: true,

  // Compress output
  compress: true,

  // Reduce build output
  poweredByHeader: false,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable experimental features for better performance
  experimental: {
    // Optimize server components
    optimizeServerReact: true,
    // Optimize package imports
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@supabase/supabase-js",
    ],
  },

  // Enable HTTP/2
  httpAgentOptions: {
    keepAlive: true,
  },
};

export default nextConfig;
