// ============================================
// ASSET DETAIL MODAL
// ============================================
{
    const { motion } = Motion;

    window.AssetDetailModal = ({ asset, onClose }) => {
        if (!asset) return null;
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/95 backdrop-blur-md p-4 pt-10 sm:pt-4" onClick={onClose}>
                <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} onClick={e => e.stopPropagation()}
                    className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-ash border border-white/10 rounded-sm my-8 custom-shadow custom-scrollbar relative">
                    <div className="relative h-40 overflow-hidden">
                        <img src={asset.image} alt="" className="w-full h-full object-cover filter brightness-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ash to-transparent" />
                        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center">✕</button>
                        <div className="absolute bottom-4 left-6">
                            <h3 className="text-4xl font-black text-platinum">{asset.name}</h3>
                            <p className="text-gold font-bold">{asset.nameJp}</p>
                        </div>
                    </div>
                    <div className="p-6 space-y-6">
                        <p className="text-lg text-platinum/90 leading-relaxed">{asset.description}</p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-sm p-4">
                                <p className="text-xs text-emerald-500 uppercase tracking-wider mb-2 font-bold">メリット</p>
                                <ul className="space-y-2">{asset.pros.map((p, i) => <li key={i} className="text-sm text-platinum/80 flex items-start gap-2"><span className="text-emerald-500">✓</span>{p}</li>)}</ul>
                            </div>
                            <div className="bg-rose-500/10 border border-rose-500/30 rounded-sm p-4">
                                <p className="text-xs text-rose-500 uppercase tracking-wider mb-2 font-bold">デメリット</p>
                                <ul className="space-y-2">{asset.cons.map((c, i) => <li key={i} className="text-sm text-platinum/80 flex items-start gap-2"><span className="text-rose-500">!</span>{c}</li>)}</ul>
                            </div>
                        </div>

                        <div className="bg-obsidian/50 border border-white/5 rounded-sm p-4">
                            <p className="text-xs text-gold uppercase tracking-wider mb-3 font-bold">始め方ステップ</p>
                            <div className="space-y-3">
                                {asset.steps.map((s, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold text-sm">{i + 1}</span>
                                        <span className="text-sm text-platinum/80">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {asset.glossary.length > 0 && (
                            <div className="border-t border-white/10 pt-4">
                                <p className="text-xs text-dim uppercase tracking-wider mb-3">用語解説</p>
                                <div className="flex flex-wrap gap-2">
                                    {asset.glossary.map((g, i) => (
                                        <div key={i} className="bg-obsidian/50 border border-white/5 px-3 py-2 rounded-sm group relative">
                                            <span className="text-gold text-sm cursor-help">{g.word}</span>
                                            <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-ash border border-white/10 p-3 rounded-sm w-48 z-10 shadow-xl">
                                                <p className="text-xs text-platinum/80">{g.def}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {asset.brokers && (
                            <div className="bg-gradient-to-br from-gold/10 to-amber-500/5 border border-gold/30 rounded-sm p-5">
                                <p className="text-xs text-gold uppercase tracking-wider mb-4 font-bold flex items-center gap-2">🏦 参考口座</p>
                                <div className="space-y-3">
                                    {asset.brokers.map((broker, i) => (
                                        <a key={i} href={broker.url} target="_blank" rel="noopener noreferrer"
                                            className="block bg-ash/50 border border-white/10 rounded-sm p-4 hover:border-gold/50 transition-all group">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-lg font-bold text-platinum group-hover:text-gold transition-colors">{broker.name}</span>
                                                {broker.recommended && <span className="text-[10px] bg-gold text-black px-2 py-0.5 rounded-sm font-bold">参考</span>}
                                            </div>
                                            <p className="text-sm text-platinum/70">{broker.feature}</p>
                                            <p className="text-xs text-gold mt-2">口座開設はこちら →</p>
                                        </a>
                                    ))}
                                </div>
                                <p className="text-[10px] text-dim mt-3">
                                    ※ 外部サイトへ遷移します。投資勧誘を目的としたものではありません。<br />
                                    ※ 本リンクは提携サービスへの案内を含みます
                                </p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        );
    };
}
