/* =========================================
   FIREBASE CONFIGURATION (ES Module)
   ========================================= */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
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
    console.warn("⚠️ No Firebase config found. VITE_FIREBASE_API_KEY is missing/empty.");
    console.log("Config dump (keys only):", Object.keys(firebaseConfig));
}

export { auth, db, isFirebaseReady, firebase };
