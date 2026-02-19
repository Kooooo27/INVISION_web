import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_META = {
    '/': {
        title: 'INVISION — 投資学習アプリ',
        description: '投資の基礎から応用まで、スワイプ式カードで効率的に学べる投資学習プラットフォーム。',
    },
    '/briefing': {
        title: 'ザ・ブリーフィング — INVISION',
        description: 'スワイプ式カードで投資知識を体系的に学習。チャートパターン、テクニカル分析、ファンダメンタルズ分析など。',
    },
    '/portfolio': {
        title: 'ポートフォリオ設計 — INVISION',
        description: '投資配分シミュレーター。リスク許容度に合わせた最適なポートフォリオを設計。',
    },
    '/diagnosis': {
        title: '投資タイプ診断 — INVISION',
        description: 'あなたの投資スタイルを診断。リスク許容度と投資目標に基づいたプロファイルを作成。',
    },
    '/calibration': {
        title: '投資タイプ診断 — INVISION',
        description: 'あなたの投資スタイルを診断。リスク許容度と投資目標に基づいたプロファイルを作成。',
    },
    '/brokers': {
        title: '証券会社比較 — INVISION',
        description: '主要ネット証券のランキング・手数料・機能を徹底比較。あなたに最適な証券会社が見つかります。',
    },
    '/tokushoho': {
        title: '特定商取引法に基づく表記 — INVISION',
        description: '特定商取引法に基づく表記。',
    },
    '/privacy': {
        title: 'プライバシーポリシー — INVISION',
        description: '個人情報の取り扱いについて。',
    },
};

const DEFAULT_META = {
    title: 'INVISION — 投資学習アプリ',
    description: '投資の基礎から応用まで、スワイプ式カードで効率的に学べる投資学習プラットフォーム。',
};

/**
 * Sets document title and meta description based on current route.
 * Drop-in hook — just call usePageMeta() in any route-aware component.
 */
export const usePageMeta = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const meta = PAGE_META[pathname] || DEFAULT_META;
        document.title = meta.title;

        let descEl = document.querySelector('meta[name="description"]');
        if (!descEl) {
            descEl = document.createElement('meta');
            descEl.setAttribute('name', 'description');
            document.head.appendChild(descEl);
        }
        descEl.setAttribute('content', meta.description);
    }, [pathname]);
};
