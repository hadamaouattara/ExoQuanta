// Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (only in browser)
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;