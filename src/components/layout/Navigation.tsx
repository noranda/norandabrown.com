import {NavLink} from 'react-router-dom';
import {twJoin} from 'tailwind-merge';

const NAV_LINKS = [
  {label: 'Work', to: '/work'},
  {label: 'Components', to: '/components'},
  {label: 'Resume', to: '/resume'},
  {label: 'About', to: '/about'},
];

type NavigationProps = {
  className?: string;
  onClick?: () => void;
};

export const Navigation = ({className = '', onClick}: NavigationProps) => {
  return (
    <nav
      aria-label="Primary navigation"
      className={twJoin('flex gap-6', className)}
      data-tour="tour-nav"
    >
      {NAV_LINKS.map(({label, to}) => (
        <NavLink
          className={({isActive}) =>
            twJoin(
              'focus-ring relative rounded-md pb-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-gradient-to-r after:from-brand after:to-brand-accent after:transition-transform after:duration-300',
              isActive
                ? 'text-foreground after:scale-x-100'
                : 'text-muted-foreground after:scale-x-0 hover:text-foreground'
            )
          }
          key={to}
          onClick={onClick}
          to={to}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
