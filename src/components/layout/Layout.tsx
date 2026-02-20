import {Outlet} from 'react-router-dom';
import {Toaster} from '@/components/ui/toast';
import {Footer} from './Footer';
import {Header} from './Header';
import {RouteAnnouncer} from './RouteAnnouncer';

export const Layout = () => {
  return (
    <div
      className="flex min-h-screen flex-col"
      data-easter-egg="🐢 You found the wrapper div. It's turtles all the way down."
    >
      <RouteAnnouncer />
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:shadow-lg"
        href="#main-content"
      >
        Skip to main content
      </a>
      <Header />
      <main className="flex-1" id="main-content">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};
