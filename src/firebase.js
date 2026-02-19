/* =========================================
   FIREBASE CONFIGURATION (ES Module)
   ========================================= */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

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
        // Keep user logged in across browser restarts
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        db = firebase.firestore();
        firebase.analytics(); // Initialize Analytics
        isFirebaseReady = true;
        // console.log("✅ Firebase initialized!");
    } catch (e) {
        console.error("Firebase init failed:", e);
    }
} else {
    // console.log("⚠️ No Firebase config found. Running in Demo Mode.");
}

export { auth, db, isFirebaseReady, firebase };
