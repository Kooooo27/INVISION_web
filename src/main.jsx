import './sentry'; // Must be first — initializes error monitoring
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sentry } from './sentry';
import App from './App';
import './index.css';

const SentryErrorBoundary = Sentry.ErrorBoundary || React.Fragment;

ReactDOM.createRoot(document.getElementById('root')).render(
    <SentryErrorBoundary fallback={<div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>エラーが発生しました。ページを再読み込みしてください。</div>}>
        <App />
    </SentryErrorBoundary>
);
