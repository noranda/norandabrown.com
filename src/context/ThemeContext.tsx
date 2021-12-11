import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { getThemes } from '@/styles/themes';

type ThemeProps = {
  name: string;
  firstTime: boolean;
  colorPrimary: string;
  colorAlternate: string;
  colorHighlight: string;
  bgPrimary: string;
  bgAlternate: string;
  bgLanding: string;
  textPrimary: string;
  textAlternate: string;
  textLanding: string;
  parallaxSnow: string;
  navAlpha: string;
};

type ThemeContextProps = {
  theme: ThemeProps;
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: getThemes().find(({ firstTime }) => firstTime),
  switchTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

type ThemeContextProviderProps = {
  children: ReactNode;
};

const ThemeContextProvider: FC = ({ children }: ThemeContextProviderProps) => {
  const allThemes = getThemes();
  const firstTimeThemes = allThemes.filter(({ firstTime }) => firstTime);
  const [theme, setTheme] = useState(firstTimeThemes[2]);

  const switchTheme = () => {
    const allThemes = getThemes();
    const themesWithoutCurrentTheme = allThemes.filter(({ name }) => name !== theme.name);
    const randomThemeIndex = Math.floor(Math.random() * themesWithoutCurrentTheme.length);
    setTheme(themesWithoutCurrentTheme[randomThemeIndex]);
  };

  return <ThemeContext.Provider value={{ theme, switchTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
