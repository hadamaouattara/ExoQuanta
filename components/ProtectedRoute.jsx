'use client'

import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProtectedRoute({ children, fallback = null }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [showContent, setShowContent] = useState(false)
  const [timeoutReached, setTimeoutReached] = useState(false)

  useEffect(() => {
    // Timeout de sécurité pour éviter le blocage infini
    const timeout = setTimeout(() => {
      setTimeoutReached(true)
    }, 5000) // 5 secondes

    if (!loading) {
      clearTimeout(timeout)
      if (!user) {
        // Rediriger vers la page d'accueil si non connecté
        router.push('/')
      } else {
        setShowContent(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [user, loading, router])

  // Si timeout atteint, rediriger vers l'accueil
  if (timeoutReached && loading) {
    router.push('/')
    return null
  }

  if (loading && !timeoutReached) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Vérification de l&apos;accès quantique...</p>
          <p className="text-purple-300 text-sm mt-2">Initialisation de Firebase...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return fallback || (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
            <span className="text-white font-bold text-2xl">🔒</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Accès Restreint</h1>
          <p className="text-gray-400 mb-6">Cette zone nécessite une authentification quantique.</p>
          <button
            onClick={() => router.push(&apos;/&apos;)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-all"
          >
            Retour à l&apos;accueil
          </button>
        </div>
      </div>
    )
  }

  return showContent ? children : null
}
