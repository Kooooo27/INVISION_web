import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetDetailData } from '../data/assetDetailData';
import { useAppContext } from '../contexts/AppContext';


const PortfolioCreator = () => {
    const { userProfile, onNavigate, userPlan, onUpgrade, portfolioSettings, onUpdatePortfolioSettings: onSave } = useAppContext();
    const hasFullAccess = userPlan === 'annual' || userPlan === 'lifetime';
    const [principal, setPrincipal] = useState(portfolioSettings?.principal || 1000000);
    const [monthly, setMonthly] = useState(portfolioSettings?.monthly || 30000);
    const [allocation, setAllocation] = useState(portfolioSettings?.allocation || userProfile?.allocation || { safe: 30, balanced: 40, growth: 30 });
    const [isSaved, setIsSaved] = useState(false);

    // Stable auto-balance logic with clamping and proper redistribution
    const updateAllocation = (type, rawValue) => {
        // Clamp the input value to 0-100
        const value = Math.max(0, Math.min(100, rawValue));
        const diff = value - allocation[type];
        if (diff === 0) return;

        const otherTypes = Object.keys(allocation).filter(k => k !== type);
        const othersTotal = otherTypes.reduce((sum, k) => sum + allocation[k], 0);

        let newAlloc = { ...allocation, [type]: value };

        if (othersTotal === 0) {
            // If others are all 0, distribute remaining equally
            const remaining = 100 - value;
            otherTypes.forEach(k => newAlloc[k] = remaining / otherTypes.length);
        } else {
            // Proportional redistribution
            const remaining = 100 - value;
            otherTypes.forEach(k => {
                const ratio = allocation[k] / othersTotal;
                newAlloc[k] = remaining * ratio;
            });
        }

        // Clamp all values to 0-100
        Object.keys(newAlloc).forEach(k => {
            newAlloc[k] = Math.max(0, Math.min(100, newAlloc[k]));
        });

        // Round for display
        Object.keys(newAlloc).forEach(k => newAlloc[k] = Math.round(newAlloc[k]));

        // Ensure sum is exactly 100 after rounding
        const roundedSum = Object.values(newAlloc).reduce((a, b) => a + b, 0);
        if (roundedSum !== 100) {
            // Adjust the largest 'other' value to compensate
            const maxOther = otherTypes.reduce((max, k) => newAlloc[k] > newAlloc[max] ? k : max, otherTypes[0]);
            newAlloc[maxOther] += (100 - roundedSum);
            // Final clamp
            newAlloc[maxOther] = Math.max(0, Math.min(100, newAlloc[maxOther]));
        }

        setAllocation(newAlloc);
        setIsSaved(false);
    };

    const handleSave = () => {
        onSave({ principal, monthly, allocation });
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    useEffect(() => {
        setIsSaved(false);
    }, [principal, monthly]);

    const projection = useMemo(() => {
        // More realistic return assumptions: Safe 0.5% (Deposits/Bonds), Balanced 4% (Global/Balance), Growth 7% (Stocks)
        // Inflation is not adjusted here for simplicity, but nominal returns are set more conservatively.
        const r = ((allocation.safe * 0.5) + (allocation.balanced * 4.0) + (allocation.growth * 7.0)) / 100; // Weighted Return
        const data = [];
        let currentAmount = principal;
        for (let i = 0; i <= 20; i++) {
            data.push({ year: i, amount: Math.round(currentAmount) });
            currentAmount = currentAmount * (1 + r / 100) + (monthly * 12);
        }
        return data;
    }, [allocation, principal, monthly]);

    return (
        <div className="min-h-screen bg-obsidian pt-28 pb-32 px-4 sm:px-8 relative overflow-hidden">
            {/* Atmospheric Background - Matching AssetGallery */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[150px] opacity-20" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-platinum/5 rounded-full blur-[120px] opacity-10" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-platinum">未来を<span className="text-gold-gradient">設計</span>する</h2>
                            <button
                                onClick={handleSave}
                                className={`px-4 py-2 rounded-sm font-bold text-xs transition-all duration-300 flex items-center gap-2 border ${isSaved
                                    ? 'bg-white/10 border-white/20 text-platinum'
                                    : 'bg-white/5 text-dim border-white/10 hover:bg-white/10 hover:text-platinum'
                                    }`}
                            >
                                {isSaved ? (
                                    <>
                                        <span className="text-sm">✓</span> 保存済み
                                    </>
                                ) : (
                                    "保存"
                                )}
                            </button>
                        </div>
                        <p className="text-dim text-sm max-w-xl leading-loose">自己分析と投資知識の学習をもとに、資産配分の考え方を学びます。<br />※ このシミュレーションは学習目的の参考値であり、実際の運用結果を保証するものではありません。</p>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Controls Panel */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-8">
                        {/* Compact Investment Inputs Row */}
                        <div className="bg-gradient-to-br from-ash/80 to-ash/40 backdrop-blur-sm border border-white/5 rounded-sm p-6 custom-shadow hover:border-gold/30 transition-all duration-500 group">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Initial Investment */}
                                <div>
                                    <label className="block text-[9px] text-gold uppercase tracking-[0.15em] mb-2 font-bold">
                                        初期投資額
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg text-gold font-serif italic">¥</span>
                                        <input type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))}
                                            className="w-full bg-transparent border-b border-white/10 text-2xl font-serif text-platinum placeholder-dim focus:border-gold outline-none transition-all tracking-wider text-right py-1" />
                                    </div>
                                </div>
                                {/* Monthly Contribution */}
                                <div>
                                    <label className="block text-[9px] text-gold uppercase tracking-[0.15em] mb-2 font-bold">
                                        毎月の積立額
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg text-gold font-serif italic">¥</span>
                                        <input type="number" value={monthly} onChange={e => setMonthly(Number(e.target.value))}
                                            className="w-full bg-transparent border-b border-white/10 text-2xl font-serif text-platinum placeholder-dim focus:border-gold outline-none transition-all tracking-wider text-right py-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-ash/80 to-ash/40 backdrop-blur-sm border border-white/5 rounded-sm p-10 space-y-10 custom-shadow">
                            <div className="flex justify-between items-end mb-6">
                                <label className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">アロケーション設定</label>
                                <span className="text-xs text-dim">ALLOCATION</span>
                            </div>

                            {/* Safe */}
                            <div className="group">
                                <div className="flex justify-between mb-3 border-l-2 border-sage pl-3 transition-all group-hover:border-l-4">
                                    <span className="text-platinum font-bold text-lg">守り</span>
                                    <span className="text-sage font-mono text-xl">{allocation.safe}%</span>
                                </div>
                                <input type="range" min="0" max="100" value={allocation.safe} onChange={(e) => updateAllocation('safe', Number(e.target.value))}
                                    className="w-full h-1 bg-stone/50 rounded-lg appearance-none cursor-pointer accent-sage hover:h-2 transition-all" />
                                <p className="text-xs text-dim mt-2 pl-3">国債・現金など。低リスクで着実な運用。</p>
                            </div>

                            {/* Balanced */}
                            <div className="group">
                                <div className="flex justify-between mb-3 border-l-2 border-camel pl-3 transition-all group-hover:border-l-4">
                                    <span className="text-platinum font-bold text-lg">バランス</span>
                                    <span className="text-camel font-mono text-xl">{allocation.balanced}%</span>
                                </div>
                                <input type="range" min="0" max="100" value={allocation.balanced} onChange={(e) => updateAllocation('balanced', Number(e.target.value))}
                                    className="w-full h-1 bg-stone/50 rounded-lg appearance-none cursor-pointer accent-camel hover:h-2 transition-all" />
                                <p className="text-xs text-dim mt-2 pl-3">投資信託・REITなど。成長と安定のバランス。</p>
                            </div>

                            {/* Growth */}
                            <div className="group">
                                <div className="flex justify-between mb-3 border-l-2 border-clay pl-3 transition-all group-hover:border-l-4">
                                    <span className="text-platinum font-bold text-lg">攻め</span>
                                    <span className="text-clay font-mono text-xl">{allocation.growth}%</span>
                                </div>
                                <input type="range" min="0" max="100" value={allocation.growth} onChange={(e) => updateAllocation('growth', Number(e.target.value))}
                                    className="w-full h-1 bg-stone/50 rounded-lg appearance-none cursor-pointer accent-clay hover:h-2 transition-all" />
                                <p className="text-xs text-dim mt-2 pl-3">株式・仮想通貨など。高いリターンを狙う。</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visualization */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
                        {/* Pie Chart */}
                        <div className="bg-gradient-to-br from-ash/80 to-ash/40 backdrop-blur-sm border border-white/5 rounded-sm p-8 flex flex-col items-center justify-center relative min-h-[400px] custom-shadow hover:border-gold/30 transition-all duration-500 group">
                            <div className="relative w-64 h-64 rounded-full custom-shadow"
                                style={{
                                    background: `conic-gradient(
                                        #6B8A7A 0% ${allocation.safe}%, 
                                        #B8A070 ${allocation.safe}% ${allocation.safe + allocation.balanced}%, 
                                        #A67070 ${allocation.safe + allocation.balanced}% 100%
                                    )`
                                }}>
                                <div className="absolute inset-4 bg-ash rounded-full flex flex-col items-center justify-center">
                                    <span className="text-dim text-xs tracking-widest uppercase">PORTFOLIO</span>
                                    <span className="text-3xl font-black text-platinum">100%</span>
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="flex gap-8 mt-8">
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-sage rounded-full" /><span className="text-sm text-platinum">守り</span></div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-camel rounded-full" /><span className="text-sm text-platinum">バランス</span></div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-clay rounded-full" /><span className="text-sm text-platinum">攻め</span></div>
                            </div>
                        </div>

                        {/* Projection */}
                        <div className="bg-ash/50 border border-white/10 rounded-sm p-8 relative overflow-hidden group">
                            <div className={`relative transition-all duration-500 ${!hasFullAccess ? 'filter blur-sm opacity-50 grayscale-[0.5]' : ''}`}>
                                <h3 className="text-lg font-bold text-platinum mb-2">資産推移イメージ（参考値）</h3>
                                <p className="text-[10px] text-dim mb-6">※ 以下は過去の平均リターンに基づく仮想の計算例であり、将来の運用結果を保証するものではありません。</p>
                                <div className="flex items-end justify-between mb-8">
                                    <div>
                                        <p className="text-xs text-dim mb-1">現在の元金</p>
                                        <p className="text-xl font-mono text-platinum">¥{principal.toLocaleString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gold mb-1">参考値（不確実）</p>
                                        <p className="text-4xl font-black text-gold">¥{projection[20].amount.toLocaleString()}</p>
                                        <p className="text-xs text-emerald-400">+{((projection[20].amount - (principal + monthly * 12 * 20)) / (principal + monthly * 12 * 20) * 100).toFixed(0)}% return</p>
                                    </div>
                                </div>

                                {/* Simple Bar Chart */}
                                <div className="flex items-end gap-1 h-32 md:gap-2">
                                    {projection.map((p, i) => (
                                        <div key={i} className="flex-1 bg-gradient-to-t from-gold/20 to-gold/60 rounded-t-sm relative group"
                                            style={{ height: `${(p.amount / projection[20].amount) * 100}%` }}>
                                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold/50" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-[10px] text-dim mt-2">
                                    <span>Now</span>
                                    <span>10 Years</span>
                                    <span>20 Years</span>
                                </div>
                            </div>

                            {/* Pro Overlay */}
                            {!hasFullAccess && (
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                                    <div className="bg-black/40 backdrop-blur-md border border-gold/30 p-8 rounded-sm max-w-sm w-full shadow-2xl">
                                        <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-4">PREMIUM INSIGHT</p>
                                        <h3 className="text-xl font-serif text-platinum mb-6 leading-relaxed">
                                            アロケーションの考え方を<br />
                                            <span className="text-gold-gradient">深く</span>学ぶ。
                                        </h3>
                                        <button onClick={onUpgrade} className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-sm border border-gold/50 transition-all hover:border-gold">
                                            <div className="absolute inset-0 w-0 bg-gold/10 transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></div>
                                            <span className="relative text-xs tracking-widest text-gold font-medium group-hover:text-white transition-colors">UNLOCK PRO</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Recommended Brokers based on Allocation */}
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <h3 className="text-sm font-bold text-platinum mb-4 flex items-center gap-2">
                                <span>REFERENCE BROKER</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {(() => {
                                    const recs = [];
                                    // Base recommendation
                                    recs.push({ name: 'SBI証券', desc: '総合力No.1・初心者に最適', url: 'https://www.sbisec.co.jp/' });

                                    // Dynamic recommendations based on allocation
                                    if (allocation.growth >= 40) {
                                        recs.push({ name: 'マネックス証券', desc: '米国株・分析機能が充実', url: 'https://www.monex.co.jp/' });
                                        recs.push({ name: 'DMM株', desc: '米国株取引手数料が圧倒的', url: 'https://kabu.dmm.com/' });
                                        recs.push({ name: 'GMOクリック証券', desc: '高機能ツール・CFD対応', url: 'https://www.click-sec.com/' });
                                    } else if (allocation.safe >= 50) {
                                        recs.push({ name: '楽天証券', desc: 'ポイント投資・見やすい画面', url: 'https://www.rakuten-sec.co.jp/' });
                                        recs.push({ name: 'WealthNavi', desc: '全自動でおまかせ資産運用', url: 'https://www.wealthnavi.com/' });
                                        recs.push({ name: 'PayPay証券', desc: 'スマホで1000円から手軽に', url: 'https://www.paypay-sec.co.jp/' });
                                    } else {
                                        // Balanced
                                        recs.push({ name: '楽天証券', desc: 'ポイント投資・NISA対応', url: 'https://www.rakuten-sec.co.jp/' });
                                        recs.push({ name: 'auカブコム証券', desc: 'Pontaポイント・クレカ積立', url: 'https://kabu.com/' });
                                        recs.push({ name: 'PayPay証券', desc: 'スマホで少額から開始', url: 'https://www.paypay-sec.co.jp/' });
                                    }

                                    return recs.slice(0, 4).map((b, i) => (
                                        <a key={i} href={b.url} target="_blank" rel="noopener noreferrer"
                                            className="bg-ash/50 border border-white/5 p-4 rounded-sm hover:border-gold/30 hover:bg-white/5 transition-all flex justify-between items-center group">
                                            <div>
                                                <p className="font-bold text-platinum group-hover:text-gold transition-colors text-sm">{b.name}</p>
                                                <p className="text-[10px] text-dim">{b.desc}</p>
                                            </div>
                                            <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
                                        </a>
                                    ));
                                })()}
                            </div>
                            <p className="text-[10px] text-dim mt-3">※ リンク先は各証券会社の公式サイトです。</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// ============================================
// BROKER COMPARISON PAGE
// ============================================


export default PortfolioCreator;
