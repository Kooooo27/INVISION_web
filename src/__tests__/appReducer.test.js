import { describe, it, expect } from 'vitest';
import { appReducer, ACTION_TYPES } from '../hooks/useAppReducer';

// Base state for all tests
const baseState = {
    onboardingStep: 0,
    userProfile: null,
    userGoals: null,
    learnProgress: 0,
    userPlan: 'free',
    understoodCards: [],
    unclearCards: [],
    purchasedBundles: [],
    freeLimit: 5,
    nextReplenishTime: null,
    dailyCompleted: 0,
    lastDailyGoalDate: Date.now(),
    portfolioSettings: null,
    showSplash: true,
    showSettings: false,
    showDisclaimer: true,
    showIOSPrompt: false,
    pageParams: null,
};

describe('appReducer', () => {
    // ============================================
    // UI Actions
    // ============================================
    describe('UI Actions', () => {
        it('FINISH_SPLASH sets showSplash to false', () => {
            const result = appReducer(baseState, { type: ACTION_TYPES.FINISH_SPLASH });
            expect(result.showSplash).toBe(false);
        });

        it('ACCEPT_DISCLAIMER sets showDisclaimer to false', () => {
            const result = appReducer(baseState, { type: ACTION_TYPES.ACCEPT_DISCLAIMER });
            expect(result.showDisclaimer).toBe(false);
        });

        it('SHOW_IOS_PROMPT sets showIOSPrompt to true', () => {
            const result = appReducer(baseState, { type: ACTION_TYPES.SHOW_IOS_PROMPT });
            expect(result.showIOSPrompt).toBe(true);
        });

        it('DISMISS_IOS_PROMPT sets showIOSPrompt to false', () => {
            const state = { ...baseState, showIOSPrompt: true };
            const result = appReducer(state, { type: ACTION_TYPES.DISMISS_IOS_PROMPT });
            expect(result.showIOSPrompt).toBe(false);
        });

        it('TOGGLE_SETTINGS with payload sets showSettings explicitly', () => {
            const result = appReducer(baseState, { type: ACTION_TYPES.TOGGLE_SETTINGS, payload: true });
            expect(result.showSettings).toBe(true);
        });

        it('TOGGLE_SETTINGS without payload toggles showSettings', () => {
            const result = appReducer(baseState, { type: ACTION_TYPES.TOGGLE_SETTINGS });
            expect(result.showSettings).toBe(true);

            const result2 = appReducer({ ...baseState, showSettings: true }, { type: ACTION_TYPES.TOGGLE_SETTINGS });
            expect(result2.showSettings).toBe(false);
        });

        it('SET_PAGE_PARAMS stores payload', () => {
            const params = { assetId: 'btc' };
            const result = appReducer(baseState, { type: ACTION_TYPES.SET_PAGE_PARAMS, payload: params });
            expect(result.pageParams).toEqual(params);
        });
    });

    // ============================================
    // User Profile Actions
    // ============================================
    describe('User Profile Actions', () => {
        it('SET_PROFILE sets userProfile', () => {
            const profile = { name: 'Tanaka', experienceLevel: 2 };
            const result = appReducer(baseState, { type: ACTION_TYPES.SET_PROFILE, payload: profile });
            expect(result.userProfile).toEqual(profile);
        });

        it('SET_GOALS sets userGoals', () => {
            const goals = { riskTolerance: 3, timeHorizon: 5 };
            const result = appReducer(baseState, { type: ACTION_TYPES.SET_GOALS, payload: goals });
            expect(result.userGoals).toEqual(goals);
        });

        it('SET_PROGRESS sets learnProgress', () => {
            const result = appReducer(baseState, { type: ACTION_TYPES.SET_PROGRESS, payload: 42 });
            expect(result.learnProgress).toBe(42);
        });

        it('SET_PLAN sets userPlan', () => {
            const result = appReducer(baseState, { type: ACTION_TYPES.SET_PLAN, payload: 'complete' });
            expect(result.userPlan).toBe('complete');
        });

        it('SET_ONBOARDING sets onboardingStep', () => {
            const result = appReducer(baseState, { type: ACTION_TYPES.SET_ONBOARDING, payload: 3 });
            expect(result.onboardingStep).toBe(3);
        });
    });

    // ============================================
    // Card & Learning Actions
    // ============================================
    describe('Card & Learning Actions', () => {
        it('UPDATE_CARDS updates understood and unclear arrays', () => {
            const result = appReducer(baseState, {
                type: ACTION_TYPES.UPDATE_CARDS,
                payload: { understood: ['a', 'b'], unclear: ['c'] }
            });
            expect(result.understoodCards).toEqual(['a', 'b']);
            expect(result.unclearCards).toEqual(['c']);
        });

        it('UPDATE_CARDS partial update only changes specified', () => {
            const state = { ...baseState, understoodCards: ['x'], unclearCards: ['y'] };
            const result = appReducer(state, {
                type: ACTION_TYPES.UPDATE_CARDS,
                payload: { understood: ['x', 'z'] }
            });
            expect(result.understoodCards).toEqual(['x', 'z']);
            expect(result.unclearCards).toEqual(['y']); // unchanged
        });

        it('SET_DAILY_COMPLETED sets dailyCompleted and lastDailyGoalDate', () => {
            const before = Date.now();
            const result = appReducer(baseState, { type: ACTION_TYPES.SET_DAILY_COMPLETED, payload: 3 });
            expect(result.dailyCompleted).toBe(3);
            expect(result.lastDailyGoalDate).toBeGreaterThanOrEqual(before);
        });

        it('RESET_DAILY_GOAL resets to 0', () => {
            const state = { ...baseState, dailyCompleted: 5 };
            const result = appReducer(state, { type: ACTION_TYPES.RESET_DAILY_GOAL });
            expect(result.dailyCompleted).toBe(0);
        });
    });

    // ============================================
    // Purchase & Limits Actions
    // ============================================
    describe('Purchase & Limits Actions', () => {
        it('PURCHASE_BUNDLE adds new bundle', () => {
            const result = appReducer(baseState, { type: ACTION_TYPES.PURCHASE_BUNDLE, payload: 'nisa' });
            expect(result.purchasedBundles).toContain('nisa');
        });

        it('PURCHASE_BUNDLE deduplicates', () => {
            const state = { ...baseState, purchasedBundles: ['nisa'] };
            const result = appReducer(state, { type: ACTION_TYPES.PURCHASE_BUNDLE, payload: 'nisa' });
            expect(result.purchasedBundles).toEqual(['nisa']);
        });

        it('UPDATE_LIMITS updates freeLimit and nextReplenishTime', () => {
            const result = appReducer(baseState, {
                type: ACTION_TYPES.UPDATE_LIMITS,
                payload: { freeLimit: 10, nextReplenishTime: 999 }
            });
            expect(result.freeLimit).toBe(10);
            expect(result.nextReplenishTime).toBe(999);
        });

        it('UPDATE_LIMITS partial update preserves other values', () => {
            const state = { ...baseState, freeLimit: 10, nextReplenishTime: 999 };
            const result = appReducer(state, {
                type: ACTION_TYPES.UPDATE_LIMITS,
                payload: { freeLimit: 15 }
            });
            expect(result.freeLimit).toBe(15);
            expect(result.nextReplenishTime).toBe(999);
        });

        it('UPDATE_PORTFOLIO_SETTINGS sets portfolioSettings', () => {
            const settings = { riskLevel: 'moderate' };
            const result = appReducer(baseState, {
                type: ACTION_TYPES.UPDATE_PORTFOLIO_SETTINGS,
                payload: settings
            });
            expect(result.portfolioSettings).toEqual(settings);
        });
    });

    // ============================================
    // Reset Action
    // ============================================
    describe('Reset', () => {
        it('RESET_STATE clears user data but preserves UI state', () => {
            const state = {
                ...baseState,
                userProfile: { name: 'test' },
                userGoals: { risk: 3 },
                userPlan: 'complete',
                understoodCards: ['a', 'b'],
                unclearCards: ['c'],
                purchasedBundles: ['nisa'],
                freeLimit: 20,
                dailyCompleted: 5,
                portfolioSettings: { x: 1 },
                showSplash: false,
                showDisclaimer: false,
            };
            const result = appReducer(state, { type: ACTION_TYPES.RESET_STATE });

            // User data should be reset
            expect(result.userProfile).toBeNull();
            expect(result.userGoals).toBeNull();
            expect(result.userPlan).toBe('free');
            expect(result.understoodCards).toEqual([]);
            expect(result.unclearCards).toEqual([]);
            expect(result.purchasedBundles).toEqual([]);
            expect(result.freeLimit).toBe(5);
            expect(result.dailyCompleted).toBe(0);
            expect(result.portfolioSettings).toBeNull();

            // UI state should be preserved
            expect(result.showSplash).toBe(false);
            expect(result.showDisclaimer).toBe(false);
        });
    });

    // ============================================
    // Edge Cases
    // ============================================
    describe('Edge Cases', () => {
        it('unknown action returns state unchanged', () => {
            const result = appReducer(baseState, { type: 'UNKNOWN_ACTION' });
            expect(result).toBe(baseState); // exact reference equality
        });

        it('reducer is a pure function (does not mutate input)', () => {
            const frozen = Object.freeze({ ...baseState, purchasedBundles: Object.freeze([]) });
            // Should not throw even with frozen state
            const result = appReducer(frozen, { type: ACTION_TYPES.PURCHASE_BUNDLE, payload: 'test' });
            expect(result.purchasedBundles).toContain('test');
            expect(frozen.purchasedBundles).toEqual([]); // original unchanged
        });
    });
});
