import './sentry'; // Must be first — initializes error monitoring
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Sentry } from './sentry';
import { AppErrorFallback } from './components/ErrorFallback';
import { router } from './router';
import './index.css';

// Use Sentry ErrorBoundary if available, otherwise React's built-in
const SentryErrorBoundary = Sentry.ErrorBoundary || React.Fragment;

ReactDOM.createRoot(document.getElementById('root')).render(
    <SentryErrorBoundary fallback={AppErrorFallback}>
        <RouterProvider router={router} />
    </SentryErrorBoundary>
);

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => { });
    });
}
