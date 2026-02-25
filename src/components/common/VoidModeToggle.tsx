import {motion} from 'framer-motion';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {twJoin} from 'tailwind-merge';
import {Button} from '@/components/ui/button';
import {Tooltip} from '@/components/ui/tooltip';
import {useGamification} from '@/hooks/useGamification';
import {useTheme} from '@/hooks/useTheme';

type VoidModeToggleProps = {
  showTooltip?: boolean;
};

export const VoidModeToggle = ({showTooltip = false}: VoidModeToggleProps) => {
  const {isVoidMode, theme, toggleVoidMode} = useTheme();
  const {unlockAchievement} = useGamification();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    if (!isVoidMode) {
      unlockAchievement('voidDweller');
    }
    toggleVoidMode();
  };

  const tooltipText = isVoidMode ? 'Return to the land of the living' : 'Stare into the void';

  const button = (
    <motion.div
      animate={{
        opacity: isDark ? [0.1, 0.3, 0.1] : 0,
        scale: isDark ? 1 : 0.5,
      }}
      className={twJoin(!isDark && 'pointer-events-none')}
      initial={false}
      transition={
        isDark
          ? {duration: 4, ease: 'easeInOut', opacity: {repeat: Infinity}, scale: {duration: 0.2}}
          : {duration: 0.2}
      }
    >
      <Button
        aria-hidden={!isDark}
        aria-label={tooltipText}
        onClick={handleToggle}
        size="icon"
        tabIndex={isDark ? 0 : -1}
        variant="ghost"
      >
        <FontAwesomeIcon
          className={twJoin('h-5 w-5', isVoidMode && 'text-warning')}
          icon={faLightbulb}
        />
      </Button>
    </motion.div>
  );

  if (!showTooltip) return button;

  return (
    <Tooltip>
      <Tooltip.Trigger asChild>{button}</Tooltip.Trigger>
      <Tooltip.Content>
        {tooltipText}
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
};
