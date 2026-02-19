import React from 'react';

/**
 * SVG chart pattern visualizations for briefing cards.
 * Pure component — no state, no side effects.
 */
const ChartPatternSVG = ({ pattern }) => {
    const patterns = {
        head_and_shoulders: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <polyline points="5,50 20,40 30,25 40,40 55,15 70,40 80,25 90,40 115,50" fill="none" stroke="#DAA520" strokeWidth="2" />
                <line x1="20" y1="40" x2="90" y2="40" stroke="#DAA520" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                <text x="55" y="8" fill="#DAA520" fontSize="6" textAnchor="middle">H</text>
                <text x="30" y="20" fill="#888" fontSize="5" textAnchor="middle">S</text>
                <text x="80" y="20" fill="#888" fontSize="5" textAnchor="middle">S</text>
            </svg>
        ),
        double_top: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <polyline points="5,50 25,20 45,40 65,20 85,50 115,55" fill="none" stroke="#DAA520" strokeWidth="2" />
                <line x1="25" y1="20" x2="65" y2="20" stroke="#DAA520" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
            </svg>
        ),
        double_bottom: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <polyline points="5,10 25,50 45,25 65,50 85,10 115,5" fill="none" stroke="#10B981" strokeWidth="2" />
                <line x1="25" y1="50" x2="65" y2="50" stroke="#10B981" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
            </svg>
        ),
        golden_cross: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <polyline points="5,50 30,45 50,35 70,25 90,18 115,10" fill="none" stroke="#DAA520" strokeWidth="2" />
                <polyline points="5,40 30,42 50,40 70,35 90,28 115,20" fill="none" stroke="#888" strokeWidth="1.5" strokeDasharray="4,2" />
                <circle cx="60" cy="37" r="4" fill="#DAA520" opacity="0.8" />
                <text x="60" y="52" fill="#DAA520" fontSize="6" textAnchor="middle">GC</text>
            </svg>
        ),
        dead_cross: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <polyline points="5,10 30,18 50,30 70,40 90,48 115,55" fill="none" stroke="#F43F5E" strokeWidth="2" />
                <polyline points="5,20 30,22 50,28 70,35 90,42 115,48" fill="none" stroke="#888" strokeWidth="1.5" strokeDasharray="4,2" />
                <circle cx="55" cy="30" r="4" fill="#F43F5E" opacity="0.8" />
                <text x="55" y="45" fill="#F43F5E" fontSize="6" textAnchor="middle">DC</text>
            </svg>
        ),
        symmetrical_triangle: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <polyline points="5,15 25,45 45,20 65,40 85,28 100,35 115,10" fill="none" stroke="#DAA520" strokeWidth="2" />
                <line x1="5" y1="15" x2="85" y2="35" stroke="#888" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                <line x1="25" y1="45" x2="85" y2="28" stroke="#888" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
            </svg>
        ),
        doji: (
            <svg viewBox="0 0 60 60" className="w-16 h-16 mx-auto">
                <line x1="30" y1="10" x2="30" y2="50" stroke="#DAA520" strokeWidth="1.5" />
                <line x1="22" y1="30" x2="38" y2="30" stroke="#DAA520" strokeWidth="3" />
            </svg>
        ),
        hammer: (
            <svg viewBox="0 0 60 60" className="w-16 h-16 mx-auto">
                <line x1="30" y1="20" x2="30" y2="50" stroke="#DAA520" strokeWidth="1.5" />
                <rect x="24" y="12" width="12" height="10" fill="#10B981" stroke="#10B981" />
            </svg>
        ),
        engulfing: (
            <svg viewBox="0 0 80 60" className="w-20 h-16 mx-auto">
                <rect x="20" y="25" width="10" height="15" fill="#F43F5E" />
                <rect x="40" y="15" width="15" height="30" fill="#10B981" />
            </svg>
        ),
        bollinger_bands: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <path d="M5,30 Q30,10 60,30 T115,30" fill="none" stroke="#888" strokeWidth="1" strokeDasharray="2,2" />
                <path d="M5,40 Q30,35 60,40 T115,40" fill="none" stroke="#DAA520" strokeWidth="1.5" />
                <path d="M5,50 Q30,55 60,50 T115,50" fill="none" stroke="#888" strokeWidth="1" strokeDasharray="2,2" />
                <polyline points="10,42 30,38 50,45 70,35 90,42 110,38" fill="none" stroke="#10B981" strokeWidth="1.5" />
            </svg>
        ),
        rsi: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <rect x="5" y="5" width="110" height="50" fill="none" stroke="#333" strokeWidth="0.5" />
                <line x1="5" y1="15" x2="115" y2="15" stroke="#F43F5E" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
                <line x1="5" y1="45" x2="115" y2="45" stroke="#10B981" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
                <polyline points="10,35 25,28 40,38 55,22 70,30 85,12 100,25 110,32" fill="none" stroke="#DAA520" strokeWidth="2" />
                <text x="5" y="12" fill="#F43F5E" fontSize="6">70</text>
                <text x="5" y="50" fill="#10B981" fontSize="6">30</text>
            </svg>
        ),
        macd: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <line x1="5" y1="35" x2="115" y2="35" stroke="#333" strokeWidth="0.5" />
                <polyline points="10,40 30,32 50,38 70,28 90,35 110,25" fill="none" stroke="#DAA520" strokeWidth="2" />
                <polyline points="10,42 30,38 50,40 70,33 90,38 110,30" fill="none" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3,2" />
                {[15, 25, 35, 45, 55, 65, 75, 85, 95, 105].map((x, i) => (
                    <rect key={i} x={x} y={35 - (i % 2 === 0 ? 5 : -2)} width="3" height={Math.abs((i % 2 === 0 ? 5 : -2))} fill={i % 2 === 0 ? "#10B981" : "#F43F5E"} opacity="0.5" />
                ))}
            </svg>
        ),
        moving_average: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <polyline points="5,45 20,38 35,42 50,35 65,40 80,30 95,35 110,25" fill="none" stroke="#888" strokeWidth="1" />
                <polyline points="5,50 30,42 55,45 80,38 110,30" fill="none" stroke="#DAA520" strokeWidth="2" />
                <polyline points="5,52 40,48 75,45 110,38" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4,2" />
            </svg>
        ),
        candlestick_basics: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <g>
                    <line x1="20" y1="12" x2="20" y2="50" stroke="#10B981" strokeWidth="1" />
                    <rect x="15" y="20" width="10" height="20" fill="#10B981" />
                </g>
                <g>
                    <line x1="50" y1="8" x2="50" y2="45" stroke="#F43F5E" strokeWidth="1" />
                    <rect x="45" y="15" width="10" height="22" fill="#F43F5E" />
                </g>
                <g>
                    <line x1="80" y1="18" x2="80" y2="55" stroke="#10B981" strokeWidth="1" />
                    <rect x="75" y="25" width="10" height="18" fill="#10B981" />
                </g>
                <g>
                    <line x1="105" y1="5" x2="105" y2="40" stroke="#F43F5E" strokeWidth="1" />
                    <rect x="100" y="10" width="10" height="25" fill="#F43F5E" />
                </g>
            </svg>
        ),
        ichimoku_base: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <path d="M10,40 Q40,30 60,35 Q90,30 115,25 L115,35 Q90,40 60,45 Q40,40 10,50 Z" fill="#10B981" opacity="0.2" />
                <polyline points="10,45 30,35 60,40 90,20 115,15" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                <polyline points="10,48 40,40 70,38 100,25 115,22" fill="none" stroke="#EF4444" strokeWidth="1.5" />
            </svg>
        ),
        ichimoku_cloud_break: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <path d="M10,35 Q60,30 115,25 L115,45 Q60,50 10,55 Z" fill="#10B981" opacity="0.2" />
                <polyline points="10,50 40,45 60,20 80,15 115,10" fill="none" stroke="#DAA520" strokeWidth="2" />
                <circle cx="60" cy="20" r="3" fill="#DAA520" />
            </svg>
        ),
        sanyaku_kouten: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#DAA520" />
                    </marker>
                </defs>
                <path d="M10,40 Q60,35 115,30 L115,50 Q60,55 10,60 Z" fill="#10B981" opacity="0.1" />
                <polyline points="10,55 40,45 60,25 90,15 115,10" fill="none" stroke="#DAA520" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="60" y="20" fill="#DAA520" fontSize="8" fontWeight="bold" textAnchor="middle">BUY!</text>
            </svg>
        ),
        elliott_wave_impulse: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <polyline points="5,50 25,30 40,40 70,10 90,25 115,5" fill="none" stroke="#DAA520" strokeWidth="2" />
                <text x="25" y="25" fill="#888" fontSize="6">1</text>
                <text x="40" y="48" fill="#888" fontSize="6">2</text>
                <text x="70" y="5" fill="#888" fontSize="6">3</text>
                <text x="90" y="32" fill="#888" fontSize="6">4</text>
                <text x="115" y="15" fill="#888" fontSize="6">5</text>
            </svg>
        ),
        stochastic: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <rect x="5" y="10" width="110" height="40" fill="none" stroke="#333" strokeWidth="0.5" />
                <line x1="5" y1="15" x2="115" y2="15" stroke="#F43F5E" strokeDasharray="2,2" opacity="0.5" />
                <line x1="5" y1="45" x2="115" y2="45" stroke="#10B981" strokeDasharray="2,2" opacity="0.5" />
                <path d="M5,40 Q30,50 50,20 Q80,10 115,30" fill="none" stroke="#DAA520" strokeWidth="1.5" />
                <path d="M5,45 Q30,55 55,25 Q80,15 115,35" fill="none" stroke="#F43F5E" strokeWidth="1" strokeDasharray="3,2" />
            </svg>
        ),
        parabolic: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <path d="M5,50 Q60,10 115,40" fill="none" stroke="#888" strokeWidth="1" opacity="0.5" />
                {[10, 20, 30, 40, 50].map((x, i) => (
                    <circle key={i} cx={x} cy={55 - i * 8} r="1.5" fill="#10B981" />
                ))}
                {[60, 70, 80, 90, 100, 110].map((x, i) => (
                    <circle key={i + 5} cx={x} cy={20 + i * 5} r="1.5" fill="#F43F5E" />
                ))}
            </svg>
        ),
        v_bottom: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <polyline points="10,10 60,50 110,10" fill="none" stroke="#DAA520" strokeWidth="2" />
                <circle cx="60" cy="50" r="3" fill="#DAA520" />
            </svg>
        ),
        rounding_bottom: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <path d="M10,10 C10,10 20,50 60,50 C100,50 110,10 110,10" fill="none" stroke="#DAA520" strokeWidth="2" />
            </svg>
        ),
        diamond_top: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <polygon points="10,30 60,10 110,30 60,50" fill="rgba(218,165,32,0.1)" stroke="#DAA520" strokeWidth="1.5" />
                <polyline points="20,40 40,20 60,40 80,20 100,40" fill="none" stroke="#888" strokeWidth="1" opacity="0.6" />
            </svg>
        ),
        rectangle: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <rect x="10" y="15" width="100" height="30" fill="rgba(255,255,255,0.05)" stroke="#DAA520" strokeWidth="1" strokeDasharray="3,3" />
                <polyline points="10,30 30,15 50,45 70,15 90,45 110,30" fill="none" stroke="#888" strokeWidth="1.5" />
            </svg>
        ),
        divergence: (
            <svg viewBox="0 0 120 60" className="w-full h-20">
                <line x1="10" y1="25" x2="110" y2="15" stroke="#DAA520" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <line x1="10" y1="45" x2="110" y2="55" stroke="#F43F5E" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x="60" y="35" fill="#888" fontSize="8" textAnchor="middle">DIVERGENCE</text>
            </svg>
        ),
    };
    return patterns[pattern] || (
        <svg viewBox="0 0 120 60" className="w-full h-20">
            <polyline points="5,50 30,35 55,45 80,25 105,30 115,15" fill="none" stroke="#DAA520" strokeWidth="2" />
        </svg>
    );
};

export default React.memo(ChartPatternSVG);
