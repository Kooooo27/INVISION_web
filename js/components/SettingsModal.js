// ============================================
// SETTINGS MODAL - Simplified (API keys removed for security)
// ============================================
{
    const { useState } = React;
    const { motion } = Motion;

    window.SettingsModal = ({ isOpen, onClose, onNavigate, userPlan, onUpgrade }) => {
        const [confirmReset, setConfirmReset] = useState(false);

        if (!isOpen) return null;

        const handleReset = () => {
            try {
                const saved = localStorage.getItem('invision_state_v1');
                if (saved) {
                    const state = JSON.parse(saved);
                    const newState = {
                        ...state,
                        understoodCards: [],
                        unclearCards: [],
                        learnProgress: 0,
                        dailyCompleted: 0,
                        lastDailyGoalDate: Date.now(),
                    };
                    localStorage.setItem('invision_state_v1', JSON.stringify(newState));
                }
                window.location.reload();
            } catch (err) {
                console.error('Reset failed:', err);
            }
        };

        const planConfig = {
            free: { label: 'FREE', color: 'bg-white/10 text-white/60 border-white/20', accent: 'text-dim' },
            light: { label: 'LIGHT', color: 'bg-blue-500/20 text-blue-400 border-blue-500/40', accent: 'text-blue-400' },
            complete: { label: 'COMPLETE', color: 'bg-gold/20 text-gold border-gold/40', accent: 'text-gold' }
        };
        const plan = planConfig[userPlan] || planConfig.free;

        return (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/80 backdrop-blur-sm">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-md bg-ash border border-white/10 p-8 rounded-sm shadow-2xl relative max-h-[90vh] overflow-y-auto scrollbar-hide">
                    <button onClick={onClose} className="absolute top-4 right-4 text-dim hover:text-white z-10">✕</button>
                    <h2 className="text-xl font-bold text-platinum mb-6">設定</h2>

                    <div className="space-y-6">
                        {/* Plan Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-bold text-platinum border-b border-white/10 pb-2 flex-1">プラン</h3>
                            </div>
                            <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-sm p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-[10px] font-black tracking-[0.2em] px-3 py-1 rounded-sm border ${plan.color}`}>{plan.label}</span>
                                    {userPlan === 'complete' && <span className="text-[10px] text-gold">✓ 全機能解放済み</span>}
                                </div>

                                {userPlan === 'free' && (
                                    <div className="space-y-3">
                                        <motion.button
                                            onClick={() => { onClose(); onUpgrade('complete'); }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-3 bg-gradient-to-r from-gold/20 to-amber-500/10 border border-gold/50 text-gold font-bold text-sm rounded-sm hover:from-gold/30 hover:to-amber-500/20 transition-all"
                                        >
                                            Complete ¥3,280
                                        </motion.button>
                                        <motion.button
                                            onClick={() => { onClose(); onUpgrade('light'); }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-3 bg-white/5 border border-white/20 text-platinum/70 text-sm font-bold rounded-sm hover:bg-white/10 transition-all"
                                        >
                                            Light ¥1,980
                                        </motion.button>
                                    </div>
                                )}

                                {userPlan === 'light' && (
                                    <motion.button
                                        onClick={() => { onClose(); onUpgrade('complete'); }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 bg-gradient-to-r from-gold/20 to-amber-500/10 border border-gold/50 text-gold font-bold text-sm rounded-sm hover:from-gold/30 hover:to-amber-500/20 transition-all"
                                    >
                                        Complete にアップグレード
                                    </motion.button>
                                )}
                            </div>
                        </div>

                        {/* App Info */}
                        <div className="space-y-3 pt-2 border-t border-white/10">
                            <h3 className="text-sm font-bold text-platinum border-b border-white/10 pb-2">アプリ情報</h3>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-dim">バージョン</span>
                                <span className="text-platinum font-mono">1.0.0</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-dim">ビルド</span>
                                <span className="text-platinum font-mono">2026.02.04</span>
                            </div>
                        </div>

                        {/* Legal */}
                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <h3 className="text-sm font-bold text-platinum border-b border-white/10 pb-2">法的事項</h3>
                            <button onClick={() => { onClose(); onNavigate('tokushoho'); }}
                                className="w-full text-left text-sm text-dim hover:text-gold transition-colors py-1 flex items-center justify-between group">
                                特定商取引法に基づく表記
                                <span className="text-white/20 group-hover:text-gold">→</span>
                            </button>
                            <button onClick={() => { onClose(); onNavigate('privacy'); }}
                                className="w-full text-left text-sm text-dim hover:text-gold transition-colors py-1 flex items-center justify-between group">
                                プライバシーポリシー
                                <span className="text-white/20 group-hover:text-gold">→</span>
                            </button>
                        </div>

                        {/* Data Reset */}
                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <h3 className="text-sm font-bold text-rose-500 border-b border-rose-500/20 pb-2">学習データの管理</h3>
                            <p className="text-xs text-dim leading-relaxed">
                                学習の進捗状況（理解度・苦手カードなど）をリセットします。現在加入中のプランや購入済みアイテムは保持されます。
                            </p>

                            {!confirmReset ? (
                                <button onClick={() => setConfirmReset(true)} className="w-full py-3 bg-rose-500/10 border border-rose-500/50 text-rose-500 text-sm font-bold rounded-sm hover:bg-rose-500 hover:text-white transition-all">
                                    学習履歴を削除
                                </button>
                            ) : (
                                <div className="space-y-3">
                                    <p className="text-sm text-rose-400 font-bold text-center">本当に削除しますか？</p>
                                    <div className="flex gap-2">
                                        <button onClick={() => setConfirmReset(false)} className="flex-1 py-3 bg-ash border border-white/10 text-platinum text-sm font-bold rounded-sm hover:bg-white/10 transition-colors">
                                            キャンセル
                                        </button>
                                        <button onClick={handleReset} className="flex-1 py-3 bg-rose-600 text-white text-sm font-bold rounded-sm hover:bg-rose-500 shadow-lg shadow-rose-900/50 transition-colors">
                                            削除する
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/10 flex gap-3">
                        <button onClick={onClose} className="flex-1 py-3 bg-white/5 border border-white/10 text-platinum text-sm font-bold rounded-sm hover:bg-white/10 transition-colors">
                            閉じる
                        </button>
                        <button onClick={() => { onClose(); onLogout(); }} className="flex-1 py-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold rounded-sm hover:bg-red-500/20 transition-colors">
                            ログアウト
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    };
}
