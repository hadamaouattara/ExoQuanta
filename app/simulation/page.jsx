'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function QuantumSimulation() {
    const [qubits, setQubits] = useState(3);
    const [isRunning, setIsRunning] = useState(false);
    const [results, setResults] = useState([]);
    const [algorithm, setAlgorithm] = useState('hadamard');
    const [simulationHistory, setSimulationHistory] = useState([]);
    
    const algorithms = {
        hadamard: 'Transformation de Hadamard',
        grover: 'Algorithme de Grover',
        shor: 'Algorithme de Shor (simplifié)',
        teleportation: 'Téléportation Quantique',
        bell: 'États de Bell',
        qft: 'Transformée de Fourier Quantique'
    };

    const runSimulation = async () => {
        setIsRunning(true);
        setResults([]);
        
        // Simuler un appel au workflow n8n de simulation quantique
        try {
            const response = await fetch('/api/workflows', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    workflowId: 'quantum-simulation',
                    action: 'trigger',
                    parameters: {
                        qubits,
                        algorithm,
                        timestamp: new Date().toISOString()
                    }
                })
            });

            // Simulation des résultats quantiques
            setTimeout(() => {
                const simulatedResults = [];
                const numStates = Math.pow(2, qubits);
                
                for (let i = 0; i < numStates; i++) {
                    const probability = algorithm === 'grover' 
                        ? (i === Math.floor(numStates/2) ? 0.8 : 0.2/(numStates-1))
                        : Math.random();
                    
                    simulatedResults.push({
                        state: `|${i.toString(2).padStart(qubits, '0')}⟩`,
                        probability: probability,
                        amplitude: {
                            real: (Math.random() - 0.5) * 2,
                            imaginary: (Math.random() - 0.5) * 2
                        },
                        phase: Math.random() * 2 * Math.PI
                    });
                }
                
                // Normaliser les probabilités
                const total = simulatedResults.reduce((sum, r) => sum + r.probability, 0);
                simulatedResults.forEach(r => r.probability = r.probability / total);
                
                const sortedResults = simulatedResults.sort((a, b) => b.probability - a.probability);
                setResults(sortedResults);
                
                // Ajouter à l'historique
                const historyEntry = {
                    timestamp: new Date(),
                    algorithm,
                    qubits,
                    results: sortedResults.slice(0, 3) // Top 3
                };
                setSimulationHistory(prev => [historyEntry, ...prev.slice(0, 4)]);
                
                setIsRunning(false);
            }, 2000 + Math.random() * 2000); // 2-4 secondes
            
        } catch (error) {
            console.error('Erreur simulation:', error);
            setIsRunning(false);
        }
    };

    const getAlgorithmDescription = (algo) => {
        const descriptions = {
            hadamard: "Créé une superposition égale de tous les états quantiques",
            grover: "Recherche quantique avec amplification de probabilité",
            shor: "Factorisation de nombres entiers (version simplifiée)",
            teleportation: "Transfert d'état quantique via intrication",
            bell: "Génération d'états intriqués maximalement",
            qft: "Transformée de Fourier pour l'espace quantique"
        };
        return descriptions[algo] || "Description non disponible";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Header */}
            <header className="bg-black/50 backdrop-blur-lg border-b border-purple-500/30 sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">Q</span>
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                EXONOV QUANTUM
                            </h1>
                        </Link>
                        <nav className="hidden md:flex space-x-6">
                            <Link href="/dashboard" className="text-purple-300 hover:text-purple-100 transition-colors">
                                Dashboard
                            </Link>
                            <Link href="/simulation" className="text-purple-100 font-semibold">
                                Simulation
                            </Link>
                            <Link href="/" className="text-purple-300 hover:text-purple-100 transition-colors">
                                Accueil
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 py-12 relative z-10">
                {/* Title */}
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Simulateur Quantique
                    </h1>
                    <p className="text-xl text-purple-200">
                        Explorez les algorithmes quantiques avec notre moteur de simulation avancé
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Configuration Panel */}
                    <div className="lg:col-span-1">
                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 mb-6">
                            <h2 className="text-2xl font-bold text-purple-300 mb-6">Configuration</h2>
                            
                            {/* Qubits Selector */}
                            <div className="mb-6">
                                <label className="block text-purple-200 text-sm font-semibold mb-2">
                                    Nombre de Qubits
                                </label>
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="range"
                                        min="1"
                                        max="8"
                                        value={qubits}
                                        onChange={(e) => setQubits(parseInt(e.target.value))}
                                        className="flex-1 h-2 bg-purple-700 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <span className="text-cyan-400 font-bold text-xl w-8">{qubits}</span>
                                </div>
                                <div className="text-purple-400 text-sm mt-2">
                                    États possibles: {Math.pow(2, qubits)}
                                </div>
                            </div>

                            {/* Algorithm Selector */}
                            <div className="mb-6">
                                <label className="block text-purple-200 text-sm font-semibold mb-2">
                                    Algorithme Quantique
                                </label>
                                <select
                                    value={algorithm}
                                    onChange={(e) => setAlgorithm(e.target.value)}
                                    className="w-full bg-black/50 border border-purple-500/50 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none"
                                >
                                    {Object.entries(algorithms).map(([key, name]) => (
                                        <option key={key} value={key}>{name}</option>
                                    ))}
                                </select>
                                <div className="text-purple-400 text-sm mt-2">
                                    {getAlgorithmDescription(algorithm)}
                                </div>
                            </div>

                            {/* Run Button */}
                            <button
                                onClick={runSimulation}
                                disabled={isRunning}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                                         disabled:opacity-50 disabled:cursor-not-allowed
                                         text-white font-bold py-4 px-6 rounded-xl text-lg
                                         transform hover:scale-105 transition-all duration-300
                                         shadow-lg hover:shadow-purple-500/25"
                            >
                                {isRunning ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                                        <span>Calcul en cours...</span>
                                    </div>
                                ) : (
                                    '⚛️ Lancer la Simulation'
                                )}
                            </button>
                        </div>

                        {/* Quantum State Visualization */}
                        <div className="bg-black/30 backdrop-blur-lg border border-cyan-500/50 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-cyan-300 mb-4">État Quantique</h3>
                            <div className="space-y-3">
                                {[...Array(qubits)].map((_, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <span className="text-cyan-400 font-mono">Q{i}:</span>
                                        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-1000"
                                                style={{ width: `${50 + Math.sin(Date.now() / 1000 + i) * 25}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-purple-300 text-sm">|ψ⟩</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div className="lg:col-span-2">
                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 mb-6">
                            <h2 className="text-2xl font-bold text-purple-300 mb-6">Résultats de Simulation</h2>
                            
                            {isRunning ? (
                                <div className="text-center py-12">
                                    <div className="inline-block animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mb-4"></div>
                                    <div className="text-purple-200 text-lg">Simulation quantique en cours...</div>
                                    <div className="text-purple-400 text-sm mt-2">
                                        Calcul de {Math.pow(2, qubits)} états quantiques
                                    </div>
                                </div>
                            ) : results.length > 0 ? (
                                <div className="space-y-4">
                                    {results.map((result, index) => (
                                        <div 
                                            key={result.state}
                                            className="bg-black/50 border border-purple-500/30 rounded-lg p-4 hover:border-purple-400/50 transition-colors"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-4">
                                                    <span className="text-cyan-400 font-mono text-lg font-bold">
                                                        {result.state}
                                                    </span>
                                                    <span className="text-purple-300 text-sm">
                                                        #{index + 1}
                                                    </span>
                                                </div>
                                                <span className="text-white font-semibold">
                                                    {(result.probability * 100).toFixed(2)}%
                                                </span>
                                            </div>
                                            
                                            {/* Probability Bar */}
                                            <div className="w-full bg-slate-700 rounded-full h-3 mb-3">
                                                <div 
                                                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                                                    style={{ width: `${result.probability * 100}%` }}
                                                ></div>
                                            </div>
                                            
                                            {/* Amplitude Details */}
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <span className="text-purple-400">Amplitude réelle:</span>
                                                    <span className="text-cyan-300 ml-2 font-mono">
                                                        {result.amplitude.real.toFixed(3)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-purple-400">Amplitude imaginaire:</span>
                                                    <span className="text-cyan-300 ml-2 font-mono">
                                                        {result.amplitude.imaginary.toFixed(3)}i
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 text-purple-400">
                                    <div className="text-6xl mb-4">⚛️</div>
                                    <div className="text-lg">Lancez une simulation pour voir les résultats</div>
                                </div>
                            )}
                        </div>

                        {/* Simulation History */}
                        {simulationHistory.length > 0 && (
                            <div className="bg-black/30 backdrop-blur-lg border border-cyan-500/50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-cyan-300 mb-4">Historique des Simulations</h3>
                                <div className="space-y-3">
                                    {simulationHistory.map((entry, index) => (
                                        <div key={index} className="bg-black/50 border border-cyan-500/30 rounded-lg p-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-cyan-200 text-sm">
                                                    {entry.timestamp.toLocaleTimeString('fr-FR')}
                                                </div>
                                                <div className="text-purple-300 text-sm">
                                                    {algorithms[entry.algorithm]} • {entry.qubits} qubits
                                                </div>
                                            </div>
                                            <div className="flex space-x-4 text-xs">
                                                {entry.results.map((result, i) => (
                                                    <span key={i} className="text-cyan-400 font-mono">
                                                        {result.state}: {(result.probability * 100).toFixed(1)}%
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Integration Info */}
                <div className="mt-12 bg-black/30 backdrop-blur-lg border border-yellow-500/50 rounded-xl p-6">
                    <div className="flex items-center space-x-4">
                        <div className="text-yellow-400 text-2xl">🔗</div>
                        <div>
                            <h3 className="text-yellow-300 font-semibold text-lg mb-2">
                                Intégration avec n8n Workflows
                            </h3>
                            <p className="text-yellow-200 mb-4">
                                Les simulations sont connectées à vos workflows n8n quantiques pour un traitement avancé 
                                et une analyse en temps réel des résultats.
                            </p>
                            <div className="flex space-x-4">
                                <Link 
                                    href="/dashboard"
                                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                                >
                                    📊 Voir Dashboard
                                </Link>
                                <button 
                                    onClick={() => window.open('/docs/N8N_CONFIGURATION.md', '_blank')}
                                    className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                                >
                                    📖 Configuration
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles for Slider */}
            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, #a855f7, #ec4899);
                    cursor: pointer;
                    box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
                }
                
                .slider::-moz-range-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, #a855f7, #ec4899);
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
                }
            `}</style>
        </div>
    );
}
