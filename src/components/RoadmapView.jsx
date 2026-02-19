import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetRoadmaps, courseBundles } from '../data/roadmaps';

/**
 * Roadmap view for TheBriefing — shows learning paths, progress, 
 * premium bundles, weakness review, and detail modals.
 * 
 * All state mutations go through callback props.
 */
const RoadmapView = ({
    // Data
    allCards,
    understoodCards,
    unclearCards,
    purchasedBundles,
    userProfile,
    userPlan,
    // Derived
    hasFullAccess,
    FREE_TRIAL_ROADMAPS,
    // State
    selectedRoadmap,
    // Callbacks
    setSelectedRoadmap,
    setViewMode,
    setActiveRoadmapFilter,
    setCurrentCardIndex,
    setCurrentRoadmapContext,
    setPurchaseTargetRoadmap,
    setUnderstoodCards,
    setUnclearCards,
    onPurchaseBundle,
    getRoadmapProgress,
}) => {
    const isFreeUser = userPlan === 'free';

    return (
        <div className="h-screen bg-obsidian pt-24 pb-20 px-8 relative overflow-y-auto custom-scrollbar">
            {/* Dynamic Background Lighting */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[5%] -right-[15%] w-[700px] h-[700px] bg-gold/5 rounded-full blur-[150px] opacity-25" />
                <div className="absolute bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
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
                    {/* Weakness Review */}
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

                    {/* Premium Bundles */}
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
                                        <div className="relative w-[120px] h-[120px]">
                                            <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black/40 rounded-lg blur-sm" />
                                            <div className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${isPurchased
                                                ? 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 border-emerald-500/50 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]'
                                                : 'bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 border-gold/30 group-hover:border-gold group-hover:shadow-[0_0_25px_rgba(218,165,32,0.4)]'
                                                }`}>
                                                <div className="absolute inset-[3px] rounded-md bg-gradient-to-br from-white/10 via-transparent to-black/20" />
                                                <div className="absolute inset-[8px] rounded border border-white/10 bg-gradient-to-br from-black/20 to-transparent" />
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    {isPurchased ? (
                                                        <div className="relative">
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
                                                            <span className="text-gold text-lg group-hover:rotate-12 transition-transform">●</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                                                <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                                                <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                                            </div>
                                            <div className={`absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${isPurchased ? 'bg-emerald-500/20' : 'bg-gold/20'}`} />
                                        </div>
                                        <div className="mt-3 text-center">
                                            <p className={`text-xs font-bold tracking-wide transition-colors ${isPurchased
                                                ? 'text-emerald-400 group-hover:text-emerald-300'
                                                : 'text-platinum/70 group-hover:text-gold'
                                                }`}>
                                                {bundle.shortTitle || 'INDEX投資'}
                                            </p>
                                            {!isPurchased && <p className="text-[10px] text-gold/60 mt-0.5">¥{bundle.price}</p>}
                                            {isPurchased && !isComplete && <p className="text-[9px] text-emerald-400/60 mt-0.5">学習中</p>}
                                            {isComplete && <p className="text-[9px] text-emerald-400 mt-0.5">✓ 完了</p>}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Asset Roadmaps Grid */}
                    {Object.entries(assetRoadmaps).map(([assetName, roadmap], idx) => {
                        const progress = getRoadmapProgress(roadmap);
                        const isComplete = progress === 100;
                        const isProRoadmap = roadmap.some(step => step.isPro);
                        const isPurchased = purchasedBundles.includes(assetName);
                        const canAccess = hasFullAccess || isPurchased;
                        const isProLocked = isProRoadmap && !hasFullAccess;
                        const hasFreeTrial = FREE_TRIAL_ROADMAPS[assetName] !== undefined;
                        const freeStepCount = FREE_TRIAL_ROADMAPS[assetName] || 0;
                        const isNonProUnpurchased = !isProRoadmap && isFreeUser && !isPurchased && !hasFreeTrial;
                        const shouldBlurItems = (isProLocked || (isFreeUser && !isPurchased && !hasFreeTrial)) && !isComplete;

                        return (
                            <motion.div key={assetName} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }}
                                onClick={() => {
                                    if (isProLocked) {
                                        setViewMode('subscription');
                                    } else if (isNonProUnpurchased) {
                                        setPurchaseTargetRoadmap(assetName);
                                        setViewMode('roadmap-purchase');
                                    } else {
                                        setSelectedRoadmap(assetName);
                                    }
                                }}
                                className={`cursor-pointer bg-gradient-to-br from-ash/60 to-ash/20 border rounded-sm p-6 transition-all duration-300 hover:border-gold/30 group relative overflow-hidden ${isComplete ? 'border-emerald-500/30' : isProRoadmap ? 'border-amber-500/30' : 'border-white/5'}`}>
                                <div className={`absolute inset-0 ${isProRoadmap ? 'bg-amber-500/5' : 'bg-gold/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                {isProRoadmap && (
                                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-gradient-to-r from-amber-600 to-amber-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                        <span>👑</span> PRO
                                    </div>
                                )}
                                {isNonProUnpurchased && (
                                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-gold/20 border border-gold/40 text-gold text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                        ¥600
                                    </div>
                                )}
                                {hasFreeTrial && isFreeUser && !isPurchased && !hasFullAccess && (
                                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                        Step {freeStepCount}まで無料
                                    </div>
                                )}
                                {isPurchased && !isComplete && !hasFullAccess && (
                                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                        購入済み
                                    </div>
                                )}
                                {isProLocked && (
                                    <div className="absolute inset-0 bg-obsidian/60 backdrop-blur-[1px] flex items-center justify-center z-20">
                                        <div className="text-center">
                                            <span className="text-2xl text-gold font-black">PRO</span>
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
                                    <div className="space-y-2">
                                        {roadmap.map((step, i) => {
                                            const userExp = userProfile?.experienceLevel || 1;
                                            const isBasic = step.level < userExp;
                                            const stepComplete = step.cards.every(id => understoodCards.includes(id));
                                            const isStepLocked = hasFreeTrial && isFreeUser && !isPurchased && !hasFullAccess && i >= freeStepCount;
                                            const isAllBlurred = shouldBlurItems && !isProRoadmap;
                                            return (
                                                <div key={step.id} className={`flex items-center gap-3 text-sm ${isBasic ? 'opacity-50' : ''} ${isStepLocked || isAllBlurred ? 'blur-[3px] select-none' : ''}`}>
                                                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${stepComplete ? 'bg-emerald-500 text-white' : isProRoadmap ? 'bg-amber-900/50 text-amber-400' : 'bg-stone text-dim'}`}>
                                                        {stepComplete ? '✓' : (isBasic ? '-' : i + 1)}
                                                    </span>
                                                    <span className={stepComplete ? 'text-platinum/60 line-through' : 'text-platinum/80'}>{step.title}</span>
                                                    {isBasic && <span className="text-[10px] border border-white/20 px-1 rounded text-dim">復習</span>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {isFreeUser && !isProRoadmap && !isPurchased && (
                                        <div className="mt-4 pt-3 border-t border-white/10 text-center">
                                            <p className="text-xs text-gold/70">¥600で単体購入可能</p>
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
                            {(() => {
                                const isBundle = selectedRoadmap?.startsWith('bundle:');
                                const parts = selectedRoadmap?.split(':') || [];
                                const bundleId = isBundle ? parts[1] : null;
                                const isConfirming = isBundle && parts[2] === 'confirm';
                                const bundle = isBundle ? courseBundles[bundleId] : null;
                                const isPurchased = isBundle && purchasedBundles?.includes(bundleId);
                                const displayTitle = isBundle ? bundle?.title : selectedRoadmap;

                                // Bundle purchase UI
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
                                                    <button onClick={() => setSelectedRoadmap(`bundle:${bundleId}`)}
                                                        className="flex-1 py-3 bg-white/5 border border-white/10 text-platinum/70 hover:bg-white/10 rounded-sm transition-colors">
                                                        キャンセル
                                                    </button>
                                                    <button onClick={() => { onPurchaseBundle(bundleId); setSelectedRoadmap(`bundle:${bundleId}`); }}
                                                        className="flex-1 py-3 bg-gradient-to-r from-gold to-amber-500 text-black font-bold rounded-sm hover:from-amber-400 hover:to-gold transition-all shadow-lg shadow-gold/20">
                                                        購入する
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div className="text-center">
                                            <button onClick={() => setSelectedRoadmap(null)} className="absolute top-4 right-4 text-white/30 hover:text-white/60 transition-colors text-lg">✕</button>
                                            <div className="w-20 h-20 mx-auto mb-6 relative">
                                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-stone-700 via-stone-600 to-stone-800 border-2 border-gold/40 shadow-xl">
                                                    <div className="absolute inset-[4px] rounded bg-gradient-to-br from-white/10 to-black/20" />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="text-3xl">{bundle.icon}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-platinum mb-2">{bundle.title}</h3>
                                            <p className="text-xs text-gold mb-6">{bundle.subtitle}</p>
                                            <p className="text-sm text-platinum/70 leading-relaxed mb-6">{bundle.description}</p>
                                            <div className="space-y-2 mb-8 text-left">
                                                {bundle.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-3 text-sm text-platinum/80">
                                                        <span className="text-gold">✓</span>
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
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
                                            <button onClick={() => setSelectedRoadmap(`bundle:${bundle.id}:confirm`)}
                                                className="w-full py-4 bg-gradient-to-r from-gold to-amber-500 text-black font-bold text-lg rounded-sm hover:from-amber-400 hover:to-gold transition-all shadow-lg shadow-gold/30 mb-3">
                                                🔓 ¥{bundle.price}で購入する
                                            </button>
                                        </div>
                                    );
                                }

                                // Roadmap / purchased bundle detail
                                return (
                                    <>
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <h3 className="text-xl font-light text-platinum tracking-wide">{displayTitle}</h3>
                                                {isBundle && bundle && <p className="text-xs text-dim mt-1">{bundle.subtitle}</p>}
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
                                                                onClick={() => { setActiveRoadmapFilter([id]); setCurrentCardIndex(0); setSelectedRoadmap(null); setViewMode('swipe'); }}
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
                                            ) : (
                                                (isBundle && bundle ? bundle.steps : assetRoadmaps[selectedRoadmap] || []).map((step, i) => {
                                                    const isStepLocked = (() => {
                                                        if (isBundle) return false;
                                                        const hasFreeTrial = FREE_TRIAL_ROADMAPS[selectedRoadmap] !== undefined;
                                                        const freeStepCount = FREE_TRIAL_ROADMAPS[selectedRoadmap] || 0;
                                                        const isPurchasedRoadmap = purchasedBundles.includes(selectedRoadmap);
                                                        return hasFreeTrial && isFreeUser && !isPurchasedRoadmap && !hasFullAccess && i >= freeStepCount;
                                                    })();

                                                    return (
                                                        <div key={step.id || i}>
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step.cards.every(id => understoodCards.includes(id))
                                                                    ? 'bg-emerald-500 text-white' : 'bg-stone text-dim'}`}>{i + 1}</span>
                                                                <p className={`text-sm mb-4 ${isStepLocked ? 'text-platinum/30' : 'text-platinum/80'}`}>{step.title}</p>
                                                            </div>
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
                                                    苦手なカードを総復習
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
                                                    このコースを学習する
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
};

export default RoadmapView;
