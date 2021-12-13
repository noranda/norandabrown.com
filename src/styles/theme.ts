import { createTheme } from '@mui/material/styles';

const commonColors = {
  black: '#282c33',
  gray: '#b3bfcd',
  grayBlue: '#7894b3',
  white: '#ffffff',
};

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
  h3: {
    fontSize: '1.5em',
  },
  h4: {
    fontSize: '1em',
    fontWeight: 600,
  },
  h5: {
    fontSize: '1em',
  },
  h6: {
    fontSize: '0.9em',
    fontWeight: 400,
  },
  webkitFontSmoothing: 'antialiased',
};

export const defaultTheme = createTheme({
  breakpoints,
  components: {
    MuiChip: {
      styleOverrides: {
        filled: {
          backgroundColor: commonColors.black,
        },
      },
    },
  },
  typography,
  palette: {
    primary: {
      main: commonColors.black,
    },
    secondary: {
      main: commonColors.grayBlue,
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
