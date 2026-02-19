import React from 'react';
import { isFirebaseReady } from '../firebase';

const LoginButton = ({ user, onLogin, onLogout }) => {
    if (!isFirebaseReady) {
        return (
            <button className="px-3 py-1.5 rounded-full text-xs font-bold border flex-shrink-0 bg-red-500/10 border-red-500/30 text-red-500 cursor-not-allowed">
                設定未完了
            </button>
        );
    }

    return (
        <button
            onClick={user ? onLogout : onLogin}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border flex-shrink-0 ${user
                ? 'bg-white/5 border-white/10 text-dim hover:bg-white/10 hover:text-white'
                : 'bg-gold/10 border-gold/30 text-gold hover:bg-gold hover:text-black shadow-[0_0_10px_rgba(201,162,39,0.2)]'
                }`}
        >
            {user ? 'ログアウト' : 'ログイン'}
        </button>
    );
};

export default LoginButton;
