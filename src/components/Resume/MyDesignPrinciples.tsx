import { alpha, Grid } from '@mui/material';
import { Autorenew as ConsistencyIcon, Mood as DelightfulIcon, Visibility as ClarityIcon } from '@mui/icons-material';

import Principle from './Principle';
import { useThemeContext } from '@/context/ThemeContext';

const MyDesignPrinciples = () => {
  const { theme } = useThemeContext();

  return (
    <Grid container bgcolor={alpha(theme.colorPrimary, 0.1)} p={2} spacing={1} width="100%">
      <Principle label="Clear" icon={<ClarityIcon />}>
        <>A simple, crisp, intuitive design is a result of good structure and proper spacing.</>
      </Principle>

      <Principle label="Consistent" icon={<ConsistencyIcon />}>
        <>A consistent layout, language, and design helps improve user engagement and experience.</>
      </Principle>

      <Principle label="Delightful" icon={<DelightfulIcon />}>
        <>Enrich the user experience by using new technologies, behavioral design, gamification, and creativity.</>
      </Principle>
    </Grid>
  );
};

export default MyDesignPrinciples;
