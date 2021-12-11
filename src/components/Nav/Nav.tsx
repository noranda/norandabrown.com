import { Button, Stack } from '@mui/material';
import { AcUnit as SnowIcon, Brightness7 as SunIcon, Palette as PaletteIcon } from '@mui/icons-material';

import NavLink from './NavLink';
import { useThemeContext } from '@/context/ThemeContext';
import { useParallaxContext } from '@/context/ParallaxContext';

const Nav = () => {
  const { theme, switchTheme } = useThemeContext();
  const { on, toggleParallax } = useParallaxContext();

  return (
    <Stack alignItems="center" bgcolor={theme.bgPrimary} direction="row" justifyContent="space-between" px={3} py={1}>
      <Stack direction="row" spacing={1}>
        <Button onClick={switchTheme} sx={{ color: theme.colorPrimary }}>
          <>
            <PaletteIcon fontSize="small" sx={{ mr: 0.5 }} />
            Color Me
          </>
        </Button>

        <Button onClick={toggleParallax} sx={{ color: theme.colorPrimary }}>
          {on ? (
            <>
              <SunIcon fontSize="small" sx={{ mr: 0.5 }} />
              Clear Skies
            </>
          ) : (
            <>
              <SnowIcon fontSize="small" sx={{ mr: 0.5 }} />
              Let It Snow!
            </>
          )}
        </Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" />
        <NavLink href="/resume" label="Resume" />
        <NavLink href="/portfolio" label="Portfolio" />
      </Stack>
    </Stack>
  );
};

export default Nav;
