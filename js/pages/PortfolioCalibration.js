// Component extracted from index.html
{
    const { useState, useEffect, useRef, useMemo } = React;
    const { motion, AnimatePresence } = Motion;
    const assetDetailData = window.assetDetailData;
    const profiles = window.profiles;
    const getUserTitle = window.getUserTitle;
    const AssetDetailModal = window.AssetDetailModal;

    const PortfolioCalibration = ({ onComplete, existingProfile, onRediagnose, isOnboarding, onSkip, onNavigate, onSelectAsset }) => {
        const [currentQ, setCurrentQ] = useState(0);
        const [viewingAsset, setViewingAsset] = useState(null);
        const [answers, setAnswers] = useState({});
        const [showResult, setShowResult] = useState(false);
        const [sliderValue, setSliderValue] = useState(30); // Default age 30
        const [isDiagnosing, setIsDiagnosing] = useState(!existingProfile);
        const [showIntro, setShowIntro] = useState(!existingProfile);

        const questions = [
            // PROFILE (1 question) - Now a slider for precise age
            { id: 0, category: 'PROFILE', question: 'あなたの年齢は？', type: 'slider', min: 18, max: 80, step: 1, unit: '歳' },
            // LIFESTYLE (3 questions)
            { id: 1, category: 'LIFESTYLE', question: 'スタバの新作が出たら、すぐ試す？', type: 'choice', options: [{ label: 'すぐ行く！', value: 4 }, { label: 'SNSで評判見てから', value: 3 }, { label: '定番しか頼まない', value: 2 }, { label: 'コンビニコーヒー派', value: 1 }] },
            { id: 2, category: 'LIFESTYLE', question: '服を買うとき、何を重視する？', type: 'choice', options: [{ label: '今季のトレンド最優先', value: 4 }, { label: 'コスパと見た目のバランス', value: 3 }, { label: '10年着れる定番', value: 2 }, { label: '必要最低限しか買わない', value: 1 }] },
            { id: 3, category: 'LIFESTYLE', question: '旅行の予約スタイルは？', type: 'choice', options: [{ label: '当日ノープランで出発', value: 4 }, { label: '大まかなプランだけ決める', value: 3 }, { label: '事前にしっかり計画', value: 2 }, { label: '旅行より家でゆっくり', value: 1 }] },
            // FINANCE (4 questions)
            { id: 4, category: 'FINANCE', question: '1ヶ月で自由に動かせる余裕は？', type: 'slider', min: 0, max: 100, step: 1, unit: '円' },
            { id: 5, category: 'FINANCE', question: '万が一の生活防衛資金は？', type: 'choice', options: [{ label: '6ヶ月分以上ある', value: 1 }, { label: '3〜5ヶ月分程度', value: 2 }, { label: '1〜2ヶ月分程度', value: 3 }, { label: 'ほぼない or これから', value: 4 }] },
            { id: 6, category: 'FINANCE', question: '毎月の貯蓄額（投資含む）は？', type: 'choice', options: [{ label: '収入の30%以上', value: 1 }, { label: '収入の10-30%程度', value: 2 }, { label: '収入の10%未満', value: 3 }, { label: 'ほとんど貯蓄できていない', value: 4 }] },
            { id: 7, category: 'FINANCE', question: 'ボーナスの使い方は？', type: 'choice', options: [{ label: '全額投資・貯蓄', value: 1 }, { label: '半分以上を貯蓄', value: 2 }, { label: '必要なものに使う', value: 3 }, { label: '特に決めていない', value: 4 }] },
            // RISK (4 questions)
            { id: 8, category: 'RISK', question: '100万円投資して50万円になったら？', type: 'choice', options: [{ label: '怖い、やめたい', value: 1 }, { label: '少し不安だが耐える', value: 2 }, { label: '長期なら問題なし', value: 3 }, { label: 'むしろ買い増しチャンス', value: 4 }] },
            { id: 9, category: 'RISK', question: '「ハイリスク・ハイリターン」という言葉の印象は？', type: 'choice', options: [{ label: '危険、避けたい', value: 1 }, { label: '理解はするが慎重に', value: 2 }, { label: '一部なら検討する', value: 3 }, { label: 'ワクワクする', value: 4 }] },
            { id: 10, category: 'RISK', question: '友人が「儲かる話がある」と言ってきたら？', type: 'choice', options: [{ label: '絶対に断る', value: 1 }, { label: '詳しく聞いて慎重に判断', value: 2 }, { label: '少額なら試してみる', value: 3 }, { label: '面白そうなら乗ってみる', value: 4 }] },
            { id: 11, category: 'RISK', question: '投資で一番避けたいことは？', type: 'choice', options: [{ label: '元本割れ', value: 1 }, { label: '期待より低いリターン', value: 2 }, { label: '投資機会の逃し', value: 3 }, { label: '儲けを逃すこと', value: 4 }] },
            // KNOWLEDGE (3 questions)
            { id: 12, category: 'KNOWLEDGE', question: '投資経験はどのくらい？', type: 'choice', options: [{ label: '全くの初心者', value: 1 }, { label: 'NISA口座を開設した程度', value: 2 }, { label: '1年以上運用中', value: 3 }, { label: '複数資産を運用中', value: 4 }] },
            { id: 13, category: 'KNOWLEDGE', question: '「複利」って説明できる？', type: 'choice', options: [{ label: '聞いたことない', value: 1 }, { label: '聞いたことはある', value: 2 }, { label: 'なんとなくわかる', value: 3 }, { label: '完璧に理解している', value: 4 }] },
            { id: 14, category: 'KNOWLEDGE', question: 'インデックス投資と個別株の違いは？', type: 'choice', options: [{ label: 'わからない', value: 1 }, { label: 'なんとなくイメージはある', value: 2 }, { label: '説明できる', value: 3 }, { label: '両方運用した経験がある', value: 4 }] },
            // GOALS (2 questions)
            { id: 15, category: 'GOALS', question: '投資で達成したい一番の目標は？', type: 'choice', options: [{ label: '老後資金の確保', value: 1 }, { label: '教育資金・住宅資金', value: 2 }, { label: '経済的自由（FIRE）', value: 3 }, { label: '資産を大きく増やす', value: 4 }] },
            { id: 16, category: 'GOALS', question: '何年くらいの期間で投資を考えている？', type: 'choice', options: [{ label: '20年以上の超長期', value: 1 }, { label: '10-20年程度', value: 2 }, { label: '5-10年程度', value: 3 }, { label: '5年以内', value: 4 }] },
        ];

        const mapFinanceValue = (val) => {
            if (val <= 50) return Math.round((val / 50) * 50000 / 1000) * 1000;
            const t = (val - 50) / 50;
            return Math.round((50000 + Math.pow(t, 2.5) * 2950000) / 10000) * 10000;
        };

        const handleAnswer = (val) => {
            // If it's the finance slider (ID 4), map the 0-100 value to yen first
            const actualValue = questions[currentQ].id === 4 ? mapFinanceValue(val) : val;

            // Normalize age slider value to risk score (1-4)
            let normalizedVal = actualValue;
            if (questions[currentQ].type === 'slider' && questions[currentQ].id === 0) {
                // Age-based risk scoring: younger = higher risk tolerance
                if (actualValue < 30) normalizedVal = 4;
                else if (actualValue < 40) normalizedVal = 3;
                else if (actualValue < 60) normalizedVal = 2;
                else normalizedVal = 1;
            } else if (questions[currentQ].id === 4) {
                // Normalize finance value: 50k=2, 100k=3, 200k+=4
                if (actualValue >= 200000) normalizedVal = 4;
                else if (actualValue >= 100000) normalizedVal = 3;
                else if (actualValue >= 50000) normalizedVal = 2;
                else normalizedVal = 1;
            }
            setAnswers({ ...answers, [questions[currentQ].id]: normalizedVal });
            if (currentQ < questions.length - 1) {
                setTimeout(() => {
                    const nextQ = questions[currentQ + 1];
                    if (nextQ.type === 'slider') {
                        setSliderValue(nextQ.id === 0 ? 30 : 50); // Age: 30, Finance: 50 (center)
                    }
                    setCurrentQ(currentQ + 1);
                }, 300);
            }
            else setTimeout(() => setShowResult(true), 300);
        };

        const calculateProfile = () => {
            // Category-based weighted scoring system
            // RISK: 40%, FINANCE: 25%, KNOWLEDGE: 15%, LIFESTYLE: 10%, GOALS: 10%
            const categoryWeights = {
                PROFILE: 0,      // Age is used for adjustment, not direct score
                LIFESTYLE: 0.10,
                FINANCE: 0.25,
                RISK: 0.40,
                KNOWLEDGE: 0.15,
                GOALS: 0.10
            };

            // Group answers by category
            const categoryScores = {};
            const categoryCounts = {};

            questions.forEach(q => {
                const cat = q.category;
                const answer = answers[q.id];
                if (answer !== undefined && cat !== 'PROFILE') {
                    if (!categoryScores[cat]) {
                        categoryScores[cat] = 0;
                        categoryCounts[cat] = 0;
                    }
                    categoryScores[cat] += answer;
                    categoryCounts[cat] += 1;
                }
            });

            // Calculate normalized score per category (0-100)
            const normalizedCategoryScores = {};
            Object.keys(categoryScores).forEach(cat => {
                const maxPossible = categoryCounts[cat] * 4;
                normalizedCategoryScores[cat] = Math.round((categoryScores[cat] / maxPossible) * 100);
            });

            // Calculate weighted total score (0-100)
            let weightedScore = 0;
            Object.keys(normalizedCategoryScores).forEach(cat => {
                weightedScore += normalizedCategoryScores[cat] * (categoryWeights[cat] || 0);
            });
            weightedScore = Math.round(weightedScore);

            // Age adjustment: younger investors can tolerate slightly more risk
            const age = answers[0] || 30;
            let ageAdjustment = 0;
            if (age < 30) ageAdjustment = 5;
            else if (age < 40) ageAdjustment = 2;
            else if (age >= 60) ageAdjustment = -5;

            const finalScore = Math.max(0, Math.min(100, weightedScore + ageAdjustment));

            // Profile selection based on clear thresholds
            // Score < 20: Guardian (最も保守的)
            // Score 20-34: Custodian
            // Score 35-44: Conservative
            // Score 45-54: Architect
            // Score 55-64: Strategist
            // Score 65-74: Explorer
            // Score 75-84: Visionary
            // Score >= 85: Pioneer (最も積極的)
            let selected;
            let profileReason;

            if (finalScore < 20) {
                selected = profiles[0]; // Guardian
                profileReason = '資産保全を最優先とし、元本割れリスクを極力避ける傾向があります。';
            } else if (finalScore < 35) {
                selected = profiles[1]; // Custodian
                profileReason = '堅実な資産管理を好み、インフレに負けない程度の運用を目指します。';
            } else if (finalScore < 45) {
                selected = profiles[2]; // Conservative
                profileReason = '安定性を重視しつつ、着実な資産形成を目指すバランス志向です。';
            } else if (finalScore < 55) {
                selected = profiles[3]; // Architect
                profileReason = '長期的な視点で資産を設計し、リスクとリターンのバランスを重視します。';
            } else if (finalScore < 65) {
                selected = profiles[4]; // Strategist
                profileReason = '市場の動きを分析し、機動的なポートフォリオ調整を好みます。';
            } else if (finalScore < 75) {
                selected = profiles[5]; // Explorer
                profileReason = '新しい投資機会を積極的に探求し、多様な資産への分散を志向します。';
            } else if (finalScore < 85) {
                selected = profiles[6]; // Visionary
                profileReason = '将来のトレンドを見据え、成長性の高い資産への投資を好みます。';
            } else {
                selected = profiles[7]; // Pioneer
                profileReason = '高いリスクを許容し、積極的なリターンを追求する投資スタイルです。';
            }

            // Experience level from knowledge questions
            const knowledgeScore = normalizedCategoryScores['KNOWLEDGE'] || 0;
            let expLevel = 1;
            if (knowledgeScore >= 75) expLevel = 3;      // 熟練
            else if (knowledgeScore >= 50) expLevel = 2; // 見習い
            else expLevel = 1;                            // 駆け出し

            return {
                ...selected,
                baseType: selected.nameJp,
                initialLevel: expLevel,
                experienceLevel: expLevel,
                // Extended diagnostic data
                diagnosticData: {
                    finalScore,
                    categoryScores: normalizedCategoryScores,
                    ageAdjustment,
                    profileReason,
                    timestamp: Date.now()
                }
            };
        };
        const profile = showResult ? calculateProfile() : existingProfile;

        const startRediagnose = () => {
            setCurrentQ(0);
            setAnswers({});
            setShowResult(false);
            setIsDiagnosing(true);
        };

        // Show existing profile if not diagnosing
        if (!isDiagnosing && existingProfile) {
            const expLevel = existingProfile.experienceLevel || 1;
            const levelNames = { 1: '駆け出し', 2: '見習い', 3: '熟練' };
            const levelColors = { 1: 'text-dim', 2: 'text-emerald-400', 3: 'text-gold' };

            return (
                <div className="min-h-screen bg-obsidian px-8 py-24 overflow-y-auto">
                    <motion.div className="max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <p className="text-dim text-sm tracking-[0.3em] mb-6">YOUR PROFILE</p>

                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-7xl">{existingProfile.icon}</span>
                            <div>
                                <h2 className="text-4xl font-black">{existingProfile.name}</h2>
                                <p className="text-2xl text-gold">{getUserTitle(existingProfile, 0)}</p>
                            </div>
                        </div>

                        {/* Knowledge Level Badge */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className={`text-sm font-bold ${levelColors[expLevel]}`}>📚 知識レベル: {levelNames[expLevel]}</span>
                            <div className="flex gap-1">
                                {[1, 2, 3].map(l => (
                                    <div key={l} className={`w-3 h-3 rounded-full ${l <= expLevel ? 'bg-gold' : 'bg-stone'}`} />
                                ))}
                            </div>
                        </div>

                        {/* Short Description */}
                        <p className="text-lg text-platinum/80 mb-4">{existingProfile.description}</p>

                        {/* Detailed Description */}
                        {existingProfile.detailedDescription && (
                            <div className="bg-ash/30 border border-white/5 rounded-sm p-5 mb-6">
                                <p className="text-sm text-platinum/70 leading-relaxed">{existingProfile.detailedDescription}</p>
                            </div>
                        )}

                        {/* Traits */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {existingProfile.traits.map((t, i) => <span key={i} className="text-xs bg-ash border border-white/10 px-3 py-1 rounded-full text-platinum/70">{t}</span>)}
                        </div>

                        {/* Strengths & Watch Out */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {existingProfile.strengths && (
                                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-sm p-5">
                                    <p className="text-xs text-emerald-400 uppercase tracking-wider mb-3 font-bold">💪 強み</p>
                                    <ul className="space-y-2">
                                        {existingProfile.strengths.map((s, i) => (
                                            <li key={i} className="text-sm text-platinum/80 flex items-start gap-2">
                                                <span className="text-emerald-400 mt-0.5">✓</span>
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {existingProfile.watchOut && (
                                <div className="bg-amber-500/10 border border-amber-500/20 rounded-sm p-5">
                                    <p className="text-xs text-amber-400 uppercase tracking-wider mb-3 font-bold">⚠️ 注意点</p>
                                    <ul className="space-y-2">
                                        {existingProfile.watchOut.map((w, i) => (
                                            <li key={i} className="text-sm text-platinum/80 flex items-start gap-2">
                                                <span className="text-amber-400 mt-0.5">!</span>
                                                <span>{w}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Level-based Advice */}
                        {existingProfile.levelAdvice && existingProfile.levelAdvice[expLevel] && (
                            <div className="bg-gradient-to-r from-gold/10 to-amber-500/5 border border-gold/20 rounded-sm p-5 mb-8">
                                <p className="text-xs text-gold uppercase tracking-wider mb-2 font-bold">💡 {levelNames[expLevel]}のあなたへのアドバイス</p>
                                <p className="text-sm text-platinum/90 leading-relaxed">{existingProfile.levelAdvice[expLevel]}</p>
                            </div>
                        )}

                        {/* Allocation */}
                        <div className="bg-ash/50 border border-white/5 rounded-sm p-6 mb-8">
                            <p className="text-xs text-dim uppercase tracking-wider mb-4">アロケーション例</p>
                            <div className="flex h-3 rounded-full overflow-hidden mb-4">
                                <div className="bg-emerald-500" style={{ width: `${existingProfile.allocation.safe}%` }} />
                                <div className="bg-amber-500" style={{ width: `${existingProfile.allocation.balanced}%` }} />
                                <div className="bg-rose-500" style={{ width: `${existingProfile.allocation.growth}%` }} />
                            </div>
                            <div className="flex justify-between text-xs text-dim">
                                <span>🛡️ 安全 {existingProfile.allocation.safe}%</span>
                                <span>⚖️ バランス {existingProfile.allocation.balanced}%</span>
                                <span>🚀 成長 {existingProfile.allocation.growth}%</span>
                            </div>
                        </div>

                        {/* Recommended Products */}
                        <div className="mb-10">
                            <p className="text-xs text-dim uppercase tracking-wider mb-3">参考プロダクト</p>
                            <div className="flex flex-wrap gap-2">
                                {existingProfile.recommended.map((r, i) => {
                                    const assetMapping = {
                                        'つみたてNISA': 1, 'NISA': 1,
                                        '国内株式': 2, '日本株': 2,
                                        '米国株式': 3, 'テック株': 3, 'グロース株': 3, 'イノベーション枠': 3, '個別株': 3,
                                        'FX': 4,
                                        '投資信託': 5, '全世界株式': 5, 'バランスファンド': 5, '守りの投信': 5, '新興国ファンド': 5, 'テーマ型投信': 5, 'セクターETF': 5, 'スマートベータ': 5,
                                        '仮想通貨': 6,
                                        'iDeCo': 7,
                                        '債券': 8, '国内債券': 8, '国債': 8, '高格付社債': 8, '債券ファンド': 8,
                                        'リート': 9,
                                        'コモディティ': 10, '金': 10, 'ゴールド': 10,
                                        '定期預金': 8, 'レバレッジ商品': 6
                                    };
                                    const aid = assetMapping[r] || (Object.keys(assetMapping).find(k => r.includes(k)) ? assetMapping[Object.keys(assetMapping).find(k => r.includes(k))] : null);

                                    return (
                                        <button key={i} onClick={() => {
                                            if (aid) {
                                                const asset = assetDetailData.find(a => a.id === aid);
                                                if (asset) setViewingAsset(asset);
                                            }
                                        }} className={`text-sm px-4 py-2 rounded-sm border transition-all ${aid ? 'bg-gold/10 border-gold/30 text-gold hover:bg-gold hover:text-black cursor-pointer' : 'bg-white/5 border-white/10 text-dim cursor-default'}`}>
                                            {r}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <button onClick={startRediagnose} className="btn-sharp px-8 py-4 rounded-sm border-dim text-dim w-full text-lg font-bold hover:border-gold hover:text-gold transition-all">
                            再診断
                        </button>
                    </motion.div>
                    <AnimatePresence>
                        {viewingAsset && <AssetDetailModal asset={viewingAsset} onClose={() => setViewingAsset(null)} />}
                    </AnimatePresence>
                </div>
            );
        }

        if (showResult && profile) {
            // Broker Database
            const brokerPool = {
                sbi: { name: 'SBI証券', feature: '幅広い商品ラインナップ。NISA・iDeCo・米国株に対応', url: 'https://www.sbisec.co.jp/' },
                rakuten: { name: '楽天証券', feature: '楽天ポイント投資。楽天経済圏との相性抜群', url: 'https://www.rakuten-sec.co.jp/' },
                monex: { name: 'マネックス証券', feature: '分析ツール充実。米国株に強い', url: 'https://www.monex.co.jp/' },
                matsui: { name: '松井証券', feature: '老舗の安心感。電話相談サポートが充実', url: 'https://www.matsui.co.jp/' },
                wealthnavi: { name: 'WealthNavi', feature: '全自動ロボアドバイザー。ほったらかし運用', url: 'https://www.wealthnavi.com/' },
                coincheck: { name: 'Coincheck', feature: 'シンプルなUIで使いやすい。初心者向けの仮想通貨取引所', url: 'https://coincheck.com/' },
                au: { name: 'auカブコム証券', feature: 'Pontaポイントが貯まる。auユーザーにメリットあり', url: 'https://kabu.com/' }
            };

            // Profile-based Recommendations
            const getBrokers = (pid) => {
                switch (pid) {
                    case 'guardian': return [brokerPool.wealthnavi, brokerPool.matsui, brokerPool.sbi];
                    case 'custodian': return [brokerPool.wealthnavi, brokerPool.sbi, brokerPool.rakuten];
                    case 'conservative': return [brokerPool.rakuten, brokerPool.sbi, brokerPool.au];
                    case 'architect': return [brokerPool.sbi, brokerPool.rakuten, brokerPool.monex];
                    case 'strategist': return [brokerPool.monex, brokerPool.sbi, brokerPool.rakuten];
                    case 'explorer': return [brokerPool.sbi, brokerPool.monex, brokerPool.rakuten];
                    case 'visionary': return [brokerPool.monex, brokerPool.sbi, brokerPool.coincheck];
                    case 'pioneer': return [brokerPool.coincheck, brokerPool.sbi, brokerPool.monex];
                    default: return [brokerPool.sbi, brokerPool.rakuten, brokerPool.monex];
                }
            };
            const recommendedBrokers = getBrokers(profile.id);

            return (
                <div className="min-h-screen bg-obsidian px-8 py-24 overflow-y-auto">
                    <motion.div className="max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <p className="text-dim text-sm tracking-[0.3em] mb-6">STEP 1: DIAGNOSIS COMPLETE</p>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-6xl">{profile.icon}</span>
                            <div>
                                <h2 className="text-4xl font-black">{profile.name}</h2>
                                <p className="text-2xl text-gold">{getUserTitle(profile, 0)}</p>
                            </div>
                        </div>
                        <p className="text-lg text-platinum/80 mb-4">{profile.description}</p>
                        <p className="text-dim text-xs leading-loose mb-8">自己分析と投資知識の学習をもとに、資産配分の考え方を学びます。<br />※ このシミュレーションは学習目的の参考値であり、実際の運用結果を保証するものではありません。</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {profile.traits.map((t, i) => <span key={i} className="text-xs bg-ash border border-white/10 px-3 py-1 rounded-full text-platinum/70">{t}</span>)}
                        </div>
                        <div className="bg-ash/50 border border-white/5 rounded-sm p-6 mb-8">
                            <p className="text-xs text-dim uppercase tracking-wider mb-4">アロケーション例</p>
                            <div className="flex h-3 rounded-full overflow-hidden mb-4">
                                <div className="bg-emerald-500" style={{ width: `${profile.allocation.safe}%` }} />
                                <div className="bg-amber-500" style={{ width: `${profile.allocation.balanced}%` }} />
                                <div className="bg-rose-500" style={{ width: `${profile.allocation.growth}%` }} />
                            </div>
                            <div className="flex justify-between text-xs text-dim">
                                <span>🛡️ 安全 {profile.allocation.safe}%</span>
                                <span>⚖️ バランス {profile.allocation.balanced}%</span>
                                <span>🚀 成長 {profile.allocation.growth}%</span>
                            </div>
                        </div>
                        <div className="mb-8">
                            <p className="text-xs text-dim uppercase tracking-wider mb-3">参考プロダクト</p>
                            <div className="flex flex-wrap gap-2">
                                {profile.recommended.map((r, i) => {
                                    const assetMapping = {
                                        'つみたてNISA': 1, 'NISA': 1,
                                        '国内株式': 2, '日本株': 2,
                                        '米国株式': 3, 'テック株': 3, 'グロース株': 3, 'イノベーション枠': 3, '個別株': 3,
                                        'FX': 4,
                                        '投資信託': 5, '全世界株式': 5, 'バランスファンド': 5, '守りの投信': 5, '新興国ファンド': 5, 'テーマ型投信': 5, 'セクターETF': 5, 'スマートベータ': 5,
                                        '仮想通貨': 6,
                                        'iDeCo': 7,
                                        '債券': 8, '国内債券': 8, '国債': 8, '高格付社債': 8, '債券ファンド': 8,
                                        'リート': 9,
                                        'コモディティ': 10,
                                        '定期預金': 8, 'レバレッジ商品': 6
                                    };
                                    const aid = assetMapping[r] || (Object.keys(assetMapping).find(k => r.includes(k)) ? assetMapping[Object.keys(assetMapping).find(k => r.includes(k))] : null);

                                    return (
                                        <button key={i} onClick={() => {
                                            if (aid) {
                                                onSelectAsset(aid);
                                                onNavigate('gallery');
                                            }
                                        }} className={`text-sm px-4 py-2 rounded-sm border transition-all ${aid ? 'bg-gold/10 border-gold/30 text-gold hover:bg-gold hover:text-black cursor-pointer' : 'bg-white/5 border-white/10 text-dim cursor-default'}`}>
                                            {r}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Recommended Brokers Section */}
                        <div className="bg-gradient-to-br from-gold/10 to-amber-500/5 border border-gold/30 rounded-sm p-6 mb-8">
                            <p className="text-xs text-gold uppercase tracking-wider mb-4 font-bold">🏦 まずはここで口座開設</p>
                            <p className="text-sm text-platinum/70 mb-4">投資を始めるには証券口座が必要です。ご自身で選んで開設しましょう。</p>
                            <div className="space-y-3">
                                {recommendedBrokers.map((broker, i) => (
                                    <a key={i} href={broker.url} target="_blank" rel="noopener noreferrer"
                                        className="block bg-ash/50 border border-white/10 rounded-sm p-4 hover:border-gold/50 transition-all group">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-lg font-bold text-platinum group-hover:text-gold transition-colors">{broker.name}</span>
                                            {broker.recommended && <span className="text-[10px] bg-gold text-black px-2 py-0.5 rounded-sm font-bold">参考</span>}
                                        </div>
                                        <p className="text-sm text-platinum/60">{broker.feature}</p>
                                    </a>
                                ))}
                            </div>
                            <p className="text-[10px] text-dim mt-3">※ 外部サイトへ遷移します。口座開設はすべて無料です。</p>
                            <p className="text-[10px] text-dim">※ 本情報は投資勧誘を目的としたものではありません。最終的な投資判断はご自身でお願いします。</p>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={startRediagnose} className="btn-sharp px-6 py-4 rounded-sm border-dim text-dim flex-1 font-bold hover:border-gold hover:text-gold transition-all">
                                やり直す
                            </button>
                            <button onClick={() => onComplete(profile)} className="btn-sharp px-6 py-4 rounded-sm border-gold text-gold flex-[2] text-lg font-bold hover:bg-gold hover:text-black transition-all">
                                ポートフォリオに反映する
                            </button>
                        </div>
                    </motion.div>
                    <AnimatePresence>
                        {viewingAsset && <AssetDetailModal asset={viewingAsset} onClose={() => setViewingAsset(null)} />}
                    </AnimatePresence>
                </div>
            );
        }

        // Intro View
        if (showIntro && !existingProfile) {
            return (
                <div className="min-h-screen bg-obsidian flex flex-col justify-center items-center px-8 relative overflow-hidden">
                    {/* Background ambience */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] opacity-30" />
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl w-full text-center relative z-10">
                        <p className="text-dim text-xs tracking-[0.4em] mb-6 text-gold">START YOUR JOURNEY</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-platinum mb-6">
                            あなたの<span className="text-gold-gradient">投資タイプ</span>を診断
                        </h2>
                        <p className="text-lg text-platinum/70 leading-relaxed mb-12">
                            簡単な質問に答えて、<br />あなたに最適な投資戦略を見つけましょう。
                        </p>

                        <div className="space-y-4 max-w-sm mx-auto">
                            <button onClick={() => setShowIntro(false)} className="btn-sharp w-full py-4 bg-gold text-black font-bold text-lg rounded-sm hover:bg-amber-400 transition-colors custom-shadow">
                                診断を始める
                            </button>
                            <p className="text-[10px] text-dim text-center">
                                ※ 診断結果は自己分析の参考としてご利用ください
                            </p>

                            {isOnboarding && onSkip && (
                                <button onClick={onSkip} className="text-dim text-xs hover:text-white transition-colors">
                                    ホームへ
                                </button>
                            )}
                        </div>
                    </motion.div>
                </div>
            );
        }

        const handleBack = () => {
            if (currentQ > 0) {
                const prevQ = questions[currentQ - 1];
                if (prevQ.type === 'slider') {
                    // Restore previous answer if it exists, otherwise use default
                    const prevAnswer = answers[prevQ.id];
                    // Note: handleAnswer might have normalized the value, 
                    // but for sliders we usually want the raw value if possible.
                    // However, current implementation only stores normalized risk scores for some sliders.
                    // For simplicity, we use the default or the last known raw value if we were to track it.
                    // Since we don't track raw value in state yet, we use defaults for now.
                    setSliderValue(prevQ.id === 0 ? 30 : 50);
                }
                setCurrentQ(currentQ - 1);
            }
        };

        const q = questions[currentQ];
        const p = ((currentQ + 1) / questions.length) * 100;

        return (
            <div className="min-h-screen bg-obsidian flex flex-col justify-center px-8 py-24">
                <div className="max-w-2xl mx-auto w-full">
                    <div className="mb-12">
                        <div className="flex justify-between items-center text-dim text-sm mb-2">
                            <div className="flex items-center gap-4">
                                <span>STEP 1: CALIBRATION</span>
                                {currentQ > 0 && (
                                    <button onClick={handleBack} className="text-platinum/50 hover:text-gold transition-colors flex items-center gap-1">
                                        <span>←</span> 戻る
                                    </button>
                                )}
                            </div>
                            <span>{currentQ + 1}/{questions.length}</span>
                        </div>
                        <div className="h-px bg-stone"><motion.div className="h-full bg-gold" animate={{ width: `${p}%` }} /></div>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div key={q.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                            <h2 className="text-3xl font-bold mb-12">{q.question}</h2>
                            {q.type === 'choice' ?
                                <div className="flex flex-col gap-3">{q.options.map((o, i) => <button key={i} onClick={() => handleAnswer(o.value)} className="btn-sharp text-left px-6 py-5 rounded-sm text-lg hover:bg-ash/50">{o.label}</button>)}</div>
                                : <div className="space-y-8">
                                    <p className="text-5xl font-bold text-gold text-center">
                                        {(q.id === 4 ? mapFinanceValue(sliderValue) : sliderValue).toLocaleString()}
                                        <span className="text-lg text-dim ml-2">{q.unit}</span>
                                    </p>
                                    <input type="range" min={q.min} max={q.max} step={q.step} value={sliderValue} onChange={e => setSliderValue(Number(e.target.value))} className="w-full h-2 bg-stone rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-gold" />
                                    <button onClick={() => handleAnswer(sliderValue)} className="btn-sharp w-full py-5 border-gold text-gold">決定</button>
                                </div>
                            }
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        );
    };



    // ============================================
    // PERSONALIZED BRIEFING - LUXURY COLLECTION
    // Cards now loaded from external cards.js file
    // Total: 230 cards (200 standard + 30 Pro chart patterns)
    // ============================================
    // briefingCards is loaded from cards.js via window.briefingCards





    window.PortfolioCalibration = PortfolioCalibration;
}
