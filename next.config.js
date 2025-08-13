/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // Désactiver les fonctionnalités qui ne fonctionnent pas en mode static
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig
