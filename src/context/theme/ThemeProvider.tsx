import {useCallback, useEffect, useState} from 'react';
import {ThemeContext, type Theme} from './themeContext';

export type {Theme, ThemeContextType} from './themeContext';

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Load theme preference on mount
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    } else if (prefersDark) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const [isVoidMode, setIsVoidMode] = useState(false);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      setIsVoidMode(false);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const toggleVoidMode = useCallback(() => {
    setIsVoidMode((prev) => !prev);
  }, []);

  return (
    <ThemeContext.Provider value={{isVoidMode, setTheme, theme, toggleTheme, toggleVoidMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
