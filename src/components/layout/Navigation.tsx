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
    <nav aria-label="Primary navigation" className={twJoin('flex gap-6', className)}>
      {NAV_LINKS.map(({label, to}) => (
        <NavLink
          className={({isActive}) =>
            twJoin(
              'text-sm font-medium transition-colors',
              isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
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
