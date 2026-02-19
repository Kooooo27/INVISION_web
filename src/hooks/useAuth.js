import { useState, useEffect, useCallback } from 'react';
import { auth, db, isFirebaseReady, firebase } from '../firebase';

/**
 * Firebase authentication + Stripe checkout hook.
 * Manages auth state, login/logout, and payment session creation.
 */
export const useAuth = ({ dispatch, ACTION_TYPES, savedState, showToast }) => {
    const [firebaseUser, setFirebaseUser] = useState(null);

    // 1. Auth Listener
    useEffect(() => {
        if (!isFirebaseReady) return;
        const unsubscribe = auth.onAuthStateChanged(u => {
            setFirebaseUser(u);
            // Force reset plan to free if logged out
            if (!u && savedState?.userPlan !== 'free') {
                dispatch({ type: ACTION_TYPES.SET_PLAN, payload: 'free' });
            }
        });
        return () => unsubscribe();
    }, []);

    // Login
    const handleFirebaseLogin = useCallback(async () => {
        if (!isFirebaseReady) return;
        try {
            await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        } catch (e) {
            showToast("ログインエラー: " + e.message, 'error');
        }
    }, [showToast]);

    // Logout
    const handleFirebaseLogout = useCallback(async () => {
        if (!isFirebaseReady) return;
        await auth.signOut();
        localStorage.removeItem('invision_state_v1');
        dispatch({ type: ACTION_TYPES.RESET_STATE });
    }, [dispatch, ACTION_TYPES]);

    // Stripe Checkout
    const createCheckoutSession = useCallback(async (role, targetRoadmap = null) => {
        if (!isFirebaseReady) return;
        if (!firebaseUser) {
            handleFirebaseLogin();
            return;
        }

        showToast("Stripe決済を開始します...少々お待ちください", 'info', 6000);

        try {
            const productsSnap = await db.collection('products')
                .where('active', '==', true)
                .where('metadata.firebaseRole', '==', role)
                .get();
            if (productsSnap.empty) throw new Error("商品が見つかりません (metadata: " + role + ")");

            const priceSnap = await productsSnap.docs[0].ref.collection('prices')
                .where('active', '==', true).limit(1).get();
            if (priceSnap.empty) throw new Error("価格設定が見つかりません");

            const docRef = await db.collection('customers').doc(firebaseUser.uid)
                .collection('checkout_sessions').add({
                    price: priceSnap.docs[0].id,
                    mode: 'payment',
                    success_url: window.location.href,
                    cancel_url: window.location.href,
                    metadata: { firebaseRole: role, targetRoadmap }
                });

            docRef.onSnapshot(snap => {
                const { url, error } = snap.data() || {};
                if (error) showToast("エラー: " + error.message, 'error');
                if (url) window.location.assign(url);
            });
        } catch (e) {
            showToast("エラー: " + e.message, 'error');
        }
    }, [firebaseUser, handleFirebaseLogin, showToast]);

    return {
        firebaseUser,
        handleFirebaseLogin,
        handleFirebaseLogout,
        createCheckoutSession,
    };
};
