// Component extracted from index.html
{
    const { motion, AnimatePresence } = Motion;

    const Tokushoho = ({ onNavigate }) => {
        const tableRows = [
            { label: "販売事業者", value: "田中 滉一郎" },
            { label: "所在地 / 連絡先", value: "消費者庁の規定に基づき、請求があった場合には遅滞なく開示いたします。\nご希望の方は下記メールアドレスまでご連絡ください。\nsupport@invision-app.com" },
            { label: "販売価格", value: "各商品ページに記載（表示価格は消費税を含みます）" },
            { label: "商品代金以外の必要料金", value: "インターネット接続料金その他の電気通信回線の通信に関する費用はお客様の負担となります。" },
            { label: "お支払い方法", value: "クレジットカード決済（Visa, Mastercard, JCB, Amex, Diners）\nApple Pay, Google Pay" },
            { label: "お支払い時期", value: "商品購入時にお支払いが確定します。" },
            { label: "商品の引渡時期", value: "決済完了後、直ちにご利用いただけます。" },
            { label: "返品・交換", value: "デジタルコンテンツの性質上、購入確定後の返品・交換・キャンセルはお受けできません。予めご了承ください。" },
            { label: "動作環境", value: "iOS 15.0以上 / Android 10.0以上\n推奨ブラウザ：Safari, Chromeの最新版" },
        ];

        return (
            <div className="min-h-screen bg-obsidian py-24 px-8 relative overflow-hidden">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] opacity-20" />
                    <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] opacity-10" />
                </div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <button onClick={() => onNavigate('gallery')} className="text-dim hover:text-gold transition-colors mb-8 flex items-center gap-2 text-sm group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> 戻る
                    </button>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-dim text-xs tracking-[0.3em] mb-4 text-gold font-bold">LEGAL INFORMATION</p>
                        <h2 className="text-3xl md:text-4xl font-black text-platinum mb-10 tracking-tight">特定商取引法に基づく表記</h2>

                        <div className="bg-ash/50 border border-white/10 rounded-sm overflow-hidden backdrop-blur-sm">
                            {tableRows.map((row, i) => (
                                <div key={i} className={`flex flex-col md:flex-row border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                    <div className="md:w-1/3 p-4 md:p-6 text-sm text-platinum/60 font-medium md:border-r border-white/5">
                                        {row.label}
                                    </div>
                                    <div className="md:w-2/3 p-4 md:p-6 text-sm text-platinum leading-relaxed whitespace-pre-wrap font-light">
                                        {row.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-sm">
                            <h3 className="text-sm font-bold text-gold mb-2">お問い合わせについて</h3>
                            <p className="text-xs text-dim leading-relaxed">
                                本サービスに関するお問い合わせは、上記メールアドレスまでお願いいたします。<br />
                                原則として2営業日以内にご返信いたしますが、内容によってはお時間をいただく場合がございます。<br />
                                なお、投資助言に該当する個別具体的なご質問にはお答えできませんので予めご了承ください。
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    };

    const PrivacyPolicy = ({ onNavigate }) => {
        const sections = [
            { title: '1. 収集する情報', content: '当サービスでは、以下の情報を取得する場合があります。\n\n• アカウント情報：Googleアカウントによるログイン時のメールアドレス・表示名\n• 学習データ：学習進捗、理解度、苦手カード情報\n• 診断結果：投資タイプ診断の回答・結果\n• 決済情報：Stripeを通じた決済処理（クレジットカード情報は当社では保持しません）\n• 端末情報：ブラウザ種別、画面サイズ等（サービス改善のため）' },
            { title: '2. 利用目的', content: '取得した情報は、以下の目的で利用します。\n\n• サービスの提供・運営\n• 学習進捗の管理・可視化\n• 有料プランの提供・決済処理\n• サービスの改善・新機能開発\n• お問い合わせ対応' },
            { title: '3. 第三者提供', content: '当サービスでは以下の外部サービスを利用しています。各サービスのプライバシーポリシーも併せてご確認ください。\n\n• Firebase (Google)：認証・データ保存\n• Stripe：決済処理\n\nその他、法令に基づく開示要請があった場合を除き、お客様の個人情報を第三者に提供することはありません。' },
            { title: '4. Cookie・ローカルストレージ', content: '当サービスでは、学習進捗や設定の保存にブラウザのLocalStorageを使用しています。これらはサービスの正常な動作に必要なものです。ブラウザの設定で無効化可能ですが、その場合一部機能が利用できなくなることがあります。' },
            { title: '5. データの保存・削除', content: '学習データはアプリ内の「設定」から削除できます。アカウント削除をご希望の場合は、support@invision-app.com までご連絡ください。速やかに対応いたします。' },
            { title: '6. 未成年者の利用', content: '18歳未満の方は、保護者の同意の上でご利用ください。有料サービスの購入には保護者の同意が必要です。' },
            { title: '7. ポリシーの変更', content: '本ポリシーは事前の告知なく変更される場合があります。重要な変更がある場合は、サービス内でお知らせいたします。' },
            { title: '8. お問い合わせ', content: 'プライバシーに関するご質問・ご要望は下記までお願いいたします。\n\nsupport@invision-app.com' }
        ];

        return (
            <div className="min-h-screen bg-obsidian py-24 px-8 relative overflow-hidden">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] opacity-20" />
                    <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] opacity-10" />
                </div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <button onClick={() => onNavigate('gallery')} className="text-dim hover:text-gold transition-colors mb-8 flex items-center gap-2 text-sm group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> 戻る
                    </button>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-dim text-xs tracking-[0.3em] mb-4 text-gold font-bold">PRIVACY POLICY</p>
                        <h2 className="text-3xl md:text-4xl font-black text-platinum mb-4 tracking-tight">プライバシーポリシー</h2>
                        <p className="text-sm text-dim mb-10">最終更新日：2025年2月18日</p>

                        <div className="space-y-6">
                            {sections.map((section, i) => (
                                <div key={i} className="bg-ash/50 border border-white/10 rounded-sm p-6 backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-platinum mb-3">{section.title}</h3>
                                    <p className="text-sm text-platinum/80 leading-relaxed whitespace-pre-wrap font-light">{section.content}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    };

    // ============================================
    // FIREBASE AUTH UTILS
    // ============================================

    window.Tokushoho = Tokushoho;
    window.PrivacyPolicy = PrivacyPolicy;
}
