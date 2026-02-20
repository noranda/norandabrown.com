export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border"
      data-easter-egg="👇 The part of the website people scroll past to check for copyright dates"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">&copy; {year} Noranda Brown</p>
        <div className="flex items-center gap-4">
          <a
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            href="https://github.com/noranda"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            href="https://linkedin.com/in/norandabrown"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
