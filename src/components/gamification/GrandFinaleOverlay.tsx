import {useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

type GrandFinaleOverlayProps = {
  onComplete: () => void;
  visible: boolean;
};

export const GrandFinaleOverlay = ({onComplete, visible}: GrandFinaleOverlayProps) => {
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate={{opacity: 1}}
          aria-live="polite"
          className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.55)_50%,rgba(0,0,0,0.4)_80%)]"
          exit={{opacity: 0}}
          initial={{opacity: 0}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
        >
          <motion.div
            animate={{opacity: 1, scale: 1}}
            className="grand-finale-text select-none text-center font-display text-[clamp(2.5rem,8vw,5rem)] font-extrabold tracking-tight"
            initial={{opacity: 0, scale: 0.8}}
            transition={{delay: 0.2, duration: 0.4, ease: 'easeOut'}}
          >
            You did it!
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
