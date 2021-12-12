import { alpha, Box } from '@mui/material';

import { useThemeContext } from '@/context/ThemeContext';

type HighlightProps = {
  children: string;
};

const Highlight = ({ children }: HighlightProps) => {
  const { theme } = useThemeContext();

  return (
    <Box bgcolor={alpha(theme.colorPrimary, 0.2)} display="inline" px={0.5}>
      {children}
    </Box>
  );
};

export default Highlight;
