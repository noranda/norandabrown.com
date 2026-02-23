import {useEffect, useLayoutEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {SpotlightCursor} from '@/components/common/SpotlightCursor';
import {ProgressTracker} from '@/components/gamification/ProgressTracker';
import {ProductTour} from '@/components/onboarding/ProductTour';
import {Toaster} from '@/components/ui/toast';
import {Tooltip} from '@/components/ui/tooltip';
import {useAchievementTriggers} from '@/hooks/useAchievementTriggers';
import {usePageTracking} from '@/hooks/usePageTracking';
import {Footer} from './Footer';
import {Header} from './Header';
import {RouteAnnouncer} from './RouteAnnouncer';

export const Layout = () => {
  const {pathname} = useLocation();

  useAchievementTriggers();
  usePageTracking();

  // Scroll to top on route change before paint (skip hash navigation)
  useLayoutEffect(() => {
    window.scrollTo({behavior: 'instant', top: 0});
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Tooltip.Provider>
      <div
        className="flex min-h-screen flex-col"
        data-easter-egg="🐢 You found the wrapper div. It's turtles all the way down."
      >
        <SpotlightCursor />
        <RouteAnnouncer />
        <a
          className="focus-ring sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:shadow-lg"
          href="#main-content"
        >
          Skip to main content
        </a>
        <Header />
        <main className="flex-1" data-tour="tour-main" id="main-content">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
        <ProgressTracker />
        <ProductTour />
      </div>
    </Tooltip.Provider>
  );
};
