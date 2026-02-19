import { useState, useEffect, useRef } from 'react';
import { db, isFirebaseReady, firebase } from '../firebase';

/**
 * Firestore data synchronization hook.
 * Handles:
 * - Purchase sync (subscriptions + one-time payments)
 * - User data load from Firestore on login
 * - Auto-save user data with debounce
 */
export const useFirestoreSync = ({ firebaseUser, state, dispatch, ACTION_TYPES, savedState }) => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const prevUserRef = useRef(undefined); // undefined = initial, null = logged out

    // 1. Purchase Sync Listener (Firestore -> App)
    useEffect(() => {
        if (!isFirebaseReady || !firebaseUser) return;

        // (A) Annual Subscriptions
        const subUnsub = db.collection('customers').doc(firebaseUser.uid)
            .collection('subscriptions')
            .where('status', 'in', ['active', 'trialing'])
            .onSnapshot(snap => {
                if (!snap.empty) {
                    dispatch({ type: ACTION_TYPES.SET_PLAN, payload: 'annual' });
                }
            });

        // (B) One-time Payments (Lifetime / Single)
        const payUnsub = db.collection('customers').doc(firebaseUser.uid)
            .collection('payments')
            .where('status', '==', 'succeeded')
            .onSnapshot(snap => {
                snap.docs.forEach(doc => {
                    const data = doc.data();
                    const meta = data.metadata || {};

                    if (meta.firebaseRole === 'lifetime' || meta.firebaseRole === 'lifetime-upgrade') {
                        dispatch({ type: ACTION_TYPES.SET_PLAN, payload: 'lifetime' });
                    } else if (meta.firebaseRole === 'roadmap' && meta.targetRoadmap) {
                        dispatch({ type: ACTION_TYPES.PURCHASE_BUNDLE, payload: meta.targetRoadmap });
                    }
                });
            });

        return () => { subUnsub(); payUnsub(); };
    }, [firebaseUser, dispatch, ACTION_TYPES]);

    // 2. User Data Load
    useEffect(() => {
        if (!isFirebaseReady || !firebaseUser) {
            setIsDataLoaded(true); // Allow guest mode immediately
            prevUserRef.current = null;
            return;
        }

        // Distinguish: page reload (same user) vs fresh login / account switch
        const isPageReload = prevUserRef.current === undefined;
        const isAccountSwitch = prevUserRef.current !== undefined
            && prevUserRef.current !== null
            && prevUserRef.current !== firebaseUser.uid;
        const hasCachedData = !!savedState?.userProfile;

        if (isAccountSwitch) {
            setIsDataLoaded(false);
            dispatch({ type: ACTION_TYPES.RESET_STATE });
        } else if (isPageReload && hasCachedData) {
            setIsDataLoaded(true);
        } else if (!isPageReload) {
            setIsDataLoaded(false);
            dispatch({ type: ACTION_TYPES.RESET_STATE });
        } else {
            setIsDataLoaded(false);
        }

        prevUserRef.current = firebaseUser.uid;

        // Apply Firestore data (merges on top of cached or reset state)
        db.collection('users').doc(firebaseUser.uid).get()
            .then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    if (data.profile) dispatch({ type: ACTION_TYPES.SET_PROFILE, payload: data.profile });
                    if (data.goals) dispatch({ type: ACTION_TYPES.SET_GOALS, payload: data.goals });

                    if (data.progress) {
                        dispatch({
                            type: ACTION_TYPES.UPDATE_CARDS,
                            payload: {
                                understood: data.progress.understood || [],
                                unclear: data.progress.unclear || []
                            }
                        });
                        if (data.progress.dailyCompleted !== undefined) {
                            let isToday = false;
                            const lastTimestamp = data.progress.lastDate;

                            if (lastTimestamp && typeof lastTimestamp.toDate === 'function') {
                                const last = lastTimestamp.toDate();
                                const now = new Date();
                                isToday = last.toDateString() === now.toDateString();
                            } else if (lastTimestamp) {
                                const last = new Date(lastTimestamp);
                                const now = new Date();
                                isToday = last.toDateString() === now.toDateString();
                            }

                            if (isToday) {
                                dispatch({ type: ACTION_TYPES.SET_DAILY_COMPLETED, payload: data.progress.dailyCompleted });
                            } else {
                                dispatch({ type: ACTION_TYPES.RESET_DAILY_GOAL });
                            }
                        }

                        if (data.progress.nextReplenishTime) {
                            dispatch({
                                type: ACTION_TYPES.UPDATE_LIMITS,
                                payload: { nextReplenishTime: data.progress.nextReplenishTime }
                            });
                        }
                    }

                    if (data.settings) {
                        if (data.settings.portfolio) {
                            dispatch({ type: ACTION_TYPES.UPDATE_PORTFOLIO_SETTINGS, payload: data.settings.portfolio });
                        }
                        if (data.settings.onboardingStep !== undefined) {
                            dispatch({ type: ACTION_TYPES.SET_ONBOARDING, payload: data.settings.onboardingStep });
                        }
                    }
                }
            })
            .catch(err => console.error("Error syncing user data:", err))
            .finally(() => setIsDataLoaded(true));

    }, [firebaseUser, dispatch, ACTION_TYPES]);

    // 3. Auto-save User Data to Firestore
    useEffect(() => {
        if (!isFirebaseReady || !firebaseUser || !isDataLoaded) return;

        const saveData = setTimeout(() => {
            const dataToSave = {
                profile: state.userProfile,
                goals: state.userGoals,
                progress: {
                    understood: state.understoodCards,
                    unclear: state.unclearCards,
                    dailyCompleted: state.dailyCompleted,
                    lastDate: state.lastDailyGoalDate,
                    nextReplenishTime: state.nextReplenishTime
                },
                settings: {
                    portfolio: state.portfolioSettings,
                    onboardingStep: state.onboardingStep
                },
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            db.collection('users').doc(firebaseUser.uid).set(dataToSave, { merge: true })
                .catch(e => console.error("Save error:", e));
        }, 2000);

        return () => clearTimeout(saveData);
    }, [
        firebaseUser,
        isDataLoaded,
        state.userProfile,
        state.userGoals,
        state.understoodCards,
        state.unclearCards,
        state.dailyCompleted,
        state.portfolioSettings,
        state.onboardingStep
    ]);

    return { isDataLoaded };
};
