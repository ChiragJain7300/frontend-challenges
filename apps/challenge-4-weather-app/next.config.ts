import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/frontend-challenges/challenge-4-weather-app" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
