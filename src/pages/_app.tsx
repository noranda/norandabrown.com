import type { AppProps } from 'next/app';
import { Box, CssBaseline, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

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
          <ParallaxBackground />
          <Stack height="100vh">
            <Nav />
            <Box flexGrow={1} sx={{ overflowY: 'auto' }}>
              <Component {...pageProps} />
            </Box>
          </Stack>
        </ParallaxContextProvider>
      </ThemeContextProvider>
    </ThemeProvider>
  );
}

export default NorandaBrownApp;
