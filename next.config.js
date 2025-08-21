/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuration pour export statique Netlify
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    poweredByHeader: false,
    reactStrictMode: true,
    
    // Force cache busting with timestamp
    generateBuildId: () => {
        return `build-${Date.now()}`;
    },
    
    // Headers de sécurité et cache control
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
                    {
                        key: 'Cache-Control',
                        value: 'no-cache, no-store, must-revalidate',
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig