import { cloneElement, ReactElement } from 'react';
import { IconButton } from '@mui/material';

import { useThemeContext } from '@/context/ThemeContext';

type SocialMediaButtonProps = {
  href: string;
  Icon: ReactElement;
  label: string;
};

const SocialMediaButton = ({ href, Icon, label }: SocialMediaButtonProps) => {
  const { theme } = useThemeContext();

  return (
    <IconButton
      component="a"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={label}
      size="large"
      sx={{ color: theme.colorPrimary }}
    >
      {cloneElement(Icon, { sx: { fontSize: '4.5rem' } }, null)}
    </IconButton>
  );
};

export default SocialMediaButton;
