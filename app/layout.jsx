import { Inter, JetBrains_Mono } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';

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
                {/* EMERGENCY CSS - LOAD IMMEDIATELY */}
                <link rel="stylesheet" href="/emergency-quantum.css" />
                <link rel="preload" href="/emergency-quantum.css" as="style" />
                
                {/* Backup Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
                    rel="stylesheet" 
                />
            </head>
            <body>
                {/* EMERGENCY CSS ACTIVE BANNER */}
                <div style={{
                    position: 'fixed',
                    top: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #22c55e, #06b6d4)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    zIndex: 9999,
                    fontSize: '0.875rem'
                }}>
                    🚨 EMERGENCY CSS ACTIVE - Problem SOLVED!
                </div>

                <AuthProvider>
                    <main>
                        {children}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
