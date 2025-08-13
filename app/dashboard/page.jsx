'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WorkflowDashboard() {
    const [workflows, setWorkflows] = useState([]);
    const [executions, setExecutions] = useState([]);
    const [stats, setStats] = useState({
        totalExecutions: 0,
        failedExecutions: 0,
        failureRate: 0,
        avgRuntime: '0s'
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isDemoMode, setIsDemoMode] = useState(false);

    // Charger les données depuis les API
    useEffect(() => {
        loadDashboardData();
        
        // Actualiser toutes les 30 secondes
        const interval = setInterval(loadDashboardData, 30000);
        return () => clearInterval(interval);
    }, []);

    const loadDashboardData = async () => {
        try {
            // Charger les workflows
            const workflowsResponse = await fetch('/api/workflows');
            const workflowsData = await workflowsResponse.json();
            
            if (workflowsData.demo) {
                setIsDemoMode(true);
            }
            
            setWorkflows(workflowsData.workflows || []);

            // Charger les statistiques d'exécution
            const executionsResponse = await fetch('/api/executions');
            const executionsData = await executionsResponse.json();
            
            setStats(executionsData.stats || stats);
            setExecutions(executionsData.executions || []);
            
        } catch (error) {
            console.error('Erreur chargement dashboard:', error);
            setIsDemoMode(true);
        } finally {
            setIsLoading(false);
        }
    };

    const triggerWorkflow = async (workflowId, workflowName) => {
        try {
            const response = await fetch('/api/workflows', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    workflowId,
                    action: 'trigger'
                })
            });

            const result = await response.json();
            
            if (result.success) {
                alert(`✅ Workflow "${workflowName}" déclenché avec succès !`);
                // Recharger les données
                loadDashboardData();
            } else {
                alert(`⚠️ ${result.error || 'Erreur lors du déclenchement'}`);
            }
        } catch (error) {
            console.error('Erreur déclenchement workflow:', error);
            alert('❌ Erreur de connexion');
        }
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

            <div className="container mx-auto px-6 py-12 relative z-10">
                {/* Dashboard Title */}
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Quantum Workflows Dashboard
                    </h1>
                    <p className="text-xl text-purple-200">
                        Contrôlez et surveillez vos workflows quantiques en temps réel
                    </p>
                    {isDemoMode && (
                        <div className="mt-4 inline-block bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-4 py-2">
                            <span className="text-yellow-300 text-sm">🔄 Mode Démonstration - n8n non connecté</span>
                        </div>
                    )}
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
                        <div className="text-cyan-300 text-sm">Performance</div>
                    </div>
                </div>

                {/* Problem Alert */}
                {stats.failureRate > 50 && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 mb-8">
                        <div className="flex items-center space-x-4">
                            <div className="text-red-400 text-2xl">⚠️</div>
                            <div>
                                <h3 className="text-red-300 font-semibold text-lg mb-2">
                                    Problème détecté dans les workflows
                                </h3>
                                <p className="text-red-200 mb-4">
                                    Taux d'échec élevé ({stats.failureRate}%) - Vérifiez la configuration des credentials
                                </p>
                                <button 
                                    onClick={() => window.open('https://docs.n8n.io/credentials/', '_blank')}
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                                >
                                    🔧 Guide Configuration n8n
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Recent Executions */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-purple-300">
                        Exécutions Récentes
                    </h2>
                    
                    <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6">
                        {executions.length === 0 ? (
                            <div className="text-center text-purple-400 py-8">
                                Aucune exécution récente
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {executions.map((execution, index) => (
                                    <div key={execution.id || index} className="flex items-center justify-between py-3 border-b border-purple-500/20 last:border-b-0">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-xl">{getCategoryIcon(execution.workflowName)}</div>
                                            <div>
                                                <div className="text-white font-medium">{execution.workflowName}</div>
                                                <div className="text-purple-300 text-sm">
                                                    {new Date(execution.startedAt).toLocaleString('fr-FR')}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="text-purple-400 text-sm">{execution.duration}</div>
                                            <div className={`font-semibold ${getExecutionStatusColor(execution.status)}`}>
                                                {execution.status === 'error' ? '❌' : 
                                                 execution.status === 'success' ? '✅' : 
                                                 execution.status === 'running' ? '🔄' : '⏳'}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Workflows Grid */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-purple-300">
                        Workflows ({workflows.filter(w => w.active).length} actifs / {workflows.length} total)
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
                                        <div className="text-2xl">{getCategoryIcon(workflow.name)}</div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(workflow.active)}`}>
                                            {workflow.active ? 'Active' : 'Inactive'}
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
                                        <button 
                                            onClick={() => window.open(`${process.env.NEXT_PUBLIC_N8N_URL || 'http://localhost:5678'}/workflow/${workflow.id}`, '_blank')}
                                            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                                        >
                                            ⚙️
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Connection Info */}
                <div className="bg-black/30 backdrop-blur-lg border border-cyan-500/50 rounded-xl p-6">
                    <div className="flex items-center space-x-4">
                        <div className="text-cyan-400 text-2xl">🔗</div>
                        <div>
                            <h3 className="text-cyan-300 font-semibold text-lg mb-2">
                                Configuration API n8n
                            </h3>
                            <p className="text-cyan-200 mb-4">
                                {isDemoMode 
                                    ? "Mode démonstration actif. Configurez les variables d'environnement pour connecter votre instance n8n."
                                    : "Connexion établie avec votre instance n8n. Dashboard temps réel actif."
                                }
                            </p>
                            <div className="flex space-x-4">
                                <button 
                                    onClick={() => window.open('https://docs.n8n.io/api/', '_blank')}
                                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                                >
                                    📖 Documentation API
                                </button>
                                {isDemoMode && (
                                    <button 
                                        onClick={() => window.open('https://github.com/hadamaouattara/ExoQuanta#configuration-n8n', '_blank')}
                                        className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                                    >
                                        🔧 Guide Configuration
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
