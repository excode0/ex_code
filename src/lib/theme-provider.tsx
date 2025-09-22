'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, lightTheme, darkTheme, ThemeColors } from './theme';

type ThemeContextType = {
  theme: Theme;
  themeColors: ThemeColors;
  toggleTheme: () => void;
  isLoaded: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Get initial theme with SSR support
const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return (localStorage.getItem('ex_code_theme') as Theme) ||
         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    setIsLoaded(true);

    // Apply theme to document
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('ex_code_theme', newTheme);

    // Update document class
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
  };

  const themeColors = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, themeColors, toggleTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
