import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getUserTitle } from '../utils/helpers';

// Component extracted from index.html
{




    const LoginButton = ({ user, onLogin, onLogout }) => {
        if (!isFirebaseReady) return null;

        return (
            <button
                onClick={user ? onLogout : onLogin}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border flex-shrink-0 ${user
                    ? 'bg-white/5 border-white/10 text-dim hover:bg-white/10 hover:text-white'
                    : 'bg-gold/10 border-gold/30 text-gold hover:bg-gold hover:text-black shadow-[0_0_10px_rgba(201,162,39,0.2)]'
                    }`}
            >
                {user ? 'ログアウト' : 'ログイン'}
            </button>
        );
    };

    // ============================================
    // HEADER & APP ROOT
    // ============================================
    const Header = ({ currentPage, onNavigate, onOpenSettings, showNav, userProfile, progress, firebaseUser, onLogin, onLogout }) => (
        <header className="fixed top-0 left-0 right-0 z-40 bg-obsidian/80 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4 flex-shrink-0">
                    <button onClick={() => onNavigate('gallery')} className="text-xl font-black tracking-tighter cursor-pointer">
                        <span className="text-gold-gradient">IN</span><span className="text-platinum">VISION</span>
                    </button>
                    {userProfile && (
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono text-platinum/80 tracking-wider">
                                {getUserTitle(userProfile, progress)}
                            </span>
                        </div>
                    )}
                </div>
                {/* Always show nav, scrollable on mobile */}
                <div className="flex items-center gap-4 md:gap-8 flex-1 justify-end min-w-0">
                    <LoginButton user={firebaseUser} onLogin={onLogin} onLogout={onLogout} />
                    <nav className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar mask-gradient-right pr-4">
                        {[{ id: 'gallery', label: 'アセット' }, { id: 'brokers', label: '証券' }, { id: 'briefing', label: '学習' }, { id: 'portfolio', label: 'ポートフォリオ' }, { id: 'diagnosis', label: '診断' }].map(item => (
                            <button key={item.id} onClick={() => onNavigate(item.id)} className={`text-xs md:text-sm whitespace-nowrap transition-colors ${currentPage === item.id ? 'text-gold font-bold' : 'text-dim hover:text-platinum'}`}>{item.label}</button>
                        ))}
                    </nav>
                    <button onClick={onOpenSettings} className="text-dim hover:text-gold transition-colors flex-shrink-0">⚙️</button>
                </div>
            </div>
        </header>
    );

    const DisclaimerModal = ({ onAccept }) => (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="w-full max-w-lg bg-obsidian border border-gold/30 rounded-sm p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <h2 className="text-2xl font-black text-platinum mb-6 text-center">ご利用にあたって</h2>
                <div className="space-y-4 text-sm text-platinum/80 leading-relaxed max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    <p>
                        INVISIONは、投資を始める前に「自分を知る」ためのプラットフォームです。<br />
                        このサイトは学習・自己分析を目的としており、特定の商品の購入を勧めるものではありません。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-gold">
                        <li>
                            診断やシミュレーションの結果はあくまで参考情報であり、将来の成果を約束するものではありません。
                        </li>
                        <li>
                            投資の最終判断はご自身の責任となります。元本が減るリスクがあることをご理解ください。
                        </li>
                        <li>
                            紹介している証券会社や金融サービスの条件は変更される場合があります。最新情報は各社公式サイトをご確認ください。
                        </li>
                    </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
                    <button onClick={onAccept} className="w-full py-4 bg-gold text-black font-bold text-lg rounded-sm hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(218,165,32,0.3)]">
                        同意して始める
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );

    const SplashScreen = ({ onComplete }) => {
        useEffect(() => { setTimeout(onComplete, 2500); }, [onComplete]);
        return (<motion.div className="fixed inset-0 bg-obsidian z-50 flex items-center justify-center" exit={{ opacity: 0 }}><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><h1 className="text-6xl font-black tracking-tighter"><span className="text-gold-gradient">IN</span><span className="text-platinum">VISION</span></h1><motion.div className="h-px bg-gold/50 mt-4" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2 }} /></motion.div></motion.div>);
    };

    // iOS Home Screen Install Prompt
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
