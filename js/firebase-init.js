/* =========================================
   [USER SETUP REQUIRED] FIREBASE CONFIGURATION
   Firebaseコンソールの「プロジェクトの設定」からコピーした
   firebaseConfig の中身をここに貼り付けてください。
   
   ※ apiKeyが空の場合は「デモモード（保存されない）」で動作します。
   ========================================= */
var firebaseConfig = {
    apiKey: "AIzaSyAxr2BB2pOPTGENaMHgyVqUne0AjX9LQkI",
    authDomain: "invison-demo.firebaseapp.com",
    projectId: "invison-demo",
    storageBucket: "invison-demo.firebasestorage.app",
    messagingSenderId: "836688239433",
    appId: "1:836688239433:web:fed3a1fedc790d6a909898",
    measurementId: "G-F6H4QZGGQ4"
};

// Initialize Firebase if config is present
window.auth = null;
window.db = null;
window.isFirebaseReady = false;

if (firebaseConfig.apiKey) {
    try {
        firebase.initializeApp(firebaseConfig);
        window.auth = firebase.auth();
        window.db = firebase.firestore();
        window.isFirebaseReady = true;
        console.log("✅ Firebase initialized!");
    } catch (e) {
        console.error("Firebase init failed:", e);
    }
} else {
    console.log("⚠️ No Firebase config found. Running in Demo Mode.");
}
