import {useEffect, useRef, useState} from 'react';
import {useGamification} from './useGamification';

export const useAchievementTriggers = () => {
  const {isUnlocked, trackResize, unlockAchievement} = useGamification();
  const [mountTime] = useState(() => Date.now());
  const mountTimeRef = useRef(mountTime);
  const keyboardStartRef = useRef<number | null>(null);

  // 4.6.1: Works on My Machine - window resize detection (debounced)
  useEffect(() => {
    if (isUnlocked('worksOnMyMachine')) return;

    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        trackResize();
      }, 300);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [isUnlocked, trackResize]);

  // 4.6.2: Inspector Gadget - DevTools detection via window size heuristic
  useEffect(() => {
    if (isUnlocked('inspectorGadget')) return;

    const threshold = 160;

    const check = () => {
      const widthDiff = window.outerWidth - window.innerWidth > threshold;
      const heightDiff = window.outerHeight - window.innerHeight > threshold;

      if (widthDiff || heightDiff) {
        unlockAchievement('inspectorGadget');
      }
    };

    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [isUnlocked, unlockAchievement]);

  // 4.6.5: Tab Master 3000 - keyboard-only navigation for 30+ seconds
  useEffect(() => {
    if (isUnlocked('tabMaster')) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (keyboardStartRef.current === null) {
          keyboardStartRef.current = Date.now();
        } else if (Date.now() - keyboardStartRef.current >= 30_000) {
          unlockAchievement('tabMaster');
        }
      }
    };

    const onMouseDown = () => {
      keyboardStartRef.current = null;
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onMouseDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [isUnlocked, unlockAchievement]);

  // 4.6.6: The Procrastinator - 10 minutes on site
  useEffect(() => {
    if (isUnlocked('procrastinator')) return;

    const interval = setInterval(() => {
      if (Date.now() - mountTimeRef.current >= 10 * 60 * 1000) {
        unlockAchievement('procrastinator');
      }
    }, 30_000);

    return () => clearInterval(interval);
  }, [isUnlocked, unlockAchievement]);
};
