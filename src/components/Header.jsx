import React from 'react';
import { getUserTitle } from '../utils/helpers';
import LoginButton from './LoginButton';

const Header = ({ currentPage, onNavigate, onOpenSettings, showNav, userProfile, progress, firebaseUser, onLogin, onLogout }) => (
    <header className="fixed top-0 left-0 right-0 z-40 bg-obsidian/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-shrink-0">
                <button onClick={() => onNavigate('gallery')} className="text-xl font-black tracking-tighter cursor-pointer">
                    <span className="text-gold-gradient">IN</span><span className="text-platinum">VISION</span>
                </button>
                {userProfile && (
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-mono text-platinum/80 tracking-wider">
                            {getUserTitle(userProfile, progress)}
                        </span>
                    </div>
                )}
            </div>
            {/* Always show nav, scrollable on mobile */}
            <div className="flex items-center gap-4 md:gap-8 flex-1 justify-end min-w-0">
                {!firebaseUser && <LoginButton user={firebaseUser} onLogin={onLogin} onLogout={onLogout} />}
                <nav className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar mask-gradient-right pr-4">
                    {[{ id: 'gallery', label: 'アセット' }, { id: 'brokers', label: '証券' }, { id: 'briefing', label: '学習' }, { id: 'portfolio', label: 'ポートフォリオ' }, { id: 'diagnosis', label: '診断' }].map(item => (
                        <button key={item.id} onClick={() => onNavigate(item.id)} className={`text-xs md:text-sm whitespace-nowrap transition-colors ${currentPage === item.id ? 'text-gold font-bold' : 'text-dim hover:text-platinum'}`}>{item.label}</button>
                    ))}
                </nav>
                <button onClick={onOpenSettings} className="text-dim hover:text-gold transition-colors flex-shrink-0">⚙️</button>
            </div>
        </div>
    </header>
);

export default Header;
