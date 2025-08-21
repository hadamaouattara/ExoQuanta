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
                {/* Fix pour les erreurs WebSocket en production */}
                <Script
                    src="/websocket-fix.js"
                    strategy="beforeInteractive"
                    id="websocket-fix"
                />
            </head>
            <body className="antialiased text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-inter">
                <AuthProvider>
                    <div className="min-h-screen">
                        <main className="w-full">{children}</main>
                    </div>
                    
                    <div className="fixed inset-0 pointer-events-none z-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
