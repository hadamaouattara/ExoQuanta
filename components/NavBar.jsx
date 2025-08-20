'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from './AuthModal';

const NavBar = () => {
  const { user, loading, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowUserMenu(false);
    } catch (error) {
      console.error('Erreur déconnexion:', error);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                EXONOV QUANTUM
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#dashboard" className="text-slate-300 hover:text-white transition-colors">
                Dashboard
              </a>
              <a href="#simulation" className="text-slate-300 hover:text-white transition-colors">
                Simulation
              </a>
              <a href="#documentation" className="text-slate-300 hover:text-white transition-colors">
                Documentation
              </a>
            </div>

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
              {loading ? (
                <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              ) : user ? (
                // User connecté
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg px-3 py-2 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      {user.photoURL ? (
                        <img 
                          src={user.photoURL} 
                          alt="Avatar" 
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <span className="text-white text-sm font-semibold">
                          {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                        </span>
                      )}
                    </div>
                    <span className="hidden sm:block text-slate-300 text-sm">
                      {user.displayName || 'Utilisateur Quantique'}
                    </span>
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Menu déroulant */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-2">
                      <div className="px-4 py-3 border-b border-slate-700">
                        <p className="text-white font-medium">{user.displayName || 'Utilisateur Quantique'}</p>
                        <p className="text-slate-400 text-sm">{user.email}</p>
                      </div>
                      
                      <div className="py-2">
                        <a href="#profile" className="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                          🧑‍🔬 Profil Quantique
                        </a>
                        <a href="#settings" className="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                          ⚙️ Paramètres
                        </a>
                        <a href="#history" className="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                          📊 Historique Simulations
                        </a>
                      </div>
                      
                      <div className="border-t border-slate-700 pt-2">
                        <button
                          onClick={handleSignOut}
                          className="block w-full text-left px-4 py-2 text-red-400 hover:bg-slate-700 hover:text-red-300 transition-colors"
                        >
                          🚪 Déconnexion
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // User non connecté
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleAuthClick('signin')}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Connexion
                  </button>
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    S'inscrire
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Modal d'authentification */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />
    </>
  );
};

export default NavBar;
