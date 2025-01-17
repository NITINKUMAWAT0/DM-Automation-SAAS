/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "scontent.cdninstagram.com",
            },
            {
                protocol: "https",
                hostname: "instagram.fjai1-4.fna.fbcdn.net",
            },
            {
                protocol: "https",
                hostname: "instagram.fjai14-1.fna.fbcdn.net",
                
            },
        ],
    },
};

export default nextConfig;