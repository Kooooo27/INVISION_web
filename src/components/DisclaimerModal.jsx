import React from 'react';
import { motion } from 'framer-motion';

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

export default DisclaimerModal;
