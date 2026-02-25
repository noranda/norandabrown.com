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

  // 4.6.5: Tab Master 3000 - keyboard-only navigation for 10+ seconds
  useEffect(() => {
    if (isUnlocked('tabMaster')) return;

    const NAV_KEYS = new Set(['ArrowDown', 'ArrowUp', 'Enter', 'Escape', 'Space', 'Tab']);

    const onKeyDown = (e: KeyboardEvent) => {
      if (!NAV_KEYS.has(e.key)) return;

      if (keyboardStartRef.current === null) {
        keyboardStartRef.current = Date.now();
      }
    };

    const onMouseDown = () => {
      keyboardStartRef.current = null;
    };

    const interval = setInterval(() => {
      if (keyboardStartRef.current !== null && Date.now() - keyboardStartRef.current >= 10_000) {
        unlockAchievement('tabMaster');
      }
    }, 2000);

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onMouseDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onMouseDown);
      clearInterval(interval);
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
