import { createContext, useContext } from 'react';

// Shared context so child routes can access App state without prop drilling
export const AppContext = createContext(null);

export const useAppContext = () => {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('useAppContext must be used within AppContext.Provider');
    return ctx;
};
