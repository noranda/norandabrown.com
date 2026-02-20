import {useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/components': 'Component Playground',
  '/resume': 'Resume',
  '/work': 'Work',
};

export const RouteAnnouncer = () => {
  const {pathname} = useLocation();
  const announcerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (announcerRef.current) {
      const title = ROUTE_TITLES[pathname] ?? 'Page not found';
      announcerRef.current.textContent = `Navigated to ${title}`;
    }
  }, [pathname]);

  return (
    <div
      ref={announcerRef}
      aria-atomic="true"
      aria-live="polite"
      className="sr-only"
      role="status"
    />
  );
};
