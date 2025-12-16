import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "h8dxkfmaphn8o0p3.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
