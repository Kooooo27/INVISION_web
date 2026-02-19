// Component extracted from index.html
{
    const { useState, useEffect, useRef } = React;
    const { motion, AnimatePresence } = Motion;
    const assetDetailData = window.assetDetailData;
    const AssetDetailModal = window.AssetDetailModal;

    // ============================================
    // ASSET GALLERY WITH DETAIL MODALS
    // ============================================


    const LuxuryCard = ({ asset, index, onSelect }) => {
        const [isHovered, setIsHovered] = useState(false);
        const riskColors = { 1: 'bg-emerald-500', 2: 'bg-emerald-400', 3: 'bg-amber-500', 4: 'bg-orange-500', 5: 'bg-rose-500' };
        return (
            <motion.div onClick={() => onSelect(asset)} className="relative flex-shrink-0 w-[260px] h-[420px] sm:w-[300px] sm:h-[500px] md:w-[380px] md:h-[580px] snap-center group cursor-pointer" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
                <div className="absolute inset-0 overflow-hidden rounded-sm border border-white/10 bg-ash custom-shadow transition-all duration-500 hover:border-gold/50">
                    <motion.div className="absolute inset-0 z-0 bg-obsidian" animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.8 }}>
                        <div className="absolute inset-0 z-10 grain opacity-40 mix-blend-overlay pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-20 opacity-90" />
                        <img src={asset.image} alt="" className="w-full h-full object-cover filter grayscale-[30%] contrast-125 opacity-60" />
                    </motion.div>
                    <div className="absolute inset-0 z-40 p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-bold tracking-[0.2em] text-gold/80 border border-gold/20 px-2 py-1">0{index + 1}</span>
                            <div className="flex items-center gap-1">
                                <span className="text-[10px] text-dim">RISK</span>
                                {[1, 2, 3, 4, 5].map(l => <div key={l} className={`w-2 h-2 rounded-full ${l <= asset.riskLevel ? riskColors[asset.riskLevel] : 'bg-stone'}`} />)}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-5xl font-black tracking-tighter text-platinum mb-2">{asset.name}</h3>
                            <p className="text-sm font-bold tracking-widest text-gold mb-4 border-b border-gold/30 pb-2 inline-block">{asset.nameJp}</p>
                            <p className="text-platinum/80 text-sm leading-relaxed mb-4">{asset.tagline}</p>
                            <motion.div className="space-y-2 overflow-hidden" initial={{ height: 0, opacity: 0 }} animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.4 }}>
                                {asset.knowledge.map((item, i) => (<div key={i} className="flex items-start gap-2 text-xs text-platinum/70 bg-obsidian/60 p-2 rounded-sm border border-white/5"><span className="text-gold">●</span>{item}</div>))}
                                <div className="text-center pt-2 text-gold text-sm font-bold">タップで詳細を見る →</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    const AssetGallery = ({ onNavigate, preSelectedAssetId, onClearPreSelection }) => {
        const [selectedAsset, setSelectedAsset] = useState(null);

        useEffect(() => {
            if (preSelectedAssetId) {
                const asset = assetDetailData.find(a => a.id === preSelectedAssetId);
                if (asset) setSelectedAsset(asset);
                if (onClearPreSelection) onClearPreSelection();
            }
        }, [preSelectedAssetId, onClearPreSelection]);
        return (
            <div className="min-h-screen bg-obsidian relative flex flex-col justify-center py-20 pb-32">
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[150px] opacity-20" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-platinum/5 rounded-full blur-[120px] opacity-10" />
                </div>
                <div className="relative z-10 w-full max-w-[1400px] mx-auto">
                    <div className="px-8 md:px-16 mb-12">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <p className="text-dim text-xs tracking-[0.4em] mb-4 text-gold">ASSET GALLERY</p>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-platinum mb-6">投資先を<span className="text-gold-gradient">選ぶ</span></h2>
                            <p className="text-dim max-w-xl text-sm leading-loose">カードをタップして詳細を確認。初心者向けの解説付きです。</p>
                        </motion.div>
                    </div>
                    <div className="overflow-x-auto pb-16 px-4 sm:px-8 md:px-16 scrollbar-hide flex gap-4 sm:gap-8 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
                        {assetDetailData.map((asset, i) => <LuxuryCard key={asset.id} asset={asset} index={i} onSelect={setSelectedAsset} />)}
                    </div>
                </div>

                {/* Footer Disclaimer */}
                <footer className="w-full py-16 px-8 border-t border-white/5 bg-obsidian text-center mt-20 relative z-10">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h3 className="text-gold text-lg font-bold tracking-widest uppercase mb-4">INVISION</h3>
                        <p className="text-xs text-dim leading-loose">
                            INVISIONは、投資を始める前に「自分を知る」ためのプラットフォームです。<br />
                            このサイトは学習・自己分析を目的としており、特定の商品の購入を勧めるものではありません。<br />
                            診断やシミュレーションの結果はあくまで参考情報であり、将来の成果を約束するものではありません。<br />
                            投資の最終判断はご自身の責任となります。元本が減るリスクがあることをご理解ください。
                        </p>
                        <div className="flex justify-center gap-6 mt-4">
                            <button onClick={() => onNavigate('tokushoho')} className="text-[10px] text-dim hover:text-gold transition-colors underline">特定商取引法に基づく表記</button>
                            <button onClick={() => onNavigate('privacy')} className="text-[10px] text-dim hover:text-gold transition-colors underline">プライバシーポリシー</button>
                        </div>
                        <p className="text-[10px] text-white/20 mt-8">
                            © 2025 INVISION. All Rights Reserved.
                        </p>
                    </div>
                </footer>

                {/* Asset Detail Modal */}
                <AnimatePresence>
                    {selectedAsset && <AssetDetailModal asset={selectedAsset} onClose={() => setSelectedAsset(null)} />}
                </AnimatePresence>
            </div>
        );
    };


    window.LuxuryCard = LuxuryCard;
    window.AssetGallery = AssetGallery;
}
