import {useCallback, useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';

const SPOTLIGHT_THEMES: Record<string, string> = {
  '/':
    'radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.04) 40%, transparent 70%)',
  '/about':
    'radial-gradient(700px circle at var(--spotlight-x) var(--spotlight-y), rgba(147, 130, 220, 0.1), rgba(102, 126, 234, 0.05) 35%, transparent 65%)',
  '/components':
    'radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.04) 40%, transparent 70%)',
  '/resume':
    'radial-gradient(550px circle at var(--spotlight-x) var(--spotlight-y), rgba(102, 126, 234, 0.06), rgba(118, 75, 162, 0.03) 40%, transparent 70%)',
  '/work':
    'radial-gradient(650px circle at var(--spotlight-x) var(--spotlight-y), rgba(236, 72, 153, 0.08), rgba(139, 92, 246, 0.04) 40%, transparent 70%)',
};

const DEFAULT_GRADIENT =
  'radial-gradient(500px circle at var(--spotlight-x) var(--spotlight-y), rgba(102, 126, 234, 0.06), transparent 60%)';

export const SpotlightCursor = () => {
  const {pathname} = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mq.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
      if (overlayRef.current) {
        overlayRef.current.style.opacity = e.matches ? '0' : '1';
      }
    };

    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (prefersReducedMotion.current || !overlayRef.current) return;
    overlayRef.current.style.setProperty('--spotlight-x', `${e.clientX}px`);
    overlayRef.current.style.setProperty('--spotlight-y', `${e.clientY}px`);
    overlayRef.current.style.opacity = '1';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = '0';
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave, handleMouseMove]);

  const gradient = SPOTLIGHT_THEMES[pathname] ?? DEFAULT_GRADIENT;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-0 transition-opacity duration-300"
      ref={overlayRef}
      style={{backgroundImage: gradient}}
    />
  );
};
