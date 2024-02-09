/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID:"6arfyk8f",
        NEXT_PUBLIC_SANITY_DATASET:"production"
    },
    images: {
        domains: ['www.achieve.nl','storage.googleapis.com'],
    },
    typescript : {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
