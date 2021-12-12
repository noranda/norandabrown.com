import { alpha, Stack } from '@mui/material';

import Education from './Education';
import { useThemeContext } from '@/context/ThemeContext';

const MyEducation = () => {
  const { theme } = useThemeContext();
  const descriptionsBrandeis = [<>GPA: 3.9</>];
  const descriptionsWellesley = [<>GPA: 3.7</>, <>Magna Cum Laude</>, <>Focus in Computer Science</>];

  return (
    <Stack bgcolor={alpha(theme.colorPrimary, 0.1)} p={3}>
      <Education
        degree="MA, Computer Science"
        descriptions={descriptionsBrandeis}
        institution="Brandeis University"
        institutionUrl="https://www.brandeis.edu/"
        timePeriod="2013-2014"
      />

      <Education
        degree="BA, Geosciences"
        descriptions={descriptionsWellesley}
        institution="Wellesley College"
        institutionUrl="https://www.wellesley.edu/"
        isLast
        timePeriod="2008-2012"
      />
    </Stack>
  );
};

export default MyEducation;
