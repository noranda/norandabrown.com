import { createTheme } from '@mui/material/styles';

const commonColors = {
  black: '#282c33',
  darkPurple: '#363446',
  gray: '#b3bfcd',
  grayBlue: '#7894b3',
  green: '#4db6ac',
  lightGreen: '#98c7bd',
  lightPurple: '#635d71',
  orange: '#fddda1',
  white: '#ffffff',
};

const commonPalette = {};

const breakpoints = {
  values: {
    xs: 0,
    sm: 480,
    md: 640,
    lg: 768,
    xl: 1024,
  },
  step: 100,
};

const typography = {
  fontFamily:
    "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  h1: {
    fontWeight: 600,
  },
  h6: {
    fontSize: '1.1em',
    fontWeight: 400,
  },
  webkitFontSmoothing: 'antialiased',
};

export const defaultTheme = createTheme({
  breakpoints,
  typography,
  palette: {
    ...commonPalette,
    primary: {
      main: commonColors.black,
    },
    secondary: {
      main: commonColors.green,
    },
    common: { ...commonColors },
    background: {
      paper: commonColors.black,
    },
    text: {
      primary: commonColors.white,
      secondary: commonColors.black,
    },
  },
});
