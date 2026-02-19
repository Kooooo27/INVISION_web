// src/features/Brokers/RadarChart.jsx
import React, { useMemo } from 'react';

const RadarChart = ({ ratings, size = 100, showLabels = false }) => {
    const center = size / 2;
    const radius = size * (showLabels ? 0.3 : 0.38);
    const axes = ['fees', 'products', 'ease', 'support', 'tools'];
    const axisLabels = ['手数料', '商品', '簡単さ', 'サポート', 'ツール'];
    const angleStep = (Math.PI * 2) / axes.length;
    const chartId = useMemo(() => `radar-${Math.random().toString(36).substr(2, 9)}`, []);

    const getPoint = (value, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const r = (value / 5) * radius;
        return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
    };

    const points = axes.map((axis, i) => getPoint(ratings[axis], i));
    const polygonPoints = points.map(p => `${p.x},${p.y}`).join(' ');

    // Grid lines (5 levels)
    const gridLines = [1, 2, 3, 4, 5].map(level => {
        const gridPoints = axes.map((_, i) => getPoint(level, i));
        return { points: gridPoints.map(p => `${p.x},${p.y}`).join(' '), level };
    });

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <defs>
                {/* Glass fill gradient */}
                <linearGradient id={`${chartId}-glass`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="40%" stopColor="rgba(201,162,39,0.08)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
                </linearGradient>
                {/* Soft inner glow */}
                <radialGradient id={`${chartId}-inner`} cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="rgba(232,208,104,0.15)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
                <filter id={`${chartId}-blur`}>
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background ambient glow */}
            <circle cx={center} cy={center} r={radius * 1.05} fill={`url(#${chartId}-inner)`} />

            {/* Grid — clean concentric pentagons */}
            {gridLines.map(({ points: line, level }) => (
                <polygon key={level} points={line} fill="none"
                    stroke={`rgba(255,255,255,${level === 5 ? 0.12 : 0.04 + level * 0.01})`}
                    strokeWidth={level === 5 ? '0.8' : '0.4'} />
            ))}

            {/* Axis lines */}
            {axes.map((_, i) => {
                const endPoint = getPoint(5, i);
                return <line key={i} x1={center} y1={center} x2={endPoint.x} y2={endPoint.y}
                    stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />
            })}

            {/* Data polygon — frosted glass */}
            <polygon points={polygonPoints}
                fill={`url(#${chartId}-glass)`}
                stroke="rgba(255,255,255,0.35)"
                strokeWidth={showLabels ? '1.5' : '1'}
                strokeLinejoin="round" />

            {/* Data points — refined dots */}
            {points.map((p, i) => (
                <g key={i}>
                    <circle cx={p.x} cy={p.y} r={showLabels ? '4' : '2.5'}
                        fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
                    <circle cx={p.x} cy={p.y} r={showLabels ? '2' : '1.5'}
                        fill="rgba(232,208,104,0.9)" />
                </g>
            ))}

            {/* Labels */}
            {showLabels && axes.map((axis, i) => {
                const angle = i * angleStep - Math.PI / 2;
                const labelRadius = radius * 1.45;
                const x = center + labelRadius * Math.cos(angle);
                const y = center + labelRadius * Math.sin(angle);
                const score = ratings[axis];
                return (
                    <g key={i}>
                        <text x={x} y={y - 6} fill="rgba(255,255,255,0.75)" fontSize="10" fontWeight="500"
                            textAnchor="middle" dominantBaseline="middle"
                            style={{ letterSpacing: '0.04em' }}>
                            {axisLabels[i]}
                        </text>
                        <text x={x} y={y + 7} fill="rgba(232,208,104,0.8)" fontSize="9" fontWeight="600"
                            textAnchor="middle" dominantBaseline="middle" fontFamily="monospace">
                            {score.toFixed(1)}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
};

export default RadarChart;
