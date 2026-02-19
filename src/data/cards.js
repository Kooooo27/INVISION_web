// INVISION Learning Cards - Production Edition
// Total: 522 cards across 10 categories + 112 bundle-exclusive cards

export const briefingCards = [
    // ============================================
    // 基礎 (Foundation) - 65 cards
    // ============================================
    { id: 1, category: '基礎', level: 1, title: '複利の魔法', icon: '✨', content: '利息が利息を生む仕組み。100万円を年利5%で20年運用すると約265万円に。時間こそが最大の資産です。', terms: [{ word: '複利', def: '元本だけでなく、過去の利息にも利息がつく仕組み' }] },
    { id: 2, category: '基礎', level: 1, title: 'インフレとは', icon: '📈', content: '物価が上がり、お金の価値が下がること。年2%のインフレでは、20年後に100万円の価値は約67万円相当に。', terms: [{ word: 'インフレ', def: '物価が継続的に上昇し、貨幣価値が下落すること' }] },
    { id: 3, category: '基礎', level: 1, title: '分散投資の原則', icon: '🥚', content: '「卵を一つのカゴに盛るな」。複数の資産に分けることで、リスクを軽減しながらリターンを狙えます。', terms: [{ word: '分散投資', def: '異なる資産クラスや地域に投資を分散させること' }] },
    { id: 4, category: '基礎', level: 1, title: 'NISAとは', icon: '🏦', content: '投資の利益にかかる約20%の税金が非課税になる制度。2024年から新NISAとして恒久化され、年間最大360万円まで投資可能。投資初心者にとって最初に活用すべき制度です。', terms: [{ word: 'NISA', def: '少額投資非課税制度。利益に税金がかからない' }] },
    { id: 5, category: '基礎', level: 1, title: '単利と複利の違い', icon: '🔢', content: '単利は元本のみに利息がつく。複利は利息にも利息がつく。長期では複利の威力が圧倒的です。', terms: [{ word: '単利', def: '元本にのみ利息がつく計算方法' }] },
    { id: 6, category: '基礎', level: 1, title: '元本とは', icon: '💰', content: '投資に使う最初のお金のこと。元本100万円で10%の利益なら、資産は110万円になります。', terms: [{ word: '元本', def: '投資や預金の最初の金額' }] },
    { id: 7, category: '基礎', level: 1, title: 'リターンとリスク', icon: '⚖️', content: '投資の世界では「ハイリスク・ハイリターン」が基本。リスクなしで高リターンはありえません。', terms: [{ word: 'リターン', def: '投資から得られる収益率' }] },
    { id: 8, category: '基礎', level: 2, title: 'iDeCoの基本', icon: '👴', content: '老後資金専用の私的年金制度。掛金が全額所得控除、運用益も非課税、受取時も税制優遇があります。', terms: [{ word: 'iDeCo', def: '個人型確定拠出年金。60歳まで引き出し不可' }] },
    { id: 9, category: '基礎', level: 2, title: '流動性とは', icon: '💧', content: '資産をすぐに現金化できるかどうか。株式は高い、不動産は低い流動性を持ちます。', terms: [{ word: '流動性', def: '資産を現金に換えやすさの度合い' }] },
    { id: 10, category: '基礎', level: 2, title: '名目リターンと実質リターン', icon: '🎭', content: '名目リターン5%でもインフレ2%なら実質リターンは3%。インフレを考慮した計算が重要です。', terms: [{ word: '実質リターン', def: 'インフレを差し引いた実際の購買力増加' }] },
    { id: 11, category: '基礎', level: 2, title: '72の法則', icon: '🔮', content: '72÷金利＝資産が2倍になる年数。例：年利6%なら72÷6＝12年で2倍になります。', terms: [{ word: '72の法則', def: '資産倍増期間を簡易計算する法則' }] },
    { id: 12, category: '基礎', level: 2, title: 'ボラティリティ', icon: '📉', content: '価格の変動幅のこと。ボラティリティが高い＝価格が激しく動く＝リスクが高い。', terms: [{ word: 'ボラティリティ', def: '価格変動の大きさを示す指標' }] },
    { id: 13, category: '基礎', level: 2, title: '投資と投機の違い', icon: '🎰', content: '投資は長期的な価値創造を期待。投機は短期的な価格変動を狙う。初心者は投資から始めよう。', terms: [{ word: '投機', def: '短期的な価格変動で利益を狙う行為' }] },
    { id: 14, category: '基礎', level: 2, title: 'キャピタルゲインとインカムゲイン', icon: '💎', content: 'キャピタルゲインは売却益、インカムゲインは配当や利息。両方を狙うのがバランス良い投資。', terms: [{ word: 'キャピタルゲイン', def: '資産売却による値上がり益' }] },
    { id: 15, category: '基礎', level: 3, title: '信用取引とは', icon: '🔓', content: '証券会社からお金を借りて投資する方法。利益も損失も拡大するため上級者向けです。', terms: [{ word: '信用取引', def: '証券会社から資金を借りて行う取引' }] },
    { id: 16, category: '基礎', level: 3, title: '空売りの仕組み', icon: '📉', content: '株を借りて売り、後で安く買い戻して返す取引。下落相場で利益を狙えますが、リスクは無限大。', terms: [{ word: '空売り', def: '株を借りて売り、値下がり後に買い戻す取引' }] },
    { id: 17, category: '基礎', level: 3, title: 'デリバティブとは', icon: '🎲', content: '原資産から派生した金融商品。先物、オプション、スワップなど。ヘッジや投機に使われます。', terms: [{ word: 'デリバティブ', def: '株式や債券などから派生した金融商品' }] },
    { id: 18, category: '基礎', level: 1, title: '証券口座の種類', icon: '📋', content: '特定口座（源泉徴収あり）なら確定申告不要。NISA口座は非課税。目的に応じて選ぼう。', terms: [{ word: '特定口座', def: '証券会社が税金計算を代行する口座' }] },
    { id: 19, category: '基礎', level: 1, title: '資産クラスとは', icon: '🗂️', content: '株式、債券、不動産、商品など投資対象のカテゴリ。異なるクラスを組み合わせて分散します。', terms: [{ word: '資産クラス', def: '投資対象の種類による分類' }] },
    { id: 20, category: '基礎', level: 2, title: 'ベンチマークとは', icon: '📏', content: '投資成果を比較する基準。日経平均やS&P500など。自分の運用がベンチマークを上回れば成功。', terms: [{ word: 'ベンチマーク', def: '運用成果を比較する基準となる指数' }] },
    { id: 21, category: '基礎', level: 2, title: 'アクティブとパッシブ', icon: '🏃', content: 'アクティブは市場平均を上回ることを目指す。パッシブは市場平均と同じ成果を目指す。手数料差が重要。', terms: [{ word: 'パッシブ運用', def: 'インデックスに連動する運用方法' }] },
    { id: 22, category: '基礎', level: 3, title: 'α（アルファ）とβ（ベータ）', icon: '🔤', content: 'αは運用者の腕による超過収益。βは市場全体との連動性。αを継続的に出せるファンドは稀。', terms: [{ word: 'アルファ', def: '市場平均を上回る超過リターン' }] },
    { id: 23, category: '基礎', level: 1, title: 'なぜ投資が必要か', icon: '🌱', content: '銀行預金の金利は0.001%。インフレ2%なら実質マイナス。お金を守るには投資が必須の時代です。', terms: [] },
    { id: 24, category: '基礎', level: 2, title: 'リスク許容度', icon: '🎚️', content: 'どれだけの損失に耐えられるか。年齢、収入、資産、性格によって異なります。自分を知ることが第一歩。', terms: [{ word: 'リスク許容度', def: '受け入れられる損失の上限度合い' }] },
    { id: 25, category: '基礎', level: 3, title: 'シャープレシオ', icon: '📐', content: 'リスクあたりのリターンを測る指標。高いほど効率的な運用。1以上なら優秀とされます。', terms: [{ word: 'シャープレシオ', def: 'リスク調整後リターンの効率性指標' }] },
    // New Foundation cards (26-60)
    { id: 121, category: '基礎', level: 1, title: '約定とは', icon: '✅', content: '売買が成立すること。注文を出しても約定しなければ取引は成立していません。', terms: [{ word: '約定', def: '売買注文が成立すること' }] },
    { id: 122, category: '基礎', level: 1, title: '指値と成行', icon: '🎯', content: '指値は希望価格を指定、成行は現在価格で即約定。初心者は成行から始めると安心。', terms: [{ word: '指値注文', def: '希望する価格を指定する注文方法' }] },
    { id: 123, category: '基礎', level: 1, title: '板情報の見方', icon: '📊', content: '買い注文と売り注文の価格と数量が並ぶ。厚い板は流動性が高く、安定した取引が可能。', terms: [{ word: '板', def: '売買注文の価格と数量の一覧' }] },
    { id: 124, category: '基礎', level: 1, title: 'スプレッドとは', icon: '↔️', content: '買値と売値の差。スプレッドが狭いほど取引コストは低い。流動性の高い銘柄は狭い傾向。', terms: [{ word: 'スプレッド', def: '売買価格の差額' }] },
    { id: 125, category: '基礎', level: 1, title: '受渡日とは', icon: '📅', content: '株の売買後、実際に株と現金が交換される日。国内株は約定日+2営業日（T+2）。', terms: [{ word: '受渡日', def: '売買代金と株式が実際に交換される日' }] },
    { id: 126, category: '基礎', level: 1, title: '配当金とは', icon: '💵', content: '企業が利益の一部を株主に還元するお金。年1〜2回支払われることが多い。', terms: [{ word: '配当金', def: '企業から株主への利益分配' }] },
    { id: 127, category: '基礎', level: 1, title: '株式分割とは', icon: '✂️', content: '1株を複数に分割すること。価格は下がるが持ち株数は増え、総価値は変わらない。', terms: [{ word: '株式分割', def: '1株を複数株に分けること' }] },
    { id: 128, category: '基礎', level: 2, title: '権利確定日', icon: '🗓️', content: '配当や優待を受ける権利が確定する日。この日に株を保有していると権利を得られる。', terms: [{ word: '権利確定日', def: '株主としての権利が確定する日' }] },
    { id: 129, category: '基礎', level: 2, title: '権利落ち日', icon: '📉', content: '権利確定日の翌営業日。この日以降に買っても直近の配当は受けられない。株価は下がりやすい。', terms: [{ word: '権利落ち日', def: '権利確定日の翌営業日' }] },
    { id: 130, category: '基礎', level: 2, title: '償還とは', icon: '🔙', content: '債券や投資信託が満期を迎え、元本が返還されること。償還日に投資は終了する。', terms: [{ word: '償還', def: '元本が返還されて投資が終了すること' }] },
    { id: 131, category: '基礎', level: 2, title: '基準価額とは', icon: '💹', content: '投資信託の1口あたりの価値。毎日計算され公表される。株価に相当するもの。', terms: [{ word: '基準価額', def: '投資信託1口あたりの時価' }] },
    { id: 132, category: '基礎', level: 2, title: '純資産総額', icon: '🏛️', content: '投資信託が保有する資産の総額。大きいほど安定運用しやすく、繰上償還リスクも低い。', terms: [{ word: '純資産総額', def: 'ファンドが保有する総資産額' }] },
    { id: 133, category: '基礎', level: 2, title: '分配金と再投資', icon: '♻️', content: '投信の分配金は受け取るか再投資か選べる。複利効果を活かすなら再投資型がおすすめ。', terms: [{ word: '分配金', def: '投資信託から支払われる収益分配' }] },
    { id: 134, category: '基礎', level: 2, title: 'ノーロードファンド', icon: '🆓', content: '購入時手数料が無料の投資信託。ネット証券ではノーロードが主流になっています。', terms: [{ word: 'ノーロード', def: '購入手数料が無料であること' }] },
    { id: 135, category: '基礎', level: 2, title: '信託報酬の重要性', icon: '💸', content: '年間で資産から差し引かれる運用管理費。0.1%と1%では20年で数十万円の差に。', terms: [{ word: '信託報酬', def: '投資信託の年間運用管理費用' }] },
    { id: 136, category: '基礎', level: 3, title: 'レバレッジとは', icon: '⚡', content: '少ない資金で大きな取引をすること。2倍レバレッジなら利益も損失も2倍になる。', terms: [{ word: 'レバレッジ', def: 'てこの原理で投資効果を増幅させること' }] },
    { id: 137, category: '基礎', level: 3, title: 'マージンコール', icon: '🚨', content: '信用取引で損失が膨らむと追加証拠金を求められる。払えないと強制決済される。', terms: [{ word: 'マージンコール', def: '追加証拠金の請求' }] },
    { id: 138, category: '基礎', level: 3, title: 'ロスカット', icon: '✂️', content: '損失を限定するための強制決済。信用取引やFXで一定の損失に達すると自動発動。', terms: [{ word: 'ロスカット', def: '損失拡大を防ぐ強制決済' }] },
    { id: 139, category: '基礎', level: 1, title: '円高と円安', icon: '💴', content: '1ドル100円→90円は円高、100円→110円は円安。輸出入企業の業績に影響。', terms: [{ word: '円高', def: '円の価値が上がり外貨が安くなること' }] },
    { id: 140, category: '基礎', level: 1, title: '為替と投資の関係', icon: '🌐', content: '外国資産は為替の影響を受ける。円安時は外貨資産の円換算額が増える。', terms: [] },

    // ============================================
    // 市場 (Market) - 71 cards
    // ============================================
    { id: 26, category: '市場', level: 1, title: '株式市場の仕組み', icon: '📊', content: '企業が資金調達のために株式を発行し、投資家が売買する場所。東証プライム市場が日本の中心です。', terms: [{ word: '株式', def: '企業の所有権の一部を表す証券' }] },
    { id: 27, category: '市場', level: 1, title: '債券とは何か', icon: '📜', content: '国や企業にお金を貸す証書。株式より低リスク・低リターン。金利が上がると債券価格は下がります。', terms: [{ word: '債券', def: '発行体が元本と利息の支払いを約束する有価証券' }] },
    { id: 28, category: '市場', level: 2, title: 'ETFの魅力', icon: '📦', content: '株のように取引できる投資信託。1本で数百〜数千銘柄に分散投資でき、手数料も低い傾向にあります。', terms: [{ word: 'ETF', def: '上場投資信託。取引所で売買可能な投資信託' }] },
    { id: 29, category: '市場', level: 3, title: '為替リスクを知る', icon: '💱', content: '外国資産は為替変動の影響を受けます。円安なら外貨資産の円評価額は上昇、円高なら下落します。', terms: [{ word: '為替リスク', def: '通貨の価値変動により損益が発生するリスク' }] },
    { id: 30, category: '市場', level: 3, title: '新興国投資', icon: '🌍', content: '高成長が期待できるが、政治・経済リスクも高い。ポートフォリオの一部として検討しましょう。', terms: [{ word: '新興国', def: '経済成長が著しい発展途上の国々' }] },
    { id: 31, category: '市場', level: 1, title: '日経平均とTOPIX', icon: '🗾', content: '日経平均は225銘柄の単純平均、TOPIXは時価総額加重平均。TOPIXの方が市場全体を反映。', terms: [{ word: 'TOPIX', def: '東証株価指数。市場全体の動きを示す' }] },
    { id: 32, category: '市場', level: 1, title: 'S&P500とは', icon: '🇺🇸', content: '米国の主要500社で構成される指数。過去100年で年平均約10%のリターン。世界で最も人気の指数。', terms: [{ word: 'S&P500', def: '米国大型株500銘柄の株価指数' }] },
    { id: 33, category: '市場', level: 2, title: 'NASDAQ100', icon: '💻', content: 'テクノロジー企業中心の指数。Apple、Microsoft、Googleなど。成長力は高いが変動も大きい。', terms: [{ word: 'NASDAQ', def: '米国のハイテク株中心の証券取引所' }] },
    { id: 34, category: '市場', level: 2, title: '全世界株式とは', icon: '🌐', content: '先進国と新興国を含む全世界の株式に投資。「オルカン」の愛称で人気。究極の分散投資。', terms: [{ word: 'オルカン', def: 'eMAXIS Slim全世界株式の愛称' }] },
    { id: 35, category: '市場', level: 2, title: 'REITとは', icon: '🏢', content: '不動産投資信託。少額で不動産に投資でき、高い配当利回りが魅力。金利上昇局面では弱い。', terms: [{ word: 'REIT', def: '不動産投資信託。不動産のETF版' }] },
    { id: 36, category: '市場', level: 3, title: '商品（コモディティ）', icon: '🛢️', content: '金、原油、穀物などの現物資産。インフレヘッジになるが、それ自体は利益を生まない。', terms: [{ word: 'コモディティ', def: '金や原油などの商品資産' }] },
    { id: 37, category: '市場', level: 3, title: '金（ゴールド）投資', icon: '🥇', content: '「有事の金」。株式と逆相関の傾向があり、ポートフォリオの5-10%程度を持つ人も多い。', terms: [{ word: '逆相関', def: '一方が上がると他方が下がる関係' }] },
    { id: 38, category: '市場', level: 2, title: '配当利回り', icon: '💵', content: '株価に対する年間配当金の割合。日本株は平均2%程度。高配当株は安定収入を求める人向け。', terms: [{ word: '配当利回り', def: '株価に対する配当金の割合' }] },
    { id: 39, category: '市場', level: 2, title: 'PERとPBR', icon: '📊', content: 'PERは株価÷利益、PBRは株価÷純資産。低いほど割安。ただし低い理由がある場合も。', terms: [{ word: 'PER', def: '株価収益率。割安度を測る指標' }] },
    { id: 40, category: '市場', level: 3, title: '時価総額', icon: '🏆', content: '株価×発行株式数。企業の規模を示す。大型株は安定、小型株は成長余地あり。', terms: [{ word: '時価総額', def: '企業の市場価値の総額' }] },
    { id: 41, category: '市場', level: 1, title: '取引時間を知る', icon: '⏰', content: '東証は9:00-15:30（2024年11月より昼休み廃止・連続取引）。米国市場は日本時間23:30-6:00（夏時間22:30-5:00）。', terms: [] },
    { id: 42, category: '市場', level: 2, title: '決算発表の読み方', icon: '📰', content: '売上、営業利益、純利益をチェック。前年比と予想比で評価。サプライズがあると株価が動く。', terms: [{ word: '決算', def: '企業の一定期間の業績まとめ' }] },
    { id: 43, category: '市場', level: 3, title: 'IPOとは', icon: '🎉', content: '新規株式公開。未上場企業が初めて株式市場に上場すること。初値が公募価格を上回ることが多い。', terms: [{ word: 'IPO', def: 'Initial Public Offering。新規上場' }] },
    { id: 44, category: '市場', level: 3, title: '相関係数とは', icon: '🔗', content: '-1から+1の値で資産間の関連性を示す。相関が低い資産を組み合わせると分散効果が高まる。', terms: [{ word: '相関係数', def: '2つの資産の値動きの関連度' }] },
    { id: 45, category: '市場', level: 2, title: '株主優待制度', icon: '🎁', content: '日本独自の制度。企業が株主に商品券や自社製品を贈呈。優待利回りも投資判断の材料に。', terms: [{ word: '株主優待', def: '企業から株主への特典プレゼント' }] },
    // New Market cards
    { id: 141, category: '市場', level: 1, title: '東証プライム市場', icon: '🏛️', content: '時価総額100億円以上の大企業が上場。流動性が高く、機関投資家も多く参加。', terms: [{ word: 'プライム市場', def: '東証の最上位市場' }] },
    { id: 142, category: '市場', level: 1, title: '東証スタンダード市場', icon: '🏢', content: '中堅企業が上場する市場。プライムより上場基準が緩やか。成長余地のある企業も多い。', terms: [{ word: 'スタンダード市場', def: '東証の中堅企業向け市場' }] },
    { id: 143, category: '市場', level: 1, title: '東証グロース市場', icon: '🌱', content: '新興企業や成長企業向け。ベンチャー企業が多く、ハイリスク・ハイリターン。', terms: [{ word: 'グロース市場', def: '東証の新興企業向け市場' }] },
    { id: 144, category: '市場', level: 2, title: 'ダウ平均とは', icon: '🇺🇸', content: '米国を代表する30銘柄の株価平均。歴史が古く、世界経済の指標として注目される。', terms: [{ word: 'ダウ平均', def: 'ダウ工業株30種平均' }] },
    { id: 145, category: '市場', level: 2, title: 'VIX指数（恐怖指数）', icon: '😱', content: '市場の恐怖心を数値化。20以上で警戒、30以上でパニック。逆張りの参考にも。', terms: [{ word: 'VIX', def: '市場の予想変動率を示す指数' }] },
    { id: 146, category: '市場', level: 2, title: '出来高の重要性', icon: '📊', content: '売買された株数。出来高が多いほど市場の関心が高い。価格変動の信頼性の指標にも。', terms: [{ word: '出来高', def: '取引された株式の数量' }] },
    { id: 147, category: '市場', level: 2, title: '信用残とは', icon: '📈', content: '信用買い残と信用売り残の状況。買い残が多いと将来の売り圧力、売り残が多いと買い戻し期待。', terms: [{ word: '信用残', def: '信用取引の未決済残高' }] },
    { id: 148, category: '市場', level: 2, title: 'ROEとは', icon: '📐', content: '自己資本利益率。株主のお金でどれだけ利益を出したか。10%以上が優良企業の目安。', terms: [{ word: 'ROE', def: 'Return on Equity。自己資本利益率' }] },
    { id: 149, category: '市場', level: 2, title: 'ROAとは', icon: '🏭', content: '総資産利益率。会社の全資産でどれだけ利益を出したか。業界平均との比較が重要。', terms: [{ word: 'ROA', def: 'Return on Assets。総資産利益率' }] },
    { id: 150, category: '市場', level: 3, title: 'EPS成長率', icon: '📈', content: '1株当たり利益の成長率。長期的なEPS成長は株価上昇の源泉。', terms: [{ word: 'EPS', def: 'Earnings Per Share。1株当たり利益' }] },
    { id: 151, category: '市場', level: 3, title: 'フリーキャッシュフロー', icon: '💰', content: '営業CFから投資CFを引いた自由に使える現金。プラスが続く企業は財務安定。', terms: [{ word: 'FCF', def: '自由に使える現金' }] },
    { id: 152, category: '市場', level: 2, title: '決算短信の読み方', icon: '📄', content: '四半期ごとの業績報告。売上・利益の推移と今期予想をチェック。サプライズ度が株価を動かす。', terms: [] },
    { id: 153, category: '市場', level: 3, title: '有価証券報告書', icon: '📚', content: '企業の詳細な財務情報。リスク情報や役員報酬も記載。深い企業分析には必須。', terms: [{ word: '有報', def: '有価証券報告書の略' }] },
    { id: 154, category: '市場', level: 1, title: 'マーケットメイク', icon: '🏪', content: '取引所や証券会社が売買を仲介する仕組み。流動性を提供し、スムーズな取引を実現。', terms: [{ word: 'マーケットメイカー', def: '売買の相手方となる業者' }] },
    { id: 155, category: '市場', level: 2, title: '先物取引とは', icon: '📆', content: '将来の価格を今決めて取引する契約。日経225先物やS&P500先物が有名。', terms: [{ word: '先物', def: '将来の取引価格を今決める契約' }] },
    { id: 156, category: '市場', level: 3, title: 'オプション取引', icon: '🎛️', content: '買う権利（コール）と売る権利（プット）を売買。保険やレバレッジとして活用される。', terms: [{ word: 'オプション', def: '将来売買する権利' }] },
    { id: 157, category: '市場', level: 2, title: 'ADR・GDRとは', icon: '🌐', content: '外国企業の株を自国で取引するための証券。日本企業のADRは米国市場で取引可能。', terms: [{ word: 'ADR', def: '米国預託証券' }] },
    { id: 158, category: '市場', level: 2, title: 'セクターとは', icon: '🏭', content: '業種による分類。金融、IT、ヘルスケアなど。セクター分散でリスク軽減。', terms: [{ word: 'セクター', def: '業種分類' }] },
    { id: 159, category: '市場', level: 3, title: 'セクターローテーション', icon: '🔄', content: '景気サイクルに応じて有利なセクターが変わる。景気拡大期はシクリカル、後退期はディフェンシブ。', terms: [{ word: 'シクリカル', def: '景気敏感株' }] },
    { id: 160, category: '市場', level: 3, title: '債券価格と金利の関係', icon: '⚖️', content: '金利が上がると債券価格は下がる。逆相関の関係。長期債ほど金利感応度は高い。', terms: [{ word: 'デュレーション', def: '金利変動に対する価格感応度' }] },

    // ============================================
    // 戦略 (Strategy) - 47 cards
    // ============================================
    { id: 46, category: '戦略', level: 1, title: 'ドルコスト平均法', icon: '📅', content: '定期的に一定額を投資する方法。価格が高い時は少なく、安い時は多く買え、平均購入価格が平準化されます。', terms: [{ word: 'ドルコスト平均法', def: '定額を定期的に投資する手法' }] },
    { id: 47, category: '戦略', level: 2, title: 'アセットアロケーション', icon: '⚖️', content: '資産配分のこと。株式・債券・現金などの比率を決めることが、リターンの9割を決めると言われます。', terms: [{ word: 'アセットアロケーション', def: '資産クラスごとの配分比率' }] },
    { id: 48, category: '戦略', level: 2, title: 'リバランスの重要性', icon: '🔄', content: '定期的に資産配分を元の比率に戻すこと。値上がりした資産を売り、値下がりした資産を買う規律ある行動です。', terms: [{ word: 'リバランス', def: '資産配分を目標比率に調整すること' }] },
    { id: 49, category: '戦略', level: 3, title: 'コア・サテライト戦略', icon: '🎯', content: '資産の80%を安定的なインデックスファンド（コア）に、20%を積極運用（サテライト）に配分する戦略です。', terms: [] },
    { id: 50, category: '戦略', level: 3, title: '出口戦略を考える', icon: '🚪', content: '老後にどう取り崩すか。「4%ルール」は、毎年資産の4%を取り崩せば30年以上持つという目安です。', terms: [{ word: '4%ルール', def: '年間資産の4%を取り崩す引退生活の目安' }] },
    { id: 51, category: '戦略', level: 1, title: '長期・分散・積立', icon: '🎓', content: '投資の三原則。長期で複利を活かし、分散でリスクを抑え、積立で時間分散する。王道の戦略。', terms: [] },
    { id: 52, category: '戦略', level: 1, title: '緊急予備資金', icon: '🏥', content: '生活費3〜6ヶ月分は現金で確保。これがあれば市場の暴落時も慌てずに済みます。', terms: [{ word: '緊急予備資金', def: '不測の事態に備えた現金' }] },
    { id: 53, category: '戦略', level: 2, title: '年齢別資産配分', icon: '📊', content: '「100-年齢」%を株式に。30歳なら70%株式。年齢とともにリスク資産を減らすのが定石。', terms: [] },
    { id: 54, category: '戦略', level: 2, title: 'バリュー投資', icon: '💎', content: '割安な株を買い、適正価格になるのを待つ戦略。ウォーレン・バフェットが有名。忍耐が必要。', terms: [{ word: 'バリュー投資', def: '割安株に投資する手法' }] },
    { id: 55, category: '戦略', level: 2, title: 'グロース投資', icon: '🚀', content: '成長が期待できる企業に投資。PERが高くても将来の利益成長で正当化される。変動は大きい。', terms: [{ word: 'グロース投資', def: '成長株に投資する手法' }] },
    { id: 56, category: '戦略', level: 3, title: 'モメンタム投資', icon: '📈', content: '上昇トレンドの銘柄を買い、下落トレンドを売る。「トレンドは続く」という前提の戦略。', terms: [{ word: 'モメンタム', def: '価格の勢いや方向性' }] },
    { id: 57, category: '戦略', level: 2, title: '配当再投資', icon: '♻️', content: '受け取った配当金をすぐに再投資。複利効果を最大化する戦略。DRIPとも呼ばれる。', terms: [{ word: 'DRIP', def: '配当再投資プログラム' }] },
    { id: 58, category: '戦略', level: 3, title: 'ファクター投資', icon: '🔬', content: 'バリュー、モメンタム、クオリティなどの「ファクター」に注目して投資。スマートベータとも。', terms: [{ word: 'ファクター', def: 'リターンを説明する共通要因' }] },
    { id: 59, category: '戦略', level: 1, title: '投資額の決め方', icon: '💳', content: '余剰資金の範囲で。生活防衛資金確保後、手取りの10-20%が目安。無理のない金額から始めよう。', terms: [] },
    { id: 60, category: '戦略', level: 2, title: '損切りルール', icon: '✂️', content: '損失を限定するために事前にルールを決める。例：10%下落したら売却。感情に流されない規律が重要。', terms: [{ word: '損切り', def: '損失を限定するための売却' }] },
    { id: 61, category: '戦略', level: 2, title: 'ナンピン買い', icon: '⬇️', content: '下落時に買い増して平均取得価格を下げる。長期投資なら有効だが、下落が続くとリスク増大。', terms: [{ word: 'ナンピン', def: '価格下落時の追加購入' }] },
    { id: 62, category: '戦略', level: 3, title: 'ヘッジ戦略', icon: '🛡️', content: 'リスクを相殺するための取引。株のポジションに対してプットオプションを買うなど。保険的な役割。', terms: [{ word: 'ヘッジ', def: 'リスクを回避・軽減する取引' }] },
    { id: 63, category: '戦略', level: 1, title: '自動積立の威力', icon: '🤖', content: '毎月決まった日に自動で投資。感情を排除し、継続しやすい。「決めたら忘れる」投資法。', terms: [] },
    { id: 64, category: '戦略', level: 2, title: 'タイミング投資は難しい', icon: '⏱️', content: '市場のタイミングを図るのはプロでも困難。「Time in the market」が「Timing the market」より重要。', terms: [] },
    { id: 65, category: '戦略', level: 3, title: 'バーベル戦略', icon: '🏋️', content: '資産の両極端（超安全と高リスク）に集中させる戦略。中間リスクは持たない。ナシーム・タレブが提唱。', terms: [] },
    // New Strategy cards
    { id: 161, category: '戦略', level: 1, title: '生活防衛資金の確保', icon: '🏠', content: 'まず生活費6ヶ月分を貯金。これが投資の大前提。急な出費に備えて投資資金とは別に確保。', terms: [] },
    { id: 162, category: '戦略', level: 1, title: '投資目標を設定する', icon: '🎯', content: '何のためにいくら貯めるか。老後資金なら20年後に2000万円など。目標が戦略を決める。', terms: [] },
    { id: 163, category: '戦略', level: 2, title: 'インカム投資とは', icon: '💵', content: '配当や利息収入を重視する投資法。高配当株、債券、REITが対象。安定収入を得たい人向け。', terms: [{ word: 'インカム投資', def: '定期収入を重視する投資法' }] },
    { id: 164, category: '戦略', level: 2, title: 'ディフェンシブ銘柄', icon: '🛡️', content: '景気に左右されにくい業種。電力、ガス、食品、医薬品など。不況時にも安定。', terms: [{ word: 'ディフェンシブ', def: '景気に左右されにくい銘柄' }] },
    { id: 165, category: '戦略', level: 2, title: 'シクリカル銘柄', icon: '🔄', content: '景気に連動しやすい業種。自動車、鉄鋼、不動産など。景気拡大期に強い。', terms: [{ word: 'シクリカル', def: '景気敏感株' }] },
    { id: 166, category: '戦略', level: 2, title: '逆張りと順張り', icon: '↕️', content: '順張りはトレンドに乗る。逆張りはトレンドに逆らう。自分のスタイルを決めよう。', terms: [] },
    { id: 167, category: '戦略', level: 3, title: 'セクター投資', icon: '🏭', content: '特定業種に集中投資。IT、ヘルスケア、金融などのETFを活用。高リターンも高リスク。', terms: [] },
    { id: 168, category: '戦略', level: 3, title: 'テーマ投資', icon: '🌿', content: 'ESG、AI、クリーンエネルギーなどのテーマに投資。成長期待はあるが、過熱に注意。', terms: [{ word: 'テーマ投資', def: '特定のトレンドに投資する手法' }] },
    { id: 169, category: '戦略', level: 2, title: 'ターゲットデートファンド', icon: '📅', content: '目標年に向けて自動でリスクを調整。2040年退職予定なら「ターゲット2040」を選ぶ。', terms: [] },
    { id: 170, category: '戦略', level: 2, title: 'バランスファンド活用', icon: '⚖️', content: '株式と債券を1本でバランス良く保有。リバランスも自動。初心者に最適。', terms: [] },

    // ============================================
    // 心理 (Psychology) - 40 cards
    // ============================================
    { id: 66, category: '心理', level: 1, title: '損失回避バイアス', icon: '🧠', content: '人は利益の喜びより、損失の痛みを2倍強く感じます。これが狼狽売りの原因になります。', terms: [{ word: 'バイアス', def: '思考の偏り、先入観' }] },
    { id: 67, category: '心理', level: 2, title: '長期投資のマインド', icon: '🏔️', content: '市場は短期では予測不能。しかし長期では経済成長に連動して上昇する傾向があります。時間を味方につけましょう。', terms: [] },
    { id: 68, category: '心理', level: 2, title: '暴落時の心得', icon: '🌊', content: '暴落は必ず来ます。しかし歴史的に市場は常に回復してきました。パニック売りせず、むしろ買い増しの好機と捉えましょう。', terms: [] },
    { id: 69, category: '心理', level: 3, title: 'FOMO（乗り遅れ恐怖）', icon: '😰', content: '「今買わないと損する」という焦り。バブル相場で多くの人が高値掴みする原因です。冷静さを保ちましょう。', terms: [{ word: 'FOMO', def: 'Fear Of Missing Out. 乗り遅れ恐怖' }] },
    { id: 70, category: '心理', level: 3, title: '確証バイアス', icon: '👁️', content: '自分の信じたい情報だけを集めてしまう傾向。常に反対意見にも耳を傾け、客観的な判断を心がけましょう。', terms: [] },
    { id: 71, category: '心理', level: 1, title: '感情と投資判断', icon: '💭', content: 'ウォーレン・バフェット曰く「他人が貪欲な時に恐れ、他人が恐れている時に貪欲になれ」。', terms: [] },
    { id: 72, category: '心理', level: 1, title: 'ギャンブラーの誤謬', icon: '🎲', content: '「5連続で下落したから次は上がる」は錯覚。過去の結果は将来に影響しません。', terms: [{ word: 'ギャンブラーの誤謬', def: '独立した事象に因果を見出す錯覚' }] },
    { id: 73, category: '心理', level: 2, title: 'アンカリング効果', icon: '⚓', content: '最初に見た数字に引きずられる傾向。購入価格に固執して損切りできなくなることも。', terms: [{ word: 'アンカリング', def: '最初の情報に過度に影響される傾向' }] },
    { id: 74, category: '心理', level: 2, title: 'ハーディング現象', icon: '🐑', content: '群集心理で皆と同じ行動をとる傾向。バブルと暴落を加速させる原因の一つ。', terms: [{ word: 'ハーディング', def: '群れに従う集団行動' }] },
    { id: 75, category: '心理', level: 2, title: 'サンクコスト効果', icon: '💸', content: 'すでに投じたコストを惜しんで撤退できない心理。「損切りできない」原因の一つ。', terms: [{ word: 'サンクコスト', def: '回収不能な過去の投資' }] },
    { id: 76, category: '心理', level: 3, title: 'オーバーコンフィデンス', icon: '😎', content: '自分の能力を過信する傾向。「自分だけは市場に勝てる」と思うと危険。謙虚さが大切。', terms: [] },
    { id: 77, category: '心理', level: 1, title: '複雑さへの愛着', icon: '🧩', content: '複雑な戦略が優れているわけではない。シンプルなインデックス投資が多くの人に最適解。', terms: [] },
    { id: 78, category: '心理', level: 2, title: '後知恵バイアス', icon: '🔮', content: '結果を知った後に「予測できた」と思う傾向。実際は誰も未来を予測できません。', terms: [{ word: '後知恵バイアス', def: '結果を知った後の歪んだ認識' }] },
    { id: 79, category: '心理', level: 2, title: 'ホームバイアス', icon: '🏠', content: '自国の資産に偏重する傾向。日本人は日本株に偏りがち。グローバル分散が重要。', terms: [{ word: 'ホームバイアス', def: '自国資産への過度な投資傾向' }] },
    { id: 80, category: '心理', level: 3, title: 'プロスペクト理論', icon: '📉', content: '損失の痛みは利益の喜びの約2倍。リスク回避的になりすぎず、合理的な判断を。', terms: [{ word: 'プロスペクト理論', def: '損失と利益の非対称な感じ方の理論' }] },
    { id: 81, category: '心理', level: 1, title: '投資日記をつける', icon: '📓', content: '売買の理由と感情を記録。後で振り返ることで自分のパターンと改善点が見える。', terms: [] },
    { id: 82, category: '心理', level: 2, title: 'ニュースに踊らされない', icon: '📺', content: 'メディアは極端なニュースを好む。短期的なノイズに反応せず、長期的な視点を保とう。', terms: [] },
    { id: 83, category: '心理', level: 2, title: '比較の罠', icon: '👀', content: '他人のリターンと比較しても意味がない。リスク許容度も目標も人それぞれ。自分の計画に集中。', terms: [] },
    { id: 84, category: '心理', level: 3, title: '行動ファイナンス', icon: '🧬', content: '人間の非合理的な行動パターンを研究する分野。自分のバイアスを知ることが投資上達の鍵。', terms: [{ word: '行動ファイナンス', def: '心理学を取り入れた金融理論' }] },
    { id: 85, category: '心理', level: 1, title: '「何もしない」勇気', icon: '🧘', content: '頻繁な売買は手数料と税金で損失を生む。「Buy and Hold（買って保有）」の姿勢が重要。', terms: [] },
    // New Psychology cards
    { id: 171, category: '心理', level: 1, title: '恐怖と欲望', icon: '😨', content: '市場を動かす2大感情。恐怖で売り、欲望で買う。逆を行けるかが勝敗を分ける。', terms: [] },
    { id: 172, category: '心理', level: 2, title: 'メンタルアカウンティング', icon: '💳', content: 'お金に色をつけて考える傾向。「投資のお金」と「生活のお金」を分けて考えがち。', terms: [{ word: 'メンタルアカウンティング', def: '心理的な会計処理' }] },
    { id: 173, category: '心理', level: 2, title: '可用性ヒューリスティック', icon: '🧠', content: '思い浮かびやすい情報を重視する傾向。最近のニュースに過剰反応しがち。', terms: [] },
    { id: 174, category: '心理', level: 2, title: 'ディスポジション効果', icon: '📊', content: '利益確定は早く、損切りは遅い傾向。心理的には楽だが、投資成績は悪化する。', terms: [] },
    { id: 175, category: '心理', level: 1, title: '複利を実感する', icon: '📈', content: '複利の効果は長期で劇的に。10年後より20年後、20年後より30年後。想像力を働かせよう。', terms: [] },
    { id: 176, category: '心理', level: 2, title: '市場サイクルを理解する', icon: '🔄', content: '楽観→興奮→陶酔→不安→恐怖→絶望→希望→楽観。サイクルは繰り返す。', terms: [] },
    { id: 177, category: '心理', level: 3, title: 'リスク選好の逆転', icon: '🎭', content: '利益局面ではリスク回避、損失局面ではリスク追求。合理的な判断を心がけよう。', terms: [] },
    { id: 178, category: '心理', level: 1, title: '待つ力', icon: '⏳', content: '投資の最大の武器は忍耐。何もしない期間が長くても焦らない。成果は後からついてくる。', terms: [] },
    { id: 179, category: '心理', level: 2, title: 'SNS投資情報の危険', icon: '📱', content: '成功談ばかりが目立つ。失敗は隠される。煽りに乗らず、自分の判断で投資しよう。', terms: [] },
    { id: 180, category: '心理', level: 3, title: '自己帰属バイアス', icon: '🏆', content: '成功は自分の実力、失敗は運のせい。逆かもしれない。謙虚に振り返ることが成長の鍵。', terms: [] },

    // ============================================
    // 税金・制度 (Tax & System) - 40 cards
    // ============================================
    { id: 86, category: '税金・制度', level: 1, title: '投資の税金基礎', icon: '💴', content: '株式の売却益と配当には約20%の税金。特定口座（源泉徴収あり）なら自動で納税されます。', terms: [{ word: '源泉徴収', def: '利益から自動的に税金を差し引くこと' }] },
    { id: 87, category: '税金・制度', level: 1, title: '新NISAの仕組み', icon: '🆕', content: '2024年から恒久化。つみたて投資枠120万円+成長投資枠240万円。生涯投資枠は1,800万円。', terms: [{ word: '新NISA', def: '2024年開始の恒久的非課税制度' }] },
    { id: 88, category: '税金・制度', level: 2, title: 'NISA vs iDeCo', icon: '🆚', content: 'NISA：いつでも引き出せる。iDeCo：60歳まで引き出し不可だが所得控除あり。併用が理想的。', terms: [] },
    { id: 89, category: '税金・制度', level: 2, title: 'iDeCo掛金上限', icon: '📊', content: '会社員（企業年金なし）月23,000円、自営業月68,000円など。職業により異なります。', terms: [] },
    { id: 90, category: '税金・制度', level: 2, title: '確定申告が必要な場合', icon: '📝', content: '一般口座での利益、NISA枠超え、特定口座で損益通算したい場合など。確定申告で還付も。', terms: [{ word: '確定申告', def: '年間の所得と税金を申告する手続き' }] },
    { id: 91, category: '税金・制度', level: 2, title: '損益通算と繰越控除', icon: '➖', content: '株の損失と利益を相殺可能。損失が上回れば3年間繰り越せる。確定申告が必要。', terms: [{ word: '損益通算', def: '利益と損失を相殺して税金を計算' }] },
    { id: 92, category: '税金・制度', level: 3, title: '配当控除', icon: '💵', content: '日本株の配当には配当控除が適用可能。総合課税を選ぶと税金が安くなる場合も。要検討。', terms: [{ word: '配当控除', def: '配当金にかかる二重課税を軽減する制度' }] },
    { id: 93, category: '税金・制度', level: 3, title: '外国税額控除', icon: '🌐', content: '米国株の配当には米国で10%源泉徴収。確定申告で取り戻せる場合あり。二重課税を調整。', terms: [{ word: '外国税額控除', def: '外国で払った税金を控除する制度' }] },
    { id: 94, category: '税金・制度', level: 1, title: '特定口座の選び方', icon: '📋', content: '「源泉徴収あり」なら確定申告不要で楽。「源泉徴収なし」は損益通算したい人向け。', terms: [] },
    { id: 95, category: '税金・制度', level: 2, title: '住民税の申告', icon: '🏛️', content: '所得税と住民税で異なる申告が可能。上場株式の配当は住民税5%を選択できる場合も。', terms: [] },
    { id: 96, category: '税金・制度', level: 2, title: 'ジュニアNISA終了後', icon: '👶', content: '2023年で新規口座開設終了。既存口座は18歳まで非課税運用可能。18歳で成人NISAへ移行。', terms: [] },
    { id: 97, category: '税金・制度', level: 3, title: '贈与と相続', icon: '🎁', content: '年間110万円まで贈与税非課税。株式も贈与可能。相続時は取得価額引き継ぎに注意。', terms: [{ word: '贈与税', def: '財産を無償で受け取った際の税金' }] },
    { id: 98, category: '税金・制度', level: 1, title: '投資家保護制度', icon: '🛡️', content: '証券会社破綻時、顧客資産は分別管理で保護。投資者保護基金で最大1,000万円補償。', terms: [{ word: '分別管理', def: '顧客資産と証券会社資産の分離保管' }] },
    { id: 99, category: '税金・制度', level: 2, title: 'マイナンバーと投資', icon: '🔢', content: '証券口座開設にマイナンバー必須。税務署への報告に使用。脱税防止の仕組み。', terms: [] },
    { id: 100, category: '税金・制度', level: 3, title: '法人での投資', icon: '🏢', content: '法人なら損益通算範囲が広い、経費計上可能など。資産規模が大きくなれば検討の余地あり。', terms: [] },
    { id: 101, category: '税金・制度', level: 2, title: 'ふるさと納税と投資', icon: '🍎', content: '株の利益で所得が増えると、ふるさと納税の上限も上がる。うまく活用すれば節税効果大。', terms: [] },
    { id: 102, category: '税金・制度', level: 3, title: '海外証券口座', icon: '🌍', content: '米国などの口座を直接開設も可能。コスト安いが確定申告必須。税務が複雑になる。', terms: [] },
    { id: 103, category: '税金・制度', level: 1, title: 'NISA枠の復活', icon: '♻️', content: '新NISAでは売却すると翌年に枠が復活。柔軟な運用が可能に。旧NISAにはなかった特徴。', terms: [] },
    { id: 104, category: '税金・制度', level: 2, title: 'DC（企業型確定拠出年金）', icon: '🏛️', content: '会社が掛金を出す年金制度。運用は自分で選択。iDeCoとの併用可否は会社規定による。', terms: [{ word: 'DC', def: '企業型確定拠出年金' }] },
    { id: 105, category: '税金・制度', level: 3, title: 'DB（確定給付年金）', icon: '🏦', content: '将来の給付額が約束される年金。会社が運用。自分で運用選択できないが安心感あり。', terms: [{ word: 'DB', def: '確定給付企業年金' }] },
    // New Tax cards
    { id: 181, category: '税金・制度', level: 1, title: 'つみたて投資枠とは', icon: '📈', content: '新NISAの年間120万円枠。長期積立に適した投資信託のみ対象。毎月10万円まで積立可能。', terms: [] },
    { id: 182, category: '税金・制度', level: 1, title: '成長投資枠とは', icon: '🚀', content: '新NISAの年間240万円枠。個別株やETFも購入可能。つみたて枠と併用できる。', terms: [] },
    { id: 183, category: '税金・制度', level: 2, title: '生涯投資枠1800万円', icon: '💰', content: '新NISAで一生涯に投資できる上限。使い切っても売却すれば翌年復活。柔軟な設計。', terms: [] },
    { id: 184, category: '税金・制度', level: 2, title: 'iDeCo受取方法', icon: '🎂', content: '一時金か年金か選択可能。税金の扱いが異なる。受取時の税制優遇を活用しよう。', terms: [] },
    { id: 185, category: '税金・制度', level: 3, title: '特定口座間の移管', icon: '🔄', content: '証券会社を変えても特定口座間で株式移管可能。取得価額も引き継がれる。', terms: [] },
    { id: 186, category: '税金・制度', level: 2, title: '年末の損出し', icon: '📅', content: '含み損銘柄を年末に売却し損失確定。同年の利益と相殺して節税。すぐ買い戻してOK。', terms: [{ word: '損出し', def: '節税目的で損失を確定させること' }] },
    { id: 187, category: '税金・制度', level: 2, title: '譲渡益課税の計算', icon: '🧮', content: '売却価格 - 取得価格 - 手数料 = 譲渡益。この約20%が税金。特定口座なら自動計算。', terms: [] },
    { id: 188, category: '税金・制度', level: 3, title: '申告分離課税と総合課税', icon: '📊', content: '株の利益は通常申告分離。高所得者は申告分離が有利、低所得者は総合課税が有利な場合も。', terms: [] },
    { id: 189, category: '税金・制度', level: 1, title: '公的年金との関係', icon: '👴', content: '国民年金・厚生年金は公的年金。iDeCoは私的年金。両方で老後に備えよう。', terms: [] },
    { id: 190, category: '税金・制度', level: 2, title: '小規模企業共済', icon: '🏪', content: '自営業者向けの退職金制度。全額所得控除でiDeCoと併用も可能。節税効果大。', terms: [{ word: '小規模企業共済', def: '自営業者向け退職金積立制度' }] },

    // ============================================
    // 実践 (Practice) - 37 cards
    // ============================================
    { id: 106, category: '実践', level: 1, title: '初めての投資1: 口座開設', icon: '🚀', content: 'ネット証券（SBI、楽天など）で口座開設。本人確認書類とマイナンバー準備。最短数日で完了。', terms: [] },
    { id: 107, category: '実践', level: 1, title: '初めての投資2: 入金', icon: '💳', content: '証券口座に銀行から入金。ネット振込が便利。クレカ積立に対応した証券会社も増加中。', terms: [] },
    { id: 108, category: '実践', level: 1, title: '初めての投資3: 銘柄選び', icon: '🔍', content: '初心者はeMAXIS Slimシリーズが人気。全世界株式（オルカン）か先進国株式から始める方が多い。', terms: [] },
    { id: 109, category: '実践', level: 1, title: '初めての投資4: 積立設定', icon: '⚙️', content: '毎月の積立金額と日付を設定。NISA口座で設定するのを忘れずに。あとは放置でOK。', terms: [] },
    { id: 110, category: '実践', level: 2, title: '投資信託の選び方', icon: '📑', content: '1. 信託報酬が安い（0.1%台） 2. 純資産総額が大きい 3. 運用実績が長い。この3点をチェック。', terms: [{ word: '信託報酬', def: '投資信託の運用管理費用' }] },
    { id: 111, category: '実践', level: 2, title: 'ETFの買い方', icon: '🛒', content: '株と同じように証券会社で注文。指値か成行を選択。1口から購入可能。取引時間内なら即約定。', terms: [{ word: '成行注文', def: '価格指定なしで即座に売買する注文' }] },
    { id: 112, category: '実践', level: 2, title: '米国株の買い方', icon: '🇺🇸', content: '円をドルに両替（証券口座内で可能）してから購入。為替手数料に注意。1株から買えるのが魅力。', terms: [] },
    { id: 113, category: '実践', level: 2, title: 'ポートフォリオの作り方', icon: '🎨', content: '1. 目標設定 2. リスク許容度確認 3. 資産配分決定 4. 具体的商品選び 5. 定期見直し。', terms: [] },
    { id: 114, category: '実践', level: 2, title: '投資金額の目安', icon: '💰', content: '手取りの10-20%が目安。まずは月3,000円〜1万円から。慣れたら徐々に増額。無理は禁物。', terms: [] },
    { id: 115, category: '実践', level: 3, title: '運用状況のチェック', icon: '📱', content: '月1回程度で十分。毎日見ると感情的になりやすい。年1回リバランスを検討。', terms: [] },
    { id: 116, category: '実践', level: 3, title: '暴落時の対応', icon: '🆘', content: '1.慌てて売らない 2.積立は継続 3.余裕があれば買い増し 4.長期視点を忘れない。これが正解。', terms: [] },
    { id: 117, category: '実践', level: 2, title: '高配当株投資の始め方', icon: '💵', content: '配当利回り3-5%の安定企業を選択。セクター分散も意識。連続増配銘柄が人気。', terms: [{ word: '連続増配', def: '毎年配当金を増やし続けること' }] },
    { id: 118, category: '実践', level: 3, title: '出口戦略の実践', icon: '🎯', content: '取り崩しは定額法か定率法。社会保障との組み合わせも考慮。60歳以降の計画を今から。', terms: [] },
    { id: 119, category: '実践', level: 1, title: '投資の情報収集', icon: '📚', content: '書籍、YouTube、ブログなど多数。信頼できる情報源を2-3個に絞ろう。SNSは要注意。', terms: [] },
    { id: 120, category: '実践', level: 2, title: 'よくある失敗と対策', icon: '⚠️', content: '1.高値掴み→積立で回避 2.狼狽売り→長期視点維持 3.手数料無視→低コスト商品選択。', terms: [] },
    // New Practice cards
    { id: 191, category: '実践', level: 1, title: '証券会社の選び方', icon: '🏢', content: 'SBI証券、楽天証券が二強。手数料、ポイント、使いやすさで比較。メイン+サブの2口座が便利。', terms: [] },
    { id: 192, category: '実践', level: 1, title: 'クレカ積立の活用', icon: '💳', content: '楽天カードやSBIカードで積立するとポイント還元。年間1万ポイント以上になることも。', terms: [] },
    { id: 193, category: '実践', level: 2, title: '1株投資の活用', icon: '☝️', content: 'SBIのS株や楽天のかぶミニで1株から購入可能。高価な個別株も少額で始められる。', terms: [] },
    { id: 194, category: '実践', level: 2, title: 'スクリーニングの使い方', icon: '🔎', content: '条件を指定して銘柄を絞り込み。PER、ROE、配当利回りなどで自分好みの銘柄を発見。', terms: [{ word: 'スクリーニング', def: '条件による銘柄絞り込み' }] },
    { id: 195, category: '実践', level: 2, title: '株主総会への参加', icon: '🎤', content: '株主権利の一つ。お土産がもらえることも。議決権を行使して企業経営に参加できる。', terms: [] },
    { id: 196, category: '実践', level: 2, title: '配当金の受け取り方', icon: '📬', content: '「株式数比例配分方式」を選択すると証券口座に自動入金。再投資も簡単。', terms: [] },
    { id: 197, category: '実践', level: 3, title: 'PTSとは', icon: '🌙', content: '私設取引所。夜間や早朝も取引可能。決算発表後にすぐ売買したい時に便利。', terms: [{ word: 'PTS', def: '私設取引システム' }] },
    { id: 198, category: '実践', level: 1, title: '投資アプリの活用', icon: '📱', content: '証券会社の公式アプリで簡単に売買。チャート確認、ニュース閲覧もスマホで完結。', terms: [] },
    { id: 199, category: '実践', level: 2, title: 'アラート設定', icon: '🔔', content: '目標価格に達したら通知。買いたい銘柄が下がった時、保有銘柄が上がった時に便利。', terms: [] },
    { id: 200, category: '実践', level: 3, title: '投資コミュニティ', icon: '👥', content: '同じ志を持つ仲間との情報交換。ただし煽りには注意。自分の判断軸を持とう。', terms: [] },

    // ============================================
    // チャート分析 (Chart Patterns) - PRO EXCLUSIVE - 50 cards
    // ============================================
    { id: 201, category: 'チャート分析', level: 2, isPro: true, title: 'ヘッドアンドショルダー', icon: '📈', content: '3つの山で構成される反転パターン。中央が最も高い「頭」、両側が「肩」。ネックライン割れで下落サイン。', terms: [{ word: 'ネックライン', def: '肩の底を結ぶ支持線' }], pattern: 'head_and_shoulders' },
    { id: 202, category: 'チャート分析', level: 2, isPro: true, title: '逆ヘッドアンドショルダー', icon: '📉', content: '3つの谷で構成される反転パターン。底打ちのサイン。ネックライン突破で上昇転換の可能性。', terms: [], pattern: 'inverse_head_and_shoulders' },
    { id: 203, category: 'チャート分析', level: 2, isPro: true, title: 'ダブルトップ', icon: '🏔️', content: '2つの同水準の高値を付けた後、下落するパターン。M字型。ネックライン割れで売りサイン。', terms: [{ word: 'ダブルトップ', def: '二つの山を形成する反転パターン' }], pattern: 'double_top' },
    { id: 204, category: 'チャート分析', level: 2, isPro: true, title: 'ダブルボトム', icon: '🏜️', content: '2つの同水準の安値を付けた後、上昇するパターン。W字型。底打ち確認の重要サイン。', terms: [{ word: 'ダブルボトム', def: '二つの谷を形成する反転パターン' }], pattern: 'double_bottom' },
    { id: 205, category: 'チャート分析', level: 2, isPro: true, title: '上昇トレンドライン', icon: '📐', content: '安値と安値を結んだ線。このラインを割ると上昇トレンド終了の可能性。サポートとして機能。', terms: [{ word: 'トレンドライン', def: '価格の方向性を示す線' }], pattern: 'ascending_trendline' },
    { id: 206, category: 'チャート分析', level: 2, isPro: true, title: '下降トレンドライン', icon: '📏', content: '高値と高値を結んだ線。このラインを突破すると下降トレンド終了の可能性。レジスタンスとして機能。', terms: [], pattern: 'descending_trendline' },
    { id: 207, category: 'チャート分析', level: 2, isPro: true, title: '三角保ち合い（対称）', icon: '🔺', content: '高値切り下げ、安値切り上げで三角形を形成。ブレイク方向に大きく動く傾向。方向は読めない。', terms: [{ word: '保ち合い', def: '価格が一定範囲で推移する状態' }], pattern: 'symmetrical_triangle' },
    { id: 208, category: 'チャート分析', level: 3, isPro: true, title: '上昇三角形', icon: '📈', content: '上値抵抗線が水平、下値支持線が上昇。上にブレイクしやすい強気パターン。', terms: [], pattern: 'ascending_triangle' },
    { id: 209, category: 'チャート分析', level: 3, isPro: true, title: '下降三角形', icon: '📉', content: '下値支持線が水平、上値抵抗線が下降。下にブレイクしやすい弱気パターン。', terms: [], pattern: 'descending_triangle' },
    { id: 210, category: 'チャート分析', level: 2, isPro: true, title: 'サポートとレジスタンス', icon: '🛡️', content: 'サポートは下値支持線、レジスタンスは上値抵抗線。何度も跳ね返された価格帯は重要。', terms: [{ word: 'サポート', def: '下落を止める価格帯' }, { word: 'レジスタンス', def: '上昇を止める価格帯' }], pattern: 'support_resistance' },
    { id: 211, category: 'チャート分析', level: 2, isPro: true, title: 'フラッグパターン', icon: '🚩', content: '急騰・急落後の小さな調整。旗のような形。ブレイク後は元のトレンド方向に継続しやすい。', terms: [{ word: 'フラッグ', def: '継続パターンの一種' }], pattern: 'flag' },
    { id: 212, category: 'チャート分析', level: 3, isPro: true, title: 'ペナントパターン', icon: '🎌', content: 'フラッグに似るが三角形。急騰後の一時的な収束。ブレイクで元のトレンド継続。', terms: [], pattern: 'pennant' },
    { id: 213, category: 'チャート分析', level: 2, isPro: true, title: 'ローソク足の基本', icon: '🕯️', content: '始値、終値、高値、安値を1本で表現。陽線（上昇）と陰線（下落）。ヒゲと実体で心理を読む。', terms: [{ word: 'ローソク足', def: '日本発祥のチャート表示法' }], pattern: 'candlestick_basics' },
    { id: 214, category: 'チャート分析', level: 2, isPro: true, title: '陽の丸坊主・陰の丸坊主', icon: '🟩', content: 'ヒゲがない強いローソク足。陽の丸坊主は強い買い圧力、陰の丸坊主は強い売り圧力を示す。', terms: [{ word: '丸坊主', def: 'ヒゲのないローソク足' }], pattern: 'marubozu' },
    { id: 215, category: 'チャート分析', level: 2, isPro: true, title: '十字線（同時線）', icon: '✚', content: '始値と終値がほぼ同じ。買いと売りが拮抗。トレンド転換の可能性を示唆する重要サイン。', terms: [{ word: '同時線', def: '寄引同事のローソク足' }], pattern: 'doji' },
    { id: 216, category: 'チャート分析', level: 3, isPro: true, title: 'ハンマー（カラカサ）', icon: '🔨', content: '長い下ヒゲと小さな実体。下落トレンドの終わりで出現すると反転上昇のサイン。', terms: [{ word: 'ハンマー', def: '底打ちを示すローソク足' }], pattern: 'hammer' },
    { id: 217, category: 'チャート分析', level: 3, isPro: true, title: '首吊り線（ハンギングマン）', icon: '⚠️', content: 'ハンマーと同形だが上昇トレンドで出現。天井圏での警告サイン。', terms: [], pattern: 'hanging_man' },
    { id: 218, category: 'チャート分析', level: 3, isPro: true, title: '包み足（抱き線）', icon: '🫂', content: '前日のローソク足を完全に包み込む大きな足。陽の包み足は強い買い、陰の包み足は強い売りサイン。', terms: [{ word: '包み足', def: '前日を包む大きなローソク足' }], pattern: 'engulfing' },
    { id: 219, category: 'チャート分析', level: 2, isPro: true, title: '移動平均線の基本', icon: '〰️', content: '一定期間の平均価格を結んだ線。5日、25日、75日、200日が代表的。トレンド判断の基本ツール。', terms: [{ word: '移動平均線', def: '平均価格を結んだ曲線' }], pattern: 'moving_average' },
    { id: 220, category: 'チャート分析', level: 2, isPro: true, title: 'ゴールデンクロス', icon: '✨', content: '短期移動平均線が長期移動平均線を下から上に突き抜ける。買いサインとされる。', terms: [{ word: 'ゴールデンクロス', def: '短期線が長期線を上抜け' }], pattern: 'golden_cross' },
    { id: 221, category: 'チャート分析', level: 2, isPro: true, title: 'デッドクロス', icon: '💀', content: '短期移動平均線が長期移動平均線を上から下に突き抜ける。売りサインとされる。', terms: [{ word: 'デッドクロス', def: '短期線が長期線を下抜け' }], pattern: 'dead_cross' },
    { id: 222, category: 'チャート分析', level: 3, isPro: true, title: 'ボリンジャーバンド', icon: '📊', content: '移動平均線の上下に標準偏差のバンドを表示。バンドの拡張・収縮でボラティリティを判断。', terms: [{ word: 'ボリンジャーバンド', def: '統計的な価格帯を示す指標' }], pattern: 'bollinger_bands' },
    { id: 223, category: 'チャート分析', level: 3, isPro: true, title: 'RSI（相対力指数）', icon: '📈', content: '0-100で買われすぎ・売られすぎを判断。70以上で買われすぎ、30以下で売られすぎ。', terms: [{ word: 'RSI', def: 'Relative Strength Index' }], pattern: 'rsi' },
    { id: 224, category: 'チャート分析', level: 3, isPro: true, title: 'MACD', icon: '📉', content: '2本の移動平均線の差を利用。MACDラインとシグナルラインのクロスで売買判断。', terms: [{ word: 'MACD', def: 'Moving Average Convergence Divergence' }], pattern: 'macd' },
    { id: 225, category: 'チャート分析', level: 3, isPro: true, title: 'フィボナッチリトレースメント', icon: '🔢', content: '23.6%、38.2%、50%、61.8%の水準で押し目・戻りを予測。黄金比に基づく。', terms: [{ word: 'フィボナッチ', def: '黄金比を用いた分析手法' }], pattern: 'fibonacci' },
    { id: 226, category: 'チャート分析', level: 2, isPro: true, title: '出来高と価格の関係', icon: '📊', content: '上昇時に出来高増加は健全な上昇。下落時に出来高減少は売り一巡のサイン。', terms: [], pattern: 'volume_price' },
    { id: 227, category: 'チャート分析', level: 2, isPro: true, title: 'ギャップ（窓）', icon: '🪟', content: '前日終値と当日始値の間に生じる空白。窓埋めの法則：窓は埋められる傾向がある。', terms: [{ word: 'ギャップ', def: '価格の飛び' }], pattern: 'gap' },
    { id: 228, category: 'チャート分析', level: 3, isPro: true, title: 'ウェッジパターン', icon: '🐚', content: '上昇ウェッジは弱気、下降ウェッジは強気のパターン。三角形より鋭角な収束。', terms: [{ word: 'ウェッジ', def: 'くさび形のチャートパターン' }], pattern: 'wedge' },
    { id: 229, category: 'チャート分析', level: 3, isPro: true, title: 'カップウィズハンドル', icon: '☕', content: 'U字型の底値形成後、小さな調整（ハンドル）を経て上昇。長期的な強気パターン。', terms: [{ word: 'カップウィズハンドル', def: 'コーヒーカップ型のパターン' }], pattern: 'cup_with_handle' },
    { id: 230, category: 'チャート分析', level: 2, isPro: true, title: 'チャート分析の注意点', icon: '⚠️', content: 'パターンは確率的なもの。過去のパターンが将来を保証しない。他の分析と併用が重要。', terms: [], pattern: 'disclaimer' },
    { id: 231, category: 'チャート分析', level: 3, isPro: true, title: '一目均衡表：基本', icon: '☁️', content: '転換線、基準線、先行スパン1・2、遅行スパンの5本で構成。時間論を重視した日本発の分析手法。', terms: [{ word: '雲', def: '先行スパン1と2の間' }], pattern: 'ichimoku_base' },
    { id: 232, category: 'チャート分析', level: 3, isPro: true, title: '一目均衡表：雲抜け', icon: '🌤️', content: '価格が「雲（抵抗帯）」を上抜けると強い上昇サイン。逆に下抜けると下落サイン。', terms: [], pattern: 'ichimoku_cloud_break' },
    { id: 233, category: 'チャート分析', level: 3, isPro: true, title: '三役好転', icon: '✨', content: '1.転換線が基準線を上抜け 2.価格が雲を上抜け 3.遅行スパンが価格を上抜け。最強の買いサイン。', terms: [{ word: '三役好転', def: '3つの買い条件が揃うこと' }], pattern: 'sanyaku_kouten' },
    { id: 234, category: 'チャート分析', level: 3, isPro: true, title: 'エリオット波動：基本', icon: '🌊', content: '相場は「推進5波・修正3波」のリズムで動くという理論。第3波が最も大きく長くなりやすい。', terms: [{ word: 'エリオット波動', def: '相場のサイクル理論' }], pattern: 'elliott_wave_impulse' },
    { id: 235, category: 'チャート分析', level: 3, isPro: true, title: 'ストキャスティクス', icon: '📉', content: '売られすぎ・買われすぎを判断するオシレーター。％Kと％Dの2本の線のクロスで売買判断。', terms: [], pattern: 'stochastic' },
    { id: 236, category: 'チャート分析', level: 2, isPro: true, title: 'パラボリックSAR', icon: '🛤️', content: '価格の上下に点線を表示。点が価格の下にあれば上昇、上にあれば下降トレンド。点が交差したら転換サイン。', terms: [{ word: 'SAR', def: 'Stop And Reverse' }], pattern: 'parabolic' },
    { id: 237, category: 'チャート分析', level: 2, isPro: true, title: 'V字底（Vボトム）', icon: '✅', content: '急落後に急反発するパターン。底値圏での強い買い戻しを示す。パニック売りの終了を示唆。', terms: [], pattern: 'v_bottom' },
    { id: 238, category: 'チャート分析', level: 2, isPro: true, title: 'ソーサーボトム', icon: '🥣', content: 'お皿のように緩やかなカーブを描いて底を打つパターン。時間をかけた底固めで、上昇は長続きしやすい。', terms: [{ word: 'ソーサー', def: '受け皿のような形状' }], pattern: 'rounding_bottom' },
    { id: 239, category: 'チャート分析', level: 3, isPro: true, title: 'ダイヤモンドフォーメーション', icon: '💎', content: '高値圏で出現するダイヤモンド型の保ち合い。トレンド反転（下落）のサインとなることが多い。', terms: [], pattern: 'diamond_top' },
    { id: 240, category: 'チャート分析', level: 2, isPro: true, title: 'ボックス相場（レンジ）', icon: '📦', content: '一定の価格帯（箱）の中で上下を繰り返す。上抜けで買い、下抜けで売りのサイン。', terms: [{ word: 'レンジ', def: '一定の変動幅' }], pattern: 'rectangle' },
    { id: 241, category: 'チャート分析', level: 3, isPro: true, title: 'ダイバージェンス', icon: '⚡', content: '価格は高値を更新しているのに、オシレーター（RSIなど）は下がっている状態。反転の予兆。', terms: [{ word: '逆行現象', def: '価格と指標の不一致' }], pattern: 'divergence' },
    { id: 242, category: 'チャート分析', level: 3, isPro: true, title: 'トリプルトップ・トリプルボトム', icon: '🏔️', content: '3つの同水準の高値（トリプルトップ）または安値（トリプルボトム）を付けるパターン。ダブルトップ/ボトムより信頼性が高い反転サイン。ネックライン突破で大きく動く傾向。', terms: [{ word: 'トリプルトップ', def: '3つの山を形成する強力な反転パターン' }], pattern: 'triple_top' },
    { id: 243, category: 'チャート分析', level: 2, isPro: true, title: 'グランビルの法則', icon: '📜', content: '移動平均線と価格の位置関係から8つの売買ポイントを定義。基本にして王道の分析。', terms: [], pattern: 'granville' },
    { id: 244, category: 'チャート分析', level: 2, isPro: true, title: '酒田五法：三空', icon: '🕊️', content: '3回連続で窓（空）を開けて動くこと。行き過ぎのサイン。「三空飛び上げには売り向かえ」。', terms: [{ word: '酒田五法', def: '江戸時代の相場分析法' }], pattern: 'sankuu' },
    { id: 245, category: 'チャート分析', level: 2, isPro: true, title: '酒田五法：三兵', icon: '💂', content: '陽線が3本続く「赤三兵」は強い買い、陰線が3本続く「黒三兵」は強い売りサイン。', terms: [], pattern: 'sanpei' },

    // ============================================
    // FX・為替 (Forex) - 30 cards
    // ============================================
    { id: 301, category: 'FX', level: 1, title: 'FXの仕組み', icon: '💱', content: 'Foreign Exchange（外国為替証拠金取引）。2つの通貨を交換し、為替差益や金利差（スワップ）を狙う取引です。', terms: [{ word: '証拠金取引', def: '担保（証拠金）を預けて行う取引' }] },
    { id: 302, category: 'FX', level: 1, title: 'レバレッジ（FX）', icon: '⚡', content: '国内個人口座は最大25倍。4万円で100万円分の取引が可能。資金効率が良い反面、損失リスクも増大します。', terms: [{ word: 'レバレッジ', def: '資金に対する取引額の倍率' }] },
    { id: 303, category: 'FX', level: 1, title: 'Pips（ピップス）', icon: '📏', content: '為替レートの変動の最小単位。ドル円なら0.01円（1銭）＝1pips。利益や損失の計算に使われます。', terms: [{ word: 'pips', def: 'Percentage in Point' }] },
    { id: 304, category: 'FX', level: 1, title: 'スプレッド（FX）', icon: '↔️', content: '売値（Bid）と買値（Ask）の差。実質的な取引手数料。ドル円0.2銭など、原則固定の業者が多い。', terms: [] },
    { id: 305, category: 'FX', level: 2, title: 'スワップポイント', icon: '🔄', content: '2国間の金利差調整分。高金利通貨を買い、低金利通貨を売ると毎日受け取れますが、逆なら支払いになります。', terms: [{ word: 'スワップ', def: '金利差相当分の損益' }] },
    { id: 306, category: 'FX', level: 2, title: 'クロス円とドルストレート', icon: '💵', content: 'ドル/円はドルストレート（基軸通貨ペア）。ユーロ/円やポンド/円などドルを介さない円絡みの通貨ペアが「クロス円」。ユーロ/ドルなどが「ドルストレート」。世界で最も取引されるのはユーロ/ドルです。', terms: [{ word: 'クロス円', def: 'ドルを介さない円絡みの通貨ペア' }] },
    { id: 307, category: 'FX', level: 2, title: 'ロスカット（強制決済）', icon: '✂️', content: '含み損が拡大し、証拠金維持率が一定（例:50%）を下回ると強制的に決済される仕組み。資産を守る最後の砦。', terms: [] },
    { id: 308, category: 'FX', level: 3, title: '追証（おいしょう）', icon: '📩', content: '証拠金が必要額を下回った場合、追加で入金が必要になること。入金しないと強制決済されます。', terms: [{ word: '追加証拠金', def: '不足分の証拠金を入金すること' }] },
    { id: 309, category: 'FX', level: 2, title: '雇用統計の影響', icon: '📊', content: '毎月第1金曜発表の米雇用統計は、為替相場が最も動くイベント。非農業部門雇用者数と失業率に注目。', terms: [] },
    { id: 310, category: 'FX', level: 3, title: '中央銀行の役割', icon: '🏦', content: '米FRB、欧ECB、日銀。金利政策決定会合（FOMCなど）の発言でトレンドが決まります。', terms: [{ word: 'FOMC', def: '連邦公開市場委員会' }] },
    { id: 311, category: 'FX', level: 3, title: '実需と投機', icon: '🏭', content: '輸出入企業の為替予約などの「実需」と、為替差益を狙う「投機」。短期的には投機筋が相場を動かします。', terms: [] },
    { id: 312, category: 'FX', level: 2, title: 'トレンドフォロー', icon: '🏄', content: '「流れに乗る」手法。FXでは一度トレンドが出ると長く続きやすい傾向があります。', terms: [] },
    { id: 313, category: 'FX', level: 1, title: 'ロングとショート', icon: '↕️', content: 'ロングは買いポジション、ショートは売りポジション。FXは売りからでも入れ、下落局面でも利益を狙えます。', terms: [] },
    { id: 314, category: 'FX', level: 2, title: '通貨の強弱', icon: '💪', content: 'ある通貨が買われ、別の通貨が売られる。この強弱関係を見極めるのがFXの基本。', terms: [] },
    { id: 315, category: 'FX', level: 3, title: 'キャリートレード', icon: '🚜', content: '低金利通貨を借りて高金利通貨に投資する手法。円キャリートレードが有名。リスクオフで巻き戻しが起きやすい。', terms: [] },

    // ============================================
    // 暗号資産 (Crypto) - 30 cards
    // ============================================
    { id: 351, category: '仮想通貨', level: 1, title: 'ブロックチェーン', icon: '🔗', content: 'データを鎖のように繋げて改ざん困難にする技術。管理者が不在でも信頼性を担保できる革新的な仕組み。', terms: [{ word: '分散型台帳', def: 'ネットワーク参加者で共有する台帳' }] },
    { id: 352, category: '仮想通貨', level: 1, title: 'ビットコイン（BTC）', icon: '₿', content: '最初の暗号資産。「デジタルゴールド」とも呼ばれ、発行上限が2100万枚と決まっており、希少性があります。', terms: [] },
    { id: 353, category: '仮想通貨', level: 1, title: 'アルトコイン', icon: '🪙', content: 'ビットコイン以外の暗号資産の総称。イーサリアム（ETH）、リップル（XRP）など数千種類が存在。', terms: [] },
    { id: 354, category: '仮想通貨', level: 2, title: 'マイニング（採掘）', icon: '⛏️', content: '取引データの承認作業。計算能力を提供した報酬として新規コインが発行される仕組み（PoW）。', terms: [{ word: 'PoW', def: 'Proof of Work。計算量による合意形成' }] },
    { id: 355, category: '仮想通貨', level: 2, title: '半減期', icon: '🌗', content: '約4年に一度、マイニング報酬が半分になるイベント。供給ペースが減るため、価格上昇の要因とされます。', terms: [] },
    { id: 356, category: '仮想通貨', level: 2, title: 'ウォレット', icon: '👛', content: '暗号資産を保管する財布。ネット接続されたホットウォレットと、オフラインのコールドウォレットがある。', terms: [{ word: '秘密鍵', def: '資産へのアクセスに必要な暗証鍵' }] },
    { id: 357, category: '仮想通貨', level: 3, title: 'イーサリアムとスマートコントラクト', icon: '📜', content: '契約を自動実行するプログラム機能。DeFiやNFTなど、多様なアプリケーションの基盤となっています。', terms: [{ word: 'スマートコントラクト', def: '契約自動実行プログラム' }] },
    { id: 358, category: '仮想通貨', level: 3, title: 'DeFi（分散型金融）', icon: '🏦', content: '銀行などの仲介者なしで、融資や交換を行う金融サービス。高い利回りが魅力だがリスクも高い。', terms: [{ word: 'DeFi', def: 'Decentralized Finance' }] },
    { id: 359, category: '仮想通貨', level: 3, title: 'ステーブルコイン', icon: '⚓', content: 'ドルなどの法定通貨と価値が連動するように設計されたコイン。USDTやUSDCなど。決済や退避先として利用。', terms: [] },
    { id: 360, category: '仮想通貨', level: 3, title: 'NFT', icon: '🖼️', content: '非代替性トークン。デジタルデータに唯一無二の証明書を付与。アートやゲーム分野で活用が進む。', terms: [{ word: 'NFT', def: 'Non-Fungible Token' }] },
    { id: 361, category: '仮想通貨', level: 2, title: 'ステーキング', icon: '🔒', content: '保有することでブロックチェーンの維持に貢献し、報酬を得る仕組み（PoS）。銀行の利息に近い感覚。', terms: [{ word: 'PoS', def: 'Proof of Stake。保有量による合意形成' }] },
    { id: 362, category: '仮想通貨', level: 3, title: '取引所の種類（CEX/DEX）', icon: '💱', content: '管理者がいる中央集権取引所（CEX）と、プログラムで動く分散型取引所（DEX）。初心者はCEXから。', terms: [{ word: 'DEX', def: 'Decentralized Exchange' }] },
    { id: 363, category: '仮想通貨', level: 3, title: 'ボラティリティリスク', icon: '🎢', content: '暗号資産は1日で20%以上変動することも。ハイリスク・ハイリターンな資産であることを理解しよう。', terms: [] },
    { id: 364, category: '仮想通貨', level: 2, title: '送金アドレスの重要性', icon: '✉️', content: '銀行と違い、送金先アドレスを1文字でも間違えると資産は永久に失われる（GOX）。慎重な確認が必要。', terms: [{ word: 'セルフゴックス', def: '操作ミスで資産を失うこと' }] },
    { id: 365, category: '仮想通貨', level: 1, title: 'Web3.0', icon: '🌐', content: 'ブロックチェーンを基盤とした次世代の分散型インターネット。GAFAMによる中央集権からの脱却を目指す。', terms: [] },

    // ============================================
    // 参考プロダクト学習カード（診断結果で表示される商品を網羅）
    // ============================================
    { id: 246, category: '市場', level: 1, title: '国内債券とは', icon: '🇯🇵', content: '日本国政府や企業が発行する債券。金利は低いが安全性が高い。円建てなので為替リスクなし。', terms: [{ word: '国内債券', def: '日本円建ての債券' }] },
    { id: 247, category: '実践', level: 1, title: '定期預金の活用', icon: '🏦', content: '元本保証で最も安全な資産。ペイオフで1000万円まで保護。緊急予備資金や守りの資産として活用。', terms: [{ word: '定期預金', def: '一定期間預ける元本保証の預金' }] },
    { id: 248, category: '戦略', level: 1, title: 'バランスファンドとは', icon: '⚖️', content: '株式と債券を1本でバランス良く保有できる投資信託。リバランスも自動で行われ、初心者に最適。', terms: [{ word: 'バランスファンド', def: '複数資産に分散された投信' }] },
    { id: 249, category: '市場', level: 1, title: '国債とは', icon: '🏛️', content: '国が発行する債券で最も信用力が高い。個人向け国債は最低1万円から購入可能。元本保証に近い安全性。', terms: [{ word: '国債', def: '政府が発行する債券' }] },
    { id: 250, category: '市場', level: 2, title: '高格付社債とは', icon: '🏢', content: '信用格付けがA以上の優良企業が発行する社債。国債より利回りは高く、デフォルトリスクは低め。', terms: [{ word: '社債', def: '企業が発行する債券' }] },
    { id: 251, category: '戦略', level: 1, title: '守りの投資信託', icon: '🛡️', content: '債券中心やバランス型の投信。下落相場でも値動きが小さく、資産を守りたい人向け。', terms: [] },
    { id: 252, category: '市場', level: 1, title: '全世界株式の魅力', icon: '🌍', content: '先進国と新興国を含む約50カ国に分散投資。「オルカン」は最も人気の投資先。究極の分散投資。', terms: [{ word: '全世界株式', def: '世界中の株式に投資する商品' }] },
    { id: 253, category: '市場', level: 1, title: '債券ファンドとは', icon: '📜', content: '複数の債券に分散投資する投資信託。個別の債券を買うより少額から始められ、管理も楽。', terms: [{ word: '債券ファンド', def: '債券に投資する投資信託' }] },
    { id: 254, category: '市場', level: 1, title: '米国株式の特徴', icon: '🇺🇸', content: '世界最大の株式市場。Apple、Google、Amazonなど世界的企業が集結。過去100年の平均リターンは約10%。', terms: [{ word: '米国株式', def: 'アメリカ企業の株式' }] },
    { id: 255, category: '戦略', level: 2, title: 'セクターETFとは', icon: '🏭', content: '特定業種に集中投資するETF。IT、ヘルスケア、金融などセクター単位で投資。成長分野に賭けたい時に活用。', terms: [{ word: 'セクターETF', def: '特定業種に投資するETF' }] },
    { id: 256, category: '戦略', level: 2, title: 'スマートベータとは', icon: '🧠', content: 'バリュー、モメンタム、クオリティなどの「ファクター」に着目した投資手法。インデックスとアクティブの中間的存在。', terms: [{ word: 'スマートベータ', def: '特定のファクターで銘柄選別' }] },
    { id: 257, category: '市場', level: 2, title: 'J-REITとは', icon: '🏢', content: '日本の不動産投資信託。オフィスビルや商業施設に少額から投資可能。高い分配金利回りが魅力。', terms: [{ word: 'J-REIT', def: '日本の不動産投資信託' }] },
    { id: 258, category: '市場', level: 2, title: 'テック株とは', icon: '💻', content: 'テクノロジー企業の株式。成長性は高いが変動も大きい。GAFAM（Google、Apple、Facebook、Amazon、Microsoft）が代表格。', terms: [{ word: 'テック株', def: 'IT・ハイテク企業の株式' }] },
    { id: 259, category: '市場', level: 2, title: '新興国ファンドとは', icon: '🌏', content: '中国、インド、ブラジルなど高成長国に投資。高リターンが期待できるが、政治・経済リスクも高い。', terms: [{ word: '新興国', def: '経済成長著しい発展途上国' }] },
    { id: 260, category: '戦略', level: 2, title: 'グロース株投資', icon: '🚀', content: '高い成長が期待される企業に投資。PERは高くても将来の利益成長で正当化。変動は大きめ。', terms: [{ word: 'グロース株', def: '高成長が期待される株式' }] },
    { id: 261, category: '戦略', level: 2, title: 'テーマ型投資信託', icon: '🌿', content: 'ESG、AI、クリーンエネルギーなど特定テーマに投資。成長期待は高いが、過熱には注意が必要。', terms: [{ word: 'テーマ型投信', def: '特定テーマに投資する投信' }] },
    { id: 262, category: '戦略', level: 3, title: 'イノベーション投資', icon: '💡', content: '最先端技術や破壊的革新を起こす企業に投資。大きなリターンを狙えるが、失敗リスクも高い。', terms: [] },
    { id: 263, category: '実践', level: 2, title: '個別株投資の始め方', icon: '📊', content: '企業を選んで直接株を購入。決算や事業内容の分析が必要。分散が難しいので上級者向け。', terms: [{ word: '個別株', def: '特定企業の株式を直接購入' }] },
    { id: 264, category: '市場', level: 3, title: '仮想通貨（暗号資産）', icon: '₿', content: 'ビットコイン、イーサリアムなどのデジタル通貨。値動きが非常に激しく、投機的な側面が強い。', terms: [{ word: '仮想通貨', def: 'ブロックチェーン技術の通貨' }] },
    { id: 265, category: '市場', level: 3, title: 'レバレッジ商品とは', icon: '⚡', content: '2倍、3倍のリターン（損失も）を狙う商品。長期保有には向かず、短期トレード向け。初心者は注意。', terms: [{ word: 'レバレッジ', def: 'てこの原理で投資効果を増幅' }] },

    // ============================================
    // 追加カード Phase 1: 基礎 (20枚)
    // ============================================
    { id: 1001, category: '基礎', level: 1, title: '生活防衛資金とは', icon: '🏠', content: '投資を始める前に、まず生活費の3〜6ヶ月分を現金で確保しましょう。病気や失業など不測の事態に備えるお金です。この資金があることで、投資が値下がりしても慌てて売る必要がなくなります。預貯金で持ち、投資資金とは明確に分けて管理することが重要です。', terms: [{ word: '生活防衛資金', def: '不測の事態に備えて確保する現金' }] },
    { id: 1002, category: '基礎', level: 1, title: '投資と貯蓄の違い', icon: '🔀', content: '貯蓄は元本が保証され安全ですが、増えにくい。投資は元本保証がなくリスクがありますが、増える可能性がある。どちらか一方ではなく、目的に応じて使い分けることが大切です。近い将来使うお金は貯蓄、10年以上先のお金は投資に回すのが基本的な考え方です。', terms: [] },
    { id: 1003, category: '基礎', level: 1, title: '利回りとは', icon: '📊', content: '投資額に対する年間収益の割合。100万円投資して年5万円の利益なら利回り5%です。表面利回りと実質利回り（手数料・税金控除後）があるので注意。投資商品を比較する際の最も基本的な指標の一つです。ただし、過去の利回りが将来を保証するわけではありません。', terms: [{ word: '利回り', def: '投資額に対する収益の割合' }] },
    { id: 1004, category: '基礎', level: 1, title: 'ポートフォリオとは', icon: '🎨', content: '保有する金融資産の組み合わせのこと。株式だけ、債券だけではなく、複数の資産を組み合わせることでリスクを分散できます。年齢やリスク許容度に応じて、自分に合ったポートフォリオを構築することが長期投資の成功のカギです。', terms: [{ word: 'ポートフォリオ', def: '保有資産の構成・組み合わせ' }] },
    { id: 1005, category: '基礎', level: 1, title: '投資の時間軸', icon: '⏰', content: '短期（1年以内）、中期（1〜5年）、長期（5年以上）で投資戦略は異なります。短期はハイリスク、長期ほどリスクは低減する傾向があります。老後資金なら20〜30年の長期投資。教育資金なら10〜15年の中長期。目的に合った時間軸を設定しましょう。', terms: [] },
    { id: 1006, category: '基礎', level: 2, title: '目論見書の読み方', icon: '📖', content: '投資信託を購入する前に必ず確認すべき法定書類。運用方針、投資対象、リスク、手数料が記載されています。特に「信託報酬」「ファンドの特色」「投資リスク」のセクションは必ず確認しましょう。読みにくいですが、大切なお金を預ける前の最低限の確認です。', terms: [{ word: '目論見書', def: '投資信託の内容を記載した法定書類' }] },
    { id: 1007, category: '基礎', level: 2, title: '運用報告書の活用', icon: '📋', content: '投資信託の運用状況を報告する書類。基準価額の推移、組入銘柄、費用などが記載されます。年1〜2回発行。ベンチマークとの比較でファンドの実力がわかります。定期的にチェックして、自分の投資先が期待通りに運用されているか確認しましょう。', terms: [{ word: '運用報告書', def: 'ファンドの運用実績を報告する書類' }] },
    { id: 1008, category: '基礎', level: 2, title: '総経費率（TER）', icon: '💸', content: '信託報酬以外にも、売買委託手数料や監査費用などの「隠れコスト」があります。総経費率（TER）はこれらを全て含んだ年間コスト。信託報酬0.1%でもTERが0.2%になることも。投資信託を比較する際は、信託報酬だけでなくTERもチェックしましょう。', terms: [{ word: 'TER', def: 'Total Expense Ratio。投信の年間総コスト' }] },
    { id: 1009, category: '基礎', level: 2, title: '繰上償還リスク', icon: '⚠️', content: '投資信託の純資産総額が小さくなりすぎると、運用が困難になり「繰上償還」（予定より早く償還）される場合があります。純資産総額が50億円以上のファンドを選ぶと安心。人気のないファンドは避け、資金流入が続いているファンドを選びましょう。', terms: [{ word: '繰上償還', def: '予定より早くファンドが終了すること' }] },
    { id: 1010, category: '基礎', level: 1, title: '元本割れとは', icon: '📉', content: '投資した金額を下回ること。100万円投資して80万円になれば20万円の元本割れです。株式や投資信託は元本保証されていません。しかし長期・分散投資をすれば、元本割れのリスクは大幅に低減します。過去のデータでは、20年以上の長期投資で元本割れはほぼ発生していません。', terms: [{ word: '元本割れ', def: '投資額を下回る損失が出ること' }] },
    { id: 1011, category: '基礎', level: 2, title: '金融商品の3要素', icon: '🔺', content: '安全性・収益性・流動性の3つ。すべてを同時に満たす商品は存在しません。預金は安全性と流動性が高いが収益性が低い。株式は収益性が高いが安全性は低い。不動産は収益性があるが流動性が低い。トレードオフを理解して選択しましょう。', terms: [] },
    { id: 1012, category: '基礎', level: 1, title: '投資信託の仕組み', icon: '🏗️', content: '多くの投資家から資金を集め、専門家（ファンドマネージャー）が運用する仕組み。少額から分散投資が可能。「販売会社」「運用会社」「信託銀行」の3者で構成され、投資家の資産は信託銀行で分別管理されるため、運用会社が倒産しても資産は守られます。', terms: [{ word: '投資信託', def: '多数の投資家の資金をまとめて運用する商品' }] },
    { id: 1013, category: '基礎', level: 2, title: 'インデックスファンドとは', icon: '📈', content: '日経平均やS&P500などの指数に連動するように運用される投資信託。銘柄選定の手間がなく、低コストで市場全体に投資できます。アクティブファンドの約8割は長期でインデックスに負けるというデータもあり、初心者にも上級者にも選ばれています。', terms: [{ word: 'インデックスファンド', def: '指数に連動する投資信託' }] },
    { id: 1014, category: '基礎', level: 3, title: '効率的市場仮説', icon: '🎯', content: '株価はすでにすべての情報を反映しているため、市場を上回ることは困難という理論。これがインデックス投資の理論的根拠。完全には成り立たないが、プロでも市場平均を上回り続けるのは極めて難しいという現実が、この仮説を支持しています。', terms: [{ word: '効率的市場仮説', def: '市場価格は全情報を織り込んでいるという理論' }] },
    { id: 1015, category: '基礎', level: 3, title: 'モダンポートフォリオ理論', icon: '📐', content: 'マーコウィッツが提唱した理論。異なる値動きの資産を組み合わせることで、同じリターンでもリスクを下げられる（効率的フロンティア）。分散投資の数学的根拠であり、ノーベル経済学賞を受賞した投資理論の基礎です。', terms: [{ word: '効率的フロンティア', def: '最も効率的な資産配分の組み合わせ' }] },
    { id: 1016, category: '基礎', level: 1, title: '手数料の種類', icon: '🏷️', content: '投資にかかるコストは主に3つ。①購入時手数料（ノーロードなら無料）②信託報酬（年間の管理費）③売却時手数料（信託財産留保額）。特に信託報酬は毎年引かれるため、長期では大きな差に。0.1%と1%の差は、20年で資産の約18%もの差になります。', terms: [] },
    { id: 1017, category: '基礎', level: 1, title: '株式とは何か', icon: '📄', content: '企業の所有権の一部を表す証券。株式を買うということは、その企業のオーナーの一人になるということです。株主は配当を受け取る権利、株主総会での議決権を持ちます。企業が成長すれば株価が上がり、キャピタルゲイン（売却益）も期待できます。', terms: [{ word: '株主', def: '株式を保有する企業のオーナー' }] },
    { id: 1018, category: '基礎', level: 2, title: '時価総額加重平均', icon: '⚖️', content: 'インデックスの算出方法の一つ。企業の規模（時価総額）に比例して構成比率が決まります。TOPIXやS&P500はこの方式。大企業ほど影響力が大きく、市場全体の動きをよく反映します。一方で特定の大企業に偏るデメリットもあります。', terms: [{ word: '時価総額加重', def: '企業規模に応じた構成比率' }] },
    { id: 1019, category: '基礎', level: 2, title: '為替ヘッジの仕組み', icon: '🛡️', content: '外国資産に投資する際、為替変動の影響を抑える仕組み。円高による損失を防げますが、ヘッジコスト（金利差分）がかかります。長期投資では為替ヘッジなしが一般的。短期で為替リスクを避けたい場合はヘッジありを検討しましょう。', terms: [{ word: '為替ヘッジ', def: '為替変動リスクを回避する仕組み' }] },
    { id: 1020, category: '基礎', level: 3, title: 'トータルリターン', icon: '📊', content: '値上がり益（キャピタルゲイン）と配当・分配金（インカムゲイン）を合計した総合的なリターン。投資信託の評価は基準価額だけでなく、分配金も含めたトータルリターンで比較するのが正確です。過去のトータルリターンは将来を保証しません。', terms: [{ word: 'トータルリターン', def: '値上がり益と配当を合計した収益' }] },

    // ============================================
    // 追加カード Phase 1: 市場 (20枚)
    // ============================================
    { id: 1021, category: '市場', level: 1, title: '株価はなぜ動くか', icon: '📈', content: '株価は需要と供給で決まります。買いたい人が多ければ上がり、売りたい人が多ければ下がる。企業の業績、経済指標、政治情勢、投資家の心理など、様々な要因が影響します。短期的にはニュースや感情で乱高下しますが、長期的には企業の本質的価値に収束する傾向があります。', terms: [] },
    { id: 1022, category: '市場', level: 2, title: '信用格付けとは', icon: '🏅', content: '債券などの信用度を格付け機関（ムーディーズ、S&P、フィッチ）が評価。AAA（最高）からD（デフォルト）まで。BBB以上を「投資適格」、BB以下を「投機的格付け（ハイイールド）」と分類します。格付けが下がると債券価格も下がります。', terms: [{ word: '投資適格', def: 'BBB以上の信用格付け。比較的安全とされる' }] },
    { id: 1023, category: '市場', level: 2, title: 'イールドカーブ', icon: '📉', content: '債券の利回りを残存期間ごとにグラフ化したもの。通常は長期ほど利回りが高い（順イールド）。短期が長期を上回る「逆イールド」は景気後退のサインとして注目されます。過去の景気後退は逆イールド発生から1〜2年後に訪れることが多いです。', terms: [{ word: 'イールドカーブ', def: '利回り曲線。債券の利回りと期間の関係' }] },
    { id: 1024, category: '市場', level: 2, title: 'GDP（国内総生産）', icon: '🏭', content: '一国の経済活動の総額を示す最重要指標。GDP成長率がプラスなら景気拡大、マイナスなら景気後退。2四半期連続マイナスで「リセッション（景気後退）」と定義されます。株式市場は長期的にGDP成長と連動する傾向があります。', terms: [{ word: 'GDP', def: 'Gross Domestic Product。国内総生産' }] },
    { id: 1025, category: '市場', level: 2, title: 'CPI（消費者物価指数）', icon: '🛒', content: '物価の変動を測る指標。前年比で何%上昇したかを見ます。中央銀行はCPIを参考に金利政策を決定。CPIが上がりすぎれば利上げ、下がりすぎれば利下げ。株式市場にも大きく影響します。2022年の米CPIは約9%まで上昇し、株価急落の原因になりました。', terms: [{ word: 'CPI', def: 'Consumer Price Index。消費者物価指数' }] },
    { id: 1026, category: '市場', level: 3, title: '為替介入とは', icon: '🏛️', content: '中央銀行や政府が為替市場に直接介入して為替レートを操作すること。日本では財務省が指示し日銀が実行。2022年には円安対策で24年ぶりの円買い介入が実施されました。効果は一時的で、ファンダメンタルズを変えなければ持続しにくいです。', terms: [{ word: '為替介入', def: '政府が為替市場に直接介入すること' }] },
    { id: 1027, category: '市場', level: 1, title: 'MSCIインデックス', icon: '🌐', content: '世界の機関投資家が最も多く利用するベンチマーク。MSCI World（先進国）、MSCI Emerging Markets（新興国）、MSCI ACWI（全世界）など。これらのインデックスに連動するETFや投信が多数あり、グローバル分散投資の基盤です。', terms: [{ word: 'MSCI', def: 'Morgan Stanley Capital International。指数算出会社' }] },
    { id: 1028, category: '市場', level: 1, title: '景気サイクルとは', icon: '🔄', content: '経済は「回復→拡大→後退→不況」のサイクルを繰り返します。各局面で有利な投資先は異なります。回復期は株式、拡大期はコモディティ、後退期は債券、不況期は現金が強い傾向。サイクルの長さは不定で、予測は困難ですが、理解しておくことが重要です。', terms: [{ word: '景気サイクル', def: '経済活動の循環的な変動パターン' }] },
    { id: 1029, category: '市場', level: 2, title: '金利と株価の関係', icon: '↕️', content: '一般的に金利上昇は株価にマイナス、金利低下はプラス。理由：①高金利だと銀行預金の魅力が増し株から資金流出②企業の借入コスト増加で利益圧迫③将来の利益を現在価値に割り引く際のレートが上がる。ただし景気が好調な「良い金利上昇」では株価が上がることもあります。', terms: [] },
    { id: 1030, category: '市場', level: 2, title: '量的緩和（QE）', icon: '💵', content: '中央銀行が国債などの資産を大量購入し、市場に資金を供給する政策。金利を引き下げ、経済を刺激する効果。2008年以降、各国中央銀行が実施。株式市場には強い追い風になりますが、出口（テーパリング）時には波乱要因にもなります。', terms: [{ word: '量的緩和', def: '中央銀行による大規模な資産購入政策' }] },
    { id: 1031, category: '市場', level: 3, title: 'PEGレシオ', icon: '🔬', content: 'PER÷EPS成長率で算出。PERだけでは割高に見える成長株の妥当性を判断する指標。PEGが1以下なら割安、2以上なら割高とされます。成長率が高い企業のPERが高くても、PEGが低ければ正当化される可能性があります。', terms: [{ word: 'PEGレシオ', def: 'PERを成長率で調整した指標' }] },
    { id: 1032, category: '市場', level: 1, title: 'ETFと投信の違い', icon: '🆚', content: 'ETFは取引所でリアルタイム売買、投資信託は1日1回の基準価額で売買。ETFは指値注文可能で手数料も低め。投資信託は自動積立に対応、100円から購入可能。積立ならETFより投資信託が便利。大きな一括投資ならETFが有利な場合も。', terms: [] },
    { id: 1033, category: '市場', level: 2, title: 'テクニカル分析とファンダメンタル分析', icon: '🔍', content: 'テクニカル分析はチャートから将来の値動きを予測。ファンダメンタル分析は企業の業績や経済指標から本質的価値を評価。プロの間でも意見は分かれますが、長期投資ではファンダメンタル分析が重視される傾向にあります。', terms: [] },
    { id: 1034, category: '市場', level: 2, title: '配当性向とは', icon: '📊', content: '企業利益のうち配当として支払う割合。配当性向30%なら利益の3割を株主に還元。高すぎると事業投資に回す余裕がなく、低すぎると株主還元が不十分。日本企業の平均は約30-40%。米国企業は自社株買いを含めた総還元性向で評価する傾向。', terms: [{ word: '配当性向', def: '利益に占める配当金の割合' }] },
    { id: 1035, category: '市場', level: 3, title: 'BPS（1株当たり純資産）', icon: '💰', content: '企業の純資産を発行株式数で割った値。PBR=株価÷BPSで、PBR1倍以下は「会社を解散した方が株主にとって得」という状態。ただし将来の成長が期待できない企業は万年PBR1倍以下もあり、単純に割安とは判断できません。', terms: [{ word: 'BPS', def: 'Book Value Per Share。1株当たり純資産' }] },
    { id: 1036, category: '市場', level: 1, title: '日銀の金融政策', icon: '🇯🇵', content: '日本銀行は「物価の安定」を使命とし、金利操作やETF買入れなどの政策を実施。2013年からの異次元緩和、2016年のマイナス金利政策、2024年のマイナス金利解除など、株式市場に大きな影響を与えてきました。金融政策決定会合は年8回開催。', terms: [{ word: '日銀', def: '日本銀行。日本の中央銀行' }] },
    { id: 1037, category: '市場', level: 2, title: 'FRBとは', icon: '🇺🇸', content: '米連邦準備制度理事会。世界で最も影響力のある中央銀行。FFレート（政策金利）の変更は世界の株式・為替・債券市場を動かします。FOMC（連邦公開市場委員会）は年8回開催。議長の発言一つで世界の市場が乱高下することもあります。', terms: [{ word: 'FRB', def: 'Federal Reserve Board。米国の中央銀行' }] },
    { id: 1038, category: '市場', level: 2, title: '株式の流動性リスク', icon: '🏜️', content: '出来高の少ない銘柄は、売りたい時に希望価格で売れない「流動性リスク」があります。大型株は流動性が高く安心。小型株やIPO直後の銘柄は注意が必要。特にパニック時には流動性が急激に低下し、売りたくても売れない事態が発生します。', terms: [] },
    { id: 1039, category: '市場', level: 3, title: 'カントリーリスク', icon: '🌍', content: '投資先の国の政治・経済の不安定さによるリスク。戦争、政変、デフォルト、資本規制などが該当。新興国投資では特に重要。ロシアのウクライナ侵攻後、ロシア関連資産は取引停止になり、多くの投資家が損失を被りました。地政学リスクとも呼ばれます。', terms: [{ word: 'カントリーリスク', def: '特定国の政治経済要因によるリスク' }] },
    { id: 1040, category: '市場', level: 3, title: 'ブラックスワン', icon: '🦢', content: '予測不能で影響が甚大な事象。リーマンショック、コロナショックなどが該当。発生確率は低いが、起きた時の影響は壊滅的。ブラックスワンに備えるには①過度なレバレッジを避ける②分散投資③生活防衛資金の確保が基本です。', terms: [{ word: 'ブラックスワン', def: '想定外の重大事象。ナシーム・タレブが命名' }] },

    // ============================================
    // 追加カード Phase 2: 戦略 (10枚)
    // ============================================
    { id: 1041, category: '戦略', level: 1, title: 'ゴールベース投資', icon: '🏁', content: '「何のためにいくら貯めるか」を明確にしてから投資する方法。老後資金2000万円、教育資金500万円など。目標が定まれば必要な利回りと期間が計算でき、適切な商品が選べます。漠然と投資するより、具体的なゴールがモチベーション維持にも効果的です。', terms: [{ word: 'ゴールベース', def: '目標から逆算して投資計画を立てる手法' }] },
    { id: 1042, category: '戦略', level: 2, title: 'バケツ戦略', icon: '🪣', content: '資産を3つのバケツに分ける戦略。①短期バケツ（1-2年分の生活費。預金）②中期バケツ（3-10年分。債券中心）③長期バケツ（10年以上先。株式中心）。取り崩し期に暴落が来ても、短期バケツから使えるので株式を安値で売らずに済みます。', terms: [{ word: 'バケツ戦略', def: '期間別に資産を分けて管理する方法' }] },
    { id: 1043, category: '戦略', level: 2, title: 'コントラリアン投資', icon: '🔄', content: '多数派の逆を行く投資法。皆が売っている時に買い、皆が買っている時に売る。理論的には正しいが、精神的に非常に難しい。バリュー投資の一形態とも言えます。「血が流れている時に買え」というロスチャイルドの格言が有名です。', terms: [{ word: 'コントラリアン', def: '逆張り投資家。多数派と逆の行動をとる' }] },
    { id: 1044, category: '戦略', level: 1, title: 'つみたて投資の始め方', icon: '🏦', content: 'NISA口座で投資信託の積立設定をするだけ。①証券口座開設②NISA口座設定③ファンド選択④毎月の金額を設定⑤引落日を設定。月100円からでもOK。設定後は基本的に放置でOK。忙しい人にこそ最適な投資法です。', terms: [] },
    { id: 1045, category: '戦略', level: 2, title: '一括投資vs積立投資', icon: '🆚', content: 'まとまった資金がある場合、統計的には一括投資の方がリターンは高い（市場は長期で右肩上がりのため）。しかし高値掴みのリスクがあるため、精神的には分割投資の方が安心。初心者は積立投資から始め、慣れてきたら状況に応じて使い分けましょう。', terms: [] },
    { id: 1046, category: '戦略', level: 3, title: 'ダウの犬戦略', icon: '🐕', content: 'ダウ30銘柄のうち配当利回り上位10銘柄を等金額で購入し、1年後にリバランスする戦略。シンプルだが一定の実績あり。割安な高配当株に自動的に投資する仕組み。日本版では日経225を対象にしたバリエーションもあります。', terms: [{ word: 'ダウの犬', def: '高配当のダウ銘柄に投資する戦略' }] },
    { id: 1047, category: '戦略', level: 2, title: '定額取り崩しvs定率取り崩し', icon: '📉', content: '資産を使う段階での2つの方法。定額（毎月10万円）は計画しやすいが、暴落後は資産が早く減る。定率（資産の0.3%/月）は資産に連動し長持ちするが、収入が変動。組み合わせや状況に応じた柔軟な対応がベストです。', terms: [] },
    { id: 1048, category: '戦略', level: 1, title: '投資の優先順位', icon: '📋', content: '①借金返済（高金利）②生活防衛資金6ヶ月③NISAでインデックス積立④iDeCo⑤特定口座で追加投資。この順番が合理的です。特に高金利の借金（リボ払いなど年15%）は、投資より返済が先。投資の期待リターンより借金の利息の方が高いからです。', terms: [] },
    { id: 1049, category: '戦略', level: 3, title: 'ESG投資とは', icon: '🌿', content: 'Environment（環境）、Social（社会）、Governance（企業統治）を重視する投資手法。長期的に持続可能な企業は好業績を維持するという考え方。ESGスコアが高い企業群のパフォーマンスは、市場平均と遜色ないとの研究結果もあります。', terms: [{ word: 'ESG', def: '環境・社会・ガバナンスの頭文字' }] },
    { id: 1050, category: '戦略', level: 2, title: 'ウォーレン・バフェットの教え', icon: '🧓', content: '世界最高の投資家の名言集。「自分が理解できないものに投資するな」「素晴らしい企業を適正価格で買え」「最も重要なルールは損をしないこと」。個別株投資をしない人でも、投資哲学として学ぶ価値は非常に高いです。', terms: [] },

    // ============================================
    // 追加カード Phase 2: 心理 (10枚)
    // ============================================
    { id: 1051, category: '心理', level: 1, title: '正常性バイアス', icon: '🏖️', content: '「自分だけは大丈夫」と思い込む心理。暴落時に「すぐ戻るだろう」と根拠なく楽観視し、損切りが遅れる原因に。災害心理学でも知られるバイアスで、投資においてもリスクを過小評価させる危険があります。最悪のシナリオも想定しておきましょう。', terms: [{ word: '正常性バイアス', def: '異常事態を正常と思い込む傾向' }] },
    { id: 1052, category: '心理', level: 2, title: '認知的不協和', icon: '🔄', content: '自分の行動と矛盾する情報を無視する心理。含み損を抱えた銘柄の悪いニュースを見ないふりをしたり、買った後に良い情報ばかり集めたりする。投資判断を冷静に行うためには、自分に不利な情報こそ積極的に受け入れる姿勢が必要です。', terms: [{ word: '認知的不協和', def: '矛盾する認知からくる不快感' }] },
    { id: 1053, category: '心理', level: 2, title: 'フレーミング効果', icon: '🖼️', content: '同じ情報でも表現方法で判断が変わる心理。「利益が出る確率80%」と「損する確率20%」は同じだが、前者の方が投資したくなる。投資判断では、情報の「見せ方」に惑わされず、実質的な数値を見る習慣をつけましょう。', terms: [{ word: 'フレーミング', def: '情報の提示の仕方が判断に影響する現象' }] },
    { id: 1054, category: '心理', level: 1, title: '少額から始める理由', icon: '🌱', content: '投資は少額から始めることで、心理的な耐性を鍛えられます。1万円の10%下落は1000円。「まあいいか」と思える金額。しかし100万円の10%は10万円。同じ10%でも心理的インパクトは全く違います。まず少額で「下落の痛み」を経験してから増額しましょう。', terms: [] },
    { id: 1055, category: '心理', level: 2, title: '決断疲れ', icon: '😵', content: '判断の回数が増えると質が低下する現象。デイトレードで何度も売買判断を迫られると、後半の判断が雑になりがち。インデックス積立は「最初に決めたら放置」なので決断疲れが起きにくく、心理的に優れた投資法と言えます。', terms: [{ word: '決断疲れ', def: '判断の繰り返しで質が低下すること' }] },
    { id: 1056, category: '心理', level: 3, title: 'ナラティブの罠', icon: '📖', content: 'もっともらしい「物語」に説得されてしまう心理。「AIが世界を変える→AI株は必ず上がる」のような単純なストーリーは魅力的ですが、株価にはすでに期待が織り込まれていることが多い。物語ではなくデータと冷静な分析で判断しましょう。', terms: [] },
    { id: 1057, category: '心理', level: 1, title: '暴落を想定する', icon: '📝', content: '暴落は必ず来ます。事前に「30%下落しても売らない」「50%下落したら買い増す」などのルールを書き出しておきましょう。パニック時に冷静な判断はできません。平常心の時に作ったルールに従うことが、長期投資を成功させる秘訣です。', terms: [] },
    { id: 1058, category: '心理', level: 2, title: '授かり効果', icon: '🤲', content: '一度手に入れたものを過大評価する心理。保有銘柄を実際の価値以上に評価してしまい、適切なタイミングで売却できなくなります。「もし今この銘柄を持っていなかったら、今の価格で買うか？」と自問することで客観的な判断が可能になります。', terms: [{ word: '授かり効果', def: '保有物を過大評価する傾向' }] },
    { id: 1059, category: '心理', level: 3, title: 'ダニングクルーガー効果', icon: '📚', content: '知識が少ない人ほど自分の能力を過大評価する現象。投資を始めたばかりで数回利益が出ると「自分には才能がある」と勘違いしがち。真の投資の難しさは、長期間市場にいてこそわかります。「知らないことを知る」ことが上達の第一歩です。', terms: [{ word: 'ダニングクルーガー', def: '能力の低い人ほど自己評価が高い現象' }] },
    { id: 1060, category: '心理', level: 2, title: '投資と睡眠の関係', icon: '😴', content: '夜眠れなくなるほどのリスクを取ってはいけません。投資額やリスクが適切かどうかの簡単なバロメーターは「ぐっすり眠れるかどうか」。不安で眠れないなら、ポジションを縮小するか、よりリスクの低い商品に切り替えましょう。健康が最大の資産です。', terms: [] },

    // ============================================
    // 追加カード Phase 3: 税金・制度 (10枚)
    // ============================================
    { id: 1061, category: '税金・制度', level: 1, title: 'NISA口座の注意点', icon: '⚠️', content: 'NISA口座では損益通算ができません。NISA口座で損失が出ても、特定口座の利益と相殺できない。また1人1口座のみで、年の途中での金融機関変更は翌年から。NISA口座は利益が出る前提で使うのが正解。損失リスクが高い商品はNISAに向きません。', terms: [] },
    { id: 1062, category: '税金・制度', level: 2, title: '確定拠出年金の移管', icon: '🔄', content: '転職時にDC（企業型確定拠出年金）の資産を移す手続き。放置すると「自動移管」され手数料がかかり続けます。転職先にDCがあれば移管、なければiDeCoに移管。退職後6ヶ月以内に手続きしないと自動移管されるので要注意。', terms: [{ word: '自動移管', def: 'DC資産が放置された場合の強制移管' }] },
    { id: 1063, category: '税金・制度', level: 2, title: '暦年贈与の活用', icon: '🎁', content: '年間110万円まで贈与税が非課税。家族に毎年110万円ずつ贈与すれば、10年で1100万円を非課税で移転可能。投資で増やした資産の相続対策として有効。ただし定期的な贈与は「連年贈与」と見なされるリスクもあるため、毎年贈与契約書を作成すると安心です。', terms: [] },
    { id: 1064, category: '税金・制度', level: 1, title: '特定口座年間取引報告書', icon: '📄', content: '証券会社から毎年届く取引の年間まとめ。確定申告に必要な情報がすべて記載されています。源泉徴収ありの特定口座なら確定申告不要ですが、損益通算や損失繰越をしたい場合は出して確定申告しましょう。e-Taxならスマホでも申告可能です。', terms: [] },
    { id: 1065, category: '税金・制度', level: 2, title: 'iDeCoの節税効果', icon: '💡', content: '掛金全額が所得控除。年収500万円の会社員が月23,000円拠出すると、年間約55,000円の節税に。30年間で約165万円の節税効果。さらに運用益も非課税。受取時も退職所得控除や公的年金等控除が使える、三重の税制優遇があります。', terms: [] },
    { id: 1066, category: '税金・制度', level: 3, title: '退職所得控除の計算', icon: '🧮', content: 'iDeCoを一時金で受け取る際に適用。勤続年数20年以下は40万円×年数、20年超は800万円+70万円×(年数-20)。例：30年加入なら1500万円まで非課税。DC加入期間も含むため、長期加入者ほど有利になります。', terms: [{ word: '退職所得控除', def: '退職金にかかる税金を軽減する控除' }] },
    { id: 1067, category: '税金・制度', level: 2, title: '配偶者控除と投資', icon: '👫', content: '配偶者の投資利益が一定額を超えると配偶者控除が受けられなくなる場合があります。特定口座（源泉徴収あり）で完結していれば、確定申告しない限り所得に含まれません。申告する場合は配偶者の所得に注意しましょう。', terms: [] },
    { id: 1068, category: '税金・制度', level: 1, title: '投資に関する届出', icon: '📝', content: '株式投資を始める際、特別な届出は不要です。証券口座開設時にマイナンバーを提出すれば、税務関連の手続きは証券会社が代行。特定口座（源泉徴収あり）を選べば、確定申告も原則不要。投資は思っているより手続きが簡単です。', terms: [] },
    { id: 1069, category: '税金・制度', level: 3, title: '海外赴任とNISA', icon: '✈️', content: '海外転勤でNISA口座は一時的に「非居住者」扱いとなり、新規投資は不可。ただし最大5年間は保有を継続可能（届出が必要）。帰国後は再開可能。事前に証券会社に確認し、手続きを行いましょう。', terms: [] },
    { id: 1070, category: '税金・制度', level: 2, title: '株式投資と社会保険料', icon: '🏥', content: '会社員の場合、株式の譲渡益や配当は社会保険料に影響しません（申告分離課税の場合）。ただし自営業者で国民健康保険に加入している場合は、確定申告した株式所得が保険料に影響する場合があります。働き方によって取り扱いが異なるので注意。', terms: [] },

    // ============================================
    // 追加カード Phase 3: 実践 (10枚)
    // ============================================
    { id: 1071, category: '実践', level: 1, title: 'ロボアドバイザーとは', icon: '🤖', content: 'AIが自動で資産配分を決めて運用してくれるサービス。WealthNavi、THEO等が有名。質問に答えるだけでポートフォリオを自動構築・リバランス。手数料は年1%程度と投資信託より高めですが、何もわからない完全初心者には便利な選択肢です。', terms: [{ word: 'ロボアドバイザー', def: 'AI を活用した自動運用サービス' }] },
    { id: 1072, category: '実践', level: 2, title: '四季報の読み方', icon: '📚', content: '会社四季報は上場企業の基本情報が網羅された投資家のバイブル。業績欄（売上・利益の推移）、株主欄（大株主の動向）、コメント欄（記者の見立て）が重要。「来期増収増益予想+記者コメントが前向き」の銘柄は有望候補です。', terms: [{ word: '四季報', def: '東洋経済新報社が発行する企業情報誌' }] },
    { id: 1073, category: '実践', level: 1, title: '楽天証券の特徴', icon: '🦅', content: '楽天ポイントで投資可能。楽天カード積立で0.5〜1%還元。楽天銀行との連携で金利優遇。iSPEED（アプリ）は使いやすいと好評。楽天経済圏を活用する人には特におすすめ。NISA口座数は業界トップクラスです。', terms: [] },
    { id: 1074, category: '実践', level: 1, title: 'SBI証券の特徴', icon: '📊', content: '口座数業界最大。三井住友カードの積立で最大5%還元（条件あり）。SBIハイブリッド預金で金利優遇。Vポイントが貯まる。海外ETFの品揃えが豊富。手数料の安さと商品の充実度で選ぶならSBI証券は有力候補です。', terms: [] },
    { id: 1075, category: '実践', level: 2, title: 'マネーフォワードで資産管理', icon: '📱', content: '銀行・証券・クレジットカードを連携して資産を一括管理。投資のリターンやポートフォリオの偏りが可視化されます。支出管理もできるので、投資に回せるお金の把握にも役立ちます。無料プランでも基本機能は十分使えます。', terms: [] },
    { id: 1076, category: '実践', level: 2, title: '投資の記録をつける', icon: '📓', content: '売買日時、銘柄、金額、判断理由を記録しましょう。感情の動きも書いておくと後で振り返る際に役立ちます。「なぜ買ったか」「なぜ売ったか」を言語化することで、投資判断の質が向上します。スプレッドシートでもノートでもOKです。', terms: [] },
    { id: 1077, category: '実践', level: 2, title: 'ポイント投資の活用', icon: '🎯', content: '楽天ポイント、Vポイント、dポイントなどで投資信託や株式を購入可能。実質0円で投資体験できるため、初心者の第一歩に最適。ポイントで購入した投資信託も、通常の投資と同じ利益を得られます。余ったポイントの有効活用にもなります。', terms: [] },
    { id: 1078, category: '実践', level: 1, title: '家計の見直しが先', icon: '💡', content: '投資額を増やす最も確実な方法は、家計の支出削減。固定費（通信費、保険、サブスク）を見直すだけで月1〜3万円浮くこともあります。その浮いたお金をNISA口座で積み立てれば、20年後には数百万円の差になります。投資のリターンを上げるより確実です。', terms: [] },
    { id: 1079, category: '実践', level: 3, title: '確定申告の実務', icon: '📝', content: '投資関連の確定申告はe-Taxで簡単。①年間取引報告書を準備②e-Taxにログイン③「株式等の譲渡所得等」に入力④配当所得を入力⑤還付金を確認⑥送信。損失繰越がある場合は3年連続で申告する必要があります。毎年2月16日〜3月15日に提出。', terms: [] },
    { id: 1080, category: '実践', level: 2, title: '投資の勉強方法', icon: '📖', content: '①本（「ウォール街のランダム・ウォーカー」「敗者のゲーム」が定番）②YouTube（両学長、バフェット太郎等）③証券会社の学習コンテンツ④金融庁のNISA公式ガイド。詐欺情報に注意しつつ、複数のソースから学ぶのが安全です。有料サロンは不要。', terms: [] },

    // ============================================
    // 追加カード Phase 4: FX (15枚)
    // ============================================
    { id: 1081, category: 'FX', level: 1, title: '経済指標カレンダー', icon: '📅', content: 'FX取引に重要な経済指標の発表スケジュール。米雇用統計（毎月第1金曜）、FOMC（年8回）、CPI（毎月中旬）は特に要注目。発表前後は大きく相場が動くため、ポジション管理が重要です。指標発表時のスプレッド拡大にも注意しましょう。', terms: [{ word: '経済指標', def: '経済状況を数値化した統計データ' }] },
    { id: 1082, category: 'FX', level: 1, title: 'ドル円の特徴', icon: '🇺🇸', content: '世界で最も取引される通貨ペアの一つ。日米の金利差が主な変動要因。円安ドル高は日本株にプラス、輸入コスト増でマイナス。2022-2024年は日米金利差拡大で円安が急進行。日本の投資家にとって最も身近な通貨ペアです。', terms: [] },
    { id: 1083, category: 'FX', level: 2, title: 'ユーロドルの特徴', icon: '🇪🇺', content: '世界で最も取引量が多い通貨ペア。ECB（欧州中央銀行）とFRBの政策金利差が主な変動要因。ユーロ圏は19カ国で構成されるため、政治リスクも影響。ギリシャ危機やブレグジットでも大きく変動しました。', terms: [{ word: 'ECB', def: '欧州中央銀行。ユーロ圏の金融政策を管轄' }] },
    { id: 1084, category: 'FX', level: 2, title: 'ポンドの特性', icon: '🇬🇧', content: '英ポンドは「殺人通貨」の異名を持つほどボラティリティが高い。ドル円の2-3倍の値幅で動くこともあります。ブレグジット以降も政治的要因で乱高下。ハイリスク・ハイリターンで、FX上級者向けの通貨です。', terms: [] },
    { id: 1085, category: 'FX', level: 1, title: 'スワップポイント生活', icon: '💤', content: 'FXのスワップポイント（金利差調整額）を狙う長期保有戦略。高金利通貨（メキシコペソ、南アフリカランド）を買い、毎日スワップを受け取る。しかし為替下落で元本を失うリスクあり。金利だけ見て通貨の信用リスクを無視するのは危険です。', terms: [] },
    { id: 1086, category: 'FX', level: 2, title: 'ロスカットの仕組み', icon: '🚨', content: '証拠金維持率が一定水準を下回ると、保有ポジションが強制決済される仕組み。投資家の損失を限定するための安全装置ですが、急激な変動時にはスリッページで想定以上の損失が出る場合も。レバレッジを抑え、余裕のある証拠金を維持しましょう。', terms: [{ word: 'ロスカット', def: '証拠金不足による強制決済' }] },
    { id: 1087, category: 'FX', level: 2, title: 'ボリンジャーバンド活用', icon: '📊', content: '移動平均線の上下に標準偏差の帯を表示する指標。バンドの±2σに価格が収まる確率は約95%。バンドウォーク（バンドに沿って動く）は強いトレンドのサイン。スクイーズ（バンド収縮）後のブレイクアウトも重要なシグナルです。', terms: [] },
    { id: 1088, category: 'FX', level: 3, title: 'フィボナッチリトレースメント', icon: '📐', content: '値幅の23.6%、38.2%、50%、61.8%の水準で反転しやすいという理論。上昇トレンドの押し目買いポイントを探す際に有効。多くのトレーダーが注目するため、自己実現的に機能する側面もあります。他のテクニカル指標との併用が推奨されます。', terms: [{ word: 'フィボナッチ', def: 'フィボナッチ数列に基づく比率で分析する手法' }] },
    { id: 1089, category: 'FX', level: 3, title: 'FX自動売買のリスク', icon: '🤖', content: 'EA（Expert Advisor）やミラートレードなどの自動売買。過去の相場に最適化されたシステムが、将来も通用する保証はありません（カーブフィッティング問題）。バックテストの結果が良くてもフォワードテストで失敗する例は多いです。', terms: [{ word: 'EA', def: 'Expert Advisor。FXの自動売買プログラム' }] },
    { id: 1090, category: 'FX', level: 1, title: 'デモ口座で練習', icon: '🎮', content: '実際のお金を使わずにFX取引を体験できる口座。各FX会社が無料で提供しています。本番と同じ取引環境で練習できるため、初心者はまずデモ口座で操作に慣れてから実取引を始めましょう。ただしデモと実取引では心理的な負荷が全く異なります。', terms: [{ word: 'デモ口座', def: '仮想資金で取引を体験できる口座' }] },
    { id: 1091, category: 'FX', level: 2, title: 'ダウ理論とトレンド', icon: '📈', content: 'トレンドの判断基準として最も基本的な理論。高値・安値が切り上がれば上昇トレンド、切り下がれば下降トレンド。トレンドは明確な転換シグナルが出るまで継続する。FXトレードの基本中の基本で、全てのテクニカル分析のベースになっています。', terms: [{ word: 'ダウ理論', def: 'トレンドの方向性を判断する基礎理論' }] },
    { id: 1092, category: 'FX', level: 3, title: 'IFD・OCO注文', icon: '🔧', content: 'IFD注文は「指値で買い→利確の指値売り」を同時設定。OCO注文は「利確と損切り」を同時に出し、片方が約定したらもう片方がキャンセル。IFO注文はIFD+OCOの組み合わせ。注文を活用すれば、画面に張り付かずにリスク管理が可能です。', terms: [{ word: 'IFD', def: 'If Done。条件付き連続注文' }] },
    { id: 1093, category: 'FX', level: 2, title: 'リスクリワード比', icon: '⚖️', content: '利益目標と損切り幅の比率。1:2なら損切り50pipsに対して利確100pips。勝率50%でもリスクリワード1:2なら利益が出る計算。勝率だけでなく、この比率を意識することがFXで生き残るための核心的な概念です。', terms: [{ word: 'リスクリワード', def: '損失と利益の比率' }] },
    { id: 1094, category: 'FX', level: 1, title: 'FXの取引時間', icon: '🕐', content: 'FX市場は月曜早朝〜土曜早朝まで24時間取引可能。東京時間（9-17時）、ロンドン時間（16-1時）、NY時間（22-6時）の3セッション。最も活発なのはロンドンとNYが重なる時間帯。平日の仕事後でも取引できるのがFXの魅力の一つです。', terms: [] },
    { id: 1095, category: 'FX', level: 3, title: 'ポジションサイジング', icon: '📏', content: '1回の取引でいくらリスクを取るか決めるルール。一般的には口座資金の1-2%が推奨。100万円なら1回の最大損失は1-2万円。これを守れば10回連続で負けても資金の80%以上は残ります。FXで退場しないための最も重要なルールです。', terms: [{ word: 'ポジションサイジング', def: '取引量を適切に管理する手法' }] },

    // ============================================
    // 追加カード Phase 4: 仮想通貨 (15枚)
    // ============================================
    { id: 1096, category: '仮想通貨', level: 2, title: 'レイヤー2ソリューション', icon: '🔗', content: 'ブロックチェーンの処理速度を改善する技術。メインチェーン（レイヤー1）の外で処理を行い、結果だけを記録。ライトニングネットワーク（BTC）やOptimism、Arbitrum（ETH）が代表例。ガス代（手数料）の大幅削減が実現します。', terms: [{ word: 'レイヤー2', def: 'メインチェーン上に構築される高速処理層' }] },
    { id: 1097, category: '仮想通貨', level: 2, title: 'CBDC（中央銀行デジタル通貨）', icon: '🏛️', content: '中央銀行が発行するデジタル通貨。中国のデジタル人民元が先行。日本では「デジタル円」が検討中。ビットコインとは異なり、国が管理する中央集権的なデジタル通貨。プライバシーやプログラマブルマネーの議論が活発化しています。', terms: [{ word: 'CBDC', def: 'Central Bank Digital Currency。中銀デジタル通貨' }] },
    { id: 1098, category: '仮想通貨', level: 3, title: 'DAO（分散型自律組織）', icon: '🏛️', content: 'スマートコントラクトで運営される組織。株主総会のように、トークン保有者が投票で意思決定。中央管理者がいない新しい組織形態。MakerDAO、UniswapなどのDeFiプロトコルが代表例。ガバナンストークンが議決権の役割を果たします。', terms: [{ word: 'DAO', def: 'Decentralized Autonomous Organization' }] },
    { id: 1099, category: '仮想通貨', level: 1, title: '暗号資産の税金', icon: '💰', content: '日本では暗号資産の利益は「雑所得」として総合課税。最高税率は住民税含めて55%。売却時だけでなく、他の暗号資産との交換、商品購入での使用も課税対象。年間20万円以上の利益で確定申告が必要。計算が複雑なので専用ツールの利用がオススメ。', terms: [] },
    { id: 1100, category: '仮想通貨', level: 2, title: 'メタバースと暗号資産', icon: '🌐', content: '仮想空間内での経済活動にブロックチェーンが活用。Decentraland、The Sandboxなどで仮想土地がNFTとして売買。ゲーム内アイテムの所有権も保証。まだ発展途上だが、将来的にはメタバース上のデジタル経済が拡大する可能性があります。', terms: [] },
    { id: 1101, category: '仮想通貨', level: 1, title: '取引所の選び方', icon: '🏢', content: '日本の金融庁に登録された暗号資産交換業者を選ぶこと。bitFlyer、Coincheck、GMOコイン等が代表的。①セキュリティ②取扱通貨の種類③手数料④使いやすさで比較。海外取引所は規制上のリスクがあるため、初心者は国内取引所が安全です。', terms: [] },
    { id: 1102, category: '仮想通貨', level: 2, title: 'DeFiの利回り', icon: '🌾', content: 'DeFiプロトコルに暗号資産を預けて利回りを得る「イールドファーミング」や「流動性マイニング」。APY（年利）数十%もあるが、スマートコントラクトの脆弱性、インパーマネントロス、ラグプル（持ち逃げ）など特有のリスクがあります。', terms: [{ word: 'イールドファーミング', def: 'DeFiに資産を預けて利回りを得ること' }] },
    { id: 1103, category: '仮想通貨', level: 3, title: 'ハードフォークとソフトフォーク', icon: '🍴', content: 'ブロックチェーンのルール変更方法。ハードフォークは互換性がない変更で、チェーンが分岐（BTC→BCH）。ソフトフォークは後方互換性のある変更。コミュニティの合意形成が重要で、意見対立がハードフォークを引き起こすこともあります。', terms: [{ word: 'フォーク', def: 'ブロックチェーンのプロトコル変更' }] },
    { id: 1104, category: '仮想通貨', level: 1, title: 'ビットコインETF', icon: '📊', content: '2024年1月に米国で現物ビットコインETFが承認。ブラックロック、フィデリティ等が運用。証券口座からビットコインに投資可能になり、機関投資家の参入が加速。暗号資産を直接保有するリスクなく、規制された環境で投資できます。', terms: [{ word: 'ビットコインETF', def: 'BTC価格に連動する上場投資信託' }] },
    { id: 1105, category: '仮想通貨', level: 2, title: 'トークノミクス', icon: '📈', content: 'トークンの経済設計。発行総量、配布方法、バーン（焼却）メカニズム、インフレ率などの設計がトークンの価値に影響。発行上限があるBTCはデフレ型、ETHはEIP-1559によりバーン機能を導入。プロジェクトの持続可能性を評価する重要な指標です。', terms: [{ word: 'トークノミクス', def: 'トークンの経済設計・仕組み' }] },
    { id: 1106, category: '仮想通貨', level: 3, title: 'ゼロ知識証明', icon: '🔐', content: '情報を開示せずに「その情報を持っている」ことを証明する暗号技術。プライバシーの保護とスケーラビリティの向上に活用。zkRollup、zkSNARKsなどの技術が実用化段階。ブロックチェーンの次世代技術として注目されています。', terms: [{ word: 'ゼロ知識証明', def: '秘密情報を開示せずに証明する暗号技術' }] },
    { id: 1107, category: '仮想通貨', level: 1, title: '暗号資産詐欺の見分け方', icon: '🚨', content: '「必ず儲かる」「元本保証」は詐欺の典型的なフレーズ。SNSでの勧誘、著名人を騙った広告、新規コインのプレセール詐欺に注意。公式サイトのURL確認、ホワイトペーパーの精査、チーム実在性の確認が基本的な対策です。', terms: [] },
    { id: 1108, category: '仮想通貨', level: 2, title: 'オンチェーン分析', icon: '🔍', content: 'ブロックチェーン上のデータを分析して市場動向を予測。大口ウォレットの動き（クジラウォッチング）、取引所への入出金、アクティブアドレス数などが指標。テクニカル分析とは異なる、暗号資産独自の分析手法です。', terms: [{ word: 'オンチェーン', def: 'ブロックチェーン上に記録されたデータ' }] },
    { id: 1109, category: '仮想通貨', level: 2, title: 'リップル（XRP）の特徴', icon: '💧', content: '国際送金に特化した暗号資産。銀行間送金を高速・低コストで実現。SEC（米証券取引委員会）との訴訟が話題に。日本では根強い人気があり、SBIグループとの連携も注目ポイント。送金速度3-5秒は暗号資産の中でもトップクラスです。', terms: [] },
    { id: 1110, category: '仮想通貨', level: 1, title: '暗号資産の管理', icon: '🔑', content: '「Not your keys, not your coins」。取引所に預けたままでは、取引所のハッキングや倒産で資産を失うリスクがある（Mt.Gox事件、FTX破綻）。長期保有ならハードウェアウォレットでの自己管理を検討。シードフレーズは絶対に他人に教えないこと。', terms: [{ word: 'シードフレーズ', def: 'ウォレット復元に必要な秘密のフレーズ' }] },

    // ============================================
    // 追加カード Phase 5: チャート分析 (5枚)
    // ============================================
    { id: 1111, category: 'チャート分析', level: 2, isPro: true, title: 'ATR（平均真の値幅）', icon: '📏', content: '一定期間の値幅（高値-安値）の平均。ボラティリティの大きさを数値化する指標。ATRが大きいほど値動きが荒い。損切り幅の設定に活用でき、ATRの2倍を損切りラインにする手法が一般的。過去のパターンが将来を保証するものではありません。', terms: [{ word: 'ATR', def: 'Average True Range。平均真の値幅' }], pattern: 'atr' },
    { id: 1112, category: 'チャート分析', level: 3, isPro: true, title: '出来高プロファイル', icon: '📊', content: '価格帯ごとの出来高を横方向に表示。最も出来高が多い価格帯（VAP）はサポート・レジスタンスとして機能しやすい。出来高の少ない価格帯は素早く通過する傾向。機関投資家の意識する価格帯を可視化できる高度な分析ツール。', terms: [{ word: '出来高プロファイル', def: '価格帯別の取引量を可視化する分析' }], pattern: 'volume_profile' },
    { id: 1113, category: 'チャート分析', level: 2, isPro: true, title: 'ピボットポイント', icon: '🎯', content: '前日の高値・安値・終値から本日のサポート・レジスタンスを算出する指標。デイトレーダーに広く使われる。R1/R2（上値目標）とS1/S2（下値目標）で当日の値動きの目安を把握。多くのトレーダーが参照するため自己実現的に機能しやすい。', terms: [{ word: 'ピボットポイント', def: '前日の値から算出するサポート・レジスタンス' }], pattern: 'pivot_point' },
    { id: 1114, category: 'チャート分析', level: 2, isPro: true, title: 'エンベロープ', icon: '✉️', content: '移動平均線の上下に一定割合（例：±3%）のバンドを表示。ボリンジャーバンドより単純だが効果的。バンドの外に出ると「行き過ぎ」のサイン。逆張り戦略に活用されるが、トレンドが強い場合はバンド沿いに動くこともあり注意が必要。', terms: [{ word: 'エンベロープ', def: '移動平均線から一定幅のバンド' }], pattern: 'envelope' },
    { id: 1115, category: 'チャート分析', level: 3, isPro: true, title: 'マルチタイムフレーム分析', icon: '🔎', content: '複数の時間軸を同時に確認する分析法。日足でトレンド方向を確認→4時間足でエントリーポイントを探す→1時間足でタイミングを計る。上位足の方向に逆らわないのが基本原則。プロトレーダーの多くが実践する重要な手法。', terms: [{ word: 'マルチタイムフレーム', def: '複数時間軸で市場を分析する手法' }], pattern: 'multi_timeframe' },
];

// Pro-exclusive chart pattern card images/descriptions

export const chartPatternDescriptions = {
    head_and_shoulders: '左肩→頭→右肩の3つのピークで構成。頭が最高点。',
    inverse_head_and_shoulders: '左肩→頭→右肩の3つの谷で構成。頭が最安点。',
    double_top: 'M字型。2つの同水準の高値を形成後、下落。',
    double_bottom: 'W字型。2つの同水準の安値を形成後、上昇。',
    ascending_trendline: '安値を結ぶ右肩上がりの直線。',
    descending_trendline: '高値を結ぶ右肩下がりの直線。',
    symmetrical_triangle: '高値は切り下げ、安値は切り上げで三角形を形成。',
    ascending_triangle: '上値抵抗線が水平、下値支持線が右肩上がり。',
    descending_triangle: '下値支持線が水平、上値抵抗線が右肩下がり。',
    support_resistance: '水平線で示す支持線と抵抗線。',
    flag: '急騰後の平行四辺形の調整。元のトレンド方向に継続。',
    pennant: '急騰後の収束する三角形。',
    candlestick_basics: '始値、終値、高値、安値を1本で表現。',
    marubozu: 'ヒゲのない強いローソク足。',
    doji: '十字型。始値と終値がほぼ同じ。',
    hammer: '下ヒゲが長く、上ヒゲがほぼない。',
    hanging_man: 'ハンマーと同形だが上昇トレンドで出現。',
    engulfing: '前日のローソク足を完全に包み込む。',
    moving_average: '価格の平均を結んだ滑らかな曲線。',
    golden_cross: '短期線が長期線を下から上に突き抜け。',
    dead_cross: '短期線が長期線を上から下に突き抜け。',
    bollinger_bands: '移動平均線の上下にバンドを表示。',
    rsi: '0-100のオシレーター。70以上は買われすぎ。',
    macd: '2本の線とヒストグラムで構成。',
    fibonacci: '23.6%, 38.2%, 50%, 61.8%の水平線。',
    volume_price: '価格チャートの下に棒グラフで表示。',
    gap: '前日終値と当日始値の間の空白。',
    wedge: '収束する斜めの線で構成。',
    cup_with_handle: 'U字型の底と小さな調整。',
    disclaimer: '分析ツールは補助的なもの。',
    ichimoku_base: '5本の線で時間と価格を分析。',
    ichimoku_cloud_break: '価格が抵抗帯（雲）を突破。',
    sanyaku_kouten: '3つの買い条件が揃う強力サイン。',
    elliott_wave_impulse: '上昇5波・下降3波のサイクル。',
    stochastic: '2本の線の交差で過熱感を判断。',
    parabolic: '放物線を描くドットがトレンド追随。',
    v_bottom: '急落からの急反発。鋭いV字。',
    rounding_bottom: '時間をかけて緩やかに底打ち。',
    diamond_top: '高値圏でのダイヤモンド型保ち合い。',
    rectangle: '一定レンジ内での往復運動。',
    divergence: '価格と指標が逆の動きをする現象。',
    granville: '移動平均線と価格の乖離で判断。',
    sankuu: '3回連続で窓を開ける強い動き。',
    sanpei: '3本連続で続く陽線または陰線。'
};

// ============================================
// INDEX INVESTING BUNDLE - EXCLUSIVE CONTENT
// ~42 cards with enriched, detailed explanations
// ============================================
export const indexBundleCards = [
    // Step 1: インデックス投資を知る (7 cards)
    {
        id: 5001,
        category: 'インデックス投資',
        level: 1,
        title: 'インデックス投資とは何か',
        icon: '📊',
        content: 'インデックス投資とは、日経平均やS&P500などの「市場指数（インデックス）」に連動する運用成績を目指す投資手法です。個別の銘柄を選ぶのではなく、市場全体に投資するイメージです。例えばS&P500に連動するファンドを買えば、アメリカの大企業500社すべてに分散投資したことになります。1970年代にジョン・ボーグル氏がバンガード社を設立し、個人投資家向けに低コストのインデックスファンドを提供したことで広まりました。現在では世界中で数百兆円もの資金がインデックス運用されています。',
        terms: [{ word: 'インデックス', def: '市場全体の動きを表す指数。日経平均、TOPIX、S&P500など' }]
    },
    {
        id: 5002,
        category: 'インデックス投資',
        level: 1,
        title: 'なぜインデックス投資が選ばれるのか',
        icon: '🏆',
        content: 'プロのファンドマネージャーが運用する「アクティブファンド」の約8割が、長期的には市場平均（インデックス）に負けるというデータがあります。残り2割も、事前にどのファンドが勝つか予測することはほぼ不可能です。S&Pダウ・ジョーンズ社が毎年発表する「SPIVA」というレポートでは、15年以上の長期で見ると約90%のアクティブファンドがインデックスに負けています。つまり、特別な銘柄選定をしなくても、市場平均についていくだけで上位10%に入れる可能性があるのです。これがインデックス投資が「勝者のゲーム」と呼ばれる理由です。',
        terms: [{ word: 'アクティブファンド', def: 'ファンドマネージャーが銘柄を選んで市場平均を上回ることを目指すファンド' }]
    },
    {
        id: 5003,
        category: 'インデックス投資',
        level: 1,
        title: 'コストが運用成績を左右する',
        icon: '💸',
        content: 'インデックス投資の最大の武器は「低コスト」です。投資信託には「信託報酬」という年間の運用管理費用がかかります。アクティブファンドは年1〜2%程度が一般的ですが、インデックスファンドは年0.1%以下のものもあります。「たった1%の差」と思うかもしれませんが、30年間運用すると複利効果で大きな差になります。例えば1000万円を年利5%で30年運用した場合、コスト0%なら約4320万円、コスト1%（実質利回り4%）なら約3240万円。約1000万円もの差が生まれます。',
        terms: [{ word: '信託報酬', def: '投資信託を保有している間、毎日資産から差し引かれる運用管理費用' }]
    },
    {
        id: 5004,
        category: 'インデックス投資',
        level: 1,
        title: '分散投資の究極形',
        icon: '🌍',
        content: 'インデックスファンド1本で、数百〜数千の銘柄に分散投資できます。例えば「全世界株式インデックス」なら、アメリカ、日本、ヨーロッパ、新興国など約50カ国、3000銘柄以上に投資することになります。個別株で同じ分散を実現するには膨大な資金と手間が必要ですが、インデックスファンドなら月100円から可能です。「卵は一つのカゴに盛るな」という格言がありますが、インデックス投資はその教えを最も効率的に実践する方法と言えます。特定の企業が倒産しても、ポートフォリオ全体への影響は限定的です。',
        terms: [{ word: '分散投資', def: '複数の資産や地域に投資を分けてリスクを軽減する手法' }]
    },
    {
        id: 5005,
        category: 'インデックス投資',
        level: 1,
        title: '投資に時間をかけなくて良い',
        icon: '⏰',
        content: 'インデックス投資の大きなメリットは「手間がかからない」ことです。個別株投資では、企業の決算書を読み、業界動向を分析し、売買タイミングを見極める必要があります。しかしインデックス投資なら、一度積立設定をすれば、あとは基本的に放置するだけです。仕事や家庭に忙しい方でも、投資のプロと同等以上の成績を目指せます。チャールズ・エリス氏の名著「敗者のゲーム」では、「何もしないことが最善の戦略」と述べられています。市場のニュースに一喜一憂する必要がないのは、精神的にも大きなメリットです。',
        terms: []
    },
    {
        id: 5006,
        category: 'インデックス投資',
        level: 1,
        title: '長期投資と相性抜群',
        icon: '📅',
        content: '株式市場は短期的には大きく変動しますが、長期的には経済成長に連動して上昇してきた歴史があります。S&P500の過去100年のデータを見ると、どの15年間を切り取っても、投資元本を下回ったケースはありません。もちろん過去の実績が将来を保証するものではありませんが、人類の経済活動が続く限り、世界経済は長期的に成長し続けるという考え方がインデックス投資の根底にあります。大切なのは「市場に居続けること」。暴落時に売ってしまうと、その後の回復の恩恵を受けられません。',
        terms: []
    },
    {
        id: 5007,
        category: 'インデックス投資',
        level: 1,
        title: 'インデックス投資のデメリット',
        icon: '⚠️',
        content: 'インデックス投資にもデメリットはあります。まず「大きく勝つことはできない」こと。市場平均と同じ成績を目指すため、10倍になる個別株を当てるような大儲けは期待できません。また「退屈」という声も多いです。毎月自動で積み立てるだけなので、投資している実感が薄れることも。さらに、市場全体が下落する局面では、インデックスも同様に下落します。リーマンショック時にはS&P500は約50%下落しました。ただし、その後数年で回復し、現在は当時の何倍にもなっています。短期的な下落に耐える覚悟は必要です。',
        terms: []
    },

    // Step 2: インデックスファンドを理解する (7 cards)
    {
        id: 5008,
        category: 'インデックス投資',
        level: 1,
        title: '投資信託の仕組み',
        icon: '🏦',
        content: '投資信託とは、多くの投資家から集めたお金をひとまとめにして、運用の専門家が株式や債券などに投資する金融商品です。あなたが1万円投資すると、他の投資家のお金と合わせて数百億円規模のファンドとして運用されます。利益も損失も、出資比率に応じて分配されます。個人では買えないような分散投資が少額から可能になるのが最大のメリットです。投資信託には「ベビーファンド」と「マザーファンド」という構造があり、複数のベビーファンドがマザーファンドを通じて実際の株式等を保有することでコスト効率を高めています。',
        terms: [{ word: '投資信託', def: '複数の投資家から資金を集めて専門家が運用する金融商品' }]
    },
    {
        id: 5009,
        category: 'インデックス投資',
        level: 1,
        title: 'ETFと投資信託の違い',
        icon: '🔄',
        content: 'ETF（上場投資信託）と投資信託、どちらもインデックスに連動する商品がありますが、いくつかの違いがあります。ETFは株式市場に上場しており、株と同じようにリアルタイムで売買できます。一方、投資信託は1日1回だけ価格（基準価額）が決まります。ETFは最低1口（数百円〜数万円）から、投資信託は100円から購入可能。自動積立は投資信託の方が便利で、多くの証券会社でクレジットカード決済に対応しています。初心者でNISAを使った長期積立なら、設定が簡単な投資信託がおすすめです。',
        terms: [{ word: 'ETF', def: 'Exchange Traded Fund。取引所に上場している投資信託' }]
    },
    {
        id: 5010,
        category: 'インデックス投資',
        level: 1,
        title: '主要なインデックス指数',
        icon: '📈',
        content: '代表的なインデックス指数を紹介します。【日経平均株価】日本を代表する225銘柄の平均。トヨタ、ソニー、ファーストリテイリングなど。【TOPIX】東証プライム市場全体の時価総額加重平均。約2000銘柄。【S&P500】アメリカの大企業500社。Apple、Microsoft、Amazonなど。世界で最も注目される指数。【NASDAQ100】ハイテク企業中心の100社。【MSCI ACWI】先進国と新興国を含む全世界約50カ国、約3000銘柄。「オルカン」のベンチマーク。それぞれ特徴が異なるので、自分の投資方針に合った指数を選びましょう。',
        terms: [{ word: 'ベンチマーク', def: 'ファンドの運用成績を比較する基準となる指数' }]
    },
    {
        id: 5011,
        category: 'インデックス投資',
        level: 1,
        title: '全世界株式 vs 米国株式',
        icon: '🌐',
        content: 'インデックス投資で最も人気のある選択肢は「全世界株式」と「米国株式（S&P500）」です。全世界株式は約50カ国に分散するため、どの国が成長しても恩恵を受けられます。一方、過去30年のリターンは米国株式が圧倒的に高く、S&P500の人気も根強いです。ただし「過去の成績は将来を保証しない」という原則を忘れずに。今後も米国が世界経済をリードし続ける保証はありません。どちらを選んでも「間違い」ではないというのが多くの専門家の見解です。大切なのは、選んだ方針を長期間続けることです。',
        terms: []
    },
    {
        id: 5012,
        category: 'インデックス投資',
        level: 2,
        title: '純資産総額の重要性',
        icon: '💰',
        content: '投資信託を選ぶ際、「純資産総額」は重要な指標です。これはファンドが保有する資産の合計額を示します。純資産総額が大きいファンドは、①運用コストが相対的に下がりやすい、②繰上償還（ファンドが途中で閉鎖されること）のリスクが低い、③売買時の流動性が高い、といったメリットがあります。一般的に100億円以上あれば安心と言われますが、人気ファンドは1兆円を超えるものもあります。逆に数億円規模のファンドは、運用会社にとって採算が合わず、繰上償還される可能性があります。長期投資を前提にするなら、純資産総額の確認は必須です。',
        terms: [{ word: '純資産総額', def: 'ファンドが保有する資産の合計金額' }]
    },
    {
        id: 5013,
        category: 'インデックス投資',
        level: 2,
        title: '信託報酬の比較ポイント',
        icon: '🔍',
        content: '信託報酬は投資信託を保有している間、毎日資産から差し引かれる費用です。年率で表示され、同じ指数に連動するファンドでも運用会社によって異なります。例えばS&P500連動ファンドでも、年0.09%〜0.5%程度の幅があります。年0.1%の差でも、1000万円を30年運用すると約100万円の差になります。特に長期投資では、わずかなコストの差が大きな結果の違いを生みます。eMAXIS Slimシリーズや<購入・換金手数料なし>ニッセイシリーズなど、業界最安水準を目指すファンドが人気です。定期的に各社がコスト競争をしているので、最新情報をチェックしましょう。',
        terms: []
    },
    {
        id: 5014,
        category: 'インデックス投資',
        level: 2,
        title: '分配金再投資の威力',
        icon: '♻️',
        content: '投資信託の中には定期的に分配金を出すものがありますが、長期の資産形成には「分配金なし」または「再投資型」を選ぶのがおすすめです。分配金を受け取ると、その都度約20%の税金がかかります。しかし再投資型なら、利益がそのまま元本に加算され、税金を繰り延べながら複利効果を最大化できます。例えば年5%のリターンで30年運用した場合、分配金を毎年受け取って2割課税されるパターンと、再投資して最後に課税されるパターンでは、後者の方が約30%も資産が多くなります。「今すぐ収入が必要」という場合を除き、資産形成期は再投資型を選びましょう。',
        terms: [{ word: '分配金', def: '投資信託から投資家に支払われる収益の一部' }]
    },

    // Step 3: NISA制度を活用する (6 cards)
    {
        id: 5015,
        category: 'インデックス投資',
        level: 1,
        title: '新NISA制度の全体像',
        icon: '🆕',
        content: '2024年から始まった新NISAは、投資で得た利益が非課税になる制度です。通常、投資の利益には約20%の税金がかかりますが、NISA口座なら0%です。新NISAには2つの枠があります。【つみたて投資枠】年間120万円まで。金融庁が厳選した長期投資向け投資信託のみ対象。【成長投資枠】年間240万円まで。個別株やETFも購入可能。両方合わせて年間360万円、生涯で1800万円まで非課税で投資できます。しかも売却すれば翌年に枠が復活するので、柔軟な運用が可能になりました。',
        terms: [{ word: '新NISA', def: '2024年開始の恒久的な少額投資非課税制度' }]
    },
    {
        id: 5016,
        category: 'インデックス投資',
        level: 1,
        title: 'つみたて投資枠の使い方',
        icon: '📈',
        content: '新NISAのつみたて投資枠は、長期・積立・分散投資に適した投資信託だけが対象です。金融庁が厳しい基準（低コスト、安定的な運用実績など）で選定しています。年間120万円、月額にすると最大10万円まで積み立てられます。対象商品は約280本あり、信託報酬が高すぎるファンドや、毎月分配型、レバレッジ型などは除外されています。つまり「つみたて投資枠で買えるファンド」は、金融庁のお墨付きを得た優良商品と言えます。初心者はまずこの枠を使い切ることを目標にすると良いでしょう。',
        terms: []
    },
    {
        id: 5017,
        category: 'インデックス投資',
        level: 1,
        title: '成長投資枠の使い方',
        icon: '🚀',
        content: '成長投資枠は年間240万円まで、つみたて投資枠より幅広い商品を購入できます。個別株式、ETF、REITなども対象です。ただし、レバレッジ型や毎月分配型など一部の商品は除外されています。使い方の例として、①つみたて投資枠と同じインデックスファンドを追加購入する、②高配当株やETFでインカム収入を狙う、③個別株で成長企業に投資する、などがあります。インデックス投資を軸にするなら、成長投資枠もつみたて投資枠と同じファンドに回すのがシンプルです。年間360万円を全てインデックスファンドに投資することも可能です。',
        terms: []
    },
    {
        id: 5018,
        category: 'インデックス投資',
        level: 2,
        title: '生涯投資枠1800万円の考え方',
        icon: '♾️',
        content: '新NISAでは生涯を通じて1800万円まで非課税で投資できます（うち成長投資枠は1200万円が上限）。1800万円と聞くと大きな金額ですが、月3万円ずつ積み立てても50年かかります。多くの人にとっては「生涯で使い切れるかわからない」レベルの枠です。この枠は売却すると翌年に「取得価額」分が復活します。例えば100万円で買った投資信託が150万円になって売却した場合、翌年に100万円分の枠が復活します（150万円ではありません）。長期保有が基本ですが、ライフイベントで資金が必要になった場合も柔軟に対応できます。',
        terms: []
    },
    {
        id: 5019,
        category: 'インデックス投資',
        level: 2,
        title: 'NISAとiDeCoの使い分け',
        icon: '⚖️',
        content: 'NISA以外にも税制優遇制度としてiDeCo（個人型確定拠出年金）があります。iDeCoは掛金が全額所得控除になるため、節税効果はNISAより高い場合があります。ただし60歳まで引き出しできないという大きな制約があります。使い分けの目安として、①老後資金として確実に貯めたいならiDeCo、②途中で使う可能性があるならNISA、③余裕があれば両方活用、というのが一般的な考え方です。まずはNISAのつみたて投資枠を埋めてから、余裕があればiDeCoを検討するというアプローチがおすすめです。両方合わせて非課税のメリットを最大化しましょう。',
        terms: [{ word: 'iDeCo', def: '個人型確定拠出年金。掛金が所得控除される代わりに60歳まで引き出し不可' }]
    },
    {
        id: 5020,
        category: 'インデックス投資',
        level: 1,
        title: 'NISA口座の注意点',
        icon: '📝',
        content: 'NISA口座を開設する前に知っておきたい注意点があります。①NISA口座は1人1口座のみ。複数の金融機関で開設することはできません。②金融機関の変更は年1回可能ですが、手続きに時間がかかります。③NISA口座での損失は、特定口座との損益通算ができません。つまりNISA口座で損失が出ても、他の口座の利益と相殺して税金を減らすことはできません。④つみたて投資枠で購入した商品を成長投資枠に移すことはできません。金融機関選びは慎重に。商品ラインナップ、ポイント制度、使いやすさなどを比較検討しましょう。',
        terms: []
    },

    // Step 4: 証券口座を開設する (6 cards)
    {
        id: 5021,
        category: 'インデックス投資',
        level: 1,
        title: 'ネット証券のメリット',
        icon: '💻',
        content: 'インデックス投資を始めるなら、ネット証券がおすすめです。理由は①手数料が安い（店舗型の数分の1以下）、②商品ラインナップが豊富、③24時間いつでも取引可能、④クレジットカード積立でポイントが貯まる、などです。代表的なネット証券として、SBI証券、楽天証券、マネックス証券、auカブコム証券などがあります。特にSBI証券と楽天証券は口座数でトップクラスで、投資信託のラインナップも充実しています。店舗で相談したい場合は銀行や対面証券もありますが、手数料やラインナップでは見劣りすることが多いです。',
        terms: []
    },
    {
        id: 5022,
        category: 'インデックス投資',
        level: 1,
        title: '口座開設に必要なもの',
        icon: '📄',
        content: '証券口座の開設には、本人確認書類とマイナンバー確認書類が必要です。【本人確認書類】運転免許証、パスポート、健康保険証など。【マイナンバー確認書類】マイナンバーカード、または通知カード+本人確認書類。最近はスマホで書類を撮影して送信するだけで完結するオンライン口座開設が主流です。最短で翌営業日〜1週間程度で口座が開設できます。同時にNISA口座の開設も申し込めますが、NISA口座は税務署の審査があるため、2〜3週間かかる場合があります。早めに手続きを始めておくと安心です。',
        terms: []
    },
    {
        id: 5023,
        category: 'インデックス投資',
        level: 1,
        title: '特定口座とNISA口座',
        icon: '🗂️',
        content: '証券口座を開設すると、複数の口座区分が使えるようになります。【特定口座（源泉徴収あり）】利益に対して証券会社が自動で税金を計算・納付してくれます。確定申告が不要で便利です。【特定口座（源泉徴収なし）】年間取引報告書は発行されますが、確定申告は自分で行います。【一般口座】すべて自分で計算・申告が必要。ほとんど使われません。【NISA口座】利益が非課税。まずこちらを優先して使いましょう。おすすめは「NISA口座」を最優先で使い、枠を超えた分は「特定口座（源泉徴収あり）」で運用するパターンです。',
        terms: [{ word: '特定口座', def: '証券会社が税金の計算や年間取引報告書の作成を代行してくれる口座' }]
    },
    {
        id: 5024,
        category: 'インデックス投資',
        level: 1,
        title: '入金方法を設定する',
        icon: '💳',
        content: '証券口座に投資資金を入金する方法はいくつかあります。【銀行振込】銀行口座から証券口座に振り込み。振込手数料がかかる場合も。【即時入金】提携銀行のネットバンキングから即座に入金。手数料無料のことが多い。【クレジットカード積立】毎月決まった日にカード決済で自動積立。ポイントも貯まるのでおすすめ。【銀行引き落とし】銀行口座から自動で引き落とし。楽天証券なら楽天カード、SBI証券なら三井住友カードでのクレカ積立が人気です。最大月10万円まで積立可能で、0.5〜1%程度のポイント還元を受けられます。',
        terms: []
    },
    {
        id: 5025,
        category: 'インデックス投資',
        level: 2,
        title: 'クレカ積立のメリット',
        icon: '🎁',
        content: 'クレジットカード積立は、投資しながらポイントが貯まるお得な仕組みです。例えば楽天証券+楽天カードなら、月5万円の積立で毎月250〜500ポイント（0.5〜1%還元）。年間で3000〜6000ポイントになります。SBI証券+三井住友カード（ゴールドNL）なら1%還元で、年間12000ポイントも可能です。貯まったポイントは投資信託の購入に使えることも多く、実質的なリターンを底上げできます。新NISAではクレカ積立の上限が月10万円に引き上げられたため、ポイント還元の恩恵も大きくなりました。カードの年会費とポイント還元率のバランスを検討しましょう。',
        terms: []
    },
    {
        id: 5026,
        category: 'インデックス投資',
        level: 2,
        title: '証券会社の選び方',
        icon: '🏆',
        content: '証券会社選びで比較すべきポイントは、①取扱商品ラインナップ（買いたいファンドがあるか）、②クレカ積立の対応と還元率、③ポイント制度（投信保有ポイントなど）、④アプリやWebサイトの使いやすさ、⑤カスタマーサポートの質、などです。SBI証券は商品数とコストで強み、楽天証券は楽天経済圏との連携が魅力。どちらも甲乙つけがたく、好みで選んで問題ありません。実際に両方口座を開設して使い比べる人も多いです。NISA口座は1つしか持てませんが、特定口座は複数持てるので、メイン+サブで使い分けるのもアリです。',
        terms: []
    },

    // Step 5: ファンドを選んで積立設定 (7 cards)
    {
        id: 5027,
        category: 'インデックス投資',
        level: 1,
        title: '人気インデックスファンドの比較',
        icon: '📊',
        content: '国内で人気のインデックスファンドを紹介します。【eMAXIS Slim 全世界株式（オール・カントリー）】通称「オルカン」。全世界約50カ国に投資。信託報酬は年0.05775%と業界最安水準。純資産総額は4兆円超。【eMAXIS Slim 米国株式（S&P500）】アメリカの大企業500社に投資。信託報酬0.09372%。純資産総額5兆円超。【楽天・オールカントリー株式インデックス・ファンド】楽天証券で人気。バンガード社のVTに投資。信託報酬0.0561%。どれを選んでも大きな差は出にくいですが、長期で見るとわずかなコスト差が効いてきます。',
        terms: []
    },
    {
        id: 5028,
        category: 'インデックス投資',
        level: 1,
        title: '毎月の積立金額の決め方',
        icon: '💴',
        content: '積立金額は「無理のない範囲」で決めることが大切です。目安として、手取り収入の10〜20%程度から始める人が多いです。例えば手取り25万円なら2.5万〜5万円。家計に余裕がなければ月1万円や5000円からでも構いません。積立投資は「続けること」が最も重要です。最初から大きな金額を設定して途中でやめてしまうより、少額でも長く続ける方が成果につながります。余裕ができたら増額、苦しくなったら減額。柔軟に調整しながら、投資を「習慣」にしていきましょう。まずは始めることが大切です。',
        terms: []
    },
    {
        id: 5029,
        category: 'インデックス投資',
        level: 1,
        title: '積立日の設定',
        icon: '📅',
        content: '積立日はいつが良いのか、悩む人も多いです。結論から言うと「いつでも大差ない」というのが一般的な見解です。株価は短期的にはランダムに動くため、特定の日が有利ということはありません。「毎月1日」「給料日の翌日」「月末」など、覚えやすく管理しやすい日を選びましょう。複数銘柄に分散して積み立てる場合は、あえて日付をずらして「時間分散」を図る人もいます。ただし、長期投資においては積立日の違いによるリターンの差はごくわずか。考えすぎずに設定を完了させることが先決です。',
        terms: []
    },
    {
        id: 5030,
        category: 'インデックス投資',
        level: 2,
        title: '積立設定の具体的手順',
        icon: '📱',
        content: '証券会社での積立設定の流れを説明します。①証券会社のサイトまたはアプリにログイン。②「投資信託」→「積立注文」または「つみたてNISA」を選択。③購入したいファンドを検索・選択。④積立金額を入力（例：月3万円）。⑤積立日を選択（例：毎月1日）。⑥口座区分を選択（NISA優先）。⑦決済方法を選択（クレカ積立がおすすめ）。⑧目論見書を確認し、注文を確定。初回設定は10〜15分程度で完了します。一度設定すれば、あとは毎月自動で積み立てられます。設定完了後は「積立設定一覧」で内容を確認しておきましょう。',
        terms: [{ word: '目論見書', def: 'ファンドの運用方針やリスクを説明した書類。購入前に確認が必要' }]
    },
    {
        id: 5031,
        category: 'インデックス投資',
        level: 2,
        title: 'ドルコスト平均法の効果',
        icon: '📉',
        content: '定額を定期的に積み立てる手法を「ドルコスト平均法」と呼びます。価格が高いときは少なく、価格が安いときは多く買えるため、平均購入単価が平準化されます。例えば、月1万円で基準価額が10000円なら1口、5000円なら2口購入できます。これにより「高値掴み」のリスクを軽減できます。ただし、右肩上がりの相場では一括投資の方がリターンは高くなります。ドルコスト平均法の本当のメリットは「投資を続けやすくする」心理的効果です。相場の上下に一喜一憂せず、淡々と積み立てることで長期投資を実践できます。',
        terms: [{ word: 'ドルコスト平均法', def: '定額を定期的に投資することで平均購入単価を平準化する手法' }]
    },
    {
        id: 5032,
        category: 'インデックス投資',
        level: 2,
        title: '1つのファンドで十分な理由',
        icon: '1️⃣',
        content: 'インデックス投資では、1本のファンドだけで十分という考え方があります。特に「全世界株式インデックスファンド」1本なら、世界中の株式に分散投資でき、これ以上の分散は不要とも言えます。複数のファンドを組み合わせると、管理が複雑になり、リバランス（比率の調整）も必要になります。また、似たような指数に連動するファンドを複数持っても、分散効果はほとんど変わりません。シンプルに1本に集中することで、①管理の手間が減る、②迷いや判断ミスが減る、③長く続けやすい、というメリットがあります。「シンプル・イズ・ベスト」が投資成功の秘訣です。',
        terms: []
    },
    {
        id: 5033,
        category: 'インデックス投資',
        level: 2,
        title: 'ボーナス設定の活用',
        icon: '💰',
        content: '多くの証券会社では、通常の月次積立に加えて「ボーナス月の増額」設定ができます。例えば毎月3万円+6月と12月は+5万円ずつ、といった設定です。年間投資額を増やしたい場合に便利です。新NISAのつみたて投資枠は年間120万円が上限なので、毎月10万円フルに積み立てるなら不要ですが、月額を抑えめにしてボーナス時に調整したい人には有効です。ただし、投資はあくまで余裕資金で行うもの。ボーナスを当てにしすぎず、確実に出る給与ベースで積立額を決めるのが安心です。',
        terms: []
    },

    // Step 6: 運用を継続する (5 cards)
    {
        id: 5034,
        category: 'インデックス投資',
        level: 1,
        title: '運用状況の確認頻度',
        icon: '📊',
        content: 'インデックス投資を始めたら、運用状況を毎日チェックする必要はありません。むしろ、頻繁に見すぎると短期的な変動に一喜一憂してしまい、不要な売買をしてしまうリスクがあります。おすすめは月1回程度、資産残高を確認する程度で十分です。積立設定が正常に動いているか、入金漏れがないかをチェックする意味で月1回は見ても良いでしょう。年に1回は、全体のポートフォリオを振り返り、投資方針に変更がないか確認します。「ほったらかし投資」という言葉があるように、インデックス投資は「見ない勇気」も大切です。',
        terms: []
    },
    {
        id: 5035,
        category: 'インデックス投資',
        level: 2,
        title: '暴落時の心構え',
        icon: '🌊',
        content: '株式市場は定期的に暴落します。過去にはリーマンショック（-50%）、コロナショック（-30%）など、大きな下落がありました。しかし歴史的に見ると、暴落後には必ず回復しています。S&P500はリーマンショック後に4年で元の水準に戻り、その後も上昇を続けました。暴落時に最もやってはいけないことは「パニック売り」です。安値で売ってしまうと、その後の回復の恩恵を受けられません。むしろ暴落時は「バーゲンセール」と捉え、同じ金額でより多くの口数を買えるチャンスです。事前に「暴落しても売らない」と決めておくことが重要です。',
        terms: []
    },
    {
        id: 5036,
        category: 'インデックス投資',
        level: 2,
        title: 'リバランスは必要か',
        icon: '⚖️',
        content: 'リバランスとは、資産配分が目標から乖離した場合に、元の比率に戻す調整のことです。例えば「株式70%:債券30%」を目標にしていて、株価上昇で「80%:20%」になったら、株式を売って債券を買い増す、という作業です。ただし、全世界株式インデックス1本で運用している場合は、ファンド内で自動的に調整されるためリバランスは不要です。複数の資産クラスを組み合わせている場合のみ、年1回程度のリバランスを検討しましょう。頻繁にやりすぎると売買コストがかさむので注意。シンプルなポートフォリオなら、リバランスの手間もかかりません。',
        terms: [{ word: 'リバランス', def: '資産配分を目標の比率に調整し直すこと' }]
    },
    {
        id: 5037,
        category: 'インデックス投資',
        level: 2,
        title: '投資を続けるコツ',
        icon: '🏃',
        content: '長期投資で最も難しいのは「続けること」です。多くの人が途中でやめてしまう理由は、①暴落でパニックになった、②お金が必要になった、③飽きてしまった、④他の投資に目移りした、などです。続けるコツとして、①生活防衛資金（6ヶ月分の生活費）を別に確保しておく、②無理のない金額で始める、③投資の目的を明確にする、④SNSやニュースに振り回されない、⑤投資日記をつけて冷静さを保つ、などがあります。インデックス投資は「始めるのは簡単、続けるのは難しい」。10年、20年と続けられれば、それだけで上位1割に入れます。',
        terms: []
    },
    {
        id: 5038,
        category: 'インデックス投資',
        level: 1,
        title: '投資仲間を作る',
        icon: '👥',
        content: '投資を続けるうえで、同じ志を持つ仲間がいると心強いです。家族や友人と投資の話をすることで、モチベーションを維持できます。最近はSNSや投資コミュニティで情報交換する人も増えています。ただし注意点もあります。SNSには「〇〇で大儲け」といった射幸心を煽る投稿や、根拠のない投資情報も多いです。他人の派手な成績と比べて焦ったり、流行りの銘柄に飛びついたりするのは禁物。あくまで自分の投資方針を持ち、参考程度に情報収集するスタンスが大切です。コツコツ型のインデックス投資は地味ですが、それが正解です。',
        terms: []
    },

    // Step 7: 出口戦略を考える (4 cards)
    {
        id: 5039,
        category: 'インデックス投資',
        level: 2,
        title: '出口戦略とは',
        icon: '🚪',
        content: '投資の「出口戦略」とは、貯めた資産をどう取り崩すかという計画です。積立期間が終わって資産を使う段階になったとき、どのように売却していくかを事前に考えておくことが重要です。方法としては、①定額取り崩し（毎月〇万円）、②定率取り崩し（資産の〇%）、③必要な時に必要な分だけ売却、などがあります。有名な「4%ルール」は、資産の4%を毎年取り崩せば30年以上持つという研究に基づいています（ただしアメリカのデータなので日本にそのまま当てはまるかは議論があります）。出口を考えることで、積立期間の目標も明確になります。',
        terms: [{ word: '4%ルール', def: '資産の4%を毎年取り崩しても資産が枯渇しにくいという目安' }]
    },
    {
        id: 5040,
        category: 'インデックス投資',
        level: 2,
        title: '取り崩しのタイミング',
        icon: '⏰',
        content: '「いつから取り崩すか」は人それぞれです。老後資金として65歳から、セミリタイアで50歳から、など目的によって異なります。一般的には年金受給開始年齢（65歳）に合わせて取り崩しを始める人が多いです。ただし新NISAには期限がないため、必要になるまで運用を続けることも可能です。60歳で退職しても、年金が始まる65歳までの5年間だけ取り崩し、その後は年金で生活、残りの資産は引き続き運用、という戦略も考えられます。ライフプランと照らし合わせて、自分なりのシナリオを描いておきましょう。',
        terms: []
    },
    {
        id: 5041,
        category: 'インデックス投資',
        level: 3,
        title: 'シークエンス・オブ・リターンズ・リスク',
        icon: '📉',
        content: '「シークエンス・オブ・リターンズ・リスク」とは、取り崩し開始直後に暴落が来ると、資産が想定より早く減ってしまうリスクのことです。積立期間中の暴落は「安く買えるチャンス」ですが、取り崩し期間中の暴落は「高く売れない損失」になります。このリスクを軽減するには、①取り崩し開始前に現金や債券の比率を高めておく、②暴落時は取り崩し額を減らす柔軟性を持つ、③年金や配当など他の収入源を確保しておく、といった対策があります。長期的には市場は回復しますが、取り崩し期間中の暴落対策は積立期間よりも重要です。',
        terms: []
    },
    {
        id: 5042,
        category: 'インデックス投資',
        level: 2,
        title: '資産を次世代に残す',
        icon: '👨‍👩‍👧‍👦',
        content: '人生100年時代、自分が使い切る前に資産が残る可能性もあります。NISAやiDeCoで築いた資産は、相続として次世代に引き継ぐこともできます。ただし相続税の基礎控除（3000万円+法定相続人×600万円）を超えると相続税がかかります。生前贈与（年110万円まで非課税）を活用して計画的に資産を移転する方法もあります。また、投資の知識や考え方を子どもに伝えることも大切な「資産」です。子どもと一緒に投資を学び、ジュニアNISA（2024年以降は成人まで運用可能）を活用するのも良い教育になります。',
        terms: []
    },

    // Step 8: よくある疑問と注意点 (12 cards) - 特商法対応・リスク開示
    {
        id: 5043,
        category: 'インデックス投資',
        level: 1,
        title: '【重要】投資は元本保証ではありません',
        icon: '⚠️',
        content: '投資信託を含むすべての投資商品は、元本保証ではありません。市場環境によっては、投資した金額を下回る可能性があります。過去の運用実績は将来の成果を保証するものではありません。リーマンショック時には世界の株式市場が約50%下落しました。コロナショックでは約30%の下落が数週間で発生しました。インデックス投資は長期的には回復してきた歴史がありますが、回復に数年かかることもあります。投資は「最悪の場合、ゼロになっても生活に支障がない」余剰資金で行うことが大原則です。生活費や近い将来使う予定のあるお金は、投資ではなく預貯金で確保してください。',
        terms: [{ word: '元本割れ', def: '投資した金額を下回ること。投資には常にこのリスクが伴う' }]
    },
    {
        id: 5044,
        category: 'インデックス投資',
        level: 1,
        title: '投資判断は自己責任です',
        icon: '📋',
        content: '本コンテンツは投資に関する一般的な情報提供を目的としており、特定の金融商品の購入や売却を推奨・勧誘するものではありません。投資の最終判断は、ご自身の責任において行ってください。金融商品の選択にあたっては、各商品の目論見書や契約締結前交付書面をよくお読みになり、商品の内容・リスク・手数料等を十分にご理解いただいたうえで、ご自身の判断と責任においてお取引ください。不明な点がある場合は、証券会社のコールセンターや金融機関の窓口、または税理士・ファイナンシャルプランナーなどの専門家にご相談されることをおすすめします。',
        terms: [{ word: '目論見書', def: '投資信託の運用方針やリスク、手数料などを記載した法定書類' }]
    },
    {
        id: 5045,
        category: 'インデックス投資',
        level: 2,
        title: '「必ず儲かる」は詐欺のサイン',
        icon: '🚨',
        content: '「必ず儲かる」「絶対に損しない」「年利20%保証」などの甘い言葉は、投資詐欺の典型的な手口です。合法的な投資商品で元本保証かつ高リターンを約束するものは存在しません。金融庁に登録されていない業者からの勧誘には特に注意してください。SNSやマッチングアプリを通じて知り合った人からの投資話、芸能人の名前を騙った投資案件、「今だけ」「限定」を強調する勧誘は危険信号です。不審に思ったら、金融庁の「免許・許可・登録等を受けている業者一覧」で確認するか、金融サービス利用者相談室（0570-016811）に相談してください。',
        terms: [{ word: 'ポンジスキーム', def: '新規投資家の資金を既存投資家への配当に回す詐欺的手法' }]
    },
    {
        id: 5046,
        category: 'インデックス投資',
        level: 1,
        title: 'よくある失敗パターン1：高値で買って安値で売る',
        icon: '📉',
        content: '投資初心者が最も陥りやすい失敗は「高値で買って安値で売る」ことです。株価が上がっているニュースを見て「今買わないと乗り遅れる」と焦って購入し、暴落時に「これ以上損したくない」とパニック売りしてしまうパターンです。これは人間の感情として自然な反応ですが、投資においては最悪の行動です。インデックス投資で成功するコツは「感情を排除する」こと。そのために自動積立設定を利用し、「相場を見ない」「ニュースに反応しない」という姿勢が重要です。暴落は長期投資家にとってはセールの機会。事前に心の準備をしておきましょう。',
        terms: []
    },
    {
        id: 5047,
        category: 'インデックス投資',
        level: 1,
        title: 'よくある失敗パターン2：頻繁な売買',
        icon: '🔄',
        content: '「もっといい銘柄があるのでは」と頻繁に乗り換えたり、短期的な値動きで売買を繰り返すと、①売買手数料がかさむ、②税金が発生する（NISAでなければ約20%）、③タイミングを間違える確率が上がる、というトリプルパンチで資産が目減りします。研究によると、頻繁に売買する投資家ほど成績が悪いというデータがあります。インデックス投資の基本は「Buy and Hold（買って持ち続ける）」。一度選んだファンドは、よほどの理由がない限り10年、20年と持ち続けることが成功の秘訣です。「退屈な投資」が実は最も賢い投資なのです。',
        terms: []
    },
    {
        id: 5048,
        category: 'インデックス投資',
        level: 2,
        title: 'よくある失敗パターン3：レバレッジ商品への誤解',
        icon: '⚡',
        content: 'レバレッジ型ETFや投資信託（「ブル2倍」「レバナス」など）は、1日の値動きを2倍、3倍に増幅する商品です。短期トレード向けに設計されており、長期保有には向きません。理由は「減価」という現象が起きるからです。例えば、指数が+10%→-10%と動いた場合、指数は99%（≠100%）になりますが、2倍レバレッジは約96%まで減少します。この減価効果はボラティリティが高いほど、保有期間が長いほど蓄積します。「長期で持てばいずれ儲かる」という発想でレバレッジ商品を積み立てるのは、インデックス投資の考え方とは真逆です。',
        terms: [{ word: 'レバレッジ減価', def: '日々のリセットにより長期保有で価値が目減りする現象' }]
    },
    {
        id: 5049,
        category: 'インデックス投資',
        level: 1,
        title: 'Q. いつ始めるのがベストですか？',
        icon: '❓',
        content: 'A. 結論から言うと「思い立った今」がベストです。「もう少し安くなってから」「ボーナスが入ってから」と待っていると、結局始められないまま時間だけが過ぎてしまいます。長期投資において最も重要なのは「投資期間を長くすること」。1年早く始めれば、1年分の複利効果を多く享受できます。また、積立投資なら購入タイミングが分散されるため、「高値掴み」のリスクも軽減されます。過去のデータを見ると、「最高のタイミング」を狙うより「すぐに始めて長く持つ」方が結果的に良い成績を残すケースがほとんどです。ただし、生活防衛資金の確保が先であることは忘れないでください。',
        terms: []
    },
    {
        id: 5050,
        category: 'インデックス投資',
        level: 1,
        title: 'Q. いくらから始められますか？',
        icon: '💴',
        content: 'A. 多くのネット証券では100円から投資信託を購入できます。「まとまったお金がないから投資できない」というのは誤解です。月1,000円からでも、5,000円からでも、始めることが大切です。例えば月5,000円を30年間、年利5%で運用すると約416万円になります（元本180万円、運用益236万円）。大きな金額である必要はありません。まずは家計に無理のない金額から始めて、余裕ができたら増額していく方法がおすすめです。クレジットカード積立を利用すれば、設定した金額が自動で引き落とされるため、「お金を貯める」感覚より「最初からなかったもの」として投資に回せます。',
        terms: []
    },
    {
        id: 5051,
        category: 'インデックス投資',
        level: 2,
        title: 'Q. 暴落したらどうすればいいですか？',
        icon: '🌪️',
        content: 'A. 答えは「何もしない」または「買い増す」です。決して「売らない」でください。リーマンショック（2008年）の時、多くの人がパニック売りして大損しました。しかし、その時に売らずに持ち続けた人、あるいは下落中に買い増した人は、その後数年で元本を回復し、さらに大きな利益を得ました。S&P500はリーマンショック後、約4年で元の水準に戻り、2024年までに当時の約6倍になっています。暴落時こそ「安く買えるチャンス」と考え、淡々と積立を続けることが重要です。そのためにも、生活防衛資金は別に確保し、投資は余剰資金で行うという原則を守ってください。',
        terms: []
    },
    {
        id: 5052,
        category: 'インデックス投資',
        level: 2,
        title: 'Q. オルカンとS&P500、どっちがいいですか？',
        icon: '🌐',
        content: 'A. どちらを選んでも「間違い」ではありません。これは投資家の間で最も議論されるテーマの一つですが、明確な正解はありません。全世界株式（オルカン）は「どの国が成長しても恩恵を受けられる」究極の分散。S&P500は「世界経済の中心である米国に集中投資」という考え方。過去30年のリターンはS&P500が優位でしたが、今後も続くかは誰にもわかりません。迷ったら全世界株式がより安全な選択肢です。あるいは「両方に半分ずつ」という折衷案もあります。大切なのは、一度決めたら長期間続けること。頻繁に乗り換えるのが最悪の選択です。',
        terms: []
    },
    {
        id: 5053,
        category: 'インデックス投資',
        level: 1,
        title: 'Q. 銀行で勧められた投資信託はダメですか？',
        icon: '🏦',
        content: 'A. 必ずしもダメではありませんが、注意が必要です。銀行や対面証券で販売される投資信託は、一般的にネット証券より①販売手数料が高い（購入時に1〜3%）、②信託報酬が高い（年0.5〜2%）、③商品ラインナップが限られる、という傾向があります。販売員には販売ノルマがあるため、顧客にとって最適な商品より、銀行にとって利益の大きい商品を勧められる可能性があります。すでに購入済みの場合、解約して乗り換えるかは「手数料差×保有予定期間」で判断しましょう。今後の新規投資は、ネット証券の低コストインデックスファンドを検討することをおすすめします。',
        terms: []
    },
    {
        id: 5054,
        category: 'インデックス投資',
        level: 2,
        title: 'Q. 特定口座とNISA口座、どう使い分ける？',
        icon: '📁',
        content: 'A. 優先順位は「NISA口座が先、特定口座は後」です。NISA口座は利益が非課税になるため、まずNISAの年間投資枠（360万円）を使い切ることを目指しましょう。NISAの枠を超える余裕資金がある場合に、特定口座を使います。特定口座（源泉徴収あり）は利益に約20%の税金がかかりますが、確定申告が不要で手間がかかりません。すでに特定口座で保有している投資信託がある場合、NISA口座への移管（移し替え）はできません。特定口座で売却し、NISA口座で買い直す必要がありますが、売却時に利益があれば課税されます。有利不利は個別の状況によりますので、専門家に相談するのも一案です。',
        terms: []
    },

    // Step 9: 市場とリスクを深く理解する (8 cards)
    {
        id: 5055,
        category: 'インデックス投資',
        level: 2,
        title: '世界経済の長期成長を信じる',
        icon: '🌍',
        content: 'インデックス投資の根底にある考え方は「世界経済は長期的に成長し続ける」という前提です。人類の歴史を振り返ると、戦争、疫病、金融危機など数々の困難を乗り越えて経済は成長してきました。1900年以降、世界の株式市場は実質年率約5%で成長しています。その間、二度の世界大戦、スペイン風邪、大恐慌、オイルショック、リーマンショック、コロナ禍がありました。もちろん将来も成長が続く保証はありませんが、人類が経済活動を続ける限り、技術革新と生産性向上により経済は成長するという考えは合理的です。この信念がなければ、長期投資を続けることは難しいでしょう。',
        terms: []
    },
    {
        id: 5056,
        category: 'インデックス投資',
        level: 2,
        title: '為替リスクを理解する',
        icon: '💱',
        content: '全世界株式やS&P500など、海外資産に投資するファンドには「為替リスク」が伴います。例えば、S&P500連動ファンドを円で購入する場合、①米国株の値動き、②ドル円の為替変動、の両方が基準価額に影響します。円安になれば外貨建て資産の円評価額は上がり、円高になれば下がります。長期的には為替の影響は株式のリターンに比べて小さいとされますが、円高局面では一時的にマイナスになることもあります。為替ヘッジありのファンドもありますが、ヘッジコストがかかるため、長期投資では為替ヘッジなしが一般的です。為替変動も含めて「長期で右肩上がり」を期待するのがインデックス投資です。',
        terms: [{ word: '為替ヘッジ', def: '為替変動の影響を抑える仕組み。追加コストが発生する' }]
    },
    {
        id: 5057,
        category: 'インデックス投資',
        level: 3,
        title: '標準偏差（リスク）の見方',
        icon: '📊',
        content: '投資における「リスク」とは、リターンのブレ幅（ボラティリティ）を意味します。これを数値化したものが「標準偏差」です。例えば、期待リターン5%、標準偏差20%のファンドなら、1年間のリターンは約68%の確率で-15%〜+25%の範囲に収まり、約95%の確率で-35%〜+45%の範囲に収まります。全世界株式の標準偏差は約15〜20%程度。つまり、年間で20%程度の下落は「普通に起こりうること」として覚悟しておく必要があります。リスクを正しく理解することで、暴落時にパニックになることなく、冷静に投資を続けられます。',
        terms: [{ word: '標準偏差', def: 'データのばらつきを表す統計指標。投資ではリスクの大きさを示す' }]
    },
    {
        id: 5058,
        category: 'インデックス投資',
        level: 2,
        title: '信託財産留保額とは',
        icon: '🔒',
        content: '一部の投資信託には「信託財産留保額」という手数料がかかります。これは売却時（解約時）に差し引かれる費用で、ファンドによって0%〜0.5%程度です。この費用は運用会社の収益ではなく、ファンドの信託財産に組み入れられます。つまり、解約する投資家が残る投資家に迷惑をかけないための仕組みです。大量解約があると、ファンドマネージャーは保有株を売却して現金を用意する必要があり、その売却コストを残りの投資家が負担することになります。信託財産留保額はこれを防ぐための「解約ペナルティ」のようなものですが、eMAXIS Slimシリーズなど人気ファンドの多くは0%です。',
        terms: [{ word: '信託財産留保額', def: '解約時にファンドに残す費用。残った投資家の保護が目的' }]
    },
    {
        id: 5059,
        category: 'インデックス投資',
        level: 3,
        title: 'トラッキングエラーとは',
        icon: '📐',
        content: 'インデックスファンドの目標は「ベンチマーク（指数）に連動すること」ですが、完全に一致することはありません。この乖離を「トラッキングエラー」と呼びます。原因としては、①信託報酬などのコスト、②配当金の再投資タイミング、③銘柄入れ替え時の売買コスト、④サンプリング運用（全銘柄を保有しない場合）、などがあります。トラッキングエラーが小さいほど優秀なファンドと言えます。大手運用会社のインデックスファンドは概ね低いトラッキングエラーを維持していますが、月次レポートなどで確認することができます。わずかな差ですが、長期投資では複利で効いてくるため、品質の高いファンドを選びましょう。',
        terms: [{ word: 'トラッキングエラー', def: 'ファンドのリターンとベンチマークのリターンの乖離' }]
    },
    {
        id: 5060,
        category: 'インデックス投資',
        level: 2,
        title: '分配金と再投資型の違い',
        icon: '💸',
        content: '投資信託には「分配金あり（受取型）」と「分配金なし（再投資型）」があります。分配金を受け取ると、その都度約20%の税金がかかり（NISA除く）、複利効果が弱まります。資産形成を目的とするなら、分配金なし（または自動再投資）を選ぶのが鉄則です。「毎月分配型」投資信託は一見魅力的ですが、運用益だけでなく元本を取り崩して分配していることもあり（タコ足配当）、長期の資産形成には不向きです。実際、毎月分配型は金融庁の「つみたて投資枠」対象から除外されています。分配金が欲しくなる気持ちはわかりますが、資産形成期は再投資型を選び、取り崩し期に入ってから分配型を検討しましょう。',
        terms: [{ word: 'タコ足配当', def: '運用益がないのに元本を取り崩して分配すること' }]
    },
    {
        id: 5061,
        category: 'インデックス投資',
        level: 1,
        title: 'インフレと投資の関係',
        icon: '📈',
        content: 'インフレ（物価上昇）は、現金の価値を目減りさせます。年2%のインフレが続くと、20年後には100万円の価値が約67万円相当に下がります。銀行預金の金利がほぼ0%の現在、預金だけでは実質的に資産が減っていくことになります。一方、株式は企業の売上や利益が物価上昇に連動するため、インフレに強い資産とされています。歴史的に見ると、株式の長期リターンはインフレ率を上回っています。「投資はリスクがあるから怖い」という人がいますが、「投資しないリスク（インフレで資産が目減りするリスク）」も存在します。お金を守るために投資が必要な時代なのです。',
        terms: [{ word: 'インフレリスク', def: '物価上昇により資産の実質価値が減少するリスク' }]
    },
    {
        id: 5062,
        category: 'インデックス投資',
        level: 2,
        title: '新興国投資のリスクと魅力',
        icon: '🌏',
        content: '全世界株式インデックスには新興国（中国、インド、ブラジル、台湾など）も含まれます。新興国は高い経済成長が期待できる一方、①政治的な不安定さ、②規制リスク（突然の法規制変更）、③通貨リスク、④情報の透明性の低さ、などのリスクもあります。新興国単独ファンドへの集中投資はハイリスクですが、全世界株式の一部（約10%程度）として保有する分には、適度な分散効果が期待できます。「新興国が成長すれば恩恵を受け、成長しなくても先進国がカバーする」という考え方で、全世界株式に任せておけばよいでしょう。個別の新興国に賭ける必要はありません。',
        terms: []
    }
];

