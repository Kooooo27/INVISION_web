/* =========================================
   FIREBASE CONFIGURATION (ES Module)
   ========================================= */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAxr2BB2pOPTGENaMHgyVqUne0AjX9LQkI",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "invison-demo.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "invison-demo",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "invison-demo.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "836688239433",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:836688239433:web:fed3a1fedc790d6a909898",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-F6H4QZGGQ4"
};

// Initialize Firebase if config is present
let auth = null;
let db = null;
let isFirebaseReady = false;

if (firebaseConfig.apiKey) {
    try {
        firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        isFirebaseReady = true;
        console.log("✅ Firebase initialized!");
    } catch (e) {
        console.error("Firebase init failed:", e);
    }
} else {
    console.log("⚠️ No Firebase config found. Running in Demo Mode.");
}

export { auth, db, isFirebaseReady, firebase };
