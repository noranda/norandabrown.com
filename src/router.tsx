import {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './components/layout/Layout';

const About = lazy(() => import('./pages/about'));
const Components = lazy(() => import('./pages/components'));
const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/notFound'));
const Resume = lazy(() => import('./pages/resume'));
const Work = lazy(() => import('./pages/work'));

const Loading = () => (
  <div className="flex min-h-screen items-center justify-center" role="status">
    <div
      aria-label="Loading page"
      className="h-10 w-10 animate-spin rounded-full bg-[conic-gradient(from_0deg,_var(--color-brand),_var(--color-brand-accent),_transparent)]"
      style={{
        mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))',
        WebkitMask:
          'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))',
      }}
    />
    <span className="sr-only">Loading...</span>
  </div>
);

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Components />} path="/components" />
          <Route element={<Resume />} path="/resume" />
          <Route element={<Work />} path="/work" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </Suspense>
  );
};
