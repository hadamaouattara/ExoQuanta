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
}

module.exports = nextConfig