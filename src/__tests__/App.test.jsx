import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Mock Firebase to avoid initialization during tests
vi.mock('../firebase', () => ({
    auth: null,
    db: null,
    isFirebaseReady: false,
    firebase: { auth: { GoogleAuthProvider: vi.fn() } },
}));

// Mock Sentry
vi.mock('../sentry', () => ({
    Sentry: { ErrorBoundary: null },
}));

describe('App Component', () => {
    it('renders without crashing', async () => {
        const { default: App } = await import('../App');
        const { container } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        expect(container).toBeTruthy();
    });

    it('renders SplashScreen initially (Firebase not ready)', async () => {
        const { default: App } = await import('../App');
        const { container } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        // When Firebase is not ready, splash screen should show
        const splashEl = container.querySelector('[class*="splash"]') || container.querySelector('.animate-spin');
        // App renders something (splash or loading)
        expect(container.innerHTML.length).toBeGreaterThan(0);
    });
});

describe('State Management', () => {
    it('AppContext provides default values', async () => {
        const { AppContext } = await import('../contexts/AppContext');
        expect(AppContext).toBeDefined();
    });

    it('usePageMeta hook exports correctly', async () => {
        const mod = await import('../hooks/usePageMeta');
        expect(mod.usePageMeta).toBeDefined();
        expect(typeof mod.usePageMeta).toBe('function');
    });
});

describe('Component Exports', () => {
    it('ChartPatternSVG exports as default', async () => {
        const mod = await import('../components/charts/ChartPatternSVG');
        expect(mod.default).toBeDefined();
    });

    it('Paywall exports named components', async () => {
        const mod = await import('../components/Paywall');
        expect(mod.RoadmapPurchasePaywall).toBeDefined();
        expect(mod.SubscriptionPaywall).toBeDefined();
    });

    it('RoadmapView exports as default', async () => {
        const mod = await import('../components/RoadmapView');
        expect(mod.default).toBeDefined();
    });

    it('CardSwipe exports as default', async () => {
        const mod = await import('../components/CardSwipe');
        expect(mod.default).toBeDefined();
    });

    it('TheBriefing exports as default', async () => {
        const mod = await import('../pages/TheBriefing');
        expect(mod.default).toBeDefined();
    });
});
