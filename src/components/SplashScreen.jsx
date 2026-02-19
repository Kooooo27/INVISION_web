import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
    useEffect(() => { setTimeout(onComplete, 2500); }, [onComplete]);
    return (<motion.div className="fixed inset-0 bg-obsidian z-50 flex items-center justify-center" exit={{ opacity: 0 }}><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><h1 className="text-6xl font-black tracking-tighter"><span className="text-gold-gradient">IN</span><span className="text-platinum">VISION</span></h1><motion.div className="h-px bg-gold/50 mt-4" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2 }} /></motion.div></motion.div>);
};

export default SplashScreen;
