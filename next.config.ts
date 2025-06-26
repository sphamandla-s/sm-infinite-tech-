import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Key change for static export
  trailingSlash: true, // Ensures correct file paths
  images: {
    unoptimized: true, // Disables Image Optimization API (not needed for static)
  }
};

export default nextConfig;