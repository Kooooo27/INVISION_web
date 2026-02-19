/* =========================================
   SENTRY ERROR MONITORING
   ========================================= */
import * as Sentry from '@sentry/react';

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

if (SENTRY_DSN) {
    Sentry.init({
        dsn: SENTRY_DSN,
        environment: import.meta.env.MODE, // 'development' | 'production'

        // Performance monitoring (optional — set to 0 to disable)
        tracesSampleRate: import.meta.env.PROD ? 0.2 : 1.0,

        // Only send errors in production by default
        enabled: import.meta.env.PROD,

        // Ignore common non-actionable errors
        ignoreErrors: [
            'ResizeObserver loop',
            'Non-Error promise rejection captured',
            'Network request failed',
        ],
    });
    console.log('✅ Sentry initialized');
} else {
    console.log('⚠️ Sentry DSN not configured. Error monitoring disabled.');
}

export { Sentry };
