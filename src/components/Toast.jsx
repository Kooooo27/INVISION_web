import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToastContext = createContext(null);

export const useToast = () => {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used within ToastProvider');
    return ctx;
};

const Toast = ({ message, type = 'info', onClose }) => {
    const colors = {
        info: 'border-gold/40 bg-gold/10 text-gold',
        success: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
        error: 'border-rose-500/40 bg-rose-500/10 text-rose-400',
        warning: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
    };
    const icons = { info: 'ℹ️', success: '✓', error: '✕', warning: '⚠' };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`flex items-center gap-3 px-5 py-3 rounded-sm border backdrop-blur-md shadow-2xl ${colors[type]}`}
        >
            <span className="text-lg">{icons[type]}</span>
            <p className="text-sm font-medium flex-1">{message}</p>
            <button onClick={onClose} className="opacity-50 hover:opacity-100 transition-opacity text-sm">✕</button>
        </motion.div>
    );
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = 'info', duration = 4000) => {
        const id = Date.now() + Math.random();
        setToasts(prev => [...prev, { id, message, type }]);
        if (duration > 0) {
            setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
        }
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
                <AnimatePresence>
                    {toasts.map(t => (
                        <Toast key={t.id} message={t.message} type={t.type} onClose={() => removeToast(t.id)} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export default Toast;
