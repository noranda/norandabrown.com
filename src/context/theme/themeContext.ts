import {createContext} from 'react';

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  isVoidMode: boolean;
  setTheme: (theme: Theme) => void;
  theme: Theme;
  toggleTheme: () => void;
  toggleVoidMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
