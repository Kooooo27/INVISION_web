// ============================================
// SHARED HELPER FUNCTIONS
// ============================================

// Helper: Generate Dynamic User Title
export const getUserTitle = (profile, progress = 0) => {
    if (!profile) return "ゲスト";

    const levels = {
        1: "駆け出し",
        2: "見習い",
        3: "熟練の",
        4: "歴戦の",
        5: "伝説の"
    };

    // Base level from diagnosis (initialLevel) + bonus from progress (1 level per 20 cards)
    const currentLevel = Math.min(5, (profile.experienceLevel || 1) + Math.floor(progress / 20));
    const type = profile.nameJp || profile.baseType || "投資家";

    return `${levels[currentLevel]}${type}`;
};
