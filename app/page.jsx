'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';

export default function ExonovQuantumHome() {
    const [quantumState, setQuantumState] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);

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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Header Quantum */}
            <header className="bg-black/50 backdrop-blur-lg border-b border-purple-500/30 sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">Q</span>
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                EXONOV QUANTUM
                            </h1>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <Link href="#simulation" className="text-purple-300 hover:text-purple-100 transition-colors">
                                Simulation
                            </Link>
                            <Link href="#research" className="text-purple-300 hover:text-purple-100 transition-colors">
                                Recherche
                            </Link>
                            <Link href="#docs" className="text-purple-300 hover:text-purple-100 transition-colors">
                                Documentation
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto text-center">
                    <div className="mb-8">
                        <ContextAlert className="mb-6" />
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        EXONOV
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        QUANTUM
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                        Plateforme révolutionnaire de simulation quantique. 
                        Explorez les mystères de la physique quantique avec des outils de pointe.
                    </p>

                    {/* Quantum State Display */}
                    <div className="mb-12">
                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-2xl p-8 max-w-md mx-auto">
                            <h3 className="text-purple-300 text-lg mb-4">État Quantique Actuel</h3>
                            <div className="text-3xl font-mono text-cyan-400 mb-2">
                                {quantumStates[quantumState]}
                            </div>
                            <div className="text-sm text-purple-400">
                                Évolution en temps réel
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button 
                            onClick={simulateQuantum}
                            disabled={isSimulating}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     text-white font-bold py-4 px-8 rounded-xl text-lg
                                     transform hover:scale-105 transition-all duration-300
                                     shadow-lg hover:shadow-purple-500/25"
                        >
                            {isSimulating ? '🌀 Simulation en cours...' : '⚛️ Démarrer Simulation'}
                        </button>
                        
                        <Link 
                            href="#features" 
                            className="bg-black/50 backdrop-blur-lg border border-purple-500/50 
                                     text-purple-300 font-bold py-4 px-8 rounded-xl text-lg
                                     hover:bg-purple-900/30 hover:border-purple-400
                                     transform hover:scale-105 transition-all duration-300"
                        >
                            🔬 Explorer les Fonctionnalités
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Fonctionnalités Quantiques
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature Cards */}
                        <Card title="🔬 Simulation Multi-Qubits">
                            <p className="text-purple-200">
                                Simulez des systèmes quantiques complexes avec jusqu'à 30 qubits.
                                Algorithmes optimisés pour des performances maximales.
                            </p>
                        </Card>

                        <Card title="🌀 Intrication Quantique">
                            <p className="text-purple-200">
                                Explorez les phénomènes d'intrication et de téléportation quantique
                                avec des visualisations interactives en temps réel.
                            </p>
                        </Card>

                        <Card title="⚡ Algorithmes Quantiques">
                            <p className="text-purple-200">
                                Implémentez Shor, Grover, et d'autres algorithmes quantiques
                                révolutionnaires avec notre interface intuitive.
                            </p>
                        </Card>

                        <Card title="📊 Analyse Avancée">
                            <p className="text-purple-200">
                                Analysez les résultats avec des outils statistiques puissants
                                et des visualisations de données quantiques.
                            </p>
                        </Card>

                        <Card title="🎯 Interface IA">
                            <p className="text-purple-200">
                                Assistant IA intégré pour optimiser vos circuits quantiques
                                et suggérer des améliorations en temps réel.
                            </p>
                        </Card>

                        <Card title="🌐 Collaboration">
                            <p className="text-purple-200">
                                Partagez vos recherches et collaborez avec la communauté
                                scientifique mondiale en temps réel.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Status Section */}
            <section className="py-16 px-6 bg-black/20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-purple-300">
                        État du Système
                    </h2>
                    
                    {isSimulating && (
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                                      border border-purple-500/50 rounded-xl p-6 mb-8 max-w-md mx-auto">
                            <div className="text-2xl mb-4">🌀</div>
                            <div className="text-purple-200">
                                Simulation quantique en cours...
                            </div>
                            <div className="text-sm text-purple-400 mt-2">
                                Calcul des états superposés
                            </div>
                        </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-black/30 backdrop-blur-lg border border-green-500/50 rounded-xl p-6">
                            <div className="text-green-400 text-2xl mb-2">✅</div>
                            <div className="text-green-300 font-semibold">Système Opérationnel</div>
                        </div>
                        
                        <div className="bg-black/30 backdrop-blur-lg border border-blue-500/50 rounded-xl p-6">
                            <div className="text-blue-400 text-2xl mb-2">⚡</div>
                            <div className="text-blue-300 font-semibold">Performance Optimale</div>
                        </div>
                        
                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6">
                            <div className="text-purple-400 text-2xl mb-2">🔮</div>
                            <div className="text-purple-300 font-semibold">IA Quantique Active</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black/50 backdrop-blur-lg border-t border-purple-500/30 py-12 px-6">
                <div className="container mx-auto text-center">
                    <div className="text-purple-300 mb-4">
                        Powered by Exonov Quantum Engine v1.0
                    </div>
                    <div className="text-purple-500 text-sm">
                        © 2025 Exonov Quantum. Révolutionnant la physique quantique.
                    </div>
                </div>
            </footer>
        </div>
    );
}
