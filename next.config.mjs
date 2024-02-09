/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.achieve.nl','storage.googleapis.com'],
    },
    typescript : {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
