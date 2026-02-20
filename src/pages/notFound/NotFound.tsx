import {Link} from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h1 className="font-display text-4xl">404 — Not Found</h1>
      <p className="mt-4 text-muted-foreground">The page you're looking for doesn't exist.</p>
      <Link
        className="mt-6 inline-block text-sm font-medium text-foreground underline underline-offset-4"
        to="/"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
