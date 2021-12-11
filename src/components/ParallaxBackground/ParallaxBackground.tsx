import { useThemeContext } from '@/context/ThemeContext';
import { useParallaxContext } from '@/context/ParallaxContext';
import clsx from 'clsx';

const ParallaxBackground = () => {
  const { theme } = useThemeContext();
  const { on } = useParallaxContext();

  return (
    <div className={clsx(on && 'parallax')} style={{ color: theme.colorPrimary }}>
      <div id="snow1" />
      <div id="snow2" />
      <div id="snow3" />
    </div>
  );
};

export default ParallaxBackground;
