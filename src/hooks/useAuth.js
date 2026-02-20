import { useState, useEffect, useCallback } from 'react';
import { auth, isFirebaseReady, firebase } from '../firebase';

/**
 * Firebase authentication hook.
 * Manages auth state, login/logout.
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

    return {
        firebaseUser,
        handleFirebaseLogin,
        handleFirebaseLogout,
    };
};
