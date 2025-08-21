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
                        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
                        
                        * { 
                            box-sizing: border-box; 
                            margin: 0; 
                            padding: 0; 
                        }
                        
                        html, body {
                            height: 100%;
                            overflow-x: hidden;
                        }
                        
                        body {
                            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                            color: #ffffff;
                            background: linear-gradient(135deg, #0f172a 0%, #581c87 20%, #7c3aed 40%, #581c87 60%, #0f172a 80%, #7c3aed 100%);
                            background-size: 400% 400%;
                            animation: quantumGradient 8s ease-in-out infinite;
                            min-height: 100vh;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                            line-height: 1.6;
                        }
                        
                        @keyframes quantumGradient {
                            0%, 100% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                        }
                        
                        /* Layout Classes */
                        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
                        .flex { display: flex; }
                        .items-center { align-items: center; }
                        .justify-between { justify-content: space-between; }
                        .justify-center { justify-content: center; }
                        .space-x-4 > * + * { margin-left: 1rem; }
                        .space-x-6 > * + * { margin-left: 1.5rem; }
                        .space-y-4 > * + * { margin-top: 1rem; }
                        .space-y-6 > * + * { margin-top: 1.5rem; }
                        .space-y-8 > * + * { margin-top: 2rem; }
                        .grid { display: grid; }
                        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
                        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                        .gap-4 { gap: 1rem; }
                        .gap-6 { gap: 1.5rem; }
                        .gap-8 { gap: 2rem; }
                        
                        /* Typography */
                        .text-center { text-align: center; }
                        .text-white { color: #ffffff; }
                        .text-purple-100 { color: #f3e8ff; }
                        .text-purple-200 { color: #e9d5ff; }
                        .text-purple-300 { color: #d8b4fe; }
                        .text-purple-400 { color: #c084fc; }
                        .text-green-300 { color: #86efac; }
                        .text-green-400 { color: #4ade80; }
                        .text-cyan-400 { color: #22d3ee; }
                        .text-blue-400 { color: #60a5fa; }
                        .text-2xl { font-size: 1.5rem; line-height: 2rem; font-weight: 700; }
                        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; font-weight: 800; }
                        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; font-weight: 900; }
                        .text-5xl { font-size: 3rem; line-height: 1; font-weight: 900; }
                        .text-xl { font-size: 1.25rem; line-height: 1.75rem; font-weight: 600; }
                        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
                        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
                        .font-bold { font-weight: 700; }
                        .font-semibold { font-weight: 600; }
                        .font-medium { font-weight: 500; }
                        
                        /* Backgrounds and Colors */
                        .bg-black\\/30 { background-color: rgba(0, 0, 0, 0.3); }
                        .bg-black\\/50 { background-color: rgba(0, 0, 0, 0.5); }
                        .bg-purple-600 { background-color: #9333ea; }
                        .bg-purple-500\\/20 { background-color: rgba(168, 85, 247, 0.2); }
                        .bg-green-500\\/20 { background-color: rgba(34, 197, 94, 0.2); }
                        .bg-blue-500\\/20 { background-color: rgba(59, 130, 246, 0.2); }
                        
                        /* Borders */
                        .border { border-width: 1px; }
                        .border-purple-500 { border-color: #a855f7; }
                        .border-purple-500\\/30 { border-color: rgba(168, 85, 247, 0.3); }
                        .border-purple-500\\/50 { border-color: rgba(168, 85, 247, 0.5); }
                        .border-green-500 { border-color: #22c55e; }
                        .border-green-500\\/50 { border-color: rgba(34, 197, 94, 0.5); }
                        .border-blue-500\\/50 { border-color: rgba(59, 130, 246, 0.5); }
                        .rounded { border-radius: 0.25rem; }
                        .rounded-lg { border-radius: 0.5rem; }
                        .rounded-xl { border-radius: 0.75rem; }
                        .rounded-2xl { border-radius: 1rem; }
                        
                        /* Spacing */
                        .p-4 { padding: 1rem; }
                        .p-6 { padding: 1.5rem; }
                        .p-8 { padding: 2rem; }
                        .px-4 { padding-left: 1rem; padding-right: 1rem; }
                        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
                        .px-8 { padding-left: 2rem; padding-right: 2rem; }
                        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
                        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
                        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
                        .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
                        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
                        .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
                        .m-4 { margin: 1rem; }
                        .mb-4 { margin-bottom: 1rem; }
                        .mb-6 { margin-bottom: 1.5rem; }
                        .mb-8 { margin-bottom: 2rem; }
                        .mb-12 { margin-bottom: 3rem; }
                        .mt-4 { margin-top: 1rem; }
                        .mt-8 { margin-top: 2rem; }
                        .mt-12 { margin-top: 3rem; }
                        
                        /* Sizing */
                        .w-8 { width: 2rem; }
                        .w-10 { width: 2.5rem; }
                        .w-12 { width: 3rem; }
                        .h-8 { height: 2rem; }
                        .h-10 { height: 2.5rem; }
                        .h-12 { height: 3rem; }
                        .w-full { width: 100%; }
                        .h-full { height: 100%; }
                        .min-h-screen { min-height: 100vh; }
                        
                        /* Position */
                        .relative { position: relative; }
                        .sticky { position: sticky; }
                        .fixed { position: fixed; }
                        .absolute { position: absolute; }
                        .top-0 { top: 0px; }
                        .inset-0 { top: 0px; right: 0px; bottom: 0px; left: 0px; }
                        .z-50 { z-index: 50; }
                        .z-10 { z-index: 10; }
                        .z-0 { z-index: 0; }
                        
                        /* Effects */
                        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); }
                        .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
                        .backdrop-blur-lg { backdrop-filter: blur(16px); }
                        .backdrop-blur-sm { backdrop-filter: blur(4px); }
                        
                        /* Transitions */
                        .transition-all { 
                            transition-property: all; 
                            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
                            transition-duration: 300ms; 
                        }
                        .transition-colors { 
                            transition-property: color, background-color, border-color; 
                            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
                            transition-duration: 300ms; 
                        }
                        .transform { 
                            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) 
                                      rotate(var(--tw-rotate)) 
                                      skewX(var(--tw-skew-x)) 
                                      skewY(var(--tw-skew-y)) 
                                      scaleX(var(--tw-scale-x)) 
                                      scaleY(var(--tw-scale-y)); 
                        }
                        
                        /* Interactive */
                        .cursor-pointer { cursor: pointer; }
                        .select-none { user-select: none; }
                        .pointer-events-none { pointer-events: none; }
                        
                        /* Hover Effects */
                        .hover\\:text-purple-100:hover { color: #f3e8ff; }
                        .hover\\:text-purple-200:hover { color: #e9d5ff; }
                        .hover\\:scale-105:hover { transform: scale(1.05); }
                        .hover\\:shadow-2xl:hover { 
                            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
                        }
                        
                        /* Links */
                        a { 
                            color: inherit; 
                            text-decoration: none; 
                            transition: all 0.3s ease;
                        }
                        a:hover { 
                            color: #c084fc; 
                        }
                        
                        /* Buttons */
                        .btn {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            gap: 0.5rem;
                            font-weight: 700;
                            text-align: center;
                            text-decoration: none;
                            transition: all 0.3s ease;
                            cursor: pointer;
                            padding: 0.875rem 1.5rem;
                            font-size: 0.875rem;
                            border-radius: 0.5rem;
                            background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a855f7 100%);
                            color: white;
                            border: 1px solid rgba(168, 85, 247, 0.3);
                            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                        }
                        
                        .btn:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 20px 40px rgba(124, 58, 237, 0.4);
                            background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%);
                        }
                        
                        button {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            gap: 0.5rem;
                            font-weight: 700;
                            text-align: center;
                            transition: all 0.3s ease;
                            cursor: pointer;
                            padding: 0.875rem 1.5rem;
                            font-size: 0.875rem;
                            border-radius: 0.5rem;
                            background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a855f7 100%);
                            color: white;
                            border: 1px solid rgba(168, 85, 247, 0.3);
                            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                        }
                        
                        button:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 20px 40px rgba(124, 58, 237, 0.4);
                            background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%);
                        }
                        
                        /* Quantum Cards */
                        .quantum-card {
                            background: rgba(0, 0, 0, 0.3);
                            backdrop-filter: blur(16px);
                            border: 1px solid rgba(168, 85, 247, 0.3);
                            border-radius: 1rem;
                            padding: 1.5rem;
                            transition: all 0.3s ease;
                        }
                        
                        .quantum-card:hover {
                            transform: translateY(-4px);
                            box-shadow: 0 25px 50px rgba(124, 58, 237, 0.3);
                            border-color: rgba(168, 85, 247, 0.6);
                        }
                        
                        /* Responsive */
                        @media (max-width: 768px) {
                            .container { padding: 0 1rem; }
                            .text-5xl { font-size: 2.5rem; }
                            .text-4xl { font-size: 2rem; }
                            .text-3xl { font-size: 1.5rem; }
                            .grid-cols-2 { grid-template-columns: 1fr; }
                        }
                        
                        @media (min-width: 768px) { 
                            .md\\:flex { display: flex; }
                            .md\\:hidden { display: none; }
                            .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                        }
                        
                        @media (min-width: 1024px) {
                            .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                            .lg\\:text-6xl { font-size: 3.75rem; line-height: 1; }
                        }
                    `
                }} />
            </head>
            <body>
                <AuthProvider>
                    <div className="min-h-screen relative">
                        <main className="w-full relative z-10">{children}</main>
                    </div>
                    
                    {/* Quantum background effects */}
                    <div className="fixed inset-0 pointer-events-none z-0">
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 50% 50%, rgba(147,51,234,0.15), transparent 60%)',
                            animation: 'pulse 4s ease-in-out infinite'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 80% 20%, rgba(139,92,246,0.1), transparent 50%)',
                            animation: 'pulse 6s ease-in-out infinite reverse'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 20% 80%, rgba(168,85,247,0.1), transparent 50%)',
                            animation: 'pulse 5s ease-in-out infinite'
                        }}></div>
                    </div>
                </AuthProvider>
                
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes pulse {
                            0%, 100% { opacity: 0.5; transform: scale(1); }
                            50% { opacity: 0.8; transform: scale(1.05); }
                        }
                    `
                }} />
            </body>
        </html>
    );
}
