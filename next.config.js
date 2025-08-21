/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuration serverless pour Netlify avec Firebase Auth
    output: undefined, // Retour au mode serverless
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
    
    // Headers de sécurité pour Firebase Auth
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