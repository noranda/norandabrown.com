import type { ReactElement } from 'react';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';

import { useThemeContext } from '@/context/ThemeContext';

type PrincipleProps = {
  children: ReactElement;
  label: string;
  icon: ReactElement;
};

const Principle = ({ children, label, icon }: PrincipleProps) => {
  const { theme } = useThemeContext();

  return (
    <Grid container item alignItems="center">
      <Grid item alignItems="flex-end" xs={2}>
        <Stack alignItems="center" direction="row">
          <Avatar sx={{ bgcolor: theme.colorHighlight, color: theme.colorPrimary, mr: 1 }}>{icon}</Avatar>
          <Typography variant="h4">{label}</Typography>
        </Stack>
      </Grid>

      <Grid item xs={10}>
        <Typography variant="h6">{children}</Typography>
      </Grid>
    </Grid>
  );
};

export default Principle;
