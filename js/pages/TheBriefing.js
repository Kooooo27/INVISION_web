// Component extracted from index.html
{
    const { useState, useEffect, useRef, useMemo, useCallback } = React;
    const { motion, AnimatePresence } = Motion;
    const assetRoadmaps = window.assetRoadmaps;
    const courseBundles = window.courseBundles;

    const TheBriefing = ({ onNavigate, userProfile, userGoals, onProgressUpdate, userPlan, onUpgrade, understoodCards, setUnderstoodCards, unclearCards, setUnclearCards, purchasedBundles, onPurchaseBundle, freeLimit, nextReplenishTime, onUpdateLimits, dailyCompleted, onUpdateDailyCompleted }) => {
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

        const basicLimit = 360;
        const hasFullAccess = userPlan === 'complete';
        const isLightOrAbove = userPlan === 'light' || userPlan === 'complete';
        const hasRoadmapAccess = (name) => hasFullAccess || purchasedBundles.includes(name);
        const hasBundleAccess = (bundleId) => hasFullAccess || purchasedBundles.includes(bundleId);
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
            const briefing = Array.isArray(window.briefingCards) ? window.briefingCards : [];
            const indexBundle = Array.isArray(window.indexBundleCards) ? window.indexBundleCards : [];
            const cryptoBundle = Array.isArray(window.cryptoBundleCards) ? window.cryptoBundleCards : [];
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


        // Replenish Logic
        const [now, setNow] = useState(Date.now());

        // Timer for real-time countdown
        useEffect(() => {
            const timer = setInterval(() => setNow(Date.now()), 1000);
            return () => clearInterval(timer);
        }, []);

        // Replenish Logic - synced with 'now'
        // Replenish Logic - synced with 'now'
        useEffect(() => {
            if (nextReplenishTime && now >= nextReplenishTime) {
                onUpdateLimits({ freeLimit: freeLimit + DAILY_REPLENISH_AMOUNT, nextReplenishTime: null });
            }
        }, [now, nextReplenishTime]);

        // Trigger limit timer when reached
        // Trigger limit timer when reached
        useEffect(() => {
            const totalCardsViewed = understoodCards.length + unclearCards.length;
            if (userPlan === 'free' && totalCardsViewed >= freeLimit && !nextReplenishTime) {
                onUpdateLimits({ nextReplenishTime: Date.now() + REPLENISH_INTERVAL });
            }
        }, [understoodCards, unclearCards, freeLimit, userPlan, nextReplenishTime]);

        // Chart Pattern SVG Helper Component
        const ChartPatternSVG = ({ pattern }) => {
            const patterns = {
                head_and_shoulders: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <polyline points="5,50 20,40 30,25 40,40 55,15 70,40 80,25 90,40 115,50" fill="none" stroke="#DAA520" strokeWidth="2" />
                        <line x1="20" y1="40" x2="90" y2="40" stroke="#DAA520" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                        <text x="55" y="8" fill="#DAA520" fontSize="6" textAnchor="middle">H</text>
                        <text x="30" y="20" fill="#888" fontSize="5" textAnchor="middle">S</text>
                        <text x="80" y="20" fill="#888" fontSize="5" textAnchor="middle">S</text>
                    </svg>
                ),
                double_top: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <polyline points="5,50 25,20 45,40 65,20 85,50 115,55" fill="none" stroke="#DAA520" strokeWidth="2" />
                        <line x1="25" y1="20" x2="65" y2="20" stroke="#DAA520" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                    </svg>
                ),
                double_bottom: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <polyline points="5,10 25,50 45,25 65,50 85,10 115,5" fill="none" stroke="#10B981" strokeWidth="2" />
                        <line x1="25" y1="50" x2="65" y2="50" stroke="#10B981" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                    </svg>
                ),
                golden_cross: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <polyline points="5,50 30,45 50,35 70,25 90,18 115,10" fill="none" stroke="#DAA520" strokeWidth="2" />
                        <polyline points="5,40 30,42 50,40 70,35 90,28 115,20" fill="none" stroke="#888" strokeWidth="1.5" strokeDasharray="4,2" />
                        <circle cx="60" cy="37" r="4" fill="#DAA520" opacity="0.8" />
                        <text x="60" y="52" fill="#DAA520" fontSize="6" textAnchor="middle">GC</text>
                    </svg>
                ),
                dead_cross: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <polyline points="5,10 30,18 50,30 70,40 90,48 115,55" fill="none" stroke="#F43F5E" strokeWidth="2" />
                        <polyline points="5,20 30,22 50,28 70,35 90,42 115,48" fill="none" stroke="#888" strokeWidth="1.5" strokeDasharray="4,2" />
                        <circle cx="55" cy="30" r="4" fill="#F43F5E" opacity="0.8" />
                        <text x="55" y="45" fill="#F43F5E" fontSize="6" textAnchor="middle">DC</text>
                    </svg>
                ),
                symmetrical_triangle: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <polyline points="5,15 25,45 45,20 65,40 85,28 100,35 115,10" fill="none" stroke="#DAA520" strokeWidth="2" />
                        <line x1="5" y1="15" x2="85" y2="35" stroke="#888" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                        <line x1="25" y1="45" x2="85" y2="28" stroke="#888" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                    </svg>
                ),
                doji: (
                    <svg viewBox="0 0 60 60" className="w-16 h-16 mx-auto">
                        <line x1="30" y1="10" x2="30" y2="50" stroke="#DAA520" strokeWidth="1.5" />
                        <line x1="22" y1="30" x2="38" y2="30" stroke="#DAA520" strokeWidth="3" />
                    </svg>
                ),
                hammer: (
                    <svg viewBox="0 0 60 60" className="w-16 h-16 mx-auto">
                        <line x1="30" y1="20" x2="30" y2="50" stroke="#DAA520" strokeWidth="1.5" />
                        <rect x="24" y="12" width="12" height="10" fill="#10B981" stroke="#10B981" />
                    </svg>
                ),
                engulfing: (
                    <svg viewBox="0 0 80 60" className="w-20 h-16 mx-auto">
                        <rect x="20" y="25" width="10" height="15" fill="#F43F5E" />
                        <rect x="40" y="15" width="15" height="30" fill="#10B981" />
                    </svg>
                ),
                bollinger_bands: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <path d="M5,30 Q30,10 60,30 T115,30" fill="none" stroke="#888" strokeWidth="1" strokeDasharray="2,2" />
                        <path d="M5,40 Q30,35 60,40 T115,40" fill="none" stroke="#DAA520" strokeWidth="1.5" />
                        <path d="M5,50 Q30,55 60,50 T115,50" fill="none" stroke="#888" strokeWidth="1" strokeDasharray="2,2" />
                        <polyline points="10,42 30,38 50,45 70,35 90,42 110,38" fill="none" stroke="#10B981" strokeWidth="1.5" />
                    </svg>
                ),
                rsi: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <rect x="5" y="5" width="110" height="50" fill="none" stroke="#333" strokeWidth="0.5" />
                        <line x1="5" y1="15" x2="115" y2="15" stroke="#F43F5E" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
                        <line x1="5" y1="45" x2="115" y2="45" stroke="#10B981" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
                        <polyline points="10,35 25,28 40,38 55,22 70,30 85,12 100,25 110,32" fill="none" stroke="#DAA520" strokeWidth="2" />
                        <text x="5" y="12" fill="#F43F5E" fontSize="6">70</text>
                        <text x="5" y="50" fill="#10B981" fontSize="6">30</text>
                    </svg>
                ),
                macd: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <line x1="5" y1="35" x2="115" y2="35" stroke="#333" strokeWidth="0.5" />
                        <polyline points="10,40 30,32 50,38 70,28 90,35 110,25" fill="none" stroke="#DAA520" strokeWidth="2" />
                        <polyline points="10,42 30,38 50,40 70,33 90,38 110,30" fill="none" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3,2" />
                        {[15, 25, 35, 45, 55, 65, 75, 85, 95, 105].map((x, i) => (
                            <rect key={i} x={x} y={35 - (i % 2 === 0 ? 5 : -2)} width="3" height={Math.abs((i % 2 === 0 ? 5 : -2))} fill={i % 2 === 0 ? "#10B981" : "#F43F5E"} opacity="0.5" />
                        ))}
                    </svg>
                ),
                moving_average: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <polyline points="5,45 20,38 35,42 50,35 65,40 80,30 95,35 110,25" fill="none" stroke="#888" strokeWidth="1" />
                        <polyline points="5,50 30,42 55,45 80,38 110,30" fill="none" stroke="#DAA520" strokeWidth="2" />
                        <polyline points="5,52 40,48 75,45 110,38" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4,2" />
                    </svg>
                ),
                candlestick_basics: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <g>
                            <line x1="20" y1="12" x2="20" y2="50" stroke="#10B981" strokeWidth="1" />
                            <rect x="15" y="20" width="10" height="20" fill="#10B981" />
                        </g>
                        <g>
                            <line x1="50" y1="8" x2="50" y2="45" stroke="#F43F5E" strokeWidth="1" />
                            <rect x="45" y="15" width="10" height="22" fill="#F43F5E" />
                        </g>
                        <g>
                            <line x1="80" y1="18" x2="80" y2="55" stroke="#10B981" strokeWidth="1" />
                            <rect x="75" y="25" width="10" height="18" fill="#10B981" />
                        </g>
                        <g>
                            <line x1="105" y1="5" x2="105" y2="40" stroke="#F43F5E" strokeWidth="1" />
                            <rect x="100" y="10" width="10" height="25" fill="#F43F5E" />
                        </g>
                    </svg>
                ),
                ichimoku_base: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        {/* Cloud */}
                        <path d="M10,40 Q40,30 60,35 Q90,30 115,25 L115,35 Q90,40 60,45 Q40,40 10,50 Z" fill="#10B981" opacity="0.2" />
                        {/* Conversion Line (Tenkan) */}
                        <polyline points="10,45 30,35 60,40 90,20 115,15" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                        {/* Base Line (Kijun) */}
                        <polyline points="10,48 40,40 70,38 100,25 115,22" fill="none" stroke="#EF4444" strokeWidth="1.5" />
                    </svg>
                ),
                ichimoku_cloud_break: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <path d="M10,35 Q60,30 115,25 L115,45 Q60,50 10,55 Z" fill="#10B981" opacity="0.2" />
                        <polyline points="10,50 40,45 60,20 80,15 115,10" fill="none" stroke="#DAA520" strokeWidth="2" />
                        <circle cx="60" cy="20" r="3" fill="#DAA520" />
                    </svg>
                ),
                sanyaku_kouten: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <defs>
                            <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L9,3 z" fill="#DAA520" />
                            </marker>
                        </defs>
                        <path d="M10,40 Q60,35 115,30 L115,50 Q60,55 10,60 Z" fill="#10B981" opacity="0.1" />
                        <polyline points="10,55 40,45 60,25 90,15 115,10" fill="none" stroke="#DAA520" strokeWidth="2" markerEnd="url(#arrow)" />
                        <text x="60" y="20" fill="#DAA520" fontSize="8" fontWeight="bold" textAnchor="middle">BUY!</text>
                    </svg>
                ),
                elliott_wave_impulse: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <polyline points="5,50 25,30 40,40 70,10 90,25 115,5" fill="none" stroke="#DAA520" strokeWidth="2" />
                        <text x="25" y="25" fill="#888" fontSize="6">1</text>
                        <text x="40" y="48" fill="#888" fontSize="6">2</text>
                        <text x="70" y="5" fill="#888" fontSize="6">3</text>
                        <text x="90" y="32" fill="#888" fontSize="6">4</text>
                        <text x="115" y="15" fill="#888" fontSize="6">5</text>
                    </svg>
                ),
                stochastic: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <rect x="5" y="10" width="110" height="40" fill="none" stroke="#333" strokeWidth="0.5" />
                        <line x1="5" y1="15" x2="115" y2="15" stroke="#F43F5E" strokeDasharray="2,2" opacity="0.5" />
                        <line x1="5" y1="45" x2="115" y2="45" stroke="#10B981" strokeDasharray="2,2" opacity="0.5" />
                        <path d="M5,40 Q30,50 50,20 Q80,10 115,30" fill="none" stroke="#DAA520" strokeWidth="1.5" />
                        <path d="M5,45 Q30,55 55,25 Q80,15 115,35" fill="none" stroke="#F43F5E" strokeWidth="1" strokeDasharray="3,2" />
                    </svg>
                ),
                parabolic: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <path d="M5,50 Q60,10 115,40" fill="none" stroke="#888" strokeWidth="1" opacity="0.5" />
                        {[10, 20, 30, 40, 50].map((x, i) => (
                            <circle key={i} cx={x} cy={55 - i * 8} r="1.5" fill="#10B981" />
                        ))}
                        {[60, 70, 80, 90, 100, 110].map((x, i) => (
                            <circle key={i + 5} cx={x} cy={20 + i * 5} r="1.5" fill="#F43F5E" />
                        ))}
                    </svg>
                ),
                v_bottom: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <polyline points="10,10 60,50 110,10" fill="none" stroke="#DAA520" strokeWidth="2" />
                        <circle cx="60" cy="50" r="3" fill="#DAA520" />
                    </svg>
                ),
                rounding_bottom: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <path d="M10,10 C10,10 20,50 60,50 C100,50 110,10 110,10" fill="none" stroke="#DAA520" strokeWidth="2" />
                    </svg>
                ),
                diamond_top: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <polygon points="10,30 60,10 110,30 60,50" fill="rgba(218,165,32,0.1)" stroke="#DAA520" strokeWidth="1.5" />
                        <polyline points="20,40 40,20 60,40 80,20 100,40" fill="none" stroke="#888" strokeWidth="1" opacity="0.6" />
                    </svg>
                ),
                rectangle: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <rect x="10" y="15" width="100" height="30" fill="rgba(255,255,255,0.05)" stroke="#DAA520" strokeWidth="1" strokeDasharray="3,3" />
                        <polyline points="10,30 30,15 50,45 70,15 90,45 110,30" fill="none" stroke="#888" strokeWidth="1.5" />
                    </svg>
                ),
                divergence: (
                    <svg viewBox="0 0 120 60" className="w-full h-20">
                        <line x1="10" y1="25" x2="110" y2="15" stroke="#DAA520" strokeWidth="1.5" markerEnd="url(#arrow)" />
                        <line x1="10" y1="45" x2="110" y2="55" stroke="#F43F5E" strokeWidth="1.5" markerEnd="url(#arrow)" />
                        <text x="60" y="35" fill="#888" fontSize="8" textAnchor="middle">DIVERGENCE</text>
                    </svg>
                ),
            };
            return patterns[pattern] || (
                <svg viewBox="0 0 120 60" className="w-full h-20">
                    <polyline points="5,50 30,35 55,45 80,25 105,30 115,15" fill="none" stroke="#DAA520" strokeWidth="2" />
                </svg>
            );
        };

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
                return (window.indexBundleCards || []).some(c => c.id === id) ||
                    (window.cryptoBundleCards || []).some(c => c.id === id);
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
                <div className="min-h-screen bg-obsidian pt-24 pb-20 px-6 sm:px-8 relative overflow-hidden">
                    <div className="fixed inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[10%] left-1/3 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[180px]" />
                    </div>

                    <div className="max-w-md mx-auto relative z-10">
                        <div className="mb-16 text-center">
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                                <p className="text-gold/60 text-[10px] tracking-[0.5em] mb-6">UNLOCK ROADMAP</p>
                                <h2 className="text-3xl font-black tracking-tight text-platinum mb-4">
                                    「<span className="text-gold-gradient">{purchaseTargetRoadmap}</span>」
                                </h2>
                                <p className="text-dim text-sm mb-6">全ステップを解放して体系的に学ぶ</p>
                                <div className="flex justify-center">
                                    <button onClick={() => setViewMode('roadmap')}
                                        className="group relative overflow-hidden bg-gold/10 hover:bg-gold/20 text-gold text-xs font-bold px-4 py-2 rounded-full border border-gold/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] flex items-center gap-2">
                                        <span className="relative z-10">📍 学習ロードマップを見る</span>
                                        {hasFullAccess && <span className="bg-gradient-to-r from-amber-600 to-amber-400 text-black text-[9px] px-1.5 py-0.5 rounded-sm font-black relative z-10">PRO</span>}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <div className="bg-gradient-to-br from-gold/15 to-amber-500/5 border border-gold/40 rounded-sm p-8 mb-6">
                                <p className="text-gold/60 text-[10px] tracking-[0.3em] mb-4">RECOMMENDED</p>
                                <h3 className="text-xl font-black text-platinum mb-2">Complete</h3>
                                <p className="text-dim text-xs mb-6">全{allCards.length}枚 · 全ロードマップ · 永久アクセス</p>
                                <div className="flex items-end gap-3 mb-6">
                                    <span className="text-3xl font-black text-gold">¥3,280</span>
                                    <span className="text-dim text-xs mb-1">/ 買い切り</span>
                                </div>
                                <button onClick={() => { onUpgrade('complete'); setViewMode('swipe'); setPurchaseTargetRoadmap(null); }}
                                    className="w-full py-4 bg-gold text-black font-bold rounded-sm hover:bg-amber-400 transition-colors">
                                    ¥3,280で全て解放する
                                </button>
                            </div>
                        </motion.div>

                        <div className="text-center">
                            <button onClick={() => { setViewMode('roadmap'); setPurchaseTargetRoadmap(null); }}
                                className="text-xs text-dim hover:text-platinum transition-colors">
                                ← 戻る
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        // Subscription Paywall — Light / Complete
        if (viewMode === 'subscription' || shouldShowPaywall) {
            return (
                <div className="min-h-screen bg-obsidian pt-24 pb-20 px-6 sm:px-8 relative overflow-hidden">
                    <div className="fixed inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[5%] left-1/4 w-[600px] h-[600px] bg-gold/8 rounded-full blur-[180px]" />
                        <div className="absolute bottom-[15%] right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
                    </div>

                    <div className="max-w-lg mx-auto relative z-10">
                        {/* Header — minimal */}
                        <div className="mb-16 text-center">
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                                <p className="text-gold/60 text-[10px] tracking-[0.5em] mb-6">INVISION</p>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-platinum mb-4">
                                    投資学習を<span className="text-gold-gradient">加速</span>する
                                </h2>
                                <div className="flex justify-center">
                                    <button onClick={() => setViewMode('roadmap')}
                                        className="group relative overflow-hidden bg-gold/10 hover:bg-gold/20 text-gold text-xs font-bold px-4 py-2 rounded-full border border-gold/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] flex items-center gap-2">
                                        <span className="relative z-10">📍 学習ロードマップを見る</span>
                                        {hasFullAccess && <span className="bg-gradient-to-r from-amber-600 to-amber-400 text-black text-[9px] px-1.5 py-0.5 rounded-sm font-black relative z-10">PRO</span>}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Two Cards */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="space-y-4 mb-10">

                            {/* Complete ★本命 */}
                            <div className="bg-gradient-to-br from-gold/15 to-amber-500/5 border border-gold/40 rounded-sm p-8 relative overflow-hidden">
                                <div className="absolute top-4 right-4">
                                    <span className="text-[9px] bg-gold text-black px-2.5 py-1 rounded-sm font-bold tracking-wide">RECOMMENDED</span>
                                </div>
                                <h3 className="text-xl font-black text-platinum mb-1">Complete</h3>
                                <p className="text-dim text-xs mb-6">全{allCards.length}枚 · 全ロードマップ · 永久アクセス</p>

                                <div className="flex items-end gap-3 mb-6">
                                    <span className="text-4xl font-black text-gold">¥3,280</span>
                                    <span className="text-dim text-xs mb-1.5">/ 買い切り</span>
                                </div>

                                <ul className="space-y-2.5 mb-8">
                                    <li className="flex items-center gap-3 text-sm text-platinum/70"><span className="text-gold text-xs">✓</span>全カード・全ロードマップ解放</li>
                                    <li className="flex items-center gap-3 text-sm text-platinum/70"><span className="text-gold text-xs">✓</span>将来の追加コンテンツも永久無料</li>
                                </ul>

                                <button onClick={() => { onUpgrade('complete'); setViewMode('swipe'); }}
                                    className="w-full py-4 bg-gold text-black font-bold text-lg rounded-sm hover:bg-amber-400 transition-colors shadow-lg shadow-gold/20">
                                    ¥3,280で始める
                                </button>
                            </div>

                            {/* Light — decoy */}
                            <div className="border border-white/10 rounded-sm p-7 hover:border-white/20 transition-all duration-300">
                                <h3 className="text-lg font-bold text-platinum mb-1">Light</h3>
                                <p className="text-dim text-xs mb-5">基礎カードのみ · スワイプ自由</p>
                                <div className="flex items-end gap-2 mb-6">
                                    <span className="text-2xl font-bold text-platinum">¥1,980</span>
                                    <span className="text-dim text-xs mb-0.5">/ 買い切り</span>
                                </div>
                                <button onClick={() => { onUpgrade('light'); setViewMode('swipe'); }}
                                    className="w-full py-3 border border-white/20 text-platinum/70 text-sm font-bold rounded-sm hover:bg-white/5 transition-colors">
                                    Light で始める
                                </button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                            className="text-center">
                            <p className="text-[10px] text-dim/50">買い切り · サブスクなし · 全デバイス対応</p>
                        </motion.div>

                        <div className="mt-6 text-center">
                            <button onClick={() => onNavigate('gallery')} className="text-xs text-dim hover:text-platinum transition-colors">
                                ← 戻る
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        if (viewMode === 'roadmap') {
            return (
                <div className="h-screen bg-obsidian pt-24 pb-20 px-8 relative overflow-y-auto custom-scrollbar">
                    {/* Dynamic Background Lighting */}
                    <div className="fixed inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[5%] -right-[15%] w-[700px] h-[700px] bg-gold/5 rounded-full blur-[150px] opacity-25" />
                        <div className="absolute bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] opacity-15" />
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        {/* Unified Header - Asset Gallery Style */}
                        <div className="mb-12">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                                <p className="text-dim text-xs tracking-[0.4em] mb-4 text-gold">LEARNING ROADMAP</p>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-platinum mb-4">投資への<span className="text-gold-gradient">道のり</span></h2>
                                <div className="flex items-center gap-4">
                                    <p className="text-dim text-sm">各アセットのロードマップを完了すると、投資を始める準備が整います</p>
                                    <button onClick={() => setViewMode('swipe')} className="text-xs text-gold hover:text-gold/80 transition-colors border border-gold/30 px-3 py-1 rounded-sm">
                                        ← 学習に戻る
                                    </button>
                                </div>
                            </motion.div>
                        </div>


                        {/* Learned Archive */}
                        {understoodCards.length > 0 && (
                            <div className="mb-12 opacity-60 hover:opacity-100 transition-opacity">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-dim text-xs tracking-[0.2em]">LEARNED ARCHIVE</p>
                                    <span className="text-xs text-emerald-400 font-mono">{understoodCards.length} Cards</span>
                                </div>
                                <div className="overflow-x-auto pb-4 scrollbar-hide flex gap-4 snap-x snap-mandatory">
                                    {understoodCards.map(id => {
                                        const card = allCards.find(c => c.id === id);
                                        if (!card) return null;
                                        return (
                                            <div key={id} className="min-w-[200px] bg-white/5 border border-white/10 rounded-sm p-4 snap-center cursor-pointer hover:bg-white/10 transition-colors"
                                                onClick={() => { setActiveRoadmapFilter([id]); setCurrentCardIndex(0); setViewMode('swipe'); }}>
                                                <div className="text-[10px] text-emerald-400 mb-2 font-bold flex items-center gap-1">
                                                    <span>✓</span> LEARNED
                                                </div>
                                                <h4 className="text-sm font-bold text-platinum line-clamp-2">{card.title}</h4>
                                                <p className="text-[10px] text-dim mt-2">{card.category}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {unclearCards.length > 0 && (
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    onClick={() => setSelectedRoadmap('weakness')}
                                    className="cursor-pointer bg-gradient-to-br from-rose-950/20 to-rose-900/5 border border-rose-500/30 rounded-sm p-6 transition-all duration-300 hover:border-rose-400 group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-rose-400 group-hover:text-rose-300 transition-colors">苦手克服</h3>
                                            <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-sm font-bold">{unclearCards.length} Review</span>
                                        </div>
                                        <p className="text-sm text-platinum/60 mb-6">スワイプで「もう一度」としたカードを復習しましょう。</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {unclearCards.slice(0, 4).map(id => {
                                                const card = allCards.find(c => c.id === id);
                                                return card ? (
                                                    <div key={id} className="text-[10px] text-platinum/40 bg-white/5 p-2 rounded-sm line-clamp-1">{card.title}</div>
                                                ) : null;
                                            })}
                                            {unclearCards.length > 4 && <div className="text-[10px] text-rose-400 p-2">+ {unclearCards.length - 4} more</div>}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Course Bundles Section - Luxury Safe Style */}
                            <div className="md:col-span-2 mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-gold text-sm">🔐</span>
                                    <p className="text-[10px] text-gold/60 tracking-[0.3em] font-medium uppercase">Premium Bundles</p>
                                </div>
                                <div className="flex gap-4 flex-wrap">
                                    {Object.values(courseBundles).map((bundle, idx) => {
                                        const isPurchased = purchasedBundles?.includes(bundle.id);
                                        const bundleProgress = isPurchased
                                            ? Math.round((bundle.steps.flatMap(s => s.cards).filter(id => understoodCards.includes(id)).length / bundle.totalCards) * 100)
                                            : 0;
                                        const isComplete = bundleProgress === 100;

                                        return (
                                            <motion.div
                                                key={bundle.id}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                                                onClick={() => setSelectedRoadmap(`bundle:${bundle.id}`)}
                                                className="cursor-pointer group"
                                            >
                                                {/* Luxury Safe/Vault Design */}
                                                <div className="relative w-[120px] h-[120px]">
                                                    {/* 3D Shadow Layer */}
                                                    <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black/40 rounded-lg blur-sm" />

                                                    {/* Safe Body - 3D Effect with multiple layers */}
                                                    <div className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${isPurchased
                                                        ? 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 border-emerald-500/50 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]'
                                                        : 'bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_25px_rgba(218,165,32,0.4)]'
                                                        }`}>

                                                        {/* Inner bevel effect */}
                                                        <div className="absolute inset-[3px] rounded-md bg-gradient-to-br from-white/10 via-transparent to-black/20" />

                                                        {/* Safe door frame */}
                                                        <div className="absolute inset-[8px] rounded border border-white/10 bg-gradient-to-br from-black/20 to-transparent" />

                                                        {/* Lock dial / progress indicator */}
                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                            {isPurchased ? (
                                                                <div className="relative">
                                                                    {/* Circular progress */}
                                                                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                                                                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                                                                        <circle cx="18" cy="18" r="14" fill="none" stroke="url(#progressGradient)" strokeWidth="2"
                                                                            strokeDasharray={`${bundleProgress * 0.88} 88`} strokeLinecap="round" />
                                                                        <defs>
                                                                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                                <stop offset="0%" stopColor="#10b981" />
                                                                                <stop offset="100%" stopColor="#34d399" />
                                                                            </linearGradient>
                                                                        </defs>
                                                                    </svg>
                                                                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-emerald-400">
                                                                        {isComplete ? '✓' : `${bundleProgress}%`}
                                                                    </span>
                                                                </div>
                                                            ) : (
                                                                <div className="w-10 h-10 rounded-full border-2 border-gold/50 bg-gradient-to-br from-gold/20 to-amber-900/30 flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all">
                                                                    <span className="text-gold text-lg group-hover:rotate-12 transition-transform">🔒</span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Handle bolts decorations */}
                                                        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                                                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                                                        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                                                        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                                                    </div>

                                                    {/* Hover glow effect */}
                                                    <div className={`absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${isPurchased ? 'bg-emerald-500/20' : 'bg-gold/20'
                                                        }`} />
                                                </div>

                                                {/* Label - Abbreviated title only */}
                                                <div className="mt-3 text-center">
                                                    <p className={`text-xs font-bold tracking-wide transition-colors ${isPurchased
                                                        ? 'text-emerald-400 group-hover:text-emerald-300'
                                                        : 'text-platinum/70 group-hover:text-gold'
                                                        }`}>
                                                        {bundle.shortTitle || 'INDEX投資'}
                                                    </p>
                                                    {!isPurchased && (
                                                        <p className="text-[10px] text-gold/60 mt-0.5">¥{bundle.price}</p>
                                                    )}
                                                    {isPurchased && !isComplete && (
                                                        <p className="text-[9px] text-emerald-400/60 mt-0.5">学習中</p>
                                                    )}
                                                    {isComplete && (
                                                        <p className="text-[9px] text-emerald-400 mt-0.5">✓ 完了</p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {Object.entries(assetRoadmaps).map(([assetName, roadmap], idx) => {
                                const progress = getRoadmapProgress(roadmap);
                                const isComplete = progress === 100;
                                const isProRoadmap = roadmap.some(step => step.isPro);

                                // Access control logic:
                                // Free: Non-Pro roadmaps purchasable for ¥600, Pro roadmaps locked
                                // Free Trial: NISA/国内株式 steps 1-2 are free (no purchase needed)
                                // Purchased: Individual non-Pro roadmaps unlocked via purchasedBundles
                                // Annual: All roadmaps unlocked (not bundles)
                                // Lifetime: Everything including bundles
                                const isFree = userPlan === 'free';
                                const isPurchased = purchasedBundles.includes(assetName);
                                const canAccess = hasFullAccess || isPurchased;
                                const isProLocked = isProRoadmap && !hasFullAccess;
                                const hasFreeTrial = FREE_TRIAL_ROADMAPS[assetName] !== undefined;
                                const freeStepCount = FREE_TRIAL_ROADMAPS[assetName] || 0;
                                const isNonProUnpurchased = !isProRoadmap && isFree && !isPurchased && !hasFreeTrial;
                                const shouldBlurItems = (isProLocked || (isFree && !isPurchased && !hasFreeTrial)) && !isComplete;

                                return (
                                    <motion.div key={assetName} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }}
                                        onClick={() => {
                                            if (isProLocked) {
                                                // Pro roadmaps → subscription page
                                                setViewMode('subscription');
                                            } else if (isNonProUnpurchased) {
                                                // Non-Pro, free, not purchased → roadmap purchase paywall
                                                setPurchaseTargetRoadmap(assetName);
                                                setViewMode('roadmap-purchase');
                                            } else {
                                                setSelectedRoadmap(assetName);
                                            }
                                        }}
                                        className={`cursor-pointer bg-gradient-to-br from-ash/60 to-ash/20 border rounded-sm p-6 transition-all duration-300 hover:border-gold/30 group relative overflow-hidden ${isComplete ? 'border-emerald-500/30' : isProRoadmap ? 'border-amber-500/30' : 'border-white/5'}`}>
                                        {/* Subtle glow on hover */}
                                        <div className={`absolute inset-0 ${isProRoadmap ? 'bg-amber-500/5' : 'bg-gold/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                        {/* Pro Badge */}
                                        {isProRoadmap && (
                                            <div className="absolute top-3 right-3 flex items-center gap-1 bg-gradient-to-r from-amber-600 to-amber-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                                <span>👑</span> PRO
                                            </div>
                                        )}
                                        {/* Price badge for unpurchased non-Pro roadmaps */}
                                        {isNonProUnpurchased && (
                                            <div className="absolute top-3 right-3 flex items-center gap-1 bg-gold/20 border border-gold/40 text-gold text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                                ¥600
                                            </div>
                                        )}
                                        {/* Free trial badge */}
                                        {hasFreeTrial && isFree && !isPurchased && !hasFullAccess && (
                                            <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                                Step {freeStepCount}まで無料
                                            </div>
                                        )}
                                        {/* Purchased badge */}
                                        {isPurchased && !isComplete && !hasFullAccess && (
                                            <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                                購入済み
                                            </div>
                                        )}
                                        {/* Lock overlay for Pro roadmaps */}
                                        {isProLocked && (
                                            <div className="absolute inset-0 bg-obsidian/60 backdrop-blur-[1px] flex items-center justify-center z-20">
                                                <div className="text-center">
                                                    <span className="text-2xl">🔒</span>
                                                    <p className="text-xs text-amber-400 mt-1 font-medium">年間パス or ライフタイムで解放</p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className={`text-xl font-bold ${isProRoadmap ? 'text-amber-400' : 'text-platinum'} group-hover:text-gold transition-colors`}>{assetName}</h3>
                                                {isComplete && <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-sm font-bold">学習完了</span>}
                                            </div>
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="flex-1 h-2 bg-stone rounded-full overflow-hidden">
                                                    <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 1, delay: idx * 0.2 }}
                                                        className={`h-full ${isComplete ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' : isProRoadmap ? 'bg-gradient-to-r from-amber-600 to-amber-400' : 'bg-gradient-to-r from-gold to-amber-500'}`} />
                                                </div>
                                                <span className="text-sm font-bold text-gold">{progress}%</span>
                                            </div>
                                            <div className={`space-y-2`}>
                                                {roadmap.map((step, i) => {
                                                    const userExp = userProfile?.experienceLevel || 1;
                                                    const isBasic = step.level < userExp;
                                                    const stepComplete = step.cards.every(id => understoodCards.includes(id));
                                                    // Per-step blur: free trial roadmaps show steps 1-freeStepCount, blur the rest
                                                    const isStepLocked = hasFreeTrial && isFree && !isPurchased && !hasFullAccess && i >= freeStepCount;
                                                    const isAllBlurred = shouldBlurItems && !isProRoadmap;

                                                    return (
                                                        <div key={step.id} className={`flex items-center gap-3 text-sm ${isBasic ? 'opacity-50' : ''} ${isStepLocked || isAllBlurred ? 'blur-[3px] select-none' : ''}`}>
                                                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${stepComplete ? 'bg-emerald-500 text-white' : isProRoadmap ? 'bg-amber-900/50 text-amber-400' : 'bg-stone text-dim'}`}>
                                                                {stepComplete ? '✓' : (isBasic ? '-' : i + 1)}
                                                            </span>
                                                            <span className={stepComplete ? 'text-platinum/60 line-through' : 'text-platinum/80'}>
                                                                {step.title}
                                                            </span>
                                                            {isBasic && <span className="text-[10px] border border-white/20 px-1 rounded text-dim">復習</span>}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            {/* Upgrade hint for Free users on non-Pro roadmaps */}
                                            {isFree && !isProRoadmap && !isPurchased && (
                                                <div className="mt-4 pt-3 border-t border-white/10 text-center">
                                                    <p className="text-xs text-gold/70">💰 ¥600で単体購入可能</p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Roadmap Detail Modal */}
                    <AnimatePresence>
                        {selectedRoadmap && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/95 backdrop-blur-lg p-4" onClick={() => setSelectedRoadmap(null)}>
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} onClick={e => e.stopPropagation()}
                                    className="w-full max-w-md glass-panel rounded-sm p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
                                    {/* Modal Header - Dynamic based on type */}
                                    {(() => {
                                        const isBundle = selectedRoadmap?.startsWith('bundle:');
                                        // Handle bundle:ID:confirm format
                                        const parts = selectedRoadmap?.split(':') || [];
                                        const bundleId = isBundle ? parts[1] : null;
                                        const isConfirming = isBundle && parts[2] === 'confirm';

                                        const bundle = isBundle ? courseBundles[bundleId] : null;
                                        const isPurchased = isBundle && purchasedBundles?.includes(bundleId);
                                        const displayTitle = isBundle ? bundle?.title : selectedRoadmap;

                                        // If bundle is not purchased, show purchase UI
                                        if (isBundle && bundle && !isPurchased) {
                                            if (isConfirming) {
                                                return (
                                                    <div className="text-center py-10">
                                                        <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center border border-gold/30">
                                                            <span className="text-3xl">🤔</span>
                                                        </div>
                                                        <h3 className="text-xl font-bold text-platinum mb-2">購入の確認</h3>
                                                        <p className="text-sm text-platinum/70 mb-8">
                                                            「{bundle.title}」<br />
                                                            を <span className="text-gold font-bold">¥{bundle.price}</span> で購入しますか？
                                                        </p>
                                                        <div className="flex gap-3">
                                                            <button
                                                                onClick={() => setSelectedRoadmap(`bundle:${bundleId}`)}
                                                                className="flex-1 py-3 bg-white/5 border border-white/10 text-platinum/70 hover:bg-white/10 rounded-sm transition-colors"
                                                            >
                                                                キャンセル
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    onPurchaseBundle(bundleId);
                                                                    // Verify purchase usually updates state, so no need to clean up selectedRoadmap specifically if we want to stay, 
                                                                    // but usually onPurchase updates state and re-renders.
                                                                    // We should probably stay on the bundle page which will now show as purchased.
                                                                    setSelectedRoadmap(`bundle:${bundleId}`);
                                                                }}
                                                                className="flex-1 py-3 bg-gradient-to-r from-gold to-amber-500 text-black font-bold rounded-sm hover:from-amber-400 hover:to-gold transition-all shadow-lg shadow-gold/20"
                                                            >
                                                                購入する
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            }

                                            return (
                                                <div className="text-center">
                                                    {/* Close button */}
                                                    <button onClick={() => setSelectedRoadmap(null)} className="absolute top-4 right-4 text-white/30 hover:text-white/60 transition-colors text-lg">✕</button>

                                                    {/* Safe icon */}
                                                    <div className="w-20 h-20 mx-auto mb-6 relative">
                                                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-stone-700 via-stone-600 to-stone-800 border-2 border-gold/40 shadow-xl">
                                                            <div className="absolute inset-[4px] rounded bg-gradient-to-br from-white/10 to-black/20" />
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <span className="text-3xl">{bundle.icon}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-xl font-bold text-platinum mb-2">{bundle.title}</h3>
                                                    <p className="text-xs text-gold mb-6">{bundle.subtitle}</p>

                                                    {/* Description */}
                                                    <p className="text-sm text-platinum/70 leading-relaxed mb-6">{bundle.description}</p>

                                                    {/* Features */}
                                                    <div className="space-y-2 mb-8 text-left">
                                                        {bundle.features.map((feature, i) => (
                                                            <div key={i} className="flex items-center gap-3 text-sm text-platinum/80">
                                                                <span className="text-gold">✓</span>
                                                                <span>{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Stats */}
                                                    <div className="flex justify-center gap-6 mb-8">
                                                        <div className="text-center">
                                                            <p className="text-2xl font-bold text-gold">{bundle.totalCards}</p>
                                                            <p className="text-[10px] text-dim">カード</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-2xl font-bold text-platinum">{bundle.steps.length}</p>
                                                            <p className="text-[10px] text-dim">ステップ</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-lg font-bold text-platinum">{bundle.estimatedTime}</p>
                                                            <p className="text-[10px] text-dim">学習時間</p>
                                                        </div>
                                                    </div>

                                                    {/* Purchase Button */}
                                                    <button
                                                        onClick={() => setSelectedRoadmap(`bundle:${bundle.id}:confirm`)}
                                                        className="w-full py-4 bg-gradient-to-r from-gold to-amber-500 text-black font-bold text-lg rounded-sm hover:from-amber-400 hover:to-gold transition-all shadow-lg shadow-gold/30 mb-3"
                                                    >
                                                        🔓 ¥{bundle.price}で購入する
                                                    </button>
                                                </div>
                                            );
                                        }

                                        return (
                                            <>
                                                <div className="flex justify-between items-start mb-8">
                                                    <div>
                                                        <h3 className="text-xl font-light text-platinum tracking-wide">{displayTitle}</h3>
                                                        {isBundle && bundle && (
                                                            <p className="text-xs text-dim mt-1">{bundle.subtitle}</p>
                                                        )}
                                                    </div>
                                                    <button onClick={() => setSelectedRoadmap(null)} className="text-white/30 hover:text-white/60 transition-colors">✕</button>
                                                </div>
                                                <div className="space-y-8">
                                                    {selectedRoadmap === 'weakness' ? (
                                                        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                                                            {unclearCards.map(id => {
                                                                const card = allCards.find(c => c.id === id);
                                                                if (!card) return null;
                                                                return (
                                                                    <div key={id}
                                                                        onClick={() => {
                                                                            setActiveRoadmapFilter([id]);
                                                                            setCurrentCardIndex(0);
                                                                            setSelectedRoadmap(null);
                                                                            setViewMode('swipe');
                                                                        }}
                                                                        className="bg-white/5 border border-white/10 rounded-sm p-4 flex justify-between items-center gap-4 cursor-pointer hover:bg-white/10 transition-all group">
                                                                        <div>
                                                                            <p className="text-sm text-platinum/90 font-medium mb-1 group-hover:text-gold transition-colors">{card.title}</p>
                                                                            <p className="text-[10px] text-dim">{card.category}</p>
                                                                        </div>
                                                                        <button onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setUnclearCards(unclearCards.filter(c => c !== id));
                                                                            setUnderstoodCards([...understoodCards, id]);
                                                                        }} className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold rounded-sm hover:bg-emerald-500 hover:text-white transition-all">
                                                                            理解した
                                                                        </button>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : isBundle && bundle ? (
                                                        /* Bundle Course Steps */
                                                        bundle.steps.map((step, i) => {
                                                            const stepComplete = step.cards.every(id => understoodCards.includes(id));
                                                            const stepProgress = Math.round((step.cards.filter(id => understoodCards.includes(id)).length / step.cards.length) * 100);

                                                            return (
                                                                <div key={step.id} className={`border-l-2 pl-6 ${stepComplete ? 'border-emerald-500' : 'border-emerald-500/30'}`}>
                                                                    <div className="flex items-center gap-2 mb-2">
                                                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${stepComplete ? 'bg-emerald-500 text-white' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                                                            {stepComplete ? '✓' : i + 1}
                                                                        </span>
                                                                        <p className="text-[9px] text-gold/60 tracking-widest uppercase">{step.title}</p>
                                                                    </div>
                                                                    <p className="text-xs text-dim mb-2">{step.subtitle}</p>
                                                                    <p className="text-sm text-platinum/60 mb-4">{step.description}</p>
                                                                    {/* Step Progress */}
                                                                    <div className="flex items-center gap-3 mb-3">
                                                                        <div className="flex-1 h-1.5 bg-stone rounded-full overflow-hidden">
                                                                            <div className={`h-full ${stepComplete ? 'bg-emerald-500' : 'bg-emerald-500'}`} style={{ width: `${stepProgress}%` }} />
                                                                        </div>
                                                                        <span className="text-[10px] text-dim font-mono">{stepProgress}%</span>
                                                                    </div>
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {step.cards.map(cardId => {
                                                                            const card = allCards.find(c => c.id === cardId);
                                                                            const done = understoodCards.includes(cardId);
                                                                            return card ? (
                                                                                <span key={cardId}
                                                                                    onClick={() => {
                                                                                        setActiveRoadmapFilter(step.cards);
                                                                                        setCurrentRoadmapContext(selectedRoadmap);
                                                                                        const idx = step.cards.indexOf(cardId);
                                                                                        setCurrentCardIndex(idx !== -1 ? idx : 0);
                                                                                        setSelectedRoadmap(null);
                                                                                        setViewMode('swipe');
                                                                                    }}
                                                                                    className={`cursor-pointer transition-colors hover:bg-gold/20 text-[10px] px-3 py-1 rounded-full border flex items-center gap-1 ${done ? 'border-emerald-500/30 text-emerald-400/80 bg-emerald-500/5' : 'border-white/5 text-white/30'}`}>
                                                                                    {done && <span>✓</span>}
                                                                                    {card.title}
                                                                                </span>
                                                                            ) : null;
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                    ) : (
                                                        /* Asset Roadmap Steps */
                                                        assetRoadmaps[selectedRoadmap]?.map((step, i) => {
                                                            const userExp = userProfile?.experienceLevel || 1;
                                                            const isBasic = step.level < userExp;
                                                            const isTrialRoadmap = FREE_TRIAL_ROADMAPS[selectedRoadmap] !== undefined;
                                                            const trialStepCount = FREE_TRIAL_ROADMAPS[selectedRoadmap] || 0;
                                                            const isStepFree = isTrialRoadmap && i < trialStepCount;
                                                            const isStepLocked = isTrialRoadmap && userPlan === 'free' && !purchasedBundles.includes(selectedRoadmap) && !hasFullAccess && i >= trialStepCount;

                                                            return (
                                                                <div key={step.id} className={`border-l pl-6 ${isBasic ? 'border-white/5 opacity-60' : 'border-white/10'} ${isStepLocked ? 'relative' : ''}`}>
                                                                    <div className="flex items-center gap-2 mb-2">
                                                                        <p className="text-[9px] text-gold/60 tracking-widest uppercase">Step {i + 1}</p>
                                                                        {isBasic && <span className="text-[9px] border border-white/20 px-1.5 py-0.5 rounded text-dim">BASIC / REVIEW</span>}
                                                                        {isStepFree && userPlan === 'free' && !hasFullAccess && <span className="text-[9px] bg-emerald-500/20 border border-emerald-500/30 px-1.5 py-0.5 rounded text-emerald-400 font-bold">FREE</span>}
                                                                        {isStepLocked && <span className="text-[9px] text-amber-400/60">🔒</span>}
                                                                    </div>
                                                                    <p className={`text-sm mb-4 ${isStepLocked ? 'text-platinum/30' : 'text-platinum/80'}`}>{step.title}</p>
                                                                    <div className={`flex flex-wrap gap-2 ${isStepLocked ? 'blur-[4px] select-none pointer-events-none' : ''}`}>
                                                                        {step.cards.map(cardId => {
                                                                            const card = allCards.find(c => c.id === cardId);
                                                                            const done = understoodCards.includes(cardId);
                                                                            return card ? (
                                                                                <span key={cardId}
                                                                                    onClick={() => {
                                                                                        if (!isStepLocked) {
                                                                                            setActiveRoadmapFilter(step.cards);
                                                                                            setCurrentRoadmapContext(selectedRoadmap);
                                                                                            const idx = step.cards.indexOf(cardId);
                                                                                            setCurrentCardIndex(idx !== -1 ? idx : 0);
                                                                                            setSelectedRoadmap(null);
                                                                                            setViewMode('swipe');
                                                                                        }
                                                                                    }}
                                                                                    className={`${isStepLocked ? '' : 'cursor-pointer hover:bg-gold/20'} transition-colors text-[10px] px-3 py-1 rounded-full border flex items-center gap-1 ${done ? 'border-emerald-500/30 text-emerald-400/80 bg-emerald-500/5' : 'border-white/5 text-white/30'}`}>
                                                                                    {done && <span>✓</span>}
                                                                                    {card.title}
                                                                                </span>
                                                                            ) : null;
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                    )}
                                                </div>
                                                {/* Learning Button */}
                                                <div className="mt-8 pt-6 border-t border-white/10">
                                                    {selectedRoadmap === 'weakness' ? (
                                                        <button onClick={() => {
                                                            setActiveRoadmapFilter(unclearCards);
                                                            setCurrentCardIndex(0);
                                                            setSelectedRoadmap(null);
                                                            setViewMode('swipe');
                                                        }} className="w-full py-3 bg-rose-500 text-white font-bold rounded-sm hover:bg-rose-400 transition-colors">
                                                            🔥 苦手なカードを総復習
                                                        </button>
                                                    ) : isBundle && bundle ? (
                                                        <button onClick={() => {
                                                            const bundleCards = bundle.steps.flatMap(step => step.cards);
                                                            setActiveRoadmapFilter(bundleCards);
                                                            const firstUnreadIndex = bundleCards.findIndex(id => !understoodCards.includes(id));
                                                            setCurrentCardIndex(firstUnreadIndex !== -1 ? firstUnreadIndex : 0);
                                                            setSelectedRoadmap(null);
                                                            setViewMode('swipe');
                                                        }} className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-sm hover:from-emerald-500 hover:to-teal-400 transition-all shadow-lg shadow-emerald-900/30">
                                                            📈 このコースを学習する
                                                        </button>
                                                    ) : (
                                                        (() => {
                                                            const isTrialRoadmap = FREE_TRIAL_ROADMAPS[selectedRoadmap] !== undefined;
                                                            const trialStepCount = FREE_TRIAL_ROADMAPS[selectedRoadmap] || 0;
                                                            const canLearn = hasFullAccess || purchasedBundles.includes(selectedRoadmap);
                                                            const canLearnTrial = isTrialRoadmap && userPlan === 'free' && !canLearn;

                                                            if (canLearn) {
                                                                return (
                                                                    <button onClick={() => {
                                                                        const roadmapCards = assetRoadmaps[selectedRoadmap].flatMap(step => step.cards);
                                                                        setActiveRoadmapFilter(roadmapCards);
                                                                        const firstUnreadIndex = roadmapCards.findIndex(id => !understoodCards.includes(id));
                                                                        setCurrentCardIndex(firstUnreadIndex !== -1 ? firstUnreadIndex : 0);
                                                                        setSelectedRoadmap(null);
                                                                        setViewMode('swipe');
                                                                    }} className="w-full py-3 bg-gold text-black font-bold rounded-sm hover:bg-amber-400 transition-colors">
                                                                        🂴 このロードマップを学習
                                                                    </button>
                                                                );
                                                            } else if (canLearnTrial) {
                                                                // Free trial: learn only free steps
                                                                const freeCards = assetRoadmaps[selectedRoadmap].slice(0, trialStepCount).flatMap(step => step.cards);
                                                                return (
                                                                    <div className="space-y-3">
                                                                        <button onClick={() => {
                                                                            setActiveRoadmapFilter(freeCards);
                                                                            const firstUnreadIndex = freeCards.findIndex(id => !understoodCards.includes(id));
                                                                            setCurrentCardIndex(firstUnreadIndex !== -1 ? firstUnreadIndex : 0);
                                                                            setSelectedRoadmap(null);
                                                                            setViewMode('swipe');
                                                                        }} className="w-full py-3 bg-gold text-black font-bold rounded-sm hover:bg-amber-400 transition-colors">
                                                                            🂴 Step {trialStepCount}まで無料で学習
                                                                        </button>
                                                                        <p className="text-[10px] text-dim text-center">Step {trialStepCount + 1}以降は購入またはプランで解放</p>
                                                                    </div>
                                                                );
                                                            } else {
                                                                return (
                                                                    <div className="text-center">
                                                                        <p className="text-xs text-dim mb-3">ロードマップ別スワイプ学習はProプラン限定</p>
                                                                        <button onClick={() => setViewMode('subscription')} className="w-full py-3 border border-gold/50 text-gold font-bold rounded-sm hover:bg-gold/10 transition-colors">
                                                                            🔓 Proにアップグレード
                                                                        </button>
                                                                    </div>
                                                                );
                                                            }
                                                        })()
                                                    )}
                                                </div>
                                            </>
                                        );
                                    })()}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            );
        }

        // Swipe Mode (Tinder-style) - LUXURY EDITION
        return (
            <div className="min-h-screen bg-obsidian pt-24 pb-20 px-4 sm:px-8 relative overflow-hidden">
                {/* Dynamic Background Lighting */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-[10%] left-1/3 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[150px] opacity-25" />
                    <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] opacity-20" />
                </div>

                <div className="max-w-xl mx-auto relative z-10">
                    {/* Unified Header - Asset Gallery Style */}
                    <div className="mb-12">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                            <p className="text-dim text-xs tracking-[0.4em] mb-4 text-gold">TODAY'S LEARNING</p>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-platinum mb-4">スワイプで<span className="text-gold-gradient">学ぶ</span></h2>
                            <div className="flex items-center gap-4">
                                <p className="text-dim text-sm">理解度をチェック</p>
                                <button onClick={() => setViewMode('roadmap')}
                                    className="group relative overflow-hidden bg-gold/10 hover:bg-gold/20 text-gold text-xs font-bold px-4 py-2 rounded-full border border-gold/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] flex items-center gap-2">
                                    <span className="relative z-10">📍 学習ロードマップを見る</span>
                                    {hasFullAccess && <span className="bg-gradient-to-r from-amber-600 to-amber-400 text-black text-[9px] px-1.5 py-0.5 rounded-sm font-black relative z-10">PRO</span>}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Roadmap Mode Indicator - Always show if active */}
                    {activeRoadmapFilter && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                            className="bg-gold/10 border border-gold/30 rounded-sm p-3 mb-6 flex items-center justify-between">
                            <span className="text-xs text-gold font-bold">📍 ロードマップモード</span>
                            <button onClick={() => { setActiveRoadmapFilter(null); setCurrentCardIndex(0); }} className="text-xs text-dim hover:text-platinum transition-colors">× 終了</button>
                        </motion.div>
                    )}

                    {/* Daily Progress - Only show if goal not reached */}
                    {dailyCompleted < dailyGoal && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                            className="bg-gradient-to-r from-gold/10 to-amber-500/5 border border-gold/20 rounded-sm p-5 mb-10">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-platinum font-bold">今日の目標</span>
                                <span className="text-gold font-bold">{dailyCompleted}/{dailyGoal}</span>
                            </div>
                            <div className="flex gap-2">
                                {[...Array(dailyGoal)].map((_, i) => (
                                    <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }}
                                        className={`flex-1 h-2 rounded-full ${i < dailyCompleted ? 'bg-gold' : 'bg-stone'}`} />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Swipe Card */}
                    {currentCard ? (
                        <div className="relative h-[360px] sm:h-[420px] md:h-[480px] mb-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentCard.id}
                                    ref={cardRef}
                                    drag="x"
                                    dragConstraints={{ left: -1000, right: 1000 }}
                                    dragElastic={0.7}
                                    dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                                    onDragEnd={handleDrag}
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        x: swipeDir === 'right' ? 400 : swipeDir === 'left' ? -400 : 0,
                                        rotate: swipeDir === 'right' ? 12 : swipeDir === 'left' ? -12 : 0
                                    }}
                                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 260,
                                        damping: 25,
                                        mass: 0.8,
                                        opacity: { duration: 0.3 },
                                        exit: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                                    }}
                                    className="absolute inset-0 glass-panel rounded-sm p-6 sm:p-10 cursor-grab active:cursor-grabbing touch-none luxury-glow"
                                >
                                    {/* Swipe Indicators - More subtle */}
                                    <motion.div
                                        className="absolute top-8 left-8 pointer-events-none"
                                        animate={{ opacity: swipeDir === 'left' ? 0.8 : 0 }}
                                    >
                                        <span className="text-rose-400/80 text-sm font-medium border border-rose-400/40 rounded-full px-4 py-2">もう一度</span>
                                    </motion.div>
                                    <motion.div
                                        className="absolute top-8 right-8 pointer-events-none"
                                        animate={{ opacity: swipeDir === 'right' ? 0.8 : 0 }}
                                    >
                                        <span className="text-emerald-400/80 text-sm font-medium border border-emerald-400/40 rounded-full px-4 py-2">理解した</span>
                                    </motion.div>

                                    {/* Card Content */}
                                    <div className="h-full flex flex-col pt-8">
                                        <div className="flex items-start justify-between mb-8">
                                            <span className="text-4xl opacity-80">{currentCard.icon}</span>
                                            <span className="text-[10px] text-white/30 tracking-widest">{levelLabels[currentCard.level]}</span>
                                        </div>
                                        <h3 className="text-xl font-medium text-platinum mb-4 tracking-wide">{currentCard.title}</h3>
                                        {/* Chart Pattern Visualization for Pro Cards */}
                                        {currentCard.pattern && (
                                            <div className="mb-4 bg-white/5 rounded-sm p-3 border border-gold/10">
                                                <ChartPatternSVG pattern={currentCard.pattern} />
                                            </div>
                                        )}
                                        <p className="text-sm text-white/50 leading-[1.8] flex-1">{currentCard.content}</p>
                                        {currentCard.terms.length > 0 && (
                                            <div className="mt-6 pt-6 border-t border-white/5">
                                                <div className="flex flex-wrap gap-2">
                                                    {currentCard.terms.map((t, i) => (
                                                        <span key={i} className="text-[10px] text-gold/60 border border-white/5 px-3 py-1 rounded-full">{t.word}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="h-[360px] sm:h-[420px] md:h-[480px] flex items-center justify-center glass-panel rounded-sm">
                            <div className="text-center">
                                <p className="text-white/30 text-sm mb-4">
                                    {activeRoadmapFilter ? "このロードマップは完了です" : "すべて完了しました"}
                                </p>
                                {activeRoadmapFilter && (
                                    <button onClick={() => {
                                        setActiveRoadmapFilter(null);
                                        if (currentRoadmapContext) setSelectedRoadmap(currentRoadmapContext);
                                        setCurrentRoadmapContext(null);
                                        setViewMode('roadmap');
                                    }} className="px-6 py-3 bg-gold text-black font-bold rounded-sm hover:bg-amber-400 transition-colors">
                                        {currentRoadmapContext ? "ステップ選択へ戻る" : "ロードマップに戻る"}
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Swipe Buttons - Enhanced Luxury */}
                    {currentCard && (
                        <div className="flex justify-center gap-20">
                            <motion.button
                                onClick={() => handleSwipe('left')}
                                whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(244, 63, 94, 0.3)' }}
                                whileTap={{ scale: 0.95 }}
                                className="w-16 h-16 rounded-full border-2 border-white/10 text-white/50 flex items-center justify-center text-xl hover:border-rose-400/50 hover:text-rose-400 transition-colors duration-300 bg-gradient-to-br from-rose-500/5 to-transparent backdrop-blur-sm"
                            >✕</motion.button>
                            <motion.button
                                onClick={() => handleSwipe('right')}
                                whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(52, 211, 153, 0.3)' }}
                                whileTap={{ scale: 0.95 }}
                                className="w-16 h-16 rounded-full border-2 border-white/10 text-white/50 flex items-center justify-center text-xl hover:border-emerald-400/50 hover:text-emerald-400 transition-colors duration-300 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur-sm"
                            >✓</motion.button>
                        </div>
                    )}

                    {/* Minimal Stats */}
                    <div className="mt-12 flex justify-center gap-12">
                        <div className="text-center">
                            <p className="text-xl font-light text-platinum/80">{understoodCards.length}</p>
                            <p className="text-[9px] text-white/20 tracking-widest uppercase mt-1">Learned</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-light text-white/40">{unclearCards.length}</p>
                            <p className="text-[9px] text-white/20 tracking-widest uppercase mt-1">Review</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // ============================================
    // ASSET GALLERY WITH DETAIL MODALS
    // ============================================



    window.TheBriefing = TheBriefing;
}
