import React from 'react';
import { motion } from 'framer-motion';

/**
 * Paywall component for TheBriefing.
 * Handles two modes:
 * - 'roadmap-purchase': Unlock specific roadmap for ¥3,280 (Complete)
 * - 'subscription': Full subscription paywall (Light ¥1,980 / Complete ¥3,280)
 */

export const RoadmapPurchasePaywall = ({
    purchaseTargetRoadmap,
    hasFullAccess,
    allCardsCount,
    onUpgrade,
    onBack,
    onViewRoadmap,
}) => (
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
                        <button onClick={onViewRoadmap}
                            className="group relative overflow-hidden bg-gold/10 hover:bg-gold/20 text-gold text-xs font-bold px-4 py-2 rounded-full border border-gold/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] flex items-center gap-2">
                            <span className="relative z-10">学習ロードマップを見る</span>
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
                    <p className="text-dim text-xs mb-6">全{allCardsCount}枚 · 全ロードマップ · 永久アクセス</p>
                    <div className="flex items-end gap-3 mb-6">
                        <span className="text-3xl font-black text-gold">¥3,280</span>
                        <span className="text-dim text-xs mb-1">/ 買い切り</span>
                    </div>
                    <button onClick={() => onUpgrade('complete')}
                        className="w-full py-4 bg-gold text-black font-bold rounded-sm hover:bg-amber-400 transition-colors">
                        ¥3,280で全て解放する
                    </button>
                </div>
            </motion.div>

            <div className="text-center">
                <button onClick={onBack} className="text-xs text-dim hover:text-platinum transition-colors">
                    ← 戻る
                </button>
            </div>
        </div>
    </div>
);

export const SubscriptionPaywall = ({
    hasFullAccess,
    allCardsCount,
    userPlan,
    nextReplenishTime,
    now,
    onUpgrade,
    onNavigate,
    onViewRoadmap,
}) => (
    <div className="min-h-screen bg-obsidian pt-24 pb-20 px-6 sm:px-8 relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[5%] left-1/4 w-[600px] h-[600px] bg-gold/8 rounded-full blur-[180px]" />
            <div className="absolute bottom-[15%] right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-lg mx-auto relative z-10">
            <div className="mb-8 text-center">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="text-gold/60 text-[10px] tracking-[0.5em] mb-6">INVISION</p>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-platinum mb-4">
                        投資学習を<span className="text-gold-gradient">加速</span>する
                    </h2>
                    <div className="flex justify-center flex-col items-center">
                        <button onClick={onViewRoadmap}
                            className="group relative overflow-hidden bg-gold/10 hover:bg-gold/20 text-gold text-xs font-bold px-4 py-2 rounded-full border border-gold/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] flex items-center gap-2">
                            <span className="relative z-10">学習ロードマップを見る</span>
                            {hasFullAccess && <span className="bg-gradient-to-r from-amber-600 to-amber-400 text-black text-[9px] px-1.5 py-0.5 rounded-sm font-black relative z-10">PRO</span>}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </button>

                        {userPlan === 'free' && nextReplenishTime && (
                            <div className="mt-8 flex flex-col items-center">
                                <p className="text-[10px] text-dim tracking-widest mb-2 uppercase">Next Refill In</p>
                                <div className="flex items-center gap-2 text-2xl font-thin text-platinum slashed-zero tabular-nums tracking-wider opacity-80">
                                    <span>{Math.floor(Math.max(0, nextReplenishTime - now) / (1000 * 60 * 60)).toString().padStart(2, '0')}</span>
                                    <span className="text-gold/30 pb-1">:</span>
                                    <span>{Math.floor((Math.max(0, nextReplenishTime - now) % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')}</span>
                                    <span className="text-gold/30 pb-1">:</span>
                                    <span>{Math.floor((Math.max(0, nextReplenishTime - now) % (1000 * 60)) / 1000).toString().padStart(2, '0')}</span>
                                </div>
                                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent mt-3" />
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="space-y-4 mb-10">
                {/* Complete */}
                <div className="bg-gradient-to-br from-gold/15 to-amber-500/5 border border-gold/40 rounded-sm p-8 relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                        <span className="text-[9px] bg-gold text-black px-2.5 py-1 rounded-sm font-bold tracking-wide">RECOMMENDED</span>
                    </div>
                    <h3 className="text-xl font-black text-platinum mb-1">Complete</h3>
                    <p className="text-dim text-xs mb-6">全{allCardsCount}枚 · 全ロードマップ · 永久アクセス</p>
                    <div className="flex items-end gap-3 mb-6">
                        <span className="text-4xl font-black text-gold">¥3,280</span>
                        <span className="text-dim text-xs mb-1.5">/ 買い切り</span>
                    </div>
                    <ul className="space-y-2.5 mb-8">
                        <li className="flex items-center gap-3 text-sm text-platinum/70"><span className="text-gold text-xs">✓</span>全カード・全ロードマップ解放</li>
                        <li className="flex items-center gap-3 text-sm text-platinum/70"><span className="text-gold text-xs">✓</span>将来の追加コンテンツも永久無料</li>
                    </ul>
                    <button onClick={() => onUpgrade('complete')}
                        className="w-full py-4 bg-gold text-black font-bold text-lg rounded-sm hover:bg-amber-400 transition-colors shadow-lg shadow-gold/20">
                        ¥3,280で始める
                    </button>
                </div>

                {/* Light */}
                <div className="border border-white/10 rounded-sm p-7 hover:border-white/20 transition-all duration-300">
                    <h3 className="text-lg font-bold text-platinum mb-1">Light</h3>
                    <p className="text-dim text-xs mb-5">基礎カードのみ · スワイプ自由</p>
                    <div className="flex items-end gap-2 mb-6">
                        <span className="text-2xl font-bold text-platinum">¥1,980</span>
                        <span className="text-dim text-xs mb-0.5">/ 買い切り</span>
                    </div>
                    <button onClick={() => onUpgrade('light')}
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
