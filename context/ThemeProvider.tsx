'use client';

import React, {
    useState, createContext, useContext, useMemo, useEffect,
} from 'react';

interface ThemeContextType {
    mode:string;
    setMode: React.Dispatch<React.SetStateAction<string>>;
    handleThemeChange: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState('');

    const handleThemeChange = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setMode('dark');
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            setMode('light');
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    };

    useEffect(() => {
        handleThemeChange();
    }, [mode]);

    const contextValue = useMemo(() => ({ mode, setMode, handleThemeChange }), [mode]);

    return (
        <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used with ThemeProvider');
    }

    return context;
}
