import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  cacheComponents: true, // By default it's false 
  crossOrigin: 'anonymous'
};

export default nextConfig;
