// Firebase configuration pour ExoQuanta
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Configuration Firebase (même projet que finance-app)
const firebaseConfig = {
  apiKey: "AIzaSyC3dhmkrTaodzd14oKh9xmiQTwM6CICEKc",
  authDomain: "finance-app-e7691.firebaseapp.com",
  databaseURL: "https://finance-app-e7691.firebaseio.com",
  projectId: "finance-app-e7691",
  storageBucket: "finance-app-e7691.firebasestorage.app",
  messagingSenderId: "418348225540",
  appId: "1:418348225540:web:d6065b5700d714784fd151",
  measurementId: "G-T16230JR5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication et providers
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

// Initialize Cloud Firestore
export const db = getFirestore(app);

// Initialize Analytics (seulement côté client)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Configuration spécifique pour ExoQuanta
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

githubProvider.setCustomParameters({
  allow_signup: 'true'
});

export default app;
