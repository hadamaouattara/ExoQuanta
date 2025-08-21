'use client';

import { useState, useCallback, useEffect } from 'react';

const QuantumCircuitSimulator = () => {
    const [circuit, setCircuit] = useState(null);
    const [results, setResults] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const createQuantumCircuit = useCallback(async () => {
        try {
            setIsRunning(true);
            
            // Simulation des états quantiques
            const qubits = 3;
            const circuitData = {
                qubits: qubits,
                gates: [
                    { type: 'H', qubit: 0, description: 'Hadamard - Superposition' },
                    { type: 'CNOT', control: 0, target: 1, description: 'Intrication quantique' },
                    { type: 'CNOT', control: 1, target: 2, description: 'Extension intrication' }
                ],
                visualization: `
        ┌───┐           ░ ┌─┐      
   q_0: ┤ H ├──■────────░─┤M├──────
        └───┘┌─┴─┐      ░ └╥┘┌─┐   
   q_1: ─────┤ X ├──■───░──╫─┤M├───
             └───┘┌─┴─┐ ░  ║ └╥┘┌─┐
   q_2: ──────────┤ X ├─░──╫──╫─┤M├
                  └───┘ ░  ║  ║ └╥┘`
            };

            setCircuit(circuitData);

            // Simulation des résultats
            setTimeout(() => {
                const simulatedResults = {
                    '000': 0.5,
                    '111': 0.5,
                    shots: 1000,
                    success_probability: 1.0
                };
                setResults(simulatedResults);
                setIsRunning(false);
            }, 2000);

        } catch (error) {
            console.error('Erreur simulation:', error);
            setIsRunning(false);
        }
    }, []);

    const [quantumState, setQuantumState] = useState('|0⟩');

    useEffect(() => {
        const states = ['|0⟩', '|1⟩', '|+⟩', '|-⟩', '|+i⟩', '|-i⟩'];
        const interval = setInterval(() => {
            setQuantumState(states[Math.floor(Math.random() * states.length)]);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-6">
            {/* En-tête */}
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            🔬 Simulateur Quantique Exonov
                        </h2>
                        <p className="text-purple-200">
                            Circuit à 3 qubits - État actuel: <span className="font-mono text-green-400">{quantumState}</span>
                        </p>
                    </div>
                    <button
                        onClick={createQuantumCircuit}
                        disabled={isRunning}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
                    >
                        {isRunning ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Simulation...</span>
                            </div>
                        ) : (
                            '⚡ Démarrer Simulation'
                        )}
                    </button>
                </div>
            </div>

            {/* Circuit Quantique */}
            {circuit && (
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">📊 Circuit Quantique</h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-medium text-purple-300 mb-3">Portes Quantiques</h4>
                            <div className="space-y-2">
                                {circuit.gates.map((gate, index) => (
                                    <div key={index} className="flex items-center space-x-3 bg-slate-800/50 rounded-lg p-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {gate.type}
                                        </div>
                                        <span className="text-slate-300">{gate.description}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-purple-300 mb-3">Visualisation</h4>
                            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                                <pre>{circuit.visualization}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Résultats */}
            {results && (
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">📈 Résultats de Mesure</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-medium text-green-300 mb-3">Probabilités des États</h4>
                            <div className="space-y-3">
                                {Object.entries(results).filter(([key]) => key !== 'shots' && key !== 'success_probability').map(([state, probability]) => (
                                    <div key={state} className="flex items-center justify-between">
                                        <span className="font-mono text-slate-300">|{state}⟩</span>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-32 bg-slate-700 rounded-full h-2">
                                                <div 
                                                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${probability * 100}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-white font-medium">{(probability * 100).toFixed(1)}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-blue-300 mb-3">Statistiques</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                                    <span className="text-slate-300">Nombre de mesures</span>
                                    <span className="text-white font-semibold">{results.shots}</span>
                                </div>
                                <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                                    <span className="text-slate-300">Succès de simulation</span>
                                    <span className="text-green-400 font-semibold">{(results.success_probability * 100).toFixed(1)}%</span>
                                </div>
                                <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                                    <span className="text-slate-300">États intriqués</span>
                                    <span className="text-purple-400 font-semibold">2 états</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Informations sur l'algorithme */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">🧠 À propos de ce circuit</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-3xl mb-2">⚛️</div>
                        <h4 className="font-semibold text-white">Superposition</h4>
                        <p className="text-sm text-slate-300">Hadamard crée une superposition quantique</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-2">🔗</div>
                        <h4 className="font-semibold text-white">Intrication</h4>
                        <p className="text-sm text-slate-300">CNOT intriques les qubits ensemble</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-2">📊</div>
                        <h4 className="font-semibold text-white">Mesure</h4>
                        <p className="text-sm text-slate-300">Collapse la fonction d&apos;onde</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuantumCircuitSimulator;
