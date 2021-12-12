import { alpha, Typography } from '@mui/material';

import { useThemeContext } from '@/context/ThemeContext';

type ResumeHeaderProps = {
  label: string;
};

const ResumeHeader = ({ label }: ResumeHeaderProps) => {
  const { theme } = useThemeContext();

  return (
    <Typography
      p={1}
      sx={{
        bgcolor: theme.colorHighlight,
        borderBottom: '2px solid',
        position: 'sticky',
        textTransform: 'uppercase',
        top: 0,
        zIndex: 2,
      }}
      variant="h4"
    >
      {label}
    </Typography>
  );
};

export default ResumeHeader;
