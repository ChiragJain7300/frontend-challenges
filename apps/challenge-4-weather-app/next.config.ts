import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";
const basePath = isProd ? "/frontend-challenges/challenge-4-weather-app" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
