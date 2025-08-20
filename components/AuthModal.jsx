'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const AuthModal = ({ isOpen, onClose, mode = 'signin' }) => {
  const [authMode, setAuthMode] = useState(mode); // 'signin' ou 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signInWithGoogle, signInWithGithub, signInWithEmail, signUpWithEmail } = useAuth();

  if (!isOpen) return null;

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (authMode === 'signup') {
        await signUpWithEmail(email, password, displayName);
      } else {
        await signInWithEmail(email, password);
      }
      onClose();
    } catch (error) {
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAuth = async (provider) => {
    setLoading(true);
    setError('');

    try {
      if (provider === 'google') {
        await signInWithGoogle();
      } else if (provider === 'github') {
        await signInWithGithub();
      }
      onClose();
    } catch (error) {
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'Aucun compte trouvé avec cet email.';
      case 'auth/wrong-password':
        return 'Mot de passe incorrect.';
      case 'auth/email-already-in-use':
        return 'Un compte existe déjà avec cet email.';
      case 'auth/weak-password':
        return 'Le mot de passe doit contenir au moins 6 caractères.';
      case 'auth/invalid-email':
        return 'Format d\\'email invalide.';
      case 'auth/popup-closed-by-user':
        return 'Connexion annulée.';
      default:
        return 'Une erreur est survenue. Veuillez réessayer.';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 relative">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        {/* En-tête */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">🔬</div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {authMode === 'signin' ? 'Connexion' : 'Inscription'} 
          </h2>
          <p className="text-slate-400">
            Accédez à la plateforme quantique Exonov
          </p>
        </div>

        {/* Boutons sociaux */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleSocialAuth('google')}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continuer avec Google</span>
          </button>

          <button
            onClick={() => handleSocialAuth('github')}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Continuer avec GitHub</span>
          </button>
        </div>

        {/* Séparateur */}
        <div className="flex items-center mb-6">
          <div className="flex-1 h-px bg-slate-700"></div>
          <span className="px-3 text-slate-400 text-sm">ou</span>
          <div className="flex-1 h-px bg-slate-700"></div>
        </div>

        {/* Formulaire email */}
        <form onSubmit={handleEmailAuth} className="space-y-4">
          {authMode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                placeholder="Nom quantique"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>
                  {authMode === 'signin' ? 'Connexion...' : 'Inscription...'}
                </span>
              </div>
            ) : (
              authMode === 'signin' ? 'Se connecter' : 'S\\'inscrire'
            )}
          </button>
        </form>

        {/* Basculer entre connexion/inscription */}
        <div className="text-center mt-6">
          <button
            onClick={() => {
              setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
              setError('');
            }}
            className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
          >
            {authMode === 'signin' 
              ? 'Pas encore de compte ? S\\'inscrire' 
              : 'Déjà un compte ? Se connecter'
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
