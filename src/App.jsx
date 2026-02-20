import React, { useMemo, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

// Components
import Header from './components/Header';
import GuideTour, { shouldShowGuideTour } from './components/GuideTour';
import DisclaimerModal from './components/DisclaimerModal';
import SplashScreen from './components/SplashScreen';
import IOSInstallPrompt from './components/IOSInstallPrompt';
import SettingsModal from './components/SettingsModal';
import { ToastProvider, useToast } from './components/Toast';

// Context & Hooks
import { AppContext } from './contexts/AppContext';
import { usePageMeta } from './hooks/usePageMeta';
import { useAppReducer, ACTION_TYPES } from './hooks/useAppReducer';
import { useAuth } from './hooks/useAuth';
import { useFirestoreSync } from './hooks/useFirestoreSync';

// Firebase (only needed for isFirebaseReady check)
import { isFirebaseReady } from './firebase';

// Route mapping: internal page names <-> URL paths
const PAGE_TO_PATH = {
    gallery: '/',
    briefing: '/briefing',
    portfolio: '/portfolio',
    diagnosis: '/diagnosis',
    calibration: '/calibration',
    brokers: '/brokers',
    tokushoho: '/tokushoho',
    privacy: '/privacy',
};
const PATH_TO_PAGE = Object.fromEntries(
    Object.entries(PAGE_TO_PATH).map(([k, v]) => [v, k])
);

const App = () => {
    return (
        <ToastProvider>
            <AppInner />
        </ToastProvider>
    );
};

const AppInner = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const showToast = useToast();
    const [guideTourDone, setGuideTourDone] = useState(false);

    // SEO: set document title and meta description per route
    usePageMeta();

    // Derive currentPage from URL for backward-compat
    const currentPage = PATH_TO_PAGE[location.pathname] || 'gallery';

    // ============================================
    // HOOKS (extracted from old monolithic App)
    // ============================================
    const { state, dispatch, savedState } = useAppReducer();

    const {
        firebaseUser, handleFirebaseLogin, handleFirebaseLogout
    } = useAuth({ dispatch, ACTION_TYPES, savedState, showToast });

    const { isDataLoaded } = useFirestoreSync({
        firebaseUser, state, dispatch, ACTION_TYPES, savedState
    });

    // Destructure for convenience (read-only)
    const {
        showSplash, showSettings, showDisclaimer, showIOSPrompt, pageParams,
        onboardingStep, userProfile, userGoals,
        learnProgress, userPlan, understoodCards, unclearCards,
        purchasedBundles, freeLimit, nextReplenishTime, dailyCompleted,
        portfolioSettings
    } = state;

    // ============================================
    // ACTION DISPATCHERS (memoized)
    // ============================================
    const acceptDisclaimer = useCallback(() => {
        dispatch({ type: ACTION_TYPES.ACCEPT_DISCLAIMER });
        localStorage.setItem('disclaimer_accepted', 'true');
        // Navigate to diagnosis if onboarding
        if (state.onboardingStep === 0) {
            navigate('/diagnosis');
        }
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        const isStandalone = window.navigator.standalone === true;
        const hasSeenPrompt = sessionStorage.getItem('ios_prompt_seen');
        if (isIOS && !isStandalone && !hasSeenPrompt) {
            dispatch({ type: ACTION_TYPES.SHOW_IOS_PROMPT });
            sessionStorage.setItem('ios_prompt_seen', 'true');
        }
    }, [state.onboardingStep, navigate, dispatch]);

    const dismissIOSPrompt = useCallback(() => {
        dispatch({ type: ACTION_TYPES.DISMISS_IOS_PROMPT });
    }, [dispatch]);

    const finishSplash = useCallback(() => {
        dispatch({ type: ACTION_TYPES.FINISH_SPLASH });
    }, [dispatch]);

    const handleNavigate = useCallback((page, params) => {
        const path = PAGE_TO_PATH[page] || '/';
        navigate(path);
        if (params) {
            dispatch({ type: ACTION_TYPES.SET_PAGE_PARAMS, payload: params });
        }
        if (page === 'gallery') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [navigate, dispatch]);

    const finishCalibration = useCallback((profile) => {
        dispatch({ type: ACTION_TYPES.SET_PROFILE, payload: profile });
        dispatch({ type: ACTION_TYPES.SET_ONBOARDING, payload: 3 });
        navigate('/portfolio');
    }, [navigate, dispatch]);

    const skipOnboarding = useCallback(() => {
        dispatch({ type: ACTION_TYPES.SET_ONBOARDING, payload: 3 });
        navigate('/');
    }, [navigate, dispatch]);

    const handleDiagnosisComplete = useCallback((profile) => {
        dispatch({ type: ACTION_TYPES.SET_PROFILE, payload: profile });
        navigate('/portfolio');
    }, [navigate, dispatch]);

    const handleSkip = useCallback(() => {
        navigate('/');
    }, [navigate]);

    const handleSetProfile = useCallback((profile) => {
        dispatch({ type: ACTION_TYPES.SET_PROFILE, payload: profile });
    }, [dispatch]);

    const handleSetPlan = (plan) => {
        if (isFirebaseReady && (plan === 'light' || plan === 'complete')) {
            // TODO: Re-implement with new payment provider
            showToast('決済システム準備中です。もうしばらくお待ちください。', 'info');
            return;
        }
        dispatch({ type: ACTION_TYPES.SET_PLAN, payload: plan });
    };

    const handleSetProgress = useCallback((progress) => {
        dispatch({ type: ACTION_TYPES.SET_PROGRESS, payload: progress });
    }, [dispatch]);

    const handleUpdateCards = useCallback((cards) => {
        dispatch({ type: ACTION_TYPES.UPDATE_CARDS, payload: cards });
    }, [dispatch]);

    const handleOpenSettings = useCallback(() => {
        dispatch({ type: ACTION_TYPES.TOGGLE_SETTINGS, payload: true });
    }, [dispatch]);

    const handleCloseSettings = useCallback(() => {
        dispatch({ type: ACTION_TYPES.TOGGLE_SETTINGS, payload: false });
    }, [dispatch]);

    const handleClearPreSelection = useCallback(() => {
        dispatch({ type: ACTION_TYPES.SET_PAGE_PARAMS, payload: null });
    }, [dispatch]);

    const handlePurchaseBundle = (bundleId) => {
        if (isFirebaseReady) {
            // TODO: Re-implement with new payment provider
            showToast('決済システム準備中です。もうしばらくお待ちください。', 'info');
        } else {
            dispatch({ type: ACTION_TYPES.PURCHASE_BUNDLE, payload: bundleId });
        }
    };

    const handleUpdateLimits = useCallback((limits) => {
        dispatch({ type: ACTION_TYPES.UPDATE_LIMITS, payload: limits });
        if (limits.freeLimit && limits.freeLimit > state.freeLimit) {
            dispatch({ type: ACTION_TYPES.RESET_DAILY_GOAL });
        }
    }, [state.freeLimit, dispatch]);

    const handleUpdateDailyCompleted = useCallback(({ dailyCompleted }) => {
        dispatch({ type: ACTION_TYPES.SET_DAILY_COMPLETED, payload: dailyCompleted });
    }, [dispatch]);

    const handleUpdatePortfolioSettings = useCallback((settings) => {
        dispatch({ type: ACTION_TYPES.UPDATE_PORTFOLIO_SETTINGS, payload: settings });
    }, [dispatch]);

    // ============================================
    // CONTEXT VALUE (shared with child routes)
    // ============================================
    const contextValue = useMemo(() => ({
        // State
        onboardingStep, userProfile, userGoals,
        learnProgress, userPlan, understoodCards, unclearCards,
        purchasedBundles, freeLimit, nextReplenishTime, dailyCompleted,
        portfolioSettings, pageParams, firebaseUser,
        // Actions
        onNavigate: handleNavigate,
        onLogin: handleFirebaseLogin,
        onLogout: handleFirebaseLogout,
        onSetProfile: handleSetProfile,
        onSetPlan: handleSetPlan,
        onSetProgress: handleSetProgress,
        onUpgrade: handleSetPlan,
        onUpdateCards: handleUpdateCards,
        onPurchaseBundle: handlePurchaseBundle,
        onUpdateLimits: handleUpdateLimits,
        onUpdateDailyCompleted: handleUpdateDailyCompleted,
        onUpdatePortfolioSettings: handleUpdatePortfolioSettings,
        onClearPreSelection: handleClearPreSelection,
        finishCalibration,
        skipOnboarding,
        handleDiagnosisComplete,
        handleSkip,
        setUnderstoodCards: (cards) => handleUpdateCards({ understood: cards }),
        setUnclearCards: (cards) => handleUpdateCards({ unclear: cards }),
    }), [
        onboardingStep, userProfile, userGoals, learnProgress, userPlan,
        understoodCards, unclearCards, purchasedBundles, freeLimit,
        nextReplenishTime, dailyCompleted, portfolioSettings, pageParams,
        firebaseUser, handleNavigate, handleSetProfile, handleSetProgress,
        handleUpdateCards, handleUpdateLimits, handleUpdateDailyCompleted,
        handleUpdatePortfolioSettings, handleClearPreSelection,
        finishCalibration, skipOnboarding, handleDiagnosisComplete, handleSkip,
    ]);

    // ============================================
    // RENDER
    // ============================================
    return (
        <AppContext.Provider value={contextValue}>
            <div className="font-sans text-platinum selection:bg-gold/30">
                {showSplash && <SplashScreen onComplete={finishSplash} />}

                {showDisclaimer && !showSplash && <DisclaimerModal onAccept={acceptDisclaimer} />}

                {showIOSPrompt && !showSplash && !showDisclaimer && <IOSInstallPrompt onDismiss={dismissIOSPrompt} />}

                {!showSplash && !showDisclaimer && !showIOSPrompt && !guideTourDone && shouldShowGuideTour() && (
                    <GuideTour onComplete={() => setGuideTourDone(true)} />
                )}

                {!showSplash && !showDisclaimer && !showIOSPrompt && (guideTourDone || !shouldShowGuideTour()) && (
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
                        {/* React Router renders child pages here */}
                        <Outlet />
                        <AnimatePresence>
                            <SettingsModal isOpen={showSettings} onClose={handleCloseSettings} onNavigate={handleNavigate} userPlan={userPlan} onUpgrade={handleSetPlan} onLogout={handleFirebaseLogout} />
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </AppContext.Provider>
    );
};

export default App;
