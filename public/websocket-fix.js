// Fix pour les erreurs WebSocket en production
(function() {
  'use strict';
  
  // Désactiver les connexions WebSocket en production
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    // Override WebSocket pour éviter les tentatives de connexion automatique
    const OriginalWebSocket = window.WebSocket;
    
    window.WebSocket = function(url, protocols) {
      console.warn('WebSocket bloqué en production:', url);
      
      // Retourner un mock WebSocket qui simule une connexion fermée
      return {
        readyState: 3, // CLOSED
        close: function() {},
        send: function() { console.warn('WebSocket envoi bloqué'); },
        addEventListener: function() {},
        removeEventListener: function() {},
        onopen: null,
        onclose: null,
        onmessage: null,
        onerror: null
      };
    };
    
    // Garder la référence originale si besoin
    window.WebSocket.original = OriginalWebSocket;
    
    console.log('🔧 WebSocket override activé pour la production');
  }
})();
