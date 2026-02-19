import React, { useRef, useCallback } from 'react';

/**
 * Renders the diagnosis profile to a Canvas and provides share/download.
 * No external dependencies — pure Canvas API.
 */
const ShareResultImage = ({ profile }) => {
    const canvasRef = useRef(null);

    const generateImage = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || !profile) return null;

        const W = 1080;
        const H = 1350;
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext('2d');

        // ── Background gradient ──
        const bg = ctx.createLinearGradient(0, 0, W, H);
        bg.addColorStop(0, '#0a0a0a');
        bg.addColorStop(0.5, '#0f1419');
        bg.addColorStop(1, '#0a0a0a');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);

        // ── Subtle glow ──
        const glow = ctx.createRadialGradient(W / 2, H * 0.35, 0, W / 2, H * 0.35, 400);
        glow.addColorStop(0, 'rgba(201, 162, 39, 0.08)');
        glow.addColorStop(1, 'rgba(201, 162, 39, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, W, H);

        // ── Gold border ──
        ctx.strokeStyle = '#C9A227';
        ctx.lineWidth = 3;
        ctx.strokeRect(40, 40, W - 80, H - 80);

        // ── Logo "INVISION" ──
        ctx.fillStyle = '#C9A227';
        ctx.font = '900 42px Inter, system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('IN', 80, 110);
        ctx.fillStyle = '#E8E4D9';
        ctx.font = '300 42px Inter, system-ui, sans-serif';
        const inWidth = ctx.measureText('IN').width;
        ctx.fillText('VISION', 80 + inWidth + 2, 110);

        // ── "YOUR INVESTMENT TYPE" label ──
        ctx.fillStyle = '#C9A227';
        ctx.font = '400 18px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '8px';
        ctx.fillText('YOUR INVESTMENT TYPE', W / 2, 200);
        ctx.letterSpacing = '0px';

        // ── Profile Icon (emoji) ──
        ctx.font = '120px serif';
        ctx.textAlign = 'center';
        ctx.fillText(profile.icon || '🎯', W / 2, 340);

        // ── Profile Name ──
        ctx.fillStyle = '#E8E4D9';
        ctx.font = '900 64px Inter, system-ui, sans-serif';
        ctx.fillText(profile.name || 'Unknown', W / 2, 430);

        // ── Profile nameJp / subtitle ──
        ctx.fillStyle = '#C9A227';
        ctx.font = '500 28px Inter, system-ui, sans-serif';
        ctx.fillText(profile.nameJp || profile.baseType || '', W / 2, 480);

        // ── Description ──
        ctx.fillStyle = 'rgba(232, 228, 217, 0.7)';
        ctx.font = '400 22px Inter, system-ui, sans-serif';
        const desc = profile.description || '';
        wrapText(ctx, desc, W / 2, 550, W - 200, 32);

        // ── Allocation Bar ──
        const barY = 680;
        const barH = 24;
        const barX = 100;
        const barW = W - 200;
        const alloc = profile.allocation || { safe: 33, balanced: 34, growth: 33 };

        // Bar background
        ctx.fillStyle = 'rgba(255,255,255,0.05)';
        roundRect(ctx, barX, barY, barW, barH, 12);
        ctx.fill();

        // Safe (green)
        const safeW = (alloc.safe / 100) * barW;
        ctx.fillStyle = '#6B8A7A';
        roundRect(ctx, barX, barY, safeW, barH, barH / 2);
        ctx.fill();

        // Balanced (amber)
        const balW = (alloc.balanced / 100) * barW;
        ctx.fillStyle = '#B8A070';
        ctx.fillRect(barX + safeW, barY, balW, barH);

        // Growth (rose)
        const growW = (alloc.growth / 100) * barW;
        ctx.fillStyle = '#A67070';
        roundRect(ctx, barX + safeW + balW, barY, growW, barH, barH / 2);
        ctx.fill();

        // Allocation labels
        ctx.font = '400 18px Inter, system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillStyle = '#6B8A7A';
        ctx.fillText(`●  安全 ${alloc.safe}%`, barX, barY + 52);
        ctx.fillStyle = '#B8A070';
        ctx.textAlign = 'center';
        ctx.fillText(`●  バランス ${alloc.balanced}%`, W / 2, barY + 52);
        ctx.fillStyle = '#A67070';
        ctx.textAlign = 'right';
        ctx.fillText(`●  成長 ${alloc.growth}%`, W - barX, barY + 52);

        // ── Traits ──
        if (profile.traits && profile.traits.length > 0) {
            ctx.textAlign = 'center';
            const traitY = 800;
            const traitGap = 16;
            ctx.font = '400 20px Inter, system-ui, sans-serif';

            // Calculate total width to center
            const traitMetrics = profile.traits.map(t => ({ text: t, w: ctx.measureText(t).width + 32 }));
            const totalW = traitMetrics.reduce((sum, m) => sum + m.w + traitGap, -traitGap);
            let tx = (W - totalW) / 2;

            traitMetrics.forEach(({ text, w }) => {
                // Tag background
                ctx.fillStyle = 'rgba(255,255,255,0.06)';
                roundRect(ctx, tx, traitY - 18, w, 36, 18);
                ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.1)';
                ctx.lineWidth = 1;
                roundRect(ctx, tx, traitY - 18, w, 36, 18);
                ctx.stroke();
                // Tag text
                ctx.fillStyle = 'rgba(232, 228, 217, 0.7)';
                ctx.textAlign = 'center';
                ctx.fillText(text, tx + w / 2, traitY + 6);
                tx += w + traitGap;
            });
        }

        // ── Strengths ──
        if (profile.strengths && profile.strengths.length > 0) {
            const sY = 880;
            ctx.textAlign = 'left';
            ctx.fillStyle = '#6B8A7A';
            ctx.font = '700 16px Inter, system-ui, sans-serif';
            ctx.fillText('STRENGTHS', 100, sY);
            ctx.fillStyle = 'rgba(232, 228, 217, 0.8)';
            ctx.font = '400 20px Inter, system-ui, sans-serif';
            profile.strengths.slice(0, 3).forEach((s, i) => {
                ctx.fillText(`✓ ${s}`, 120, sY + 36 + i * 32);
            });
        }

        // ── Divider ──
        ctx.strokeStyle = 'rgba(255,255,255,0.08)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(100, 1020);
        ctx.lineTo(W - 100, 1020);
        ctx.stroke();

        // ── CTA ──
        ctx.textAlign = 'center';
        ctx.fillStyle = '#C9A227';
        ctx.font = '600 24px Inter, system-ui, sans-serif';
        ctx.fillText('あなたも投資タイプを診断してみよう', W / 2, 1100);

        ctx.fillStyle = 'rgba(201, 162, 39, 0.6)';
        ctx.font = '400 20px Inter, system-ui, sans-serif';
        ctx.fillText('INVISION — 投資学習アプリ', W / 2, 1140);

        // ── Footer ──
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.font = '400 14px Inter, system-ui, sans-serif';
        ctx.fillText('※ 診断結果は自己分析の参考としてご利用ください', W / 2, H - 70);

        return canvas;
    }, [profile]);

    const handleShare = async () => {
        const canvas = generateImage();
        if (!canvas) return;

        try {
            const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
            const file = new File([blob], 'invision-diagnosis.png', { type: 'image/png' });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: `INVISION 診断結果: ${profile.name}`,
                    text: `私の投資タイプは「${profile.name}」でした！`,
                    files: [file],
                });
            } else {
                // Fallback: download
                downloadImage(canvas);
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                downloadImage(canvas);
            }
        }
    };

    const handleDownload = () => {
        const canvas = generateImage();
        if (!canvas) return;
        downloadImage(canvas);
    };

    const downloadImage = (canvas) => {
        const link = document.createElement('a');
        link.download = `invision-${profile.id || 'result'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    return (
        <>
            <canvas ref={canvasRef} className="hidden" />
            <div className="flex gap-3">
                <button
                    onClick={handleShare}
                    className="flex-1 py-3 px-4 rounded-sm border border-gold/30 text-gold font-bold text-sm
                               hover:bg-gold hover:text-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    <span>SHARE</span>
                </button>
                <button
                    onClick={handleDownload}
                    className="flex-1 py-3 px-4 rounded-sm border border-white/10 text-dim font-bold text-sm
                               hover:border-white/30 hover:text-platinum transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    <span>SAVE</span>
                </button>
            </div>
        </>
    );
};

// ── Helper: wrap text ──
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const chars = text.split('');
    let line = '';
    let lineY = y;
    for (const char of chars) {
        const testLine = line + char;
        if (ctx.measureText(testLine).width > maxWidth) {
            ctx.fillText(line, x, lineY);
            line = char;
            lineY += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, lineY);
}

// ── Helper: rounded rect ──
function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

export default ShareResultImage;
