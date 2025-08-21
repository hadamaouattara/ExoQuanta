import '../styles/globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import Script from 'next/script';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-jetbrains-mono'
});

export const metadata = {
    title: {
        template: '%s | Exonov Quantum',
        default: 'Exonov Quantum - Plateforme de Simulation Quantique Avancée'
    },
    description: 'Plateforme révolutionnaire de simulation quantique. Explorez les mystères de la physique quantique avec des outils de pointe et une IA intégrée.',
    keywords: ['quantum computing', 'simulation quantique', 'physique quantique', 'exonov', 'quantum algorithms', 'qubits', 'firebase auth'],
    authors: [{ name: 'Exonov Quantum Team' }],
    creator: 'Exonov Quantum',
    publisher: 'Exonov Quantum',
    robots: 'index, follow',
    openGraph: {
        title: 'Exonov Quantum - Simulation Quantique Avancée',
        description: 'Plateforme révolutionnaire de simulation quantique avec IA intégrée et authentification sécurisée',
        type: 'website',
        locale: 'fr_FR',
        siteName: 'Exonov Quantum'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exonov Quantum - Simulation Quantique Avancée',
        description: 'Plateforme révolutionnaire de simulation quantique avec IA intégrée'
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#7c3aed'
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <head>
                <link rel="icon" href="/quantum-favicon.svg" sizes="any" />
                <Script
                    src="/websocket-fix.js"
                    strategy="beforeInteractive"
                    id="websocket-fix"
                />
                <style dangerouslySetInnerHTML={{
                    __html: `
                        * { box-sizing: border-box; margin: 0; padding: 0; }
                        body {
                            font-family: Inter, sans-serif;
                            color: white;
                            background: linear-gradient(135deg, #0f172a 0%, #581c87 25%, #0f172a 50%, #8b5cf6 75%, #0f172a 100%);
                            min-height: 100vh;
                            -webkit-font-smoothing: antialiased;
                        }
                        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
                        .flex { display: flex; }
                        .items-center { align-items: center; }
                        .justify-between { justify-between: space-between; }
                        .justify-center { justify-content: center; }
                        .space-x-4 > * + * { margin-left: 1rem; }
                        .space-x-6 > * + * { margin-left: 1.5rem; }
                        .space-y-4 > * + * { margin-top: 1rem; }
                        .text-center { text-align: center; }
                        .text-white { color: white; }
                        .text-purple-300 { color: #d8b4fe; }
                        .text-purple-400 { color: #c084fc; }
                        .text-green-300 { color: #86efac; }
                        .text-cyan-400 { color: #22d3ee; }
                        .bg-purple-600 { background-color: #9333ea; }
                        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
                        .from-purple-500 { --tw-gradient-from: #a855f7; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(168 85 247 / 0)); }
                        .to-pink-500 { --tw-gradient-to: #ec4899; }
                        .from-purple-400 { --tw-gradient-from: #c084fc; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(192 132 252 / 0)); }
                        .to-pink-400 { --tw-gradient-to: #f472b6; }
                        .rounded-lg { border-radius: 0.5rem; }
                        .rounded-xl { border-radius: 0.75rem; }
                        .border { border-width: 1px; }
                        .border-purple-500 { border-color: #a855f7; }
                        .border-green-500 { border-color: #22c55e; }
                        .p-4 { padding: 1rem; }
                        .p-6 { padding: 1.5rem; }
                        .px-4 { padding-left: 1rem; padding-right: 1rem; }
                        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
                        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
                        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
                        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
                        .mb-4 { margin-bottom: 1rem; }
                        .mb-6 { margin-bottom: 1.5rem; }
                        .mb-12 { margin-bottom: 3rem; }
                        .mt-4 { margin-top: 1rem; }
                        .mt-12 { margin-top: 3rem; }
                        .w-10 { width: 2.5rem; }
                        .h-10 { height: 2.5rem; }
                        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
                        .text-5xl { font-size: 3rem; line-height: 1; }
                        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
                        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
                        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
                        .font-bold { font-weight: 700; }
                        .font-semibold { font-weight: 600; }
                        .grid { display: grid; }
                        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                        .gap-4 { gap: 1rem; }
                        .gap-8 { gap: 2rem; }
                        .hidden { display: none; }
                        .inline-block { display: inline-block; }
                        .relative { position: relative; }
                        .sticky { position: sticky; }
                        .fixed { position: fixed; }
                        .top-0 { top: 0px; }
                        .inset-0 { top: 0px; right: 0px; bottom: 0px; left: 0px; }
                        .z-50 { z-index: 50; }
                        .z-0 { z-index: 0; }
                        .min-h-screen { min-height: 100vh; }
                        .w-full { width: 100%; }
                        .hover\\:text-purple-100:hover { color: #f3e8ff; }
                        .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
                        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
                        .hover\\:scale-105:hover { transform: scale(1.05); }
                        .transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
                        .backdrop-blur-lg { backdrop-filter: blur(16px); }
                        .bg-black\\/50 { background-color: rgb(0 0 0 / 0.5); }
                        .bg-black\\/30 { background-color: rgb(0 0 0 / 0.3); }
                        .bg-green-500\\/20 { background-color: rgb(34 197 94 / 0.2); }
                        .border-purple-500\\/30 { border-color: rgb(168 85 247 / 0.3); }
                        .border-purple-500\\/50 { border-color: rgb(168 85 247 / 0.5); }
                        .border-green-500\\/50 { border-color: rgb(34 197 94 / 0.5); }
                        .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
                        .cursor-pointer { cursor: pointer; }
                        .select-none { user-select: none; }
                        .pointer-events-none { pointer-events: none; }
                        a { color: inherit; text-decoration: none; }
                        button { background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
                        button:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3); }
                        @media (min-width: 768px) { 
                            .md\\:flex { display: flex; }
                            .md\\:hidden { display: none; }
                        }
                        @media (min-width: 1024px) {
                            .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                            .lg\\:col-span-1 { grid-column: span 1 / span 1; }
                            .lg\\:col-span-2 { grid-column: span 2 / span 2; }
                        }
                    `
                }} />
            </head>
            <body>
                <AuthProvider>
                    <div className="min-h-screen">
                        <main className="w-full">{children}</main>
                    </div>
                    
                    <div className="fixed inset-0 pointer-events-none z-0">
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 50% 50%, rgba(147,51,234,0.1), transparent 50%)'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 80% 20%, rgba(139,92,246,0.1), transparent 50%)'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 20% 80%, rgba(168,85,247,0.1), transparent 50%)'
                        }}></div>
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
