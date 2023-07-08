/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        serverActions: true,
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '*',
                port: '',
            },
            {
                protocol: 'https',
                hostname: '*',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
