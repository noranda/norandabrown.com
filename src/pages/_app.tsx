import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Nav from '@/components/Nav';
import ParallaxBackground from '@/components/ParallaxBackground';
import ThemeContextProvider from '@/context/ThemeContext';
import ParallaxContextProvider from '@/context/ParallaxContext';
import { defaultTheme } from '@/styles/theme';
import '@/styles/snow.css';

function NorandaBrownApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ThemeContextProvider>
        <ParallaxContextProvider>
          <CssBaseline />
          <Nav />
          <ParallaxBackground />
          <Component {...pageProps} />
        </ParallaxContextProvider>
      </ThemeContextProvider>
    </ThemeProvider>
  );
}

export default NorandaBrownApp;
