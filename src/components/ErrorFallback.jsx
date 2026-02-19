import React from 'react';
import { useRouteError } from 'react-router-dom';

/**
 * Premium error fallback UI.
 * Used both as a Sentry ErrorBoundary fallback and as React Router errorElement.
 */

// ── React Router Error Element ──
export const RouteErrorFallback = () => {
    const error = useRouteError();
    const message = error?.message || error?.statusText || '予期しないエラーが発生しました';

    return (
        <ErrorUI
            title="ページを読み込めませんでした"
            message={message}
            showReload
        />
    );
};

// ── Sentry ErrorBoundary Fallback ──
export const AppErrorFallback = ({ error, resetError }) => {
    return (
        <ErrorUI
            title="アプリケーションエラー"
            message={error?.message || '予期しないエラーが発生しました'}
            showReload
            onRetry={resetError}
        />
    );
};

// ── Shared UI ──
const ErrorUI = ({ title, message, showReload = true, onRetry }) => {
    const handleReload = () => {
        // Clear any corrupted state
        try {
            localStorage.removeItem('invision_state_v1');
        } catch (e) { /* ignore */ }
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center">
                {/* Logo */}
                <div className="mb-8">
                    <span className="text-2xl font-black">
                        <span className="text-[#C9A227]">IN</span>
                        <span className="text-[#E8E4D9]">VISION</span>
                    </span>
                </div>

                {/* Error icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#C9A227]/30 flex items-center justify-center">
                    <span className="text-2xl font-black text-[#C9A227]">!</span>
                </div>

                {/* Title */}
                <h1 className="text-xl font-bold text-[#E8E4D9] mb-3">
                    {title}
                </h1>

                {/* Message */}
                <p className="text-sm text-[#9CA3AF] mb-8 leading-relaxed">
                    {import.meta.env?.PROD
                        ? 'ご不便をおかけして申し訳ございません。ページを再読み込みしてお試しください。'
                        : message
                    }
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className="w-full py-3 px-6 bg-[#C9A227] text-black font-bold rounded-sm hover:bg-[#d4ad2f] transition-colors cursor-pointer"
                        >
                            再試行
                        </button>
                    )}
                    {showReload && (
                        <button
                            onClick={handleReload}
                            className="w-full py-3 px-6 border border-[#C9A227]/30 text-[#C9A227] font-bold rounded-sm hover:bg-[#C9A227]/10 transition-colors cursor-pointer"
                        >
                            ホームに戻る
                        </button>
                    )}
                </div>

                {/* Footer hint */}
                <p className="mt-8 text-xs text-[#6B7280]">
                    問題が解決しない場合は、ブラウザのキャッシュを<br />クリアしてお試しください。
                </p>
            </div>
        </div>
    );
};

export default ErrorUI;
