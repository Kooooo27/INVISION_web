import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChartPatternSVG from './charts/ChartPatternSVG';

/**
 * Swipe card view (Tinder-style) for TheBriefing.
 * Receives all needed state and callbacks as props.
 */
const CardSwipe = ({
    currentCard,
    swipeDir,
    hasFullAccess,
    dailyCompleted,
    dailyGoal,
    understoodCards,
    unclearCards,
    activeRoadmapFilter,
    currentRoadmapContext,
    levelLabels,
    cardRef,
    onSwipe,
    onDrag,
    onViewRoadmap,
    onClearFilter,
    onReturnToRoadmap,
}) => (
    <div className="bg-obsidian pt-24 pb-10 px-4 sm:px-8 relative overflow-hidden">
        {/* Dynamic Background Lighting */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[10%] left-1/3 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[150px] opacity-25" />
            <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="max-w-xl mx-auto relative z-10">
            {/* Header */}
            <div className="mb-12">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <p className="text-dim text-xs tracking-[0.4em] mb-4 text-gold">TODAY'S LEARNING</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-platinum mb-4">スワイプで<span className="text-gold-gradient">学ぶ</span></h2>
                    <div className="flex items-center gap-4">
                        <p className="text-dim text-sm">理解度をチェック</p>
                        <button onClick={onViewRoadmap}
                            className="group relative overflow-hidden bg-gold/10 hover:bg-gold/20 text-gold text-xs font-bold px-4 py-2 rounded-full border border-gold/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] flex items-center gap-2">
                            <span className="relative z-10">学習ロードマップを見る</span>
                            {hasFullAccess && <span className="bg-gradient-to-r from-amber-600 to-amber-400 text-black text-[9px] px-1.5 py-0.5 rounded-sm font-black relative z-10">PRO</span>}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Roadmap Mode Indicator */}
            {activeRoadmapFilter && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-gold/10 border border-gold/30 rounded-sm p-3 mb-6 flex items-center justify-between">
                    <span className="text-xs text-gold font-bold">ロードマップモード</span>
                    <button onClick={onClearFilter} className="text-xs text-dim hover:text-platinum transition-colors">× 終了</button>
                </motion.div>
            )}

            {/* Daily Progress */}
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
                <div className="relative aspect-square max-w-[480px] mx-auto mb-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentCard.id}
                            ref={cardRef}
                            drag="x"
                            dragConstraints={{ left: -1000, right: 1000 }}
                            dragElastic={0.7}
                            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                            onDragEnd={onDrag}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{
                                opacity: 1, y: 0, scale: 1,
                                x: swipeDir === 'right' ? 400 : swipeDir === 'left' ? -400 : 0,
                                rotate: swipeDir === 'right' ? 12 : swipeDir === 'left' ? -12 : 0
                            }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{
                                type: 'spring', stiffness: 260, damping: 25, mass: 0.8,
                                opacity: { duration: 0.3 },
                                exit: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                            }}
                            className="absolute inset-0 glass-panel rounded-sm p-6 sm:p-10 cursor-grab active:cursor-grabbing touch-none luxury-glow"
                        >
                            {/* Swipe Indicators */}
                            <motion.div className="absolute top-8 left-8 pointer-events-none"
                                animate={{ opacity: swipeDir === 'left' ? 0.8 : 0 }}>
                                <span className="text-rose-400/80 text-sm font-medium border border-rose-400/40 rounded-full px-4 py-2">もう一度</span>
                            </motion.div>
                            <motion.div className="absolute top-8 right-8 pointer-events-none"
                                animate={{ opacity: swipeDir === 'right' ? 0.8 : 0 }}>
                                <span className="text-emerald-400/80 text-sm font-medium border border-emerald-400/40 rounded-full px-4 py-2">理解した</span>
                            </motion.div>

                            {/* Card Content */}
                            <div className="h-full flex flex-col pt-8">
                                <div className="flex items-start justify-between mb-8">
                                    <span className="text-4xl opacity-80">{currentCard.icon}</span>
                                    <span className="text-[10px] text-white/30 tracking-widest">{levelLabels[currentCard.level]}</span>
                                </div>
                                <h3 className="text-xl font-medium text-platinum mb-4 tracking-wide">{currentCard.title}</h3>
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
                <div className="aspect-square max-w-[480px] mx-auto flex items-center justify-center glass-panel rounded-sm">
                    <div className="text-center">
                        <p className="text-white/30 text-sm mb-4">
                            {activeRoadmapFilter ? "このロードマップは完了です" : "すべて完了しました"}
                        </p>
                        {activeRoadmapFilter && (
                            <button onClick={onReturnToRoadmap} className="px-6 py-3 bg-gold text-black font-bold rounded-sm hover:bg-amber-400 transition-colors">
                                {currentRoadmapContext ? "ステップ選択へ戻る" : "ロードマップに戻る"}
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Swipe Buttons */}
            {currentCard && (
                <div className="flex justify-center gap-20">
                    <motion.button
                        onClick={() => onSwipe('left')}
                        whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(244, 63, 94, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 rounded-full border-2 border-white/10 text-white/50 flex items-center justify-center text-xl hover:border-rose-400/50 hover:text-rose-400 transition-colors duration-300 bg-gradient-to-br from-rose-500/5 to-transparent backdrop-blur-sm"
                    >✕</motion.button>
                    <motion.button
                        onClick={() => onSwipe('right')}
                        whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(52, 211, 153, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 rounded-full border-2 border-white/10 text-white/50 flex items-center justify-center text-xl hover:border-emerald-400/50 hover:text-emerald-400 transition-colors duration-300 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur-sm"
                    >✓</motion.button>
                </div>
            )}

            {/* Minimal Stats */}
            <div className="mt-8 flex justify-center gap-12">
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

export default CardSwipe;
