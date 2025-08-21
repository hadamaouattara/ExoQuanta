'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import NavBar from '@/components/NavBar';

export default function ExonovQuantumHome() {
    const [quantumState, setQuantumState] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const interval = setInterval(() => {
            setQuantumState(prev => (prev + 1) % 8);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const quantumStates = [
        '|0⟩ - État fondamental',
        '|1⟩ - État excité',
        '|+⟩ - Superposition',
        '|-⟩ - Superposition négative',
        '|↑⟩ - Spin up',
        '|↓⟩ - Spin down',
        '|ψ⟩ - État intriqué',
        '|Φ⟩ - État de Bell'
    ];

    const simulateQuantum = () => {
        setIsSimulating(true);
        setTimeout(() => setIsSimulating(false), 3000);
    };

    return (
        <div className="min-h-screen">
            <NavBar />

            {/* CSS DEPLOYMENT SUCCESS BANNER */}
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold animate-pulse shadow-lg">
                    🎨 CSS ENHANCED - Quantum Styling Active!
                </div>
            </div>

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto text-center">
                    {/* Message de bienvenue personnalisé */}
                    {user && (
                        <div className="mb-8">
                            <div className="quantum-card max-w-md mx-auto">
                                <p className="text-purple-200">
                                    Bienvenue, <span className="text-white font-semibold">{user.displayName || 'Scientifique Quantique'}</span> ! 
                                    🔬
                                </p>
                            </div>
                        </div>
                    )}

                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-purple-300">
                        EXONOV
                    </h1>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-cyan-400">
                        QUANTUM
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-4xl mx-auto">
                        🎨 <span className="text-green-400 font-bold">CSS ENHANCED</span> - Plateforme révolutionnaire de simulation quantique. 
                        Explorez les mystères de la physique quantique avec des outils de pointe.
                    </p>

                    <div className="mb-12">
                        <div className="quantum-card max-w-md mx-auto">
                            <h3 className="text-purple-300 text-lg mb-4">État Quantique Actuel</h3>
                            <div className="text-3xl font-mono text-cyan-400 mb-2">
                                {quantumStates[quantumState]}
                            </div>
                            <div className="text-sm text-purple-400">
                                Évolution en temps réel
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button 
                            onClick={simulateQuantum}
                            disabled={isSimulating}
                            className="btn"
                        >
                            {isSimulating ? '🌀 Simulation en cours...' : '⚛️ Démarrer Simulation'}
                        </button>
                        
                        <Link 
                            href="/dashboard" 
                            className="btn"
                        >
                            🔬 Dashboard n8n
                        </Link>
                    </div>
                </div>
            </section>

            <section id="features" className="py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400">
                        Fonctionnalités Quantiques
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="quantum-card">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">🔬 Simulation Multi-Qubits</h3>
                            <p className="text-purple-200">
                                Simulez des systèmes quantiques complexes avec jusqu&apos;à 8 qubits.
                                Algorithmes optimisés pour des performances maximales.
                            </p>
                        </div>

                        <div className="quantum-card">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">🌀 Algorithmes Quantiques</h3>
                            <p className="text-purple-200">
                                Implémentez Shor, Grover, Hadamard et d&apos;autres algorithmes quantiques
                                révolutionnaires avec notre interface intuitive.
                            </p>
                        </div>

                        <div className="quantum-card">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">📊 Dashboard n8n</h3>
                            <p className="text-purple-200">
                                Contrôlez et surveillez vos 13+ workflows quantiques n8n
                                directement depuis l&apos;interface Exonov Quantum.
                            </p>
                        </div>

                        <div className="quantum-card">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">⚡ API Bridge</h3>
                            <p className="text-purple-200">
                                Connexion transparente avec votre instance n8n pour
                                des workflows quantiques automatisés et intelligents.
                            </p>
                        </div>

                        <div className="quantum-card">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">🔐 Authentification Sécurisée</h3>
                            <p className="text-purple-200">
                                Connexion sécurisée avec Firebase. Support Google, GitHub
                                et email pour une expérience utilisateur optimale.
                            </p>
                        </div>

                        <div className="quantum-card">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">🛡️ Quality Gate Actif</h3>
                            <p className="text-purple-200">
                                ✅ Système d&apos;automatisation universel avec validation syntaxe,
                                health monitoring et auto-rollback d&apos;urgence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-black/30">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-purple-300">
                        État du Système
                    </h2>
                    
                    {isSimulating && (
                        <div className="quantum-card mb-8 max-w-md mx-auto">
                            <div className="text-2xl mb-4">🌀</div>
                            <div className="text-purple-200">
                                Simulation quantique en cours...
                            </div>
                            <div className="text-sm text-purple-400 mt-2">
                                Calcul des états superposés
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <div className="quantum-card">
                            <div className="text-green-400 text-2xl mb-2">🎨</div>
                            <div className="text-green-300 font-semibold">CSS Enhanced</div>
                        </div>
                        
                        <div className="quantum-card">
                            <div className="text-blue-400 text-2xl mb-2">🛡️</div>
                            <div className="text-blue-300 font-semibold">Quality Gate</div>
                        </div>
                        
                        <div className="quantum-card">
                            <div className="text-purple-400 text-2xl mb-2">🔮</div>
                            <div className="text-purple-300 font-semibold">n8n Intégré</div>
                        </div>

                        <div className="quantum-card">
                            <div className="text-orange-400 text-2xl mb-2">🔥</div>
                            <div className="text-orange-300 font-semibold">Firebase Auth</div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-black/50 backdrop-blur-lg border-t border-purple-500/30 py-12 px-6">
                <div className="container mx-auto text-center">
                    <div className="text-purple-300 mb-4">
                        🎨 Enhanced with Quantum CSS System + Intelligent Automation
                    </div>
                    <div className="text-purple-500 text-sm">
                        © 2025 Exonov Quantum. Révolutionnant la physique quantique.
                    </div>
                </div>
            </footer>
        </div>
    );
}
