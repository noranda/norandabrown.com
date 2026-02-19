import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import {GamificationProvider} from './context/gamification/GamificationProvider';
import {ThemeProvider} from './context/theme/ThemeProvider';
import {printConsoleEasterEggs} from './utils/consoleEasterEggs';

printConsoleEasterEggs();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GamificationProvider>
          <App />
        </GamificationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
