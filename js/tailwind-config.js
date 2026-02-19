tailwind.config = {
    theme: {
        extend: {
            colors: {
                obsidian: '#050505',
                matte: '#0a0a0a',
                carbon: '#111111',
                ash: '#1a1a1a',
                stone: '#2a2a2a',
                gold: '#C9A227',
                platinum: '#E8E8E8',
                dim: '#666666',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'ticker': 'ticker 40s linear infinite',
            },
            keyframes: {
                ticker: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        }
    }
}
