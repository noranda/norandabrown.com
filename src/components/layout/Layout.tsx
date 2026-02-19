import {Outlet} from 'react-router-dom';
import {Footer} from './Footer';
import {Header} from './Header';

export const Layout = () => {
  return (
    <div
      className="flex min-h-screen flex-col"
      data-easter-egg="🐢 You found the wrapper div. It's turtles all the way down."
    >
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
