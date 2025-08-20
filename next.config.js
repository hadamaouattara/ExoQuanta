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
    // swcMinify retiré - obsolète dans Next.js 15
}

module.exports = nextConfig
