import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

import { useThemeContext } from '@/context/ThemeContext';

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: NavLinkProps) => {
  const { theme } = useThemeContext();
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <Button
        component="a"
        sx={{
          borderBottom: '3px solid',
          borderColor: isActive ? theme.colorPrimary : theme.colorAlternate,
          borderRadius: 0,
          color: theme.colorPrimary,
          fontSize: 20,
        }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default NavLink;
