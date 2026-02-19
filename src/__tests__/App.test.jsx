import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';

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
        const { container } = render(<App />);
        expect(container).toBeTruthy();
    });
});
