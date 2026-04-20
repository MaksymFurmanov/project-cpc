import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cpc-storage.s3.eu-central-1.amazonaws.com",
            },
        ],
    },

    transpilePackages: ["cpc-shared"],
};

export default nextConfig;
