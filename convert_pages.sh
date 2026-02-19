#!/bin/bash
# Script to convert legacy page files to ES module JSX files
# Each file follows the pattern:
#  - Wrapped in { ... } block
#  - Uses const { ... } = React and const { ... } = Motion
#  - References window.* globals
#  - Assigns components to window.* at the end

SRCDIR="js/pages"
DESTDIR="src/pages"

mkdir -p "$DESTDIR"

convert_file() {
    local src="$1"
    local dest="$2"
    local imports="$3"
    local exports="$4"

    # Write import header
    echo "$imports" > "$dest"
    echo "" >> "$dest"

    # Process the source file:
    # 1. Remove opening { and closing }
    # 2. Remove React/Motion destructuring lines
    # 3. Remove window.* assignment lines
    # 4. Remove window.* = in function declarations (e.g., window.X = (...) =>)
    cat "$src" | \
        sed '1,2d' | \
        sed '$ d' | \
        sed '/^[[:space:]]*const { .* } = React;/d' | \
        sed '/^[[:space:]]*const { .* } = Motion;/d' | \
        sed '/^[[:space:]]*const assetDetailData = window\.assetDetailData;/d' | \
        sed '/^[[:space:]]*const AssetDetailModal = window\.AssetDetailModal;/d' | \
        sed '/^[[:space:]]*const profiles = window\.profiles;/d' | \
        sed '/^[[:space:]]*const getUserTitle = window\.getUserTitle;/d' | \
        sed '/^[[:space:]]*const assetRoadmaps = window\.assetRoadmaps;/d' | \
        sed '/^[[:space:]]*const courseBundles = window\.courseBundles;/d' | \
        sed '/^[[:space:]]*const briefingCards = window\.briefingCards;/d' | \
        sed '/^[[:space:]]*const chartPatternDescriptions = window\.chartPatternDescriptions;/d' | \
        sed '/^[[:space:]]*const indexBundleCards = window\.indexBundleCards;/d' | \
        sed '/^[[:space:]]*const cryptoBundleCards = window\.cryptoBundleCards;/d' | \
        sed '/^[[:space:]]*window\.[A-Za-z]* = [A-Za-z]*;/d' | \
        sed 's/^    //' >> "$dest"

    # Write export footer
    echo "" >> "$dest"
    echo "$exports" >> "$dest"
}

# AssetGallery.js
convert_file "$SRCDIR/AssetGallery.js" "$DESTDIR/AssetGallery.jsx" \
"import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetDetailData } from '../data/assetDetailData';
import AssetDetailModal from '../components/AssetDetailModal';" \
"export default AssetGallery;"

# BrokerComparison.js
convert_file "$SRCDIR/BrokerComparison.js" "$DESTDIR/BrokerComparison.jsx" \
"import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';" \
"export default BrokerComparison;"

# LegalPages.js
convert_file "$SRCDIR/LegalPages.js" "$DESTDIR/LegalPages.jsx" \
"import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';" \
"export { Tokushoho, PrivacyPolicy };"

# PortfolioCalibration.js
convert_file "$SRCDIR/PortfolioCalibration.js" "$DESTDIR/PortfolioCalibration.jsx" \
"import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetDetailData } from '../data/assetDetailData';
import { profiles } from '../data/profiles';
import { getUserTitle } from '../utils/helpers';
import AssetDetailModal from '../components/AssetDetailModal';" \
"export default PortfolioCalibration;"

# PortfolioCreator.js
convert_file "$SRCDIR/PortfolioCreator.js" "$DESTDIR/PortfolioCreator.jsx" \
"import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetDetailData } from '../data/assetDetailData';" \
"export default PortfolioCreator;"

# TheBriefing.js
convert_file "$SRCDIR/TheBriefing.js" "$DESTDIR/TheBriefing.jsx" \
"import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetRoadmaps, courseBundles } from '../data/roadmaps';
import { briefingCards, chartPatternDescriptions, indexBundleCards, cryptoBundleCards } from '../data/cards';" \
"export default TheBriefing;"

echo "✅ All pages converted!"
