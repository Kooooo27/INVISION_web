import React, { useState, useEffect } from 'react';

const PasswordGate = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const authStatus = localStorage.getItem('site_auth_5160');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === '5160') {
            localStorage.setItem('site_auth_5160', 'true');
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    if (!isMounted) return null;

    if (isAuthenticated) {
        return children;
    }

    return (
        <div className="fixed inset-0 min-h-screen bg-obsidian flex flex-col items-center justify-center p-4 z-[100] font-sans selection:bg-gold/30">
            <div className="w-full max-w-sm bg-obsidian-light/50 backdrop-blur-md border border-gold/20 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)] bg-obsidian">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM10 7a4 4 0 018 0v4h-8V7z" />
                    </svg>
                </div>

                <h1 className="text-xl font-medium tracking-widest text-platinum mb-2 uppercase text-center">アクセス制限</h1>
                <p className="text-xs text-platinum/60 mb-8 tracking-wide text-center">
                    パスコードを入力してください。
                </p>

                <form onSubmit={handleSubmit} className="w-full relative">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError(false);
                        }}
                        autoFocus
                        placeholder="••••"
                        className={`w-full bg-obsidian/80 border ${error ? 'border-red-500/50 focus:border-red-500' : 'border-platinum/20 focus:border-gold/50'} rounded-xl px-4 py-3 text-platinum placeholder:text-platinum/30 focus:outline-none transition-all duration-300 tracking-[0.5em] text-center`}
                    />

                    <button
                        type="submit"
                        disabled={password.length === 0}
                        className="w-full mt-6 bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 rounded-xl py-3 text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Enter
                    </button>
                </form>

                {/* Optional Error Animation space maintaining layout */}
                <div className="h-6 mt-4 flex items-center justify-center">
                    {error && (
                        <p className="text-red-400 text-xs tracking-wider animate-pulse">
                            パスコードが間違っています
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PasswordGate;
