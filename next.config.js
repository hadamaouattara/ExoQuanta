/** @type {import('next').NextConfig} */
const nextConfig = {
    // Retiré output: 'export' pour permettre les routes API
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // Configuration optimisée pour Netlify
    poweredByHeader: false,
    reactStrictMode: true,
    // Optimisations pour le build
    experimental: {
        optimizeCss: true,
    },
    // Headers de sécurité
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
