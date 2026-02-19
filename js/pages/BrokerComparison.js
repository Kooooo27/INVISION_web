// Component extracted from index.html
{
    const { useState, useEffect, useMemo } = React;
    const { motion, AnimatePresence } = Motion;

    const BrokerComparison = ({ onNavigate }) => {
        const [selectedCategory, setSelectedCategory] = useState('all');
        const [selectedBroker, setSelectedBroker] = useState(null);
        const [tipsOpen, setTipsOpen] = useState(false);

        const brokers = [
            {
                id: 'sbi',
                name: 'SBI証券',
                category: 'general',
                logo: '🏦',
                tagline: '幅広い商品ラインナップ',
                ratings: { fees: 5, products: 5, ease: 3, support: 3, tools: 4 },
                features: ['国内株取引手数料0円プランあり', 'NISA・iDeCo対応', '米国株・投資信託充実', 'Tポイント/Vポイント連携'],
                fees: { stock: '0円〜', fund: '0円〜', us: '0.495%' },
                pros: ['商品数が豊富', 'IPO取扱いが多い', 'クレカ積立対応'],
                cons: ['サイトが複雑', 'アプリが分散'],
                bestFor: ['幅広い商品を扱いたい方', '米国株に興味がある方'],
                url: 'https://www.sbisec.co.jp/'
            },
            {
                id: 'rakuten',
                name: '楽天証券',
                category: 'general',
                logo: '🛒',
                tagline: '楽天経済圏との連携',
                ratings: { fees: 5, products: 4, ease: 5, support: 3, tools: 4 },
                features: ['楽天ポイント投資', '楽天カード積立で還元', '楽天銀行連携で金利優遇', '日経テレコン無料'],
                fees: { stock: '0円〜', fund: '0円〜', us: '0.495%' },
                pros: ['楽天ポイントが使える', 'アプリが使いやすい', 'マネーブリッジで金利UP'],
                cons: ['ポイント還元率が変動', '楽天圏外だとメリット薄'],
                bestFor: ['楽天ユーザー', 'ポイント投資をしたい方'],
                url: 'https://www.rakuten-sec.co.jp/'
            },
            {
                id: 'matsui',
                name: '松井証券',
                category: 'general',
                logo: '🏯',
                tagline: '老舗の安心感とサポート',
                ratings: { fees: 4, products: 3, ease: 4, support: 5, tools: 3 },
                features: ['50万円まで手数料無料', '電話サポート充実', '株主優待検索ツール', '投資信託100円から'],
                fees: { stock: '0円（50万まで）', fund: '0円〜', us: '0.495%' },
                pros: ['サポートが手厚い', '初心者向けツール充実', '25歳以下手数料無料'],
                cons: ['米国株のラインナップが少ない', 'ポイント制度が弱い'],
                bestFor: ['サポート重視の方', '株主優待に興味がある方'],
                url: 'https://www.matsui.co.jp/'
            },
            {
                id: 'monex',
                name: 'マネックス証券',
                category: 'general',
                logo: '📊',
                tagline: '米国株・分析ツールに強み',
                ratings: { fees: 3, products: 5, ease: 3, support: 3, tools: 5 },
                features: ['米国株取扱い銘柄数が多い', '銘柄スカウター無料', 'dポイント連携', 'ワン株で1株投資'],
                fees: { stock: '50万まで0円', fund: '0円〜', us: '約定代金の0.495%' },
                pros: ['米国株に強い', '分析ツールが充実', 'IPO抽選が平等'],
                cons: ['国内株手数料がやや高め', 'アプリの操作性'],
                bestFor: ['米国株メインの方', '銘柄分析をしたい方'],
                url: 'https://www.monex.co.jp/'
            },
            {
                id: 'au',
                name: 'auカブコム証券',
                category: 'general',
                logo: '📱',
                tagline: 'auユーザー向け特典充実',
                ratings: { fees: 4, products: 4, ease: 4, support: 3, tools: 3 },
                features: ['Pontaポイント投資', 'au PAYカード積立', 'プチ株で1株投資', 'NISA手数料無料'],
                fees: { stock: '0円（条件あり）', fund: '0円〜', us: '0.495%' },
                pros: ['Pontaポイントが貯まる', 'auユーザー優遇', 'プチ株が手軽'],
                cons: ['au圏外だとメリット薄', '米国株は為替スプレッドあり'],
                bestFor: ['auユーザー', 'Pontaポイントを活用したい方'],
                url: 'https://kabu.com/'
            },
            {
                id: 'paypay',
                name: 'PayPay証券',
                category: 'mobile',
                logo: '📱',
                tagline: 'スマホで1000円から投資',
                ratings: { fees: 3, products: 3, ease: 5, support: 3, tools: 3 },
                features: ['1000円から株購入', 'PayPayボーナス運用', '米国株も金額指定', 'マンガで学ぶ投資'],
                fees: { stock: '金額指定', fund: '0円〜', us: '金額指定' },
                pros: ['少額から始められる', 'PayPay連携', 'アプリが超シンプル'],
                cons: ['指値注文不可', '取扱銘柄が限定的'],
                bestFor: ['投資初心者', '少額で試したい方'],
                url: 'https://www.paypay-sec.co.jp/'
            },
            {
                id: 'gmo',
                name: 'GMOクリック証券',
                category: 'trader',
                logo: '💻',
                tagline: '業界最安値水準の手数料',
                ratings: { fees: 5, products: 4, ease: 3, support: 3, tools: 5 },
                features: ['手数料が安い', '高機能ツール「はっちゅう君」', 'CFD/FX最強', 'API環境充実'],
                fees: { stock: '業界最安', fund: '0円〜', us: '業界最安水準' },
                pros: ['コストが低い', 'トレーディングツールが高性能', 'CFDが充実'],
                cons: ['初心者にはツールが難しいかも', '投資信託は少なめ'],
                bestFor: ['コスト重視の方', 'アクティブトレーダー'],
                url: 'https://www.click-sec.com/'
            },
            {
                id: 'dmm',
                name: 'DMM株',
                category: 'general',
                logo: '⚡',
                tagline: '米国株手数料0円〜',
                ratings: { fees: 5, products: 3, ease: 4, support: 3, tools: 4 },
                features: ['米国株取引手数料0円', 'DMMポイント連携', '最短即日口座開設', 'モード切替アプリ'],
                fees: { stock: '業界最安水準', fund: '-', us: '0円' },
                pros: ['米国株コストが圧倒的', 'アプリが使いやすい（かんたん/ノーマル）', '口座開設が早い'],
                cons: ['投資信託の扱いが少ない', 'NISAの選択肢が少なめ'],
                bestFor: ['米国株メインの方', '手数料を抑えたい方'],
                url: 'https://kabu.dmm.com/'
            },
            {
                id: 'wealthnavi',
                name: 'WealthNavi',
                category: 'robo',
                logo: '🤖',
                tagline: '全自動のおまかせ資産運用',
                ratings: { fees: 2, products: 3, ease: 5, support: 4, tools: 4 },
                features: ['ロボアドバイザー', '自動リバランス', '税金最適化機能', 'NISAにも対応'],
                fees: { stock: '-', fund: '-', us: '年率1.1%（税込）' },
                pros: ['完全自動で手間なし', 'リバランス不要', '初心者でも安心'],
                cons: ['手数料が比較的高い', '自分で銘柄を選べない'],
                bestFor: ['投資に時間をかけたくない方', '完全おまかせを希望する方'],
                url: 'https://www.wealthnavi.com/'
            },
            {
                id: 'bitflyer',
                name: 'bitFlyer',
                category: 'crypto',
                logo: '₿',
                tagline: '国内大手の仮想通貨取引所',
                ratings: { fees: 3, products: 3, ease: 4, support: 4, tools: 3 },
                features: ['ビットコイン取扱い', 'Tポイント連携', '積立サービス', 'bitFlyerクレカ'],
                fees: { stock: '-', fund: '-', us: 'スプレッド（変動）' },
                pros: ['セキュリティに注力', '1円から購入可能', 'ポイント投資対応'],
                cons: ['手数料が高め', 'アルトコイン数が少なめ'],
                bestFor: ['仮想通貨初心者', 'ビットコインを始めたい方'],
                url: 'https://bitflyer.com/'
            },
            {
                id: 'coincheck',
                name: 'Coincheck',
                category: 'crypto',
                logo: '🪙',
                tagline: 'シンプルで使いやすいUI',
                ratings: { fees: 3, products: 4, ease: 5, support: 3, tools: 3 },
                features: ['シンプルなアプリ', 'つみたて機能', 'NFT取扱い', '電気代をBTCで'],
                fees: { stock: '-', fund: '-', us: 'スプレッド（変動）' },
                pros: ['アプリが使いやすい', '銘柄数が多い', '500円から購入可能'],
                cons: ['スプレッドが広め', '過去にハッキング被害'],
                bestFor: ['仮想通貨初心者', 'シンプルなUIを好む方'],
                url: 'https://coincheck.com/'
            }
        ];

        const categories = [
            { id: 'all', label: 'すべて' },
            { id: 'general', label: '総合証券' },
            { id: 'robo', label: 'ロボアド' },
            { id: 'crypto', label: '仮想通貨' }
        ];

        const filteredBrokers = selectedCategory === 'all' ? brokers : brokers.filter(b => b.category === selectedCategory);

        // Radar Chart Component - Glass Edition
        const RadarChart = ({ ratings, size = 100, showLabels = false }) => {
            const center = size / 2;
            const radius = size * (showLabels ? 0.3 : 0.38);
            const axes = ['fees', 'products', 'ease', 'support', 'tools'];
            const axisLabels = ['手数料', '商品', '簡単さ', 'サポート', 'ツール'];
            const angleStep = (Math.PI * 2) / axes.length;
            const chartId = useMemo(() => `radar-${Math.random().toString(36).substr(2, 9)}`, []);

            const getPoint = (value, index) => {
                const angle = index * angleStep - Math.PI / 2;
                const r = (value / 5) * radius;
                return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
            };

            const points = axes.map((axis, i) => getPoint(ratings[axis], i));
            const polygonPoints = points.map(p => `${p.x},${p.y}`).join(' ');

            // Grid lines (5 levels)
            const gridLines = [1, 2, 3, 4, 5].map(level => {
                const gridPoints = axes.map((_, i) => getPoint(level, i));
                return { points: gridPoints.map(p => `${p.x},${p.y}`).join(' '), level };
            });

            return (
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <defs>
                        {/* Glass fill gradient */}
                        <linearGradient id={`${chartId}-glass`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                            <stop offset="40%" stopColor="rgba(201,162,39,0.08)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
                        </linearGradient>
                        {/* Soft inner glow */}
                        <radialGradient id={`${chartId}-inner`} cx="50%" cy="40%" r="60%">
                            <stop offset="0%" stopColor="rgba(232,208,104,0.15)" />
                            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                        </radialGradient>
                        <filter id={`${chartId}-blur`}>
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Background ambient glow */}
                    <circle cx={center} cy={center} r={radius * 1.05} fill={`url(#${chartId}-inner)`} />

                    {/* Grid — clean concentric pentagons */}
                    {gridLines.map(({ points: line, level }) => (
                        <polygon key={level} points={line} fill="none"
                            stroke={`rgba(255,255,255,${level === 5 ? 0.12 : 0.04 + level * 0.01})`}
                            strokeWidth={level === 5 ? '0.8' : '0.4'} />
                    ))}

                    {/* Axis lines */}
                    {axes.map((_, i) => {
                        const endPoint = getPoint(5, i);
                        return <line key={i} x1={center} y1={center} x2={endPoint.x} y2={endPoint.y}
                            stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />
                    })}

                    {/* Data polygon — frosted glass */}
                    <polygon points={polygonPoints}
                        fill={`url(#${chartId}-glass)`}
                        stroke="rgba(255,255,255,0.35)"
                        strokeWidth={showLabels ? '1.5' : '1'}
                        strokeLinejoin="round" />

                    {/* Data points — refined dots */}
                    {points.map((p, i) => (
                        <g key={i}>
                            <circle cx={p.x} cy={p.y} r={showLabels ? '4' : '2.5'}
                                fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
                            <circle cx={p.x} cy={p.y} r={showLabels ? '2' : '1.5'}
                                fill="rgba(232,208,104,0.9)" />
                        </g>
                    ))}

                    {/* Labels */}
                    {showLabels && axes.map((axis, i) => {
                        const angle = i * angleStep - Math.PI / 2;
                        const labelRadius = radius * 1.45;
                        const x = center + labelRadius * Math.cos(angle);
                        const y = center + labelRadius * Math.sin(angle);
                        const score = ratings[axis];
                        return (
                            <g key={i}>
                                <text x={x} y={y - 6} fill="rgba(255,255,255,0.75)" fontSize="10" fontWeight="500"
                                    textAnchor="middle" dominantBaseline="middle"
                                    style={{ letterSpacing: '0.04em' }}>
                                    {axisLabels[i]}
                                </text>
                                <text x={x} y={y + 7} fill="rgba(232,208,104,0.8)" fontSize="9" fontWeight="600"
                                    textAnchor="middle" dominantBaseline="middle" fontFamily="monospace">
                                    {score.toFixed(1)}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            );
        };


        return (
            <div className="min-h-screen bg-obsidian pt-28 pb-32 px-4 sm:px-8 relative overflow-hidden">
                {/* Atmospheric Background */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[150px] opacity-20" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] opacity-10" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="mb-16">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-dim text-xs tracking-[0.4em] text-gold uppercase">Broker Comparison</p>
                                <button onClick={() => setTipsOpen(!tipsOpen)} className="text-gold hover:scale-110 transition-transform text-lg" title="用語解説">
                                    ❕
                                </button>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-platinum mb-4">証券会社を<span className="text-gold-gradient">比較</span>する</h2>
                            <p className="text-dim text-sm max-w-xl leading-loose">
                                各証券会社の特徴を比較して、あなたに合った口座を見つけましょう。<br />
                                ※ 本情報は一般的な比較であり、特定の会社を推奨するものではありません。
                            </p>
                        </motion.div>
                    </div>

                    {/* Tips Section */}
                    <AnimatePresence>
                        {tipsOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mb-10">
                                <div className="bg-gold/5 border border-gold/20 rounded-sm p-6">
                                    <h3 className="text-gold font-bold mb-4 flex items-center gap-2"><span>💡</span> 証券・証券会社って何？</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                        <div>
                                            <h4 className="text-platinum font-bold mb-2">証券とは？</h4>
                                            <p className="text-dim leading-relaxed">株や投資信託など「お金を増やすための商品」のこと。買うことで、企業の成長や国の信用に投資し、利益を得る権利を持てます。</p>
                                        </div>
                                        <div>
                                            <h4 className="text-platinum font-bold mb-2">証券会社とは？</h4>
                                            <p className="text-dim leading-relaxed">証券を売買するためのお店です。スーパーで食品を買うように、証券会社で株や投資信託を買います。銀行がお金を預かる場所なら、証券会社はお金を「働かせる」場所です。</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Category Filter */}
                    <div className="flex gap-3 mb-10 flex-wrap">
                        {categories.map(cat => (
                            <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                                className={`px-5 py-2 rounded-sm text-sm transition-all font-medium ${selectedCategory === cat.id ? 'bg-gold/10 text-gold border border-gold/30' : 'text-dim border border-white/10 hover:text-platinum hover:border-white/20'}`}>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Broker Cards - Compact Radar Chart Design */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                        <AnimatePresence mode="popLayout">
                            {filteredBrokers.map((broker, i) => (
                                <motion.div key={broker.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: i * 0.05, type: 'spring', stiffness: 300 }}
                                    onClick={() => setSelectedBroker(broker)}
                                    className="bg-gradient-to-br from-ash/80 to-ash/40 border border-white/5 rounded-sm p-4 cursor-pointer hover:border-gold/30 hover:scale-105 transition-all duration-300 group flex flex-col items-center">
                                    {/* Radar Chart */}
                                    <div className="mb-3 relative">
                                        <RadarChart ratings={broker.ratings} size={110} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-2xl">{broker.logo}</span>
                                        </div>
                                    </div>
                                    {/* Name & Tagline */}
                                    <h3 className="text-sm font-bold text-platinum group-hover:text-gold transition-colors text-center">{broker.name}</h3>
                                    <p className="text-[10px] text-dim text-center mt-1 line-clamp-1">{broker.tagline}</p>
                                    <span className="text-[10px] text-gold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">タップで詳細</span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Disclaimer */}
                    <div className="text-center">
                        <p className="text-[10px] text-dim leading-relaxed">
                            ※ 手数料・サービス内容は変更される場合があります。最新情報は各社公式サイトをご確認ください。<br />
                            ※ 本ページは情報提供を目的としており、投資勧誘を目的としたものではありません。
                        </p>
                    </div>
                </div>

                {/* Detail Modal */}
                <AnimatePresence>
                    {selectedBroker && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/90 backdrop-blur-lg p-4"
                            onClick={() => setSelectedBroker(null)}>
                            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                                onClick={e => e.stopPropagation()}
                                className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-ash border border-white/10 rounded-sm">
                                {/* Modal Header */}
                                <div className="sticky top-0 bg-ash/95 backdrop-blur-sm border-b border-white/10 p-6 flex justify-between items-start">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-gold/20 to-amber-500/10 flex items-center justify-center text-3xl">{selectedBroker.logo}</div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-platinum">{selectedBroker.name}</h2>
                                            <p className="text-sm text-dim">{selectedBroker.tagline}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setSelectedBroker(null)} className="text-dim hover:text-white text-2xl">×</button>
                                </div>

                                {/* Modal Content */}
                                <div className="p-6 space-y-6">
                                    {/* Detailed Radar Chart */}
                                    <div className="flex justify-center py-4 bg-gradient-to-br from-white/5 to-transparent rounded-sm border border-white/5">
                                        <RadarChart ratings={selectedBroker.ratings} size={280} showLabels={true} />
                                    </div>
                                    {/* Features */}
                                    <div>
                                        <h3 className="text-sm text-gold uppercase tracking-wider mb-3">主な特徴</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedBroker.features.map((f, i) => (
                                                <span key={i} className="text-sm text-platinum bg-gold/10 border border-gold/20 px-3 py-1.5 rounded-sm">{f}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Fees */}
                                    <div className="bg-white/5 border border-white/10 rounded-sm p-4">
                                        <h3 className="text-sm text-gold uppercase tracking-wider mb-3">手数料（税込・目安）</h3>
                                        <div className="grid grid-cols-3 gap-4 text-center">
                                            <div>
                                                <p className="text-xs text-dim mb-1">国内株</p>
                                                <p className="text-lg font-bold text-platinum">{selectedBroker.fees.stock}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-dim mb-1">投資信託</p>
                                                <p className="text-lg font-bold text-platinum">{selectedBroker.fees.fund}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-dim mb-1">米国株/その他</p>
                                                <p className="text-lg font-bold text-platinum">{selectedBroker.fees.us}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pros & Cons */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-sm p-4">
                                            <h3 className="text-sm text-emerald-400 uppercase tracking-wider mb-3">メリット</h3>
                                            <ul className="space-y-2">
                                                {selectedBroker.pros.map((p, i) => (
                                                    <li key={i} className="text-sm text-platinum/80 flex items-start gap-2">
                                                        <span className="text-emerald-400">✓</span>{p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-rose-500/5 border border-rose-500/20 rounded-sm p-4">
                                            <h3 className="text-sm text-rose-400 uppercase tracking-wider mb-3">デメリット</h3>
                                            <ul className="space-y-2">
                                                {selectedBroker.cons.map((c, i) => (
                                                    <li key={i} className="text-sm text-platinum/80 flex items-start gap-2">
                                                        <span className="text-rose-400">△</span>{c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h3 className="text-sm text-gold uppercase tracking-wider mb-3">こんな人に向いている</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedBroker.bestFor.map((b, i) => (
                                                <span key={i} className="text-sm text-platinum/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">👤 {b}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="pt-4 border-t border-white/10">
                                        <a href={selectedBroker.url} target="_blank" rel="noopener noreferrer"
                                            className="block w-full py-4 bg-gold/10 border border-gold/30 text-gold text-center font-bold rounded-sm hover:bg-gold hover:text-black transition-all">
                                            {selectedBroker.name}の公式サイトへ →
                                        </a>
                                        <p className="text-[10px] text-dim text-center mt-3">
                                            ※ 外部サイトへ遷移します。投資勧誘を目的としたものではありません。<br />
                                            ※ 本リンクは提携サービスへの案内を含みます
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };


    window.BrokerComparison = BrokerComparison;
}
