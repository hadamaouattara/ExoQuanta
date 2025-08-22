import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-inter'
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
        <html lang="fr" className={inter.variable}>
            <head>
                <link rel="icon" href="/quantum-favicon.svg" sizes="any" />
                
                {/* DEFINITIVE QUANTUM CSS SYSTEM */}
                <link rel="stylesheet" href="/quantum.css" />
                <link rel="preload" href="/quantum.css" as="style" />
                
                {/* Google Fonts for Inter family */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>
                {/* SUCCESS BANNER - DEFINITIVE CSS ACTIVE */}
                <div className="deployment-success">
                    🎯 QUANTUM CSS DEFINITIVE - Zero Dependencies!
                </div>

                <AuthProvider>
                    <main className="min-h-screen">
                        {children}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
