'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WorkflowDashboard() {
    const [workflows, setWorkflows] = useState([]);
    const [executions, setExecutions] = useState([]);
    const [stats, setStats] = useState({
        totalExecutions: 76,
        failedExecutions: 76,
        failureRate: 100,
        avgRuntime: '0.05s'
    });
    const [isLoading, setIsLoading] = useState(true);

    // Simulation des données de workflows (en attendant la connexion n8n)
    useEffect(() => {
        const mockWorkflows = [
            {
                id: 'quantum-health-check',
                name: '🔬 Quantum | 01 - Health Check',
                status: 'Active',
                lastUpdated: '1 day ago',
                category: 'monitoring'
            },
            {
                id: 'quantum-credits-probe',
                name: '🔬 Quantum | 02 - Credits Probe',
                status: 'Active',
                lastUpdated: '1 day ago',
                category: 'monitoring'
            },
            {
                id: 'quantum-router',
                name: '🔬 Quantum | 03 - Router',
                status: 'Active',
                lastUpdated: '1 day ago',
                category: 'core'
            },
            {
                id: 'quantum-portfolio-qaoa',
                name: '🔬 Quantum | 05 - Portfolio QAOA',
                status: 'Active',
                lastUpdated: '3 days ago',
                category: 'algorithms'
            },
            {
                id: 'quantum-arbitrage',
                name: '🔬 Quantum | 06 - Arbitrage Commodities',
                status: 'Active',
                lastUpdated: '3 days ago',
                category: 'finance'
            },
            {
                id: 'github-file-creator',
                name: '🔧 GitHub File Creator - Quantum Integration',
                status: 'Inactive',
                lastUpdated: '23 hours ago',
                category: 'integration'
            }
        ];
        
        setTimeout(() => {
            setWorkflows(mockWorkflows);
            setIsLoading(false);
        }, 1000);
    }, []);

    const triggerWorkflow = async (workflowId) => {
        console.log(`Triggering workflow: ${workflowId}`);
        // Ici on appellera l'API n8n
    };

    const getStatusColor = (status) => {
        return status === 'Active' 
            ? 'text-green-400 bg-green-400/20 border-green-400/50' 
            : 'text-orange-400 bg-orange-400/20 border-orange-400/50';
    };

    const getCategoryIcon = (category) => {
        const icons = {
            monitoring: '📊',
            core: '⚡',
            algorithms: '🧮',
            finance: '💰',
            integration: '🔗'
        };
        return icons[category] || '🔬';
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
                            <Link href="/dashboard" className="text-purple-100 font-semibold">
                                Dashboard
                            </Link>
                            <Link href="/simulation" className="text-purple-300 hover:text-purple-100 transition-colors">
                                Simulation
                            </Link>
                            <Link href="/" className="text-purple-300 hover:text-purple-100 transition-colors">
                                Accueil
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 py-12">
                {/* Dashboard Title */}
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Quantum Workflows Dashboard
                    </h1>
                    <p className="text-xl text-purple-200">
                        Contrôlez et surveillez vos workflows quantiques en temps réel
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6">
                        <div className="text-purple-400 text-sm font-semibold mb-2">EXÉCUTIONS PROD.</div>
                        <div className="text-3xl font-bold text-white mb-1">{stats.totalExecutions}</div>
                        <div className="text-purple-300 text-sm">Derniers 7 jours</div>
                    </div>
                    
                    <div className="bg-black/30 backdrop-blur-lg border border-red-500/50 rounded-xl p-6">
                        <div className="text-red-400 text-sm font-semibold mb-2">ÉCHECS PROD.</div>
                        <div className="text-3xl font-bold text-red-400 mb-1">{stats.failedExecutions}</div>
                        <div className="text-red-300 text-sm">⚠️ Nécessite attention</div>
                    </div>
                    
                    <div className="bg-black/30 backdrop-blur-lg border border-orange-500/50 rounded-xl p-6">
                        <div className="text-orange-400 text-sm font-semibold mb-2">TAUX D'ÉCHEC</div>
                        <div className="text-3xl font-bold text-orange-400 mb-1">{stats.failureRate}%</div>
                        <div className="text-orange-300 text-sm">Configuration requise</div>
                    </div>
                    
                    <div className="bg-black/30 backdrop-blur-lg border border-cyan-500/50 rounded-xl p-6">
                        <div className="text-cyan-400 text-sm font-semibold mb-2">TEMPS MOYEN</div>
                        <div className="text-3xl font-bold text-cyan-400 mb-1">{stats.avgRuntime}</div>
                        <div className="text-cyan-300 text-sm">Performance optimale</div>
                    </div>
                </div>

                {/* Problem Alert */}
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="text-red-400 text-2xl">⚠️</div>
                        <div>
                            <h3 className="text-red-300 font-semibold text-lg mb-2">
                                Problème détecté dans le node '📧 Email Risk Report'
                            </h3>
                            <p className="text-red-200 mb-4">
                                Node does not have any credentials set
                            </p>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                                🔧 Configurer les credentials
                            </button>
                        </div>
                    </div>
                </div>

                {/* Workflows Grid */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-purple-300">
                        Workflows Actifs ({workflows.filter(w => w.status === 'Active').length})
                    </h2>
                    
                    {isLoading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 animate-pulse">
                                    <div className="h-4 bg-purple-500/30 rounded mb-4"></div>
                                    <div className="h-8 bg-purple-500/20 rounded mb-2"></div>
                                    <div className="h-4 bg-purple-500/20 rounded"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {workflows.map((workflow) => (
                                <div 
                                    key={workflow.id}
                                    className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 hover:border-purple-400/70 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-2xl">{getCategoryIcon(workflow.category)}</div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(workflow.status)}`}>
                                            {workflow.status}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                                        {workflow.name}
                                    </h3>
                                    
                                    <p className="text-purple-300 text-sm mb-4">
                                        Mis à jour {workflow.lastUpdated}
                                    </p>
                                    
                                    <div className="flex space-x-2">
                                        <button 
                                            onClick={() => triggerWorkflow(workflow.id)}
                                            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                                        >
                                            ▶️ Exécuter
                                        </button>
                                        <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                                            ⚙️
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* API Connection Status */}
                <div className="bg-black/30 backdrop-blur-lg border border-yellow-500/50 rounded-xl p-6">
                    <div className="flex items-center space-x-4">
                        <div className="text-yellow-400 text-2xl">🔗</div>
                        <div>
                            <h3 className="text-yellow-300 font-semibold text-lg mb-2">
                                Connexion API n8n
                            </h3>
                            <p className="text-yellow-200 mb-4">
                                Configuration de l'API bridge en cours pour la connexion temps réel avec vos workflows n8n.
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                                    🔧 Configurer API
                                </button>
                                <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                                    📖 Documentation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
