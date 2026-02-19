import React, { useState, useEffect, useMemo, useCallback, useReducer } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Firebase
import { auth, db, isFirebaseReady, firebase } from './firebase';

// Components
import LoginButton from './components/LoginButton';
import Header from './components/Header';
import DisclaimerModal from './components/DisclaimerModal';
import SplashScreen from './components/SplashScreen';
import IOSInstallPrompt from './components/IOSInstallPrompt';
import SettingsModal from './components/SettingsModal';

// Pages
import AssetGallery from './pages/AssetGallery';
import PortfolioCalibration from './pages/PortfolioCalibration';
import PortfolioCreator from './pages/PortfolioCreator';
import TheBriefing from './pages/TheBriefing';
import BrokerComparison from './pages/BrokerComparison';
import { Tokushoho, PrivacyPolicy } from './pages/LegalPages';

const App = () => {
    // localStorage key for state persistence
    const STORAGE_KEY = 'invision_state_v1';

    // Load initial state from localStorage
    const loadSavedState = () => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            console.warn('Failed to load saved state:', e);
            return null;
        }
    };

    const savedState = useMemo(() => loadSavedState(), []);

    // ============================================
    // UNIFIED STATE WITH useReducer
    // ============================================
    const initialState = {
        // Persisted state
        onboardingStep: savedState?.onboardingStep ?? 0,
        currentPage: savedState?.currentPage ?? 'gallery',
        userProfile: savedState?.userProfile ?? null,
        userGoals: savedState?.userGoals ?? null,
        learnProgress: savedState?.learnProgress ?? 0,
        userPlan: savedState?.userPlan ?? 'free',
        understoodCards: savedState?.understoodCards ?? [],
        unclearCards: savedState?.unclearCards ?? [],
        purchasedBundles: savedState?.purchasedBundles ?? [],
        freeLimit: savedState?.freeLimit ?? 5,
        nextReplenishTime: savedState?.nextReplenishTime ?? null,
        dailyCompleted: savedState?.dailyCompleted ?? 0,
        lastDailyGoalDate: savedState?.lastDailyGoalDate ?? Date.now(),
        portfolioSettings: savedState?.portfolioSettings ?? null,
        // UI-only state (not persisted)
        showSplash: true,
        showSettings: false,
        showDisclaimer: true,
        showIOSPrompt: false,
        pageParams: null
    };

    // Action types for clear state transitions
    const ACTION_TYPES = {
        FINISH_SPLASH: 'FINISH_SPLASH',
        ACCEPT_DISCLAIMER: 'ACCEPT_DISCLAIMER',
        SHOW_IOS_PROMPT: 'SHOW_IOS_PROMPT',
        DISMISS_IOS_PROMPT: 'DISMISS_IOS_PROMPT',
        SET_PAGE: 'SET_PAGE',
        SET_PROFILE: 'SET_PROFILE',
        SET_GOALS: 'SET_GOALS',
        SET_PROGRESS: 'SET_PROGRESS',
        SET_PLAN: 'SET_PLAN',
        SET_ONBOARDING: 'SET_ONBOARDING',
        TOGGLE_SETTINGS: 'TOGGLE_SETTINGS',
        UPDATE_CARDS: 'UPDATE_CARDS',
        SET_PAGE_PARAMS: 'SET_PAGE_PARAMS',
        PURCHASE_BUNDLE: 'PURCHASE_BUNDLE',
        UPDATE_LIMITS: 'UPDATE_LIMITS',
        SET_DAILY_COMPLETED: 'SET_DAILY_COMPLETED',
        RESET_DAILY_GOAL: 'RESET_DAILY_GOAL',
        UPDATE_PORTFOLIO_SETTINGS: 'UPDATE_PORTFOLIO_SETTINGS',
        RESET_STATE: 'RESET_STATE'
    };

    const appReducer = (state, action) => {
        switch (action.type) {
            case ACTION_TYPES.FINISH_SPLASH:
                return { ...state, showSplash: false };
            case ACTION_TYPES.ACCEPT_DISCLAIMER:
                return { ...state, showDisclaimer: false, currentPage: state.onboardingStep === 0 ? 'diagnosis' : state.currentPage };
            case ACTION_TYPES.SHOW_IOS_PROMPT:
                return { ...state, showIOSPrompt: true };
            case ACTION_TYPES.DISMISS_IOS_PROMPT:
                return { ...state, showIOSPrompt: false };
            case ACTION_TYPES.SET_PAGE:
                return {
                    ...state,
                    currentPage: action.payload.page,
                    pageParams: action.payload.params || null,
                    onboardingStep: action.payload.page === 'gallery' && state.onboardingStep < 3
                        ? 3 : state.onboardingStep
                };
            case ACTION_TYPES.SET_PROFILE:
                return { ...state, userProfile: action.payload };
            case ACTION_TYPES.SET_GOALS:
                return { ...state, userGoals: action.payload };
            case ACTION_TYPES.SET_PROGRESS:
                return { ...state, learnProgress: action.payload };
            case ACTION_TYPES.SET_PLAN:
                return { ...state, userPlan: action.payload };
            case ACTION_TYPES.SET_ONBOARDING:
                return { ...state, onboardingStep: action.payload };
            case ACTION_TYPES.TOGGLE_SETTINGS:
                return { ...state, showSettings: action.payload ?? !state.showSettings };
            case ACTION_TYPES.UPDATE_CARDS:
                return {
                    ...state,
                    understoodCards: action.payload.understood ?? state.understoodCards,
                    unclearCards: action.payload.unclear ?? state.unclearCards
                };
            case ACTION_TYPES.SET_PAGE_PARAMS:
                return { ...state, pageParams: action.payload };
            case ACTION_TYPES.PURCHASE_BUNDLE:
                return {
                    ...state,
                    purchasedBundles: state.purchasedBundles.includes(action.payload)
                        ? state.purchasedBundles
                        : [...state.purchasedBundles, action.payload]
                };
            case ACTION_TYPES.UPDATE_LIMITS:
                return {
                    ...state,
                    freeLimit: action.payload.freeLimit !== undefined ? action.payload.freeLimit : state.freeLimit,
                    nextReplenishTime: action.payload.nextReplenishTime !== undefined ? action.payload.nextReplenishTime : state.nextReplenishTime
                };
            case ACTION_TYPES.SET_DAILY_COMPLETED:
                return {
                    ...state,
                    dailyCompleted: action.payload,
                    lastDailyGoalDate: Date.now()
                };
            case ACTION_TYPES.RESET_DAILY_GOAL:
                return {
                    ...state,
                    dailyCompleted: 0,
                    lastDailyGoalDate: Date.now()
                };
            case ACTION_TYPES.UPDATE_PORTFOLIO_SETTINGS:
                return {
                    ...state,
                    portfolioSettings: action.payload
                };
            case ACTION_TYPES.RESET_STATE:
                return {
                    ...state,
                    userProfile: null,
                    userGoals: null,
                    learnProgress: 0,
                    userPlan: 'free',
                    understoodCards: [],
                    unclearCards: [],
                    purchasedBundles: [],
                    freeLimit: 5,
                    dailyCompleted: 0,
                    portfolioSettings: null,
                    showSettings: false
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(appReducer, initialState);

    // ============================================
    // FIREBASE & STRIPE INTEGRATION
    // ============================================
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

    // 2. Purchase Sync Listener (Firestore -> App)
    useEffect(() => {
        if (!isFirebaseReady || !firebaseUser) return;

        // (A) Annual Subscriptions
        const subUnsub = db.collection('customers').doc(firebaseUser.uid).collection('subscriptions')
            .where('status', 'in', ['active', 'trialing'])
            .onSnapshot(snap => {
                if (!snap.empty) {
                    dispatch({ type: ACTION_TYPES.SET_PLAN, payload: 'annual' });
                }
            });

        // (B) One-time Payments (Lifetime / Single)
        const payUnsub = db.collection('customers').doc(firebaseUser.uid).collection('payments')
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
    }, [firebaseUser]);

    // 3. User Data Sync (Profile, Progress, Settings)
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        if (!isFirebaseReady || !firebaseUser) {
            setIsDataLoaded(true); // Allow guest mode immediately
            return;
        }

        // On login, reset local state to prevent guest data leakage
        setIsDataLoaded(false);
        dispatch({ type: ACTION_TYPES.RESET_STATE });

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

                        // Sync replenish time
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

    }, [firebaseUser]);

    // 4. Auto-save User Data
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

    // 3. Actions
    const handleFirebaseLogin = async () => {
        if (!isFirebaseReady) return;
        try { await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); }
        catch (e) { alert("ログインエラー: " + e.message); }
    };

    const handleFirebaseLogout = async () => {
        if (!isFirebaseReady) return;
        await auth.signOut();
        localStorage.removeItem(STORAGE_KEY);
        dispatch({ type: ACTION_TYPES.RESET_STATE });
        window.location.reload();
    };

    const createCheckoutSession = async (role, targetRoadmap = null) => {
        if (!isFirebaseReady) return;
        if (!firebaseUser) {
            handleFirebaseLogin();
            return;
        }

        alert("Stripe決済を開始します...少々お待ちください");

        try {
            const productsSnap = await db.collection('products').where('active', '==', true).where('metadata.firebaseRole', '==', role).get();
            if (productsSnap.empty) throw new Error("商品が見つかりません (metadata: " + role + ")");

            const priceSnap = await productsSnap.docs[0].ref.collection('prices').where('active', '==', true).limit(1).get();
            if (priceSnap.empty) throw new Error("価格設定が見つかりません");

            const mode = 'payment';

            const docRef = await db.collection('customers').doc(firebaseUser.uid).collection('checkout_sessions').add({
                price: priceSnap.docs[0].id,
                mode: mode,
                success_url: window.location.href,
                cancel_url: window.location.href,
                metadata: { firebaseRole: role, targetRoadmap }
            });

            docRef.onSnapshot(snap => {
                const { url, error } = snap.data() || {};
                if (error) alert("エラー: " + error.message);
                if (url) window.location.assign(url);
            });
        } catch (e) {
            alert("エラー: " + e.message);
        }
    };

    // Destructure for convenience (read-only)
    const {
        showSplash, showSettings, showDisclaimer, showIOSPrompt, pageParams,
        onboardingStep, currentPage, userProfile, userGoals,
        learnProgress, userPlan, understoodCards, unclearCards,
        purchasedBundles, freeLimit, nextReplenishTime, dailyCompleted,
        portfolioSettings
    } = state;

    // Save persisted state to localStorage (debounced)
    useEffect(() => {
        const saveTimeout = setTimeout(() => {
            try {
                const stateToSave = {
                    onboardingStep: state.onboardingStep,
                    currentPage: state.currentPage,
                    userProfile: state.userProfile,
                    userGoals: state.userGoals,
                    learnProgress: state.learnProgress,
                    userPlan: state.userPlan,
                    understoodCards: state.understoodCards,
                    unclearCards: state.unclearCards,
                    purchasedBundles: state.purchasedBundles,
                    freeLimit: state.freeLimit,
                    nextReplenishTime: state.nextReplenishTime,
                    dailyCompleted: state.dailyCompleted,
                    lastDailyGoalDate: state.lastDailyGoalDate,
                    portfolioSettings: state.portfolioSettings
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
            } catch (e) {
                console.warn('Failed to save state:', e);
            }
        }, 500);
        return () => clearTimeout(saveTimeout);
    }, [state]);

    // Check for new day to reset daily goal
    useEffect(() => {
        const lastDate = new Date(state.lastDailyGoalDate);
        const today = new Date();
        if (lastDate.toDateString() !== today.toDateString()) {
            dispatch({ type: ACTION_TYPES.RESET_DAILY_GOAL });
        }
    }, [state.lastDailyGoalDate]);

    // ============================================
    // ACTION DISPATCHERS (memoized)
    // ============================================
    const acceptDisclaimer = useCallback(() => {
        dispatch({ type: ACTION_TYPES.ACCEPT_DISCLAIMER });
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        const isStandalone = window.navigator.standalone === true;
        const hasSeenPrompt = sessionStorage.getItem('ios_prompt_seen');
        if (isIOS && !isStandalone && !hasSeenPrompt) {
            dispatch({ type: ACTION_TYPES.SHOW_IOS_PROMPT });
            sessionStorage.setItem('ios_prompt_seen', 'true');
        }
    }, []);

    const dismissIOSPrompt = useCallback(() => {
        dispatch({ type: ACTION_TYPES.DISMISS_IOS_PROMPT });
    }, []);

    const finishSplash = useCallback(() => {
        dispatch({ type: ACTION_TYPES.FINISH_SPLASH });
    }, []);

    const handleNavigate = useCallback((page, params) => {
        dispatch({ type: ACTION_TYPES.SET_PAGE, payload: { page, params } });
        if (page === 'gallery') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    const finishCalibration = useCallback((profile) => {
        dispatch({ type: ACTION_TYPES.SET_PROFILE, payload: profile });
        dispatch({ type: ACTION_TYPES.SET_ONBOARDING, payload: 3 });
        dispatch({ type: ACTION_TYPES.SET_PAGE, payload: { page: 'portfolio' } });
    }, []);

    const skipOnboarding = useCallback(() => {
        dispatch({ type: ACTION_TYPES.SET_ONBOARDING, payload: 3 });
        dispatch({ type: ACTION_TYPES.SET_PAGE, payload: { page: 'gallery' } });
    }, []);

    const handleDiagnosisComplete = useCallback((profile) => {
        dispatch({ type: ACTION_TYPES.SET_PROFILE, payload: profile });
        dispatch({ type: ACTION_TYPES.SET_PAGE, payload: { page: 'portfolio' } });
    }, []);

    const handleSkip = useCallback(() => {
        dispatch({ type: ACTION_TYPES.SET_PAGE, payload: { page: 'gallery' } });
    }, []);

    const handleSetProfile = useCallback((profile) => {
        dispatch({ type: ACTION_TYPES.SET_PROFILE, payload: profile });
    }, []);

    const handleSetPlan = (plan) => {
        if (isFirebaseReady) {
            if (plan === 'light' || plan === 'complete') {
                createCheckoutSession(plan);
                return;
            }
        }
        dispatch({ type: ACTION_TYPES.SET_PLAN, payload: plan });
    };

    const handleSetProgress = useCallback((progress) => {
        dispatch({ type: ACTION_TYPES.SET_PROGRESS, payload: progress });
    }, []);

    const handleUpdateCards = useCallback((cards) => {
        dispatch({ type: ACTION_TYPES.UPDATE_CARDS, payload: cards });
    }, []);

    const handleOpenSettings = useCallback(() => {
        dispatch({ type: ACTION_TYPES.TOGGLE_SETTINGS, payload: true });
    }, []);

    const handleCloseSettings = useCallback(() => {
        dispatch({ type: ACTION_TYPES.TOGGLE_SETTINGS, payload: false });
    }, []);

    const handleClearPreSelection = useCallback(() => {
        dispatch({ type: ACTION_TYPES.SET_PAGE_PARAMS, payload: null });
    }, []);

    const handlePurchaseBundle = (bundleId) => {
        if (isFirebaseReady) {
            createCheckoutSession('roadmap', bundleId);
        } else {
            dispatch({ type: ACTION_TYPES.PURCHASE_BUNDLE, payload: bundleId });
        }
    };

    const handleUpdateLimits = useCallback((limits) => {
        dispatch({ type: ACTION_TYPES.UPDATE_LIMITS, payload: limits });
        if (limits.freeLimit && limits.freeLimit > state.freeLimit) {
            dispatch({ type: ACTION_TYPES.RESET_DAILY_GOAL });
        }
    }, [state.freeLimit]);

    const handleUpdateDailyCompleted = useCallback(({ dailyCompleted }) => {
        dispatch({ type: ACTION_TYPES.SET_DAILY_COMPLETED, payload: dailyCompleted });
    }, []);

    const handleUpdatePortfolioSettings = useCallback((settings) => {
        dispatch({ type: ACTION_TYPES.UPDATE_PORTFOLIO_SETTINGS, payload: settings });
    }, []);

    // ============================================
    // CONTENT RENDERER
    // ============================================
    const renderContent = () => {
        if (onboardingStep === 1) {
            return <PortfolioCalibration onComplete={finishCalibration} isOnboarding={true} onSkip={skipOnboarding} onNavigate={handleNavigate} />;
        }

        switch (currentPage) {
            case 'diagnosis':
                return <PortfolioCalibration onComplete={handleDiagnosisComplete} onSkip={handleSkip} existingProfile={userProfile} isOnboarding={onboardingStep === 1} onNavigate={handleNavigate} />;
            case 'portfolio':
                return <PortfolioCreator
                    userProfile={userProfile}
                    onNavigate={handleNavigate}
                    userPlan={userPlan}
                    onUpgrade={() => handleSetPlan('complete')}
                    portfolioSettings={portfolioSettings}
                    onSave={handleUpdatePortfolioSettings}
                />;

            case 'briefing':
                return <TheBriefing
                    onNavigate={handleNavigate}
                    userProfile={userProfile}
                    userGoals={userGoals}
                    onProgressUpdate={handleSetProgress}
                    userPlan={userPlan}
                    onUpgrade={handleSetPlan}
                    understoodCards={understoodCards}
                    unclearCards={unclearCards}
                    dailyCompleted={dailyCompleted}
                    setUnderstoodCards={(cards) => handleUpdateCards({ understood: cards })}
                    setUnclearCards={(cards) => handleUpdateCards({ unclear: cards })}
                    purchasedBundles={purchasedBundles}
                    onPurchaseBundle={handlePurchaseBundle}
                    freeLimit={freeLimit}
                    nextReplenishTime={nextReplenishTime}
                    onUpdateLimits={handleUpdateLimits}
                    onUpdateDailyCompleted={handleUpdateDailyCompleted}
                />;
            case 'calibration':
                return <PortfolioCalibration existingProfile={userProfile} onComplete={(p) => { handleSetProfile(p); handleNavigate('gallery'); }} onNavigate={handleNavigate} />;
            case 'brokers':
                return <BrokerComparison onNavigate={handleNavigate} />;
            case 'tokushoho':
                return <Tokushoho onNavigate={handleNavigate} />;
            case 'privacy':
                return <PrivacyPolicy onNavigate={handleNavigate} />;
            default:
                return <AssetGallery onNavigate={handleNavigate} preSelectedAssetId={pageParams?.assetId} onClearPreSelection={handleClearPreSelection} />;
        }
    };

    // ============================================
    // RENDER
    // ============================================
    return (
        <div className="font-sans text-platinum selection:bg-gold/30">
            {showSplash && <SplashScreen onComplete={finishSplash} />}

            {showDisclaimer && !showSplash && <DisclaimerModal onAccept={acceptDisclaimer} />}

            {showIOSPrompt && !showSplash && !showDisclaimer && <IOSInstallPrompt onDismiss={dismissIOSPrompt} />}

            {!showSplash && !showDisclaimer && !showIOSPrompt && (
                <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {/* Data Sync Loading Overlay */}
                    {firebaseUser && !isDataLoaded && (
                        <div className="fixed inset-0 z-[70] bg-obsidian/90 backdrop-blur-sm flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
                        </div>
                    )}
                    <Header
                        currentPage={currentPage}
                        onNavigate={handleNavigate}
                        onOpenSettings={handleOpenSettings}
                        showNav={true}
                        userProfile={userProfile}
                        progress={learnProgress}
                        firebaseUser={firebaseUser}
                        onLogin={handleFirebaseLogin}
                        onLogout={handleFirebaseLogout}
                    />
                    {renderContent()}
                    <AnimatePresence>
                        <SettingsModal isOpen={showSettings} onClose={handleCloseSettings} onNavigate={handleNavigate} userPlan={userPlan} onUpgrade={handleSetPlan} onLogout={handleFirebaseLogout} />
                    </AnimatePresence>
                </motion.div>
            )
            }
        </div>
    );
};

export default App;
