import type {Decorator, Preview} from '@storybook/react-vite';
import {useEffect} from 'react';

import {type Theme} from '../src/context/theme/themeContext';
import {ThemeProvider} from '../src/context/theme/ThemeProvider';

import '../src/index.css';

const WithTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme || 'light') as Theme;

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeProvider key={theme}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [WithTheme],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        dynamicTitle: true,
        icon: 'moon',
        items: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
        title: 'Theme',
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
