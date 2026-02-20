import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useGamification} from '@/hooks/useGamification';
import {useTheme} from '@/hooks/useTheme';
import {Navigation} from './Navigation';

export const Header = () => {
  const {theme, toggleTheme} = useTheme();
  const {explorationScore} = useGamification();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm"
      data-easter-egg="📌 The sticky header: it follows you everywhere, like a good recruiter"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link aria-label="Noranda Brown — Home" className="flex items-center gap-3" to="/">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-accent">
            <span className="font-bold text-brand-foreground">NB</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-bold">Noranda Brown</div>
            <div className="text-sm text-muted-foreground">Senior Frontend Engineer</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Availability Badge */}
          <div
            aria-label="Currently available for opportunities"
            className="flex items-center gap-2 rounded-full bg-success-muted px-3 py-1.5 text-sm font-medium text-success-foreground"
            role="status"
          >
            <div aria-hidden="true" className="h-2 w-2 rounded-full bg-success" />
            Available
          </div>

          <Navigation />

          {/* Exploration Progress */}
          {explorationScore > 0 && (
            <div
              aria-label={`Exploration progress: ${explorationScore}%`}
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={explorationScore}
              className="flex items-center gap-2 text-sm text-muted-foreground"
              role="progressbar"
            >
              <div aria-hidden="true" className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-brand-accent transition-all duration-500"
                  style={{width: `${explorationScore}%`}}
                />
              </div>
              <span>{explorationScore}%</span>
            </div>
          )}

          {/* Dark Mode Toggle */}
          <button
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="rounded-lg p-2 transition-colors hover:bg-accent"
            onClick={toggleTheme}
            type="button"
          >
            {theme === 'light' ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="rounded-lg p-2 transition-colors hover:bg-accent"
            onClick={toggleTheme}
            type="button"
          >
            {theme === 'light' ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
          <button
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            className="rounded-lg p-2 transition-colors hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-border px-6 py-4 md:hidden"
          id="mobile-menu"
        >
          <Navigation className="flex-col gap-4" onClick={() => setMobileMenuOpen(false)} />
          <div
            aria-label="Currently available for opportunities"
            className="mt-4 flex w-fit items-center gap-2 rounded-full bg-success-muted px-3 py-1.5 text-sm font-medium text-success-foreground"
            role="status"
          >
            <div aria-hidden="true" className="h-2 w-2 rounded-full bg-success" />
            Available
          </div>
        </nav>
      )}
    </header>
  );
};
