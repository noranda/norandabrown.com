import {createContext} from 'react';

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  setTheme: (theme: Theme) => void;
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
