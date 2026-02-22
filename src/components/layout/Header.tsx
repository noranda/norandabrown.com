import {useState} from 'react';
import {Link} from 'react-router-dom';
import {twJoin} from 'tailwind-merge';
import {DarkModeToggle} from '@/components/common/DarkModeToggle';
import {Button} from '@/components/ui/button';
import {Tooltip} from '@/components/ui/tooltip';
import {useGamification} from '@/hooks/useGamification';
import {Navigation} from './Navigation';

export const Header = () => {
  const {explorationScore} = useGamification();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm"
      data-easter-egg="📌 The sticky header: it follows you everywhere, like a good recruiter"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          aria-label="Noranda Brown - Home"
          className="focus-ring flex items-center gap-3 rounded-lg"
          data-tour="tour-logo"
          to="/"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-accent">
            <span className="font-bold text-brand-foreground">NB</span>
          </div>
          <div>
            <div className="font-bold">Noranda Brown</div>
            <div className="text-sm text-muted-foreground">Senior Frontend Engineer</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Availability Badge */}
          <div
            aria-label="Currently available for opportunities"
            className="flex items-center gap-2 rounded-full bg-success-muted px-3 py-1.5 text-sm font-medium text-success-foreground"
            data-tour="tour-availability"
            role="status"
          >
            <div aria-hidden="true" className="h-2 w-2 rounded-full bg-success" />
            Available
          </div>

          <Navigation />

          {/* Exploration Progress */}
          {explorationScore > 0 && (
            <Tooltip>
              <Tooltip.Trigger asChild>
                <div
                  aria-label={`Exploration progress: ${explorationScore}%`}
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={explorationScore}
                  className="flex cursor-default items-center gap-2 text-sm text-muted-foreground"
                  role="progressbar"
                >
                  <div
                    aria-hidden="true"
                    className="h-1.5 w-16 overflow-hidden rounded-full bg-muted"
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand to-brand-accent transition-all duration-500"
                      style={{width: `${explorationScore}%`}}
                    />
                  </div>
                  <span>{explorationScore}%</span>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content>
                You&apos;ve explored {explorationScore}% of the site. Keep clicking!
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip>
          )}

          {/* Dark Mode Toggle */}
          <DarkModeToggle showTooltip />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <DarkModeToggle />
          <Button
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            size="icon"
            variant="ghost"
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
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={twJoin(
          'grid transition-[grid-template-rows] duration-300 ease-in-out lg:hidden',
          mobileMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <nav aria-label="Mobile navigation" className="overflow-hidden" id="mobile-menu">
          <div className="border-t border-border px-6 py-4">
            <Navigation className="flex-col gap-4" onClick={() => setMobileMenuOpen(false)} />
            <div
              aria-label="Currently available for opportunities"
              className="mt-4 flex w-fit items-center gap-2 rounded-full bg-success-muted px-3 py-1.5 text-sm font-medium text-success-foreground"
              role="status"
            >
              <div aria-hidden="true" className="h-2 w-2 rounded-full bg-success" />
              Available
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
