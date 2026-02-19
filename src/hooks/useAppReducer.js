import { useReducer, useMemo, useEffect } from 'react';

// ============================================
// CONSTANTS
// ============================================
const STORAGE_KEY = 'invision_state_v1';

export const ACTION_TYPES = {
    FINISH_SPLASH: 'FINISH_SPLASH',
    ACCEPT_DISCLAIMER: 'ACCEPT_DISCLAIMER',
    SHOW_IOS_PROMPT: 'SHOW_IOS_PROMPT',
    DISMISS_IOS_PROMPT: 'DISMISS_IOS_PROMPT',
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

// ============================================
// REDUCER (exported for testing)
// ============================================
export const appReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.FINISH_SPLASH:
            return { ...state, showSplash: false };
        case ACTION_TYPES.ACCEPT_DISCLAIMER:
            return { ...state, showDisclaimer: false };
        case ACTION_TYPES.SHOW_IOS_PROMPT:
            return { ...state, showIOSPrompt: true };
        case ACTION_TYPES.DISMISS_IOS_PROMPT:
            return { ...state, showIOSPrompt: false };
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

// ============================================
// HOOK
// ============================================
export const useAppReducer = () => {
    const savedState = useMemo(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            console.warn('Failed to load saved state:', e);
            return null;
        }
    }, []);

    const initialState = {
        // Persisted state
        onboardingStep: savedState?.onboardingStep ?? 0,
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
        showDisclaimer: !localStorage.getItem('disclaimer_accepted'),
        showIOSPrompt: false,
        pageParams: null
    };

    const [state, dispatch] = useReducer(appReducer, initialState);

    // Save persisted state to localStorage (debounced)
    useEffect(() => {
        const saveTimeout = setTimeout(() => {
            try {
                const stateToSave = {
                    onboardingStep: state.onboardingStep,
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

    return { state, dispatch, savedState, ACTION_TYPES };
};
