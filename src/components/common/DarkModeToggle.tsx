import {AnimatePresence, motion} from 'framer-motion';
import {Button} from '@/components/ui/button';
import {Tooltip} from '@/components/ui/tooltip';
import {TOOLTIPS} from '@/data/humorContent';
import {useGamification} from '@/hooks/useGamification';
import {useTheme} from '@/hooks/useTheme';

const darkModeTooltip = TOOLTIPS.find((t) => t.id === 'darkModeToggle')!.text;

type DarkModeToggleProps = {
  showTooltip?: boolean;
};

export const DarkModeToggle = ({showTooltip = false}: DarkModeToggleProps) => {
  const {theme, toggleTheme} = useTheme();
  const {trackDarkModeToggle} = useGamification();

  const handleToggle = () => {
    toggleTheme();
    trackDarkModeToggle();
  };

  const button = (
    <Button
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      data-tour="tour-theme"
      onClick={handleToggle}
      size="icon"
      variant="ghost"
    >
      <AnimatePresence initial={false} mode="wait">
        {theme === 'light' ? (
          <motion.svg
            animate={{opacity: 1, rotate: 0, scale: 1}}
            className="h-5 w-5"
            exit={{opacity: 0, rotate: 90, scale: 0.5}}
            fill="none"
            initial={{opacity: 0, rotate: -90, scale: 0.5}}
            key="moon"
            stroke="currentColor"
            transition={{duration: 0.2}}
            viewBox="0 0 24 24"
          >
            <path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </motion.svg>
        ) : (
          <motion.svg
            animate={{opacity: 1, rotate: 0, scale: 1}}
            className="h-5 w-5"
            exit={{opacity: 0, rotate: -90, scale: 0.5}}
            fill="none"
            initial={{opacity: 0, rotate: 90, scale: 0.5}}
            key="sun"
            stroke="currentColor"
            transition={{duration: 0.2}}
            viewBox="0 0 24 24"
          >
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </Button>
  );

  if (!showTooltip) return button;

  return (
    <Tooltip>
      <Tooltip.Trigger asChild>{button}</Tooltip.Trigger>
      <Tooltip.Content>
        {darkModeTooltip}
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
};