// ============================================
// CRYPTO BUNDLE - EXCLUSIVE CONTENT
// 50 cards for crypto beginners
// ============================================
export const cryptoBundleCards = [
    // Step 1: ブロックチェーンを理解する (6 cards)
    { id: 6001, category: '仮想通貨', level: 1, title: 'ブロックチェーンとは何か', icon: '🔗', content: 'ブロックチェーンは、取引データを「ブロック」という単位でまとめ、それを時系列に「チェーン（鎖）」のように繋げて記録する技術です。一度記録されたデータは改ざんが極めて困難で、中央管理者なしでも信頼性を担保できます。銀行のような仲介者がいなくても、世界中の誰とでも直接取引できる仕組みを実現しました。', terms: [{ word: 'ブロック', def: '取引データをまとめた記録単位' }] },
    { id: 6002, category: '仮想通貨', level: 1, title: '分散型台帳の仕組み', icon: '📒', content: '従来のシステムでは銀行などが取引記録を一元管理していましたが、ブロックチェーンでは世界中のコンピュータ（ノード）が同じ台帳を共有します。これを「分散型台帳」と呼びます。一箇所が攻撃されても、他のノードに記録が残るため、システム全体が停止することはありません。この冗長性がブロックチェーンの堅牢性を支えています。', terms: [{ word: 'ノード', def: 'ブロックチェーンネットワークに参加するコンピュータ' }] },
    { id: 6003, category: '仮想通貨', level: 2, title: 'コンセンサスアルゴリズム', icon: '🤝', content: '分散したノードが「正しい取引」を合意する仕組みをコンセンサスアルゴリズムと呼びます。代表的なものに、計算能力で競う「PoW（Proof of Work）」と、保有量で選ばれる「PoS（Proof of Stake）」があります。PoWは電力消費が大きく環境問題が指摘され、イーサリアムは2022年にPoSへ移行しました。', terms: [{ word: 'PoW', def: '計算量による合意形成。ビットコインが採用' }, { word: 'PoS', def: '保有量による合意形成。イーサリアムが採用' }] },
    { id: 6004, category: '仮想通貨', level: 1, title: 'ハッシュ関数と暗号技術', icon: '🔐', content: 'ブロックチェーンは暗号技術で保護されています。「ハッシュ関数」は任意のデータを固定長の文字列に変換する仕組みで、元データが少しでも変わると全く異なる値になります。これにより、過去のブロックを改ざんすると後続のすべてのブロックに矛盾が生じ、不正がすぐに発覚します。', terms: [{ word: 'ハッシュ', def: 'データを固定長の文字列に変換したもの' }] },
    { id: 6005, category: '仮想通貨', level: 1, title: 'パブリックチェーンとプライベートチェーン', icon: '🌐', content: '誰でも参加できるのが「パブリックチェーン」（ビットコイン、イーサリアムなど）。参加者を限定するのが「プライベートチェーン」（企業内システムなど）。パブリックチェーンは完全な分散化を実現しますが、処理速度に限界があります。プライベートチェーンは高速ですが、分散化のメリットは限定的です。', terms: [] },
    { id: 6006, category: '仮想通貨', level: 2, title: 'ブロックチェーンのトリレンマ', icon: '⚖️', content: '「分散性」「セキュリティ」「スケーラビリティ（処理能力）」の3つを同時に最大化することは難しく、これを「ブロックチェーンのトリレンマ」と呼びます。ビットコインは分散性とセキュリティを優先し、処理速度は犠牲にしています。各プロジェクトはこのバランスをどう取るかで差別化を図っています。', terms: [{ word: 'スケーラビリティ', def: '処理能力の拡張性' }] },

    // Step 2: ビットコインを知る (6 cards)
    { id: 6007, category: '仮想通貨', level: 1, title: 'ビットコインの誕生', icon: '₿', content: '2008年、サトシ・ナカモトという謎の人物（集団）が論文を発表し、2009年に最初のビットコインが発行されました。銀行や政府に依存しない「電子マネー」として設計され、金融危機への不信感から生まれました。サトシの正体は今も不明ですが、保有する約100万BTCは一度も動いていません。', terms: [{ word: 'サトシ・ナカモト', def: 'ビットコイン創設者の匿名（仮名）' }] },
    { id: 6008, category: '仮想通貨', level: 1, title: '発行上限2100万枚', icon: '💎', content: 'ビットコインの発行上限は2100万枚と定められており、これは変更できません。この希少性から「デジタルゴールド」とも呼ばれます。2024年時点で約1900万枚が発行済み。残りは2140年頃までに発行される予定です。法定通貨のように無限に発行されないため、インフレに強い資産とされています。', terms: [] },
    { id: 6009, category: '仮想通貨', level: 2, title: '半減期とは', icon: '🌗', content: '約4年に一度、マイニング報酬が半分になるイベントを「半減期」と呼びます。2024年4月に4回目の半減期が起き、報酬は6.25BTC→3.125BTCに。新規供給が減るため、需要が変わらなければ価格上昇圧力になります。過去の半減期後は1〜2年で大きく価格が上昇するパターンがありました（将来を保証しません）。', terms: [{ word: '半減期', def: 'マイニング報酬が半分になるイベント' }] },
    { id: 6010, category: '仮想通貨', level: 2, title: 'マイニングの仕組み', icon: '⛏️', content: 'ビットコインのマイニングは、複雑な計算問題を最初に解いたノードが報酬を得る仕組みです。約10分に1回、新しいブロックが生成され、報酬としてBTCが発行されます。現在は専用機器（ASIC）が必須で、個人での参入は困難。大規模なマイニング企業が競い合っています。', terms: [{ word: 'ASIC', def: 'マイニング専用の集積回路' }] },
    { id: 6011, category: '仮想通貨', level: 1, title: 'ビットコインの単位', icon: '🔢', content: '1BTC（ビットコイン）は小数点以下8桁まで分割可能です。最小単位は「1satoshi（サトシ）」= 0.00000001BTC。1BTC=1000万円なら、1satoshi=0.1円です。「0.001BTC」や「10000satoshi」のように少額から購入できます。高価に見えても実は少額投資可能なのがビットコインの特徴です。', terms: [{ word: 'satoshi', def: 'ビットコインの最小単位' }] },
    { id: 6012, category: '仮想通貨', level: 2, title: 'ビットコインのリスク', icon: '⚠️', content: 'ビットコインは価格変動が非常に激しく、1日で20%以上動くこともあります。過去に何度も80%以上下落しています（2011年、2014年、2018年、2022年など）。また、秘密鍵を紛失すると二度と取り戻せません。投資は余剰資金で行い、リスクを十分理解した上で判断してください。', terms: [] },

    // Step 3: イーサリアムとスマートコントラクト (5 cards)
    { id: 6013, category: '仮想通貨', level: 1, title: 'イーサリアムとは', icon: 'Ξ', content: 'イーサリアム（ETH）は2015年にヴィタリック・ブテリン氏らが開発した、「スマートコントラクト」機能を持つブロックチェーンです。ビットコインが「デジタルゴールド」なら、イーサリアムは「ワールドコンピュータ」。プログラムを実行できるため、DeFi、NFT、DAOなど様々なアプリケーションの基盤となっています。', terms: [{ word: 'ETH', def: 'イーサリアムのネイティブ通貨' }] },
    { id: 6014, category: '仮想通貨', level: 2, title: 'スマートコントラクト', icon: '📜', content: 'スマートコントラクトは「条件が満たされたら自動実行される契約」をブロックチェーン上で実現する仕組みです。例えば「Aさんが1ETH送金したら、自動でNFTをAさんに送付」といった処理を、仲介者なしで実行できます。コードとして公開されるため透明性が高く、改ざんもできません。', terms: [{ word: 'スマートコントラクト', def: '自動実行される契約プログラム' }] },
    { id: 6015, category: '仮想通貨', level: 2, title: 'ガス代とは', icon: '⛽', content: 'イーサリアムでトランザクション（取引）を実行するには「ガス代」という手数料が必要です。ネットワークが混雑すると高騰し、数千円〜数万円になることも。ガス代はETHで支払います。混雑時を避けたり、レイヤー2を使うことで節約できます。NFT購入時などはガス代込みの総コストを確認しましょう。', terms: [{ word: 'ガス代', def: 'イーサリアムの取引手数料' }] },
    { id: 6016, category: '仮想通貨', level: 2, title: 'イーサリアム2.0（The Merge）', icon: '🔀', content: '2022年9月、イーサリアムは「The Merge」と呼ばれる大型アップデートでPoW→PoSに移行しました。これにより電力消費量は99%以上削減。ステーキング（ETHを預けてネットワーク維持に貢献）で報酬を得られるようになりました。今後もシャーディングなどのアップデートでスケーラビリティ向上が予定されています。', terms: [{ word: 'The Merge', def: 'イーサリアムのPoS移行イベント' }] },
    { id: 6017, category: '仮想通貨', level: 3, title: 'ERC-20とERC-721', icon: '📋', content: 'イーサリアム上のトークンには規格があります。「ERC-20」は一般的な暗号資産トークン（USDT、UNIなど）の規格。「ERC-721」はNFT（非代替性トークン）の規格で、各トークンが固有の識別子を持ちます。規格が統一されているため、異なるプロジェクトのトークンも同じウォレットで管理できます。', terms: [{ word: 'ERC', def: 'Ethereum Request for Comments。イーサリアムの提案規格' }] },

    // Step 4: アルトコインの世界 (5 cards)
    { id: 6018, category: '仮想通貨', level: 1, title: 'アルトコインとは', icon: '🪙', content: 'ビットコイン以外の暗号資産を総称して「アルトコイン」と呼びます。数千種類以上が存在し、それぞれ異なる特徴や目的を持ちます。時価総額上位にはイーサリアム、BNB、ソラナ、リップルなどがあります。多くのアルトコインはビットコインより変動が激しく、ハイリスク・ハイリターンです。', terms: [{ word: 'アルトコイン', def: 'ビットコイン以外の暗号資産の総称' }] },
    { id: 6019, category: '仮想通貨', level: 2, title: 'ステーブルコインとは', icon: '⚓', content: 'ドルなどの法定通貨と1:1で価値が連動するように設計された暗号資産です。USDT（テザー）、USDC、DAIなどが代表的。価格が安定しているため、①利益確定時の退避先、②取引所間の送金、③DeFiでの運用、に使われます。ただし発行体のリスク（準備金の透明性など）には注意が必要です。', terms: [{ word: 'ペッグ', def: '特定の資産と価値を連動させること' }] },
    { id: 6020, category: '仮想通貨', level: 2, title: 'レイヤー2ソリューション', icon: '🏗️', content: 'メインチェーン（レイヤー1）の混雑を解消するため、取引の一部を別のレイヤーで処理する技術を「レイヤー2」と呼びます。イーサリアムのArbitrum、Optimism、ビットコインのLightning Networkなどがあります。ガス代が安く処理が速いため、日常的な取引に適しています。', terms: [{ word: 'ロールアップ', def: '複数の取引をまとめてメインチェーンに記録する技術' }] },
    { id: 6021, category: '仮想通貨', level: 2, title: 'ソラナ（SOL）', icon: '☀️', content: 'ソラナは高速・低コストを売りにするブロックチェーンで、1秒間に数千件の取引を処理できます。NFTやDeFiで人気ですが、過去に何度もネットワーク停止が発生しており、分散性とのトレードオフが指摘されています。「イーサリアムキラー」と呼ばれるプロジェクトの一つです。', terms: [] },
    { id: 6022, category: '仮想通貨', level: 2, title: 'リップル（XRP）', icon: '💧', content: 'リップル社が開発した国際送金に特化した暗号資産。銀行間決済での採用を目指しています。SEC（米証券取引委員会）との訴訟が注目されましたが、2023年に一部勝訴。ただし完全な分権化ではなく、リップル社の影響力が大きい点は議論があります。', terms: [] },

    // Step 5: ウォレットと取引所 (6 cards)
    { id: 6023, category: '仮想通貨', level: 1, title: 'ウォレットの種類', icon: '👛', content: '暗号資産は「ウォレット」で管理します。【ホットウォレット】インターネット接続。便利だがハッキングリスク。【コールドウォレット】オフライン保管。安全だが不便。取引所に預けるのではなく、自分のウォレットで管理することで「自己主権」を持てますが、秘密鍵の管理責任も自分になります。', terms: [{ word: 'ホットウォレット', def: 'ネット接続されたウォレット' }, { word: 'コールドウォレット', def: 'オフラインで保管するウォレット' }] },
    { id: 6024, category: '仮想通貨', level: 2, title: '秘密鍵とシードフレーズ', icon: '🔑', content: '暗号資産の所有権は「秘密鍵」で証明されます。秘密鍵から生成される「シードフレーズ」（12〜24個の英単語）は、ウォレット復元に必要な最重要情報です。紙に書いて金庫に保管するなど、オフラインで安全に管理してください。これを盗まれると資産をすべて失います。絶対に他人に教えないでください。', terms: [{ word: 'シードフレーズ', def: 'ウォレット復元用の英単語リスト' }] },
    { id: 6025, category: '仮想通貨', level: 1, title: '取引所の選び方', icon: '🏦', content: '暗号資産取引所は大きく2種類。【CEX（中央集権型取引所）】bitFlyer、Coincheck、bitbankなど。本人確認が必要で法規制を受けますが、初心者には使いやすい。【DEX（分散型取引所）】Uniswapなど。本人確認不要で自己管理。上級者向け。まずは金融庁登録のある国内CEXから始めましょう。', terms: [{ word: 'CEX', def: 'Centralized Exchange。中央集権型取引所' }] },
    { id: 6026, category: '仮想通貨', level: 1, title: '取引所と販売所の違い', icon: '🛒', content: '国内取引所には「販売所」と「取引所」があります。【販売所】業者から直接購入。操作は簡単だがスプレッド（手数料相当）が大きい（3〜5%程度）。【取引所】ユーザー同士で売買。スプレッドが小さい（0.1%程度）が操作がやや複雑。慣れたら取引所を使う方がお得です。', terms: [{ word: 'スプレッド', def: '売値と買値の差。実質的な手数料' }] },
    { id: 6027, category: '仮想通貨', level: 2, title: 'ハードウェアウォレット', icon: '🔒', content: '大切な資産を長期保管するなら、ハードウェアウォレット（Ledger、Trezorなど）がおすすめです。秘密鍵をオフラインで保管し、取引時のみPCに接続します。価格は1〜2万円程度。必ず公式サイトから購入し、中古品は避けてください（改ざんリスク）。数十万円以上の資産なら導入を検討しましょう。', terms: [{ word: 'Ledger', def: '代表的なハードウェアウォレットブランド' }] },
    { id: 6028, category: '仮想通貨', level: 2, title: 'メタマスクの使い方', icon: '🦊', content: 'MetaMask（メタマスク）は、イーサリアムとEVM互換チェーンで使える人気のブラウザウォレットです。Chrome拡張機能やスマホアプリとして利用可能。DeFiやNFT購入に必須のツールです。公式サイト（metamask.io）からダウンロードし、偽サイトに注意してください。シードフレーズは絶対に入力を求められても教えないでください。', terms: [{ word: 'EVM互換', def: 'イーサリアム仮想マシンと互換性があること' }] },

    // Step 6: DeFi入門 (6 cards)
    { id: 6029, category: '仮想通貨', level: 2, title: 'DeFiとは', icon: '🏦', content: 'DeFi（分散型金融）は、銀行などの仲介者なしで、貸し借り、交換、運用などの金融サービスを提供する仕組みです。スマートコントラクトが自動で処理するため、24時間365日稼働し、誰でも利用可能。一方で、バグやハッキングリスク、規制の不確実性など、従来の金融にはないリスクもあります。', terms: [{ word: 'DeFi', def: 'Decentralized Finance。分散型金融' }] },
    { id: 6030, category: '仮想通貨', level: 2, title: 'DEX（分散型取引所）', icon: '🔄', content: 'Uniswap、SushiSwapなどのDEXは、ユーザー同士が直接トークンを交換できるプラットフォームです。本人確認不要で、自分のウォレットから直接取引できます。ただしガス代がかかり、スリッページ（想定と実際の価格差）に注意が必要です。まずは少額で試してみましょう。', terms: [{ word: 'DEX', def: 'Decentralized Exchange。分散型取引所' }] },
    { id: 6031, category: '仮想通貨', level: 3, title: 'レンディング（貸付）', icon: '💸', content: 'Aave、Compoundなどのプロトコルでは、暗号資産を預けて利息を得たり、担保を預けて借り入れたりできます。預金金利は変動しますが、ステーブルコインで年数%〜数十%のこともあります。ただし、スマートコントラクトの脆弱性や清算リスクがあり、預けた資産を失う可能性もあります。', terms: [{ word: '清算', def: '担保価値が下がり強制的に返済されること' }] },
    { id: 6032, category: '仮想通貨', level: 3, title: '流動性提供とAMM', icon: '💧', content: 'DEXでは「流動性提供者（LP）」がトークンペアを預け、取引手数料の一部を報酬として受け取ります。これを可能にするのがAMM（自動マーケットメーカー）という仕組みです。ただし「インパーマネントロス」（価格変動による損失）のリスクがあり、単純に保有するより損することもあります。', terms: [{ word: 'AMM', def: 'Automated Market Maker。自動で価格を決める仕組み' }] },
    { id: 6033, category: '仮想通貨', level: 3, title: 'イールドファーミング', icon: '🌾', content: '複数のDeFiプロトコルを組み合わせて高い利回りを追求する戦略を「イールドファーミング」と呼びます。プロジェクトが配布するガバナンストークンを獲得することで、一時的に高APY（年利）が実現することも。ただし持続性には疑問があり、トークン価格下落で損失になるリスクも高いです。', terms: [{ word: 'APY', def: 'Annual Percentage Yield。年換算利回り' }] },
    { id: 6034, category: '仮想通貨', level: 2, title: 'DeFiのリスク', icon: '⚠️', content: 'DeFiには特有のリスクがあります。①スマートコントラクトのバグやハッキング、②ラグプル（開発者が資金を持ち逃げ）、③インパーマネントロス、④規制リスク、⑤清算リスク。2022年には数十億ドル規模のハッキング被害も発生しました。リスクを理解し、失っても良い金額で試すことが重要です。', terms: [{ word: 'ラグプル', def: '開発者が投資家の資金を持ち逃げする詐欺' }] },

    // Step 7: NFT (5 cards)
    { id: 6035, category: '仮想通貨', level: 1, title: 'NFTとは', icon: '🖼️', content: 'NFT（Non-Fungible Token）は「非代替性トークン」の略で、デジタルデータに「唯一無二の証明書」を付与する技術です。同じ1万円札は交換可能（代替可能）ですが、NFTは各トークンが固有のIDを持ち、交換できません。デジタルアート、ゲームアイテム、会員権などに活用されています。', terms: [{ word: '非代替性', def: '他のものと交換できない固有性' }] },
    { id: 6036, category: '仮想通貨', level: 2, title: 'NFTの購入方法', icon: '🛍️', content: 'NFTはOpenSea、Blur、Magic Edenなどのマーケットプレイスで購入できます。【手順】①MetaMaskなどのウォレットを用意、②ETHやSOLを入金、③マーケットプレイスにウォレット接続、④欲しいNFTを購入（ガス代も必要）。偽コレクションに注意し、公式リンクから購入しましょう。', terms: [{ word: 'OpenSea', def: '最大手のNFTマーケットプレイス' }] },
    { id: 6037, category: '仮想通貨', level: 2, title: 'NFTの活用事例', icon: '🎮', content: 'NFTは様々な分野で活用されています。①デジタルアート（高額落札で話題）、②ゲーム内アイテム（Play to Earn）、③メンバーシップ・入場券、④音楽・動画の所有権、⑤ドメイン名（ENSなど）。単なる投機対象だけでなく、コミュニティへのアクセス権として価値を持つケースも増えています。', terms: [] },
    { id: 6038, category: '仮想通貨', level: 2, title: 'NFTのロイヤリティ', icon: '💰', content: 'NFTはクリエイターにとって革新的です。二次流通（転売）時にも、設定した割合（通常5〜10%）がクリエイターに還元される「ロイヤリティ」の仕組みがあります。作品が高値で転売されるほどクリエイターも潤います。ただし最近はロイヤリティを無視するマーケットプレイスも登場し、議論になっています。', terms: [{ word: 'ロイヤリティ', def: '二次流通時にクリエイターに還元される収益' }] },
    { id: 6039, category: '仮想通貨', level: 2, title: 'NFTの注意点', icon: '⚠️', content: 'NFT購入時の注意点：①価格変動が激しく、価値がゼロになることも、②偽コレクション・詐欺が多い、③ガス代が高額になることがある、④画像データ自体はブロックチェーン外に保存されることが多い（IPFS等）、⑤著作権はNFT購入で自動移転しない場合が多い。投機目的より、本当に欲しいNFTを買いましょう。', terms: [] },

    // Step 8: セキュリティ (6 cards)
    { id: 6040, category: '仮想通貨', level: 1, title: 'セキュリティの基本', icon: '🛡️', content: '暗号資産のセキュリティで最重要なのは「秘密鍵・シードフレーズは絶対に他人に教えない」ことです。サポートを装った詐欺、偽サイト、フィッシングメールに注意。公式サイトはブックマーク、取引所は2段階認証必須、大金はハードウェアウォレットで保管。「自己管理」が基本の世界です。', terms: [] },
    { id: 6041, category: '仮想通貨', level: 2, title: 'フィッシング詐欺の手口', icon: '🎣', content: '暗号資産を狙ったフィッシング詐欺が横行しています。①偽の取引所サイト（URLが微妙に違う）、②「ウォレットの確認」を装ったDM、③偽のエアドロップ告知、④偽のサポートアカウント。公式リンクをブックマークし、DMからのリンクは踏まない、シードフレーズを入力しない、を徹底してください。', terms: [] },
    { id: 6042, category: '仮想通貨', level: 2, title: '詐欺プロジェクトの見分け方', icon: '🚨', content: '詐欺プロジェクトの特徴：①「必ず儲かる」「年利100%保証」など甘い言葉、②匿名の開発チーム、③ホワイトペーパーがない/コピペ、④コントラクトが未検証、⑤ロック期間なしの大量トークン保有。DYOR（Do Your Own Research）＝自分で調べることが重要。わからないものには投資しないでください。', terms: [{ word: 'DYOR', def: '自分で調べること。投資判断の基本' }] },
    { id: 6043, category: '仮想通貨', level: 1, title: 'セルフゴックスを防ぐ', icon: '😱', content: '操作ミスで資産を失うことを「セルフゴックス」と呼びます。①送金アドレスを1文字でも間違えると永久に失われる、②違うチェーンに送ると取り出せない（ERC-20をBSCに送るなど）、③ガス代不足でトランザクションが失敗。送金前に少額でテスト送金する習慣をつけましょう。', terms: [{ word: 'セルフゴックス', def: '自分のミスで資産を失うこと' }] },
    { id: 6044, category: '仮想通貨', level: 2, title: '取引所のリスク', icon: '🏚️', content: '取引所に資産を預けることは「Not your keys, not your coins（鍵を持たなければ、コインはあなたのものではない）」と言われます。2022年FTX破綻では顧客資産が失われました。分散して保管、長期保有分は自己管理ウォレットへ移動することを検討しましょう。', terms: [] },
    { id: 6045, category: '仮想通貨', level: 2, title: 'ウォレット承認の取り消し', icon: '🔓', content: 'DeFiやNFTを使うと、ウォレットにトークン操作の「承認（Approve）」を与えます。悪意あるサイトに無制限の承認を与えると、資産を抜き取られる可能性があります。Revoke.cashなどのツールで定期的に不要な承認を取り消しましょう。怪しいサイトでの承認は最小限に。', terms: [{ word: 'Revoke', def: 'スマートコントラクトへの承認を取り消すこと' }] },

    // Step 9: 税金・規制・未来 (5 cards)
    { id: 6046, category: '仮想通貨', level: 2, title: '日本の暗号資産税制', icon: '🇯🇵', content: '日本では暗号資産の利益は「雑所得」として総合課税されます。最大税率は住民税込みで約55%。株式の約20%と比べて不利です。また、暗号資産同士の交換や、NFT購入時も課税対象になる可能性があります。年間利益20万円以上（給与所得者の場合）は確定申告が必要です。', terms: [{ word: '雑所得', def: '他の所得区分に該当しない所得' }] },
    { id: 6047, category: '仮想通貨', level: 2, title: '損益計算の方法', icon: '🧮', content: '暗号資産の損益計算は複雑です。取得価額の計算方法は「移動平均法」か「総平均法」を選択。複数の取引所を使っていると集計が大変です。クリプタクト、Gtaxなどの計算ツールを活用しましょう。DeFi取引やエアドロップも課税対象になりえます。わからない場合は税理士に相談を。', terms: [] },
    { id: 6048, category: '仮想通貨', level: 2, title: '世界の規制動向', icon: '🌍', content: '暗号資産の規制は国によって大きく異なります。日本は世界に先駆けて法整備が進んでいますが、米国ではSECとの攻防が続いています。EUはMiCA規制を導入予定。各国で規制が強化される傾向にあり、投資判断に影響を与える可能性があります。最新の規制動向をウォッチしましょう。', terms: [{ word: 'MiCA', def: 'EUの暗号資産規制法案' }] },
    { id: 6049, category: '仮想通貨', level: 2, title: 'Web3.0の未来', icon: '🌐', content: 'Web3.0は、ブロックチェーンを基盤とした分散型インターネットのビジョンです。GAFAのような巨大企業がデータを独占するWeb2.0に対し、ユーザー自身がデータを所有・管理する世界を目指します。DAO、DeFi、NFTはその構成要素です。まだ発展途上ですが、インターネットの新しい形として注目されています。', terms: [{ word: 'Web3.0', def: '分散型の次世代インターネット構想' }] },
    { id: 6050, category: '仮想通貨', level: 1, title: '仮想通貨投資の心構え', icon: '🎯', content: '仮想通貨は非常にハイリスクな資産クラスです。①「なくなっても良いお金」で投資する、②ポートフォリオの一部（5〜10%以下推奨）に留める、③長期目線で考える、④よく調べてから投資する、⑤詐欺に注意する。「必ず儲かる」話はありません。リスクを理解し、自己責任で判断してください。', terms: [] }
];

