import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        // React core
                        if (id.includes('react-dom') || id.includes('react-router') || (id.includes('/react/') && !id.includes('react-dom'))) {
                            return 'vendor-react';
                        }
                        // Animation
                        if (id.includes('framer-motion')) {
                            return 'vendor-motion';
                        }
                        // Firebase
                        if (id.includes('firebase') || id.includes('@firebase')) {
                            return 'vendor-firebase';
                        }
                        // Stripe
                        if (id.includes('stripe')) {
                            return 'vendor-stripe';
                        }
                    }
                },
            },
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/__tests__/setup.js',
    },
});
