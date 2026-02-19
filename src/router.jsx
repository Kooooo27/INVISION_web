import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { RouteErrorFallback } from './components/ErrorFallback';

// Lazy-loaded pages for code splitting
const AssetGallery = lazy(() => import('./pages/AssetGallery'));
const TheBriefing = lazy(() => import('./pages/TheBriefing'));
const PortfolioCreator = lazy(() => import('./pages/PortfolioCreator'));
const PortfolioCalibration = lazy(() => import('./pages/PortfolioCalibration'));
const BrokerComparison = lazy(() => import('./pages/BrokerComparison'));
const Tokushoho = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.Tokushoho })));
const PrivacyPolicy = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.PrivacyPolicy })));

// Minimal loading fallback
const PageLoader = () => (
    <div className="flex items-center justify-center h-[50vh]">
        <div className="w-6 h-6 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
);

const withSuspense = (Component) => (
    <Suspense fallback={<PageLoader />}>
        <Component />
    </Suspense>
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <RouteErrorFallback />,
        children: [
            { index: true, element: withSuspense(AssetGallery) },
            { path: 'briefing', element: withSuspense(TheBriefing) },
            { path: 'portfolio', element: withSuspense(PortfolioCreator) },
            { path: 'diagnosis', element: withSuspense(PortfolioCalibration) },
            { path: 'calibration', element: withSuspense(PortfolioCalibration) },
            { path: 'brokers', element: withSuspense(BrokerComparison) },
            { path: 'tokushoho', element: withSuspense(Tokushoho) },
            { path: 'privacy', element: withSuspense(PrivacyPolicy) },
        ],
    },
]);
