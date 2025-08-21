'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ProtectedRoute from '../../components/ProtectedRoute';
import { useAuth } from '../../contexts/AuthContext';

function DashboardContent() {
    const { user } = useAuth();
    const [workflows, setWorkflows] = useState([]);
    const [executions, setExecutions] = useState([]);
    const [stats, setStats] = useState({
        totalExecutions: 0,
        failedExecutions: 0,
        failureRate: 0,
        avgRuntime: '0s'
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isDemoMode, setIsDemoMode] = useState(true);

    const loadDashboardData = useCallback(async () => {
        try {
            // Mode démo pour l'instant car pas d'API routes
            setIsDemoMode(true);
            setWorkflows([
                { id: '1', name: 'Quantum Health Check', active: true, lastUpdated: '2h', nodeCount: 5 },
                { id: '2', name: 'Portfolio QAOA Optimizer', active: true, lastUpdated: '1d', nodeCount: 12 },
                { id: '3', name: 'Arbitrage Commodities', active: false, lastUpdated: '3d', nodeCount: 8 }
            ]);
            setExecutions([
                { id: '1', workflowName: 'Quantum Health Check', status: 'success', duration: '2.3s', startedAt: new Date() },
                { id: '2', workflowName: 'Portfolio QAOA', status: 'error', duration: '45s', startedAt: new Date(Date.now() - 300000) }
            ]);
            setStats({
                totalExecutions: 147,
                failedExecutions: 8,
                failureRate: 5.4,
                avgRuntime: '12.7s'
            });
        } catch (error) {
            console.error('Erreur chargement dashboard:', error);
            setIsDemoMode(true);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadDashboardData();
    }, [loadDashboardData]);

    const triggerWorkflow = async (workflowId, workflowName) => {
        alert(`Mode démo : Workflow "${workflowName}" simulé avec succès`);
    };

    const getStatusColor = (status) => {
        if (status === 'Active' || status === true) {
            return 'text-green-400 bg-green-400/20 border-green-400/50';
        }
        return 'text-orange-400 bg-orange-400/20 border-orange-400/50';
    };

    const getExecutionStatusColor = (status) => {
        switch (status) {
            case 'success':
                return 'text-green-400';
            case 'error':
                return 'text-red-400';
            case 'running':
                return 'text-yellow-400';
            default:
                return 'text-purple-400';
        }
    };

    const getCategoryIcon = (name) => {
        if (name.includes('Health Check')) return '🏥';
        if (name.includes('Credits')) return '💳';
        if (name.includes('Router')) return '🔀';
        if (name.includes('Portfolio') || name.includes('QAOA')) return '📊';
        if (name.includes('Arbitrage')) return '💰';
        if (name.includes('GitHub')) return '🔧';
        if (name.includes('Email')) return '📧';
        return '🔬';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
                        <div className="flex items-center space-x-4">
                            <div className="text-purple-300 text-sm">
                                Connecté : {user?.displayName || user?.email || 'Utilisateur Quantique'}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Dashboard Quantique Sécurisé
                    </h1>
                    <p className="text-xl text-purple-200">
                        Bienvenue {user?.displayName || 'dans votre espace quantique'}
                    </p>
                    <div className="mt-4 inline-block bg-green-500/20 border border-green-500/50 rounded-lg px-4 py-2">
                        <span className="text-green-300 text-sm">🔒 Authentification Firebase Active</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6">
                        <div className="text-purple-400 text-sm font-semibold mb-2">EXÉCUTIONS TOTAL</div>
                        <div className="text-3xl font-bold text-white mb-1">{stats.totalExecutions}</div>
                        <div className="text-purple-300 text-sm">Derniers 7 jours</div>
                    </div>
                    
                    <div className="bg-black/30 backdrop-blur-lg border border-red-500/50 rounded-xl p-6">
                        <div className="text-red-400 text-sm font-semibold mb-2">ÉCHECS</div>
                        <div className="text-3xl font-bold text-red-400 mb-1">{stats.failedExecutions}</div>
                        <div className="text-red-300 text-sm">Workflows en erreur</div>
                    </div>
                    
                    <div className="bg-black/30 backdrop-blur-lg border border-orange-500/50 rounded-xl p-6">
                        <div className="text-orange-400 text-sm font-semibold mb-2">TAUX SUCCÈS</div>
                        <div className="text-3xl font-bold text-orange-400 mb-1">{(100 - stats.failureRate).toFixed(1)}%</div>
                        <div className="text-orange-300 text-sm">Performance globale</div>
                    </div>
                    
                    <div className="bg-black/30 backdrop-blur-lg border border-cyan-500/50 rounded-xl p-6">
                        <div className="text-cyan-400 text-sm font-semibold mb-2">TEMPS MOYEN</div>
                        <div className="text-3xl font-bold text-cyan-400 mb-1">{stats.avgRuntime}</div>
                        <div className="text-cyan-300 text-sm">Exécution workflow</div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-purple-300">
                        Workflows Actifs ({workflows.filter(w => w.active).length}/{workflows.length})
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workflows.map((workflow) => (
                            <div 
                                key={workflow.id}
                                className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 hover:border-purple-400/70 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-2xl">{getCategoryIcon(workflow.name)}</div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(workflow.active)}`}>
                                        {workflow.active ? 'Actif' : 'Inactif'}
                                    </span>
                                </div>
                                
                                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                                    {workflow.name}
                                </h3>
                                
                                <div className="flex justify-between items-center text-purple-300 text-sm mb-4">
                                    <span>Mis à jour {workflow.lastUpdated}</span>
                                    <span>{workflow.nodeCount} nodes</span>
                                </div>
                                
                                <div className="flex space-x-2">
                                    <button 
                                        onClick={() => triggerWorkflow(workflow.id, workflow.name)}
                                        disabled={!workflow.active}
                                        className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
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
                </div>

                <div className="bg-black/30 backdrop-blur-lg border border-green-500/50 rounded-xl p-6">
                    <div className="flex items-center space-x-4">
                        <div className="text-green-400 text-2xl">🔐</div>
                        <div>
                            <h3 className="text-green-300 font-semibold text-lg mb-2">
                                Authentification Firebase Intégrée
                            </h3>
                            <p className="text-green-200 mb-4">
                                Accès sécurisé avec Google Auth et Email/Password. 
                                Session utilisateur : {user?.email}
                            </p>
                            <div className="text-green-300 text-sm">
                                Connecté depuis : {user?.metadata?.creationTime ? 
                                    new Date(user.metadata.creationTime).toLocaleDateString('fr-FR') : 
                                    'Session actuelle'
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function WorkflowDashboard() {
    return (
        <ProtectedRoute>
            <DashboardContent />
        </ProtectedRoute>
    );
}