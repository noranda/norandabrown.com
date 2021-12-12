import { alpha, Grid } from '@mui/material';
import { Apps as ModularIcon, Spellcheck as StyleIcon, MenuBook as ABLIcon } from '@mui/icons-material';

import Principle from './Principle';
import { useThemeContext } from '@/context/ThemeContext';

const MyCodingPrinciples = () => {
  const { theme } = useThemeContext();

  return (
    <Grid container bgcolor={alpha(theme.colorPrimary, 0.1)} p={2} spacing={1} width="100%">
      <Principle label="Modular" icon={<ModularIcon />}>
        <>Create a function once, use it twice! Keep code DRY and easy to reason about.</>
      </Principle>

      <Principle label="Style" icon={<StyleIcon />}>
        <>Use best-practice naming, punctuation, spacing, and comment conventions to keep code clean and readable.</>
      </Principle>

      <Principle label="ABL" icon={<ABLIcon />}>
        <>Always Be Learning! Keep up with the latest updates and changes. Smart people make smart libraries smarter.</>
      </Principle>
    </Grid>
  );
};

export default MyCodingPrinciples;
