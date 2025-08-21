/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configuration pour export statique compatible Netlify
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    poweredByHeader: false,
    reactStrictMode: true,
    
    // Désactiver les features incompatibles avec l'export statique
    eslint: {
        ignoreDuringBuilds: true,
    },
    
    // Force cache busting with timestamp
    generateBuildId: () => {
        return `build-${Date.now()}`;
    },
    
    // Configuration pour générer toutes les pages statiques
    generateStaticParams: async () => {
        return [
            { slug: [''] },
            { slug: ['dashboard'] },
            { slug: ['simulation'] },
            { slug: ['documentation'] }
        ];
    },
    
    // Headers de sécurité (gérés par Netlify)
    async headers() {
        return [];
    },
}

module.exports = nextConfig