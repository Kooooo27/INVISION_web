// ============================================
// ASSET DETAIL DATA
// ============================================
export const assetDetailData = [
    {
        id: 1, name: 'NISA', nameJp: 'つみたてNISA', tagline: '非課税で、未来を積み上げる', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80', riskLevel: 2,
        knowledge: ['年間120万円まで非課税', '最長20年の運用期間', '長期・分散・積立の王道'],
        description: '国が用意した「投資の税金がかからない」お得な制度。銀行預金の延長として、初心者が最初に始めるべき投資の入り口です。',
        pros: ['運用益が非課税（通常約20%の税金がゼロ）', '100円から始められる証券会社も', '途中で売却・引き出しも自由'],
        cons: ['年間投資上限が120万円', '元本保証はない', '非課税枠の再利用は翌年以降'],
        steps: ['証券口座を開設（楽天・SBI等）', 'NISA口座を申し込む', '投資信託を選ぶ（全世界株式が人気）', '毎月の積立金額を設定'],
        glossary: [{ word: '非課税', def: '利益に税金がかからないこと' }, { word: '投資信託', def: '専門家が運用する金融商品の詰め合わせ' }],
        brokers: [
            { name: 'SBI証券', feature: '業界最安クラスの手数料。クレカ積立でポイント還元', url: 'https://www.sbisec.co.jp/', recommended: true },
            { name: '楽天証券', feature: '楽天ポイントで投資可能。楽天経済圏との相性◎', url: 'https://www.rakuten-sec.co.jp/' },
            { name: 'マネックス証券', feature: 'dポイント還元率が高い。銘柄分析ツール充実', url: 'https://www.monex.co.jp/' }
        ]
    },
    {
        id: 2, name: 'JP STOCKS', nameJp: '国内株式', tagline: '日本企業と共に成長する', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', riskLevel: 3,
        knowledge: ['配当金で定期収入', '株主優待という特典', '100株単位が基本'],
        description: 'トヨタ、ソニー、任天堂など、身近な日本企業のオーナーになれます。配当金や株主優待も魅力的です。',
        pros: ['株主優待で商品券や割引が貰える', '配当金で年1〜2回の収入', '企業の成長と共に資産増加'],
        cons: ['最低100株単位で数万〜数十万円必要', '企業業績に左右される', '為替リスクがない分、成長性は限定的'],
        steps: ['証券口座を開設', '気になる企業を研究', '100株単位で購入', '長期保有で配当と優待を楽しむ'],
        glossary: [{ word: '配当金', def: '企業が利益の一部を株主に分配するお金' }, { word: '株主優待', def: '株主への感謝として企業が贈る特典' }],
        brokers: [
            { name: 'SBI証券', feature: '国内株取引手数料0円（条件あり）。IPO取扱いが豊富', url: 'https://www.sbisec.co.jp/' },
            { name: '楽天証券', feature: '楽天ポイント投資対応。いちにち定額で手数料無料枠', url: 'https://www.rakuten-sec.co.jp/' },
            { name: '松井証券', feature: '50万円まで手数料無料。株主優待検索ツール充実', url: 'https://www.matsui.co.jp/' }
        ]
    },
    {
        id: 3, name: 'US STOCKS', nameJp: '米国株式', tagline: '世界最大市場へアクセス', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80', riskLevel: 3,
        knowledge: ['GAFAM等の巨大企業', '1株から購入可能', '為替リスクに注意'],
        description: 'Apple、Google、Amazonなど世界を動かすテック企業に投資。1株から買える手軽さと、高い成長性が魅力。',
        pros: ['1株から購入可能（数千円から）', '世界最大の市場で流動性が高い', '過去30年で年平均約10%のリターン'],
        cons: ['為替リスク（円高で損失の可能性）', '米国の経済・政治動向に左右される', '配当に米国での源泉徴収あり'],
        steps: ['米国株対応の証券口座を開設', '為替手数料を確認', '気になる銘柄をドル建てで購入', '確定申告で外国税額控除を検討'],
        glossary: [{ word: '為替リスク', def: '円とドルの交換レート変動による損益' }, { word: 'S&P500', def: '米国主要500社の株価指数' }],
        brokers: [
            { name: 'SBI証券', feature: '為替手数料最安。米国株4000銘柄以上取扱い', url: 'https://www.sbisec.co.jp/', recommended: true },
            { name: 'マネックス証券', feature: '米国株取引手数料が安い。銘柄スカウター充実', url: 'https://www.monex.co.jp/' },
            { name: '楽天証券', feature: '円貨決済対応。楽天ポイントで購入可能', url: 'https://www.rakuten-sec.co.jp/' }
        ]
    },
    {
        id: 4, name: 'FOREX', nameJp: 'FX取引', tagline: '通貨の波を読む', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', riskLevel: 5,
        knowledge: ['24時間取引可能', 'レバレッジで効率化', 'リスク管理が必須'],
        description: '通貨を売買して為替差益を狙う取引。少額で大きな取引ができますが、その分リスクも高い上級者向け。',
        pros: ['24時間取引可能', 'レバレッジで資金効率が高い', '下落相場でも利益を狙える'],
        cons: ['レバレッジで損失も拡大', '相場予測が非常に難しい', '初心者は資金を失いやすい'],
        steps: ['FX専用口座を開設', 'デモ取引で練習', '最小ロットで実践', 'ロスカットラインを必ず設定'],
        glossary: [{ word: 'レバレッジ', def: '手持ち資金の何倍もの取引ができる仕組み' }, { word: 'ロスカット', def: '損失が一定以上になると自動決済される仕組み' }],
        brokers: [
            { name: 'DMM FX', feature: 'スプレッド業界最狭水準。スマホアプリ使いやすい', url: 'https://fx.dmm.com/', recommended: true },
            { name: 'GMOクリック証券', feature: '取引高世界一。高機能チャートツール', url: 'https://www.click-sec.com/' },
            { name: 'SBI FXトレード', feature: '1通貨から取引可能。少額練習に最適', url: 'https://www.sbifxt.co.jp/' }
        ]
    },
    {
        id: 5, name: 'FUNDS', nameJp: '投資信託', tagline: 'プロに運用を任せる', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', riskLevel: 2,
        knowledge: ['100円から分散投資', '手数料の確認を', 'インデックス型が人気'],
        description: '専門家があなたの代わりに運用する「お金のパッケージ商品」。1本で数百〜数千銘柄に分散投資できます。',
        pros: ['100円から投資可能', '分散投資が自動でできる', '運用はプロにお任せ'],
        cons: ['信託報酬（手数料）が毎日かかる', '自分で銘柄を選べない', 'アクティブ型は手数料が高め'],
        steps: ['証券口座を開設', '低コストのインデックスファンドを選ぶ', 'eMAXIS Slimシリーズなどが人気', '毎月積立設定をする'],
        glossary: [{ word: '信託報酬', def: '投資信託の運用管理にかかる年間手数料' }, { word: 'インデックス', def: '日経平均やS&P500などの指数に連動する運用' }],
        brokers: [
            { name: 'SBI証券', feature: '投信本数が豊富。クレカ積立でポイント還元', url: 'https://www.sbisec.co.jp/' },
            { name: '楽天証券', feature: '楽天カード積立で1%還元。ポイント投資可', url: 'https://www.rakuten-sec.co.jp/' },
            { name: 'auカブコム証券', feature: 'Pontaポイントで投資可能。auユーザー優遇', url: 'https://kabu.com/' }
        ]
    },
    {
        id: 6, name: 'CRYPTO', nameJp: '仮想通貨', tagline: 'デジタル時代の新資産', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', riskLevel: 5,
        knowledge: ['高ボラティリティ', '24時間365日取引', '総資産の5%以下が目安'],
        description: 'ビットコインやイーサリアムなど、ブロックチェーン技術を基盤としたデジタル資産。価格変動が激しいハイリスク投資。',
        pros: ['24時間365日取引可能', '少額から購入可能', '高いリターンの可能性'],
        cons: ['価格変動が非常に激しい', '規制リスクがある', 'ハッキングや詐欺のリスク'],
        steps: ['暗号資産取引所で口座開設', '本人確認を完了', '日本円を入金', 'BTC/ETHなど主要銘柄から少額購入'],
        glossary: [{ word: 'ボラティリティ', def: '価格の変動幅の大きさ' }, { word: 'ブロックチェーン', def: '取引履歴を分散管理する技術' }],
        brokers: [
            { name: 'bitFlyer', feature: '国内大手の仮想通貨取引所。セキュリティ対策に注力', url: 'https://bitflyer.com/' },
            { name: 'Coincheck', feature: 'アプリがシンプル。初心者向けUI', url: 'https://coincheck.com/' },
            { name: 'GMOコイン', feature: '手数料が安い。積立サービス充実', url: 'https://coin.z.com/' }
        ]
    },
    {
        id: 7, name: 'iDeCo', nameJp: '個人型確定拠出年金', tagline: '税制優遇で老後に備える', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80', riskLevel: 2,
        knowledge: ['掛金が全額所得控除', '運用益も非課税', '60歳まで引き出し不可'],
        description: '老後資金専用の私的年金制度。税制優遇が非常に手厚く、節税しながら資産形成できます。ただし60歳まで引き出せません。',
        pros: ['掛金が全額所得控除', '運用益が非課税', '受取時も税制優遇'],
        cons: ['60歳まで原則引き出し不可', '加入者によって掛金上限が異なる', '口座管理手数料がかかる'],
        steps: ['加入資格と掛金上限を確認', '証券会社でiDeCo口座を開設', '運用商品を選択', '毎月の掛金を設定'],
        glossary: [{ word: '所得控除', def: '課税対象となる所得から差し引ける金額' }, { word: '確定拠出年金', def: '掛金を自分で運用する年金制度' }],
        brokers: [
            { name: 'SBI証券', feature: '運営管理手数料が無料。商品ラインナップ豊富', url: 'https://www.sbisec.co.jp/', recommended: true },
            { name: '楽天証券', feature: '楽天証券iDeCo定期預金あり。シンプル設計', url: 'https://www.rakuten-sec.co.jp/' },
            { name: 'マネックス証券', feature: 'eMAXIS Slim全世界取扱い。低コスト商品充実', url: 'https://www.monex.co.jp/' }
        ]
    },
    {
        id: 8, name: 'BONDS', nameJp: '債券', tagline: '安定収益の土台を作る', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', riskLevel: 1,
        knowledge: ['国債は最も安全', '定期的な利息収入', '金利と価格は逆相関'],
        description: '国や企業にお金を貸し、利息を受け取る投資。株式より低リスク・低リターンで、ポートフォリオの安定剤として機能します。',
        pros: ['株式より価格変動が小さい', '定期的な利息収入', '国債は元本保証に近い安全性'],
        cons: ['株式より期待リターンが低い', '金利上昇で債券価格は下落', 'インフレに弱い'],
        steps: ['証券口座を開設', '個人向け国債か債券ファンドを選択', '変動10年国債が初心者向け', '購入後は満期まで保有'],
        glossary: [{ word: '利回り', def: '投資額に対する年間収益の割合' }, { word: '償還', def: '債券の満期時に元本が返済されること' }],
        brokers: [
            { name: 'SBI証券', feature: '債券ラインナップ充実。社債も購入可能', url: 'https://www.sbisec.co.jp/', recommended: true },
            { name: '楽天証券', feature: '個人向け国債購入でポイント還元', url: 'https://www.rakuten-sec.co.jp/' },
            { name: '財務省', feature: '個人向け国債の直接購入。最も安心', url: 'https://www.mof.go.jp/jgbs/individual/' }
        ]
    }
];
