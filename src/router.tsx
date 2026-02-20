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
  <div className="flex min-h-screen items-center justify-center">
    <p className="text-muted-foreground">Loading...</p>
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
