import {useCallback, useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button} from '@/components/ui/button';
import {VOID_QUIPS} from '@/data/humorContent';

type VoidModeContentProps = {
  onExit: () => void;
};

const VoidModeContent = ({onExit}: VoidModeContentProps) => {
  const exitButtonRef = useRef<HTMLButtonElement>(null);
  const [quip] = useState(() => VOID_QUIPS[Math.floor(Math.random() * VOID_QUIPS.length)]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onExit();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onExit]);

  // Auto-focus exit button after entry animation
  useEffect(() => {
    const timer = setTimeout(() => {
      exitButtonRef.current?.focus();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      animate={{opacity: 1}}
      aria-label="Void mode - a swinging lightbulb in the dark"
      aria-modal="true"
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-black"
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      role="dialog"
      transition={{duration: 0.4}}
    >
      {/* Pendulum assembly */}
      <div className="void-pendulum-container">
        <div className="void-wire" />
        <FontAwesomeIcon
          className="void-bulb rotate-180 text-4xl text-warning"
          icon={faLightbulb}
        />
        <div className="void-spotlight" />
      </div>

      {/* Quip */}
      <motion.p
        animate={{opacity: 1, y: 0}}
        className="mt-8 max-w-sm px-6 text-center text-sm text-muted-foreground"
        initial={{opacity: 0, y: 10}}
        transition={{delay: 0.6, duration: 0.4}}
      >
        {quip}
      </motion.p>

      {/* Exit controls */}
      <motion.div
        animate={{opacity: 1}}
        className="mt-6 flex flex-col items-center gap-2"
        initial={{opacity: 0}}
        transition={{delay: 0.8, duration: 0.4}}
      >
        <Button onClick={onExit} ref={exitButtonRef} variant="outline">
          Turn the lights back on
        </Button>
        <span className="text-xs text-muted-foreground">or press Escape</span>
      </motion.div>
    </motion.div>
  );
};

type VoidModeOverlayProps = {
  isVoidMode: boolean;
  onExit: () => void;
};

export const VoidModeOverlay = ({isVoidMode, onExit}: VoidModeOverlayProps) => {
  const handleExit = useCallback(() => {
    onExit();
  }, [onExit]);

  return <AnimatePresence>{isVoidMode && <VoidModeContent onExit={handleExit} />}</AnimatePresence>;
};
