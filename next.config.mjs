/** @type {import('next').NextConfig} */
import dotenvExpand from 'dotenv-expand'

dotenvExpand.expand({ parsed: { ...process.env } });

const nextConfig = {
    images: {
        domains: ['www.achieve.nl','storage.googleapis.com'],
    },
    typescript : {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
