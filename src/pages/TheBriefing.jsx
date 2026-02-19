import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetRoadmaps, courseBundles } from '../data/roadmaps';
import { briefingCards, chartPatternDescriptions, indexBundleCards, cryptoBundleCards } from '../data/cards';
import { useAppContext } from '../contexts/AppContext';
import ChartPatternSVG from '../components/charts/ChartPatternSVG';
import { RoadmapPurchasePaywall, SubscriptionPaywall } from '../components/Paywall';
import RoadmapView from '../components/RoadmapView';
import CardSwipe from '../components/CardSwipe';


const TheBriefing = () => {
    const { onNavigate, userProfile, userGoals, onSetProgress: onProgressUpdate, userPlan, onUpgrade, understoodCards, setUnderstoodCards, unclearCards, setUnclearCards, purchasedBundles, onPurchaseBundle, freeLimit, nextReplenishTime, onUpdateLimits, dailyCompleted, onUpdateDailyCompleted } = useAppContext();
    const [viewMode, setViewMode] = useState('swipe'); // 'swipe', 'roadmap', 'subscription', 'roadmap-purchase'
    const [purchaseTargetRoadmap, setPurchaseTargetRoadmap] = useState(null);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    // understoodCards and unclearCards now come from props (App level) for persistence
    // dailyCompleted now comes from props (App level) for persistence and daily reset
    const [selectedRoadmap, setSelectedRoadmap] = useState(null);
    const [swipeDir, setSwipeDir] = useState(null);
    const [userLevel, setUserLevel] = useState(1);
    // userPlan is now a prop, setSubscriptionPlan removed
    const [activeRoadmapFilter, setActiveRoadmapFilter] = useState(null); // Pro feature: filter cards to specific roadmap
    const [currentRoadmapContext, setCurrentRoadmapContext] = useState(null); // Stores ID of roadmap to return to after completion
    const [sessionSkippedCards, setSessionSkippedCards] = useState(new Set()); // Cards left-swiped this session (hidden until reload)

    const hasFullAccess = userPlan === 'complete';
    const DAILY_REPLENISH_AMOUNT = 5;
    const REPLENISH_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

    // Free-tier roadmap trial: steps 1-2 of NISA and 国内株式 are free
    const FREE_TRIAL_ROADMAPS = { 'NISA': 2, '国内株式': 2 }; // roadmap name -> free step count
    const freeTrialCardIds = useMemo(() => {
        const ids = new Set();
        Object.entries(FREE_TRIAL_ROADMAPS).forEach(([name, freeSteps]) => {
            const roadmap = assetRoadmaps[name];
            if (roadmap) {
                roadmap.slice(0, freeSteps).forEach(step => {
                    step.cards.forEach(cardId => ids.add(cardId));
                });
            }
        });
        return ids;
    }, []);

    // Safe reference to cards - prevents ReferenceError if cards.js not loaded
    const allCards = useMemo(() => {
        const briefing = Array.isArray(briefingCards) ? briefingCards : [];
        const indexBundle = Array.isArray(indexBundleCards) ? indexBundleCards : [];
        const cryptoBundle = Array.isArray(cryptoBundleCards) ? cryptoBundleCards : [];
        return [...briefing, ...indexBundle, ...cryptoBundle];
    }, []);

    // Get all card IDs from purchased bundles + free trial (for unlimited access)
    const purchasedBundleCardIds = useMemo(() => {
        const ids = new Set(freeTrialCardIds); // Always include free trial cards
        if (!purchasedBundles || purchasedBundles.length === 0) return ids;
        purchasedBundles.forEach(bundleId => {
            // Check courseBundles (e.g. 'index', 'crypto')
            const bundle = courseBundles[bundleId];
            if (bundle) {
                bundle.steps.forEach(step => {
                    step.cards.forEach(cardId => ids.add(cardId));
                });
            }

            // Check assetRoadmaps (e.g. 'NISA', '国内株式') - NEW FIX
            const roadmap = assetRoadmaps[bundleId];
            if (roadmap && Array.isArray(roadmap)) {
                roadmap.forEach(step => {
                    step.cards.forEach(cardId => ids.add(cardId));
                });
            }
        });
        return ids;
    }, [purchasedBundles, freeTrialCardIds]);

    const proCards = useMemo(() => allCards.filter(c => c.isPro), [allCards]);
    const basicCards = useMemo(() => allCards.filter(c => !c.isPro), [allCards]);


    // Replenish logic — real-time countdown
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Replenish Logic - synced with 'now'
    useEffect(() => {
        if (nextReplenishTime && now >= nextReplenishTime) {
            onUpdateLimits({ freeLimit: freeLimit + DAILY_REPLENISH_AMOUNT, nextReplenishTime: null });
        }
    }, [now, nextReplenishTime]);

    // Trigger limit timer when reached
    useEffect(() => {
        const totalCardsViewed = understoodCards.length + unclearCards.length;
        if (userPlan === 'free' && totalCardsViewed >= freeLimit && !nextReplenishTime) {
            onUpdateLimits({ nextReplenishTime: Date.now() + REPLENISH_INTERVAL });
        }
    }, [understoodCards, unclearCards, freeLimit, userPlan, nextReplenishTime]);

    // ChartPatternSVG is now imported from components/charts/ChartPatternSVG.jsx

    const dailyGoal = 5;
    const cardRef = useRef(null);

    // Sync progress with parent
    useEffect(() => {
        if (onProgressUpdate) onProgressUpdate(understoodCards.length);
    }, [understoodCards, onProgressUpdate]);

    // Check if paywall should be shown (not for roadmap viewing or purchased bundle cards)
    const totalCardsViewed = understoodCards.length + unclearCards.length;
    const cardLimit = userPlan === 'free' ? freeLimit : userPlan === 'light' ? basicCards.length : allCards.length;

    // Check if currently viewing bundle cards (unlimited access for purchased bundles)
    const isViewingBundleCards = useMemo(() => {
        if (!activeRoadmapFilter || activeRoadmapFilter.length === 0) return false;
        return activeRoadmapFilter.some(cardId => purchasedBundleCardIds.has(cardId));
    }, [activeRoadmapFilter, purchasedBundleCardIds]);

    // Don't show paywall if viewing purchased bundle cards
    const shouldShowPaywall = userPlan === 'free' && totalCardsViewed >= freeLimit && viewMode === 'swipe' && !isViewingBundleCards;
    const isPro = hasFullAccess;


    // Randomized order for Today's Learning (shuffled once per session/load)
    const shuffledCardIds = useMemo(() => {
        return allCards.map(c => c.id).sort(() => Math.random() - 0.5);
    }, [allCards]);

    // Personalize cards based on profile and understanding
    const getPersonalizedCards = () => {
        // Light: basic cards only (no isPro), Complete: all cards
        const accessibleCards = hasFullAccess ? allCards : basicCards;

        // If filtering by roadmap
        if (activeRoadmapFilter && activeRoadmapFilter.length > 0) {
            const roadmapCards = accessibleCards.filter(c => activeRoadmapFilter.includes(c.id));
            roadmapCards.sort((a, b) => activeRoadmapFilter.indexOf(a.id) - activeRoadmapFilter.indexOf(b.id));
            return roadmapCards;
        }

        const basicCardIds = basicCards.map(c => c.id);

        // Identify non-Pro roadmap cards
        const nonProRoadmapCardIds = new Set();
        Object.entries(assetRoadmaps).forEach(([name, steps]) => {
            const isProRoadmap = !FREE_TRIAL_ROADMAPS[name];
            if (!isProRoadmap) {
                steps.forEach(step => step.cards.forEach(id => nonProRoadmapCardIds.add(id)));
            }
        });

        // Check if card is from premium bundles (index, crypto)
        const isPremiumBundleCard = (id) => {
            return (indexBundleCards || []).some(c => c.id === id) ||
                (cryptoBundleCards || []).some(c => c.id === id);
        };

        // Plan-based card filtering
        let cards = accessibleCards.filter(c => {
            if (userPlan === 'free') {
                // Free: only cards from non-Pro roadmaps (NISA~不動産), no bundles
                if (!basicCardIds.includes(c.id)) return false;
                return nonProRoadmapCardIds.has(c.id);
            } else if (userPlan === 'light') {
                // Light: all basic cards (non-isPro), free swipe, no bundles
                if (isPremiumBundleCard(c.id)) return false;
                return true;
            } else {
                // Complete: everything including bundle cards
                return true;
            }
        });

        // Use shuffled order
        cards.sort((a, b) => shuffledCardIds.indexOf(a.id) - shuffledCardIds.indexOf(b.id));

        // Move unclear cards to front for review (but exclude those skipped this session)
        const unclearFirst = cards.filter(c => unclearCards.includes(c.id) && !sessionSkippedCards.has(c.id));

        // Get unlearned cards (exclude understood, unclear, and session-skipped)
        const rest = cards.filter(c => !unclearCards.includes(c.id) && !understoodCards.includes(c.id) && !sessionSkippedCards.has(c.id));

        return [...unclearFirst, ...rest];
    };

    const availableCards = getPersonalizedCards();
    const currentCard = availableCards[currentCardIndex];

    const handleSwipe = (direction) => {
        if (!currentCard) return;
        setSwipeDir(direction);

        setTimeout(() => {
            if (direction === 'right') {
                // Understood
                const newUnderstood = [...understoodCards.filter(id => id !== currentCard.id), currentCard.id];
                setUnderstoodCards(newUnderstood);

                // Remove from unclear if present
                const newUnclear = unclearCards.filter(id => id !== currentCard.id);
                if (newUnclear.length !== unclearCards.length) {
                    setUnclearCards(newUnclear);
                }

                // Level up check
            } else {
                // Unclear - add for review
                // Avoid duplicates if already in unclear
                if (!unclearCards.includes(currentCard.id)) {
                    setUnclearCards([...unclearCards, currentCard.id]);
                }
                // Hide from current session's random mode (will reappear on reload)
                if (!activeRoadmapFilter) {
                    setSessionSkippedCards(prev => new Set([...prev, currentCard.id]));
                }
            }

            // Update Progress for daily goal (persisted in App)
            if (direction === 'right' || direction === 'left') {
                onUpdateDailyCompleted({ dailyCompleted: dailyCompleted + 1 });
            }

            // Logic Update:
            // If Roadmap Mode: Advance index to show next card in fixed list
            // If Today's Learning (Random): Always advance index
            // For left swipe: card goes to unclearFirst at front of list,
            // so we need to advance past it to avoid showing same card
            if (activeRoadmapFilter) {
                setCurrentCardIndex(prev => prev + 1);
            } else {
                if (direction === 'left') {
                    // Left-swiped card will be at front of unclearFirst,
                    // advance index to skip past it
                    setCurrentCardIndex(prev => prev + 1);
                } else {
                    // Right-swiped card is removed from list (understood),
                    // reset to 0 since list shrinks
                    setCurrentCardIndex(0);
                }
            }

            setSwipeDir(null);
        }, 300);
    };

    // Drag handlers for swipe
    const handleDrag = (e, info) => {
        if (Math.abs(info.offset.x) > 80) {
            handleSwipe(info.offset.x > 0 ? 'right' : 'left');
        }
    };

    const getRoadmapProgress = (roadmap) => {
        const userExp = userProfile?.experienceLevel || 1;
        // Filter steps that are relevant for the user's level (hide/exclude basic steps from progress)
        const relevantSteps = roadmap.filter(step => step.level >= userExp);

        // If all steps are below user level (e.g. Expert user on Basic roadmap), considered 100% complete
        if (relevantSteps.length === 0) return 100;

        const totalCards = relevantSteps.reduce((sum, step) => sum + step.cards.length, 0);
        if (totalCards === 0) return 100;

        const completedCards = relevantSteps.reduce((sum, step) => sum + step.cards.filter(id => understoodCards.includes(id)).length, 0);
        return Math.round((completedCards / totalCards) * 100);
    };

    const levelLabels = { 1: '★', 2: '★★', 3: '★★★' };

    // Roadmap Upgrade Paywall — redirect to Complete plan
    if (viewMode === 'roadmap-purchase' && purchaseTargetRoadmap) {
        return (
            <RoadmapPurchasePaywall
                purchaseTargetRoadmap={purchaseTargetRoadmap}
                hasFullAccess={hasFullAccess}
                allCardsCount={allCards.length}
                onUpgrade={(plan) => { onUpgrade(plan); setViewMode('swipe'); setPurchaseTargetRoadmap(null); }}
                onBack={() => { setViewMode('roadmap'); setPurchaseTargetRoadmap(null); }}
                onViewRoadmap={() => setViewMode('roadmap')}
            />
        );
    }

    // Subscription Paywall — Light / Complete
    if (viewMode === 'subscription' || shouldShowPaywall) {
        return (
            <SubscriptionPaywall
                hasFullAccess={hasFullAccess}
                allCardsCount={allCards.length}
                userPlan={userPlan}
                nextReplenishTime={nextReplenishTime}
                now={now}
                onUpgrade={(plan) => { onUpgrade(plan); setViewMode('swipe'); }}
                onNavigate={onNavigate}
                onViewRoadmap={() => setViewMode('roadmap')}
            />
        );
    }

    if (viewMode === 'roadmap') {
        return (
            <RoadmapView
                allCards={allCards}
                understoodCards={understoodCards}
                unclearCards={unclearCards}
                purchasedBundles={purchasedBundles}
                userProfile={userProfile}
                userPlan={userPlan}
                hasFullAccess={hasFullAccess}
                FREE_TRIAL_ROADMAPS={FREE_TRIAL_ROADMAPS}
                selectedRoadmap={selectedRoadmap}
                setSelectedRoadmap={setSelectedRoadmap}
                setViewMode={setViewMode}
                setActiveRoadmapFilter={setActiveRoadmapFilter}
                setCurrentCardIndex={setCurrentCardIndex}
                setCurrentRoadmapContext={setCurrentRoadmapContext}
                setPurchaseTargetRoadmap={setPurchaseTargetRoadmap}
                setUnderstoodCards={setUnderstoodCards}
                setUnclearCards={setUnclearCards}
                onPurchaseBundle={onPurchaseBundle}
                getRoadmapProgress={getRoadmapProgress}
            />
        );
    }

    // Swipe Mode (Tinder-style) - LUXURY EDITION
    return (
        <CardSwipe
            currentCard={currentCard}
            swipeDir={swipeDir}
            hasFullAccess={hasFullAccess}
            dailyCompleted={dailyCompleted}
            dailyGoal={dailyGoal}
            understoodCards={understoodCards}
            unclearCards={unclearCards}
            activeRoadmapFilter={activeRoadmapFilter}
            currentRoadmapContext={currentRoadmapContext}
            levelLabels={levelLabels}
            cardRef={cardRef}
            onSwipe={handleSwipe}
            onDrag={handleDrag}
            onViewRoadmap={() => setViewMode('roadmap')}
            onClearFilter={() => { setActiveRoadmapFilter(null); setCurrentCardIndex(0); }}
            onReturnToRoadmap={() => {
                setActiveRoadmapFilter(null);
                if (currentRoadmapContext) setSelectedRoadmap(currentRoadmapContext);
                setCurrentRoadmapContext(null);
                setViewMode('roadmap');
            }}
        />
    );
};

export default TheBriefing;
