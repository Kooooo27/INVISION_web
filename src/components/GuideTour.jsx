import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'guide_tour_seen';

const steps = [
    {
        icon: '◇',
        title: '学ぶ',
        subtitle: 'LEARN',
        description: '522枚以上の学習カードで\n投資の基礎から応用まで身につける',
    },
    {
        icon: '◎',
        title: '診断する',
        subtitle: 'DISCOVER',
        description: 'あなたの投資タイプを発見し\n最適な戦略を見つける',
    },
    {
        icon: '□',
        title: '設計する',
        subtitle: 'BUILD',
        description: 'ポートフォリオをシミュレーションし\n未来の資産を設計する',
    },
];

const GuideTour = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleFinish();
        }
    };

    const handleSkip = () => {
        handleFinish();
    };

    const handleFinish = () => {
        setIsVisible(false);
        localStorage.setItem(STORAGE_KEY, 'true');
        setTimeout(() => onComplete?.(), 400);
    };

    if (!isVisible) return null;

    const step = steps[currentStep];
    const isLast = currentStep === steps.length - 1;

    return (
        <motion.div
            className="fixed inset-0 z-[80] bg-obsidian/95 backdrop-blur-md flex flex-col items-center justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Skip button */}
            <button
                onClick={handleSkip}
                className="absolute top-6 right-6 text-dim text-sm hover:text-platinum transition-colors z-10"
            >
                スキップ
            </button>

            {/* Step indicators */}
            <div className="flex gap-2 mb-12">
                {steps.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${i === currentStep ? 'w-8 bg-gold' : i < currentStep ? 'w-4 bg-gold/50' : 'w-4 bg-stone'
                            }`}
                    />
                ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                    className="text-center max-w-md"
                >
                    {/* Icon */}
                    <motion.div
                        className="text-7xl mb-6"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.15 }}
                    >
                        {step.icon}
                    </motion.div>

                    {/* Subtitle */}
                    <p className="text-gold text-xs tracking-[0.4em] mb-3 font-medium">
                        {step.subtitle}
                    </p>

                    {/* Title */}
                    <h2 className="text-4xl font-black text-platinum mb-6 tracking-tight">
                        {step.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-platinum/70 leading-relaxed whitespace-pre-line">
                        {step.description}
                    </p>
                </motion.div>
            </AnimatePresence>

            {/* Action button */}
            <motion.div
                className="mt-12 w-full max-w-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <button
                    onClick={handleNext}
                    className={`w-full py-4 font-bold text-lg rounded-sm transition-all cursor-pointer ${isLast
                        ? 'bg-gold text-black hover:bg-amber-400 custom-shadow'
                        : 'border border-gold/50 text-gold hover:bg-gold/10'
                        }`}
                >
                    {isLast ? 'はじめる' : '次へ'}
                </button>
            </motion.div>

            {/* Background ambience */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-amber-500/3 rounded-full blur-[120px]" />
            </div>
        </motion.div>
    );
};

export default GuideTour;

export const shouldShowGuideTour = () => !localStorage.getItem(STORAGE_KEY);
