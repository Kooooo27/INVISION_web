import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IOSInstallPrompt = ({ onDismiss }) => {
    const [step, setStep] = useState(0);
    const steps = [
        { icon: '□↑', title: '共有ボタンをタップ', desc: '画面下部の共有アイコン（□に↑）をタップしてください', visual: '⬆️' },
        { icon: '＋', title: '「ホーム画面に追加」をタップ', desc: 'メニューをスクロールして「ホーム画面に追加」を選択', visual: '📱' },
        { icon: '✓', title: '「追加」をタップ', desc: '右上の「追加」ボタンをタップして完了！', visual: '✅' }
    ];
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/90 backdrop-blur-md p-0 sm:p-6">
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-full sm:max-w-md bg-obsidian border border-gold/30 rounded-t-2xl sm:rounded-sm p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

                {/* Drag handle for mobile */}
                <div className="flex justify-center mb-4 sm:hidden">
                    <div className="w-10 h-1 bg-white/20 rounded-full" />
                </div>

                <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-2xl flex items-center justify-center border border-gold/30">
                        <span className="text-3xl">📲</span>
                    </div>
                    <h2 className="text-xl font-black text-platinum mb-2">アプリのように使う</h2>
                    <p className="text-xs text-dim leading-relaxed">ホーム画面に追加して、ネイティブアプリのように快適にご利用いただけます</p>
                </div>

                {/* Steps */}
                <div className="space-y-3 mb-6">
                    {steps.map((s, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.15 }}
                            className={`flex items-center gap-4 p-3 rounded-sm border transition-all duration-300 ${step === i ? 'bg-gold/10 border-gold/40 shadow-[0_0_15px_rgba(201,162,39,0.1)]' : 'bg-white/3 border-white/5'
                                }`}
                            onClick={() => setStep(i)}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 ${step === i ? 'bg-gold text-black' : 'bg-white/5 text-white/40'
                                }`}>
                                {i + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className={`text-sm font-bold ${step === i ? 'text-gold' : 'text-platinum/60'}`}>{s.title}</p>
                                {step === i && (
                                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                                        className="text-xs text-dim mt-1 leading-relaxed">{s.desc}</motion.p>
                                )}
                            </div>
                            <span className="text-xl flex-shrink-0">{s.visual}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Safari bottom bar illustration */}
                <div className="bg-white/5 border border-white/10 rounded-sm p-3 mb-6">
                    <div className="flex items-center justify-center gap-6">
                        <span className="text-white/20">◁</span>
                        <span className="text-white/20">▷</span>
                        <div className="ios-share-icon">
                            <span>↑</span>
                        </div>
                        <span className="text-white/20">☰</span>
                        <span className="text-white/20">▣</span>
                    </div>
                    <p className="text-center text-[10px] text-gold/60 mt-2">↑ この共有ボタンをタップ</p>
                </div>

                <div className="flex gap-3">
                    <button onClick={onDismiss} className="flex-1 py-3 bg-white/5 border border-white/10 text-platinum/70 rounded-sm text-sm font-bold hover:bg-white/10 transition-colors">
                        あとで
                    </button>
                    <button onClick={onDismiss} className="flex-1 py-3 bg-gold text-black font-bold text-sm rounded-sm hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(218,165,32,0.2)]">
                        OK
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default IOSInstallPrompt;
