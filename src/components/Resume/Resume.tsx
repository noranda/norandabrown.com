import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';

import ResumeHeader from './ResumeHeader';
import WhatIDoWell from './WhatIDoWell';
import MyDesignPrinciples from './MyDesignPrinciples';
import MyCodingPrinciples from './MyCodingPrinciples';
import MyExperience from './MyExperience';
import MyEducation from './MyEducation';
import { useThemeContext } from '@/context/ThemeContext';
import NorandaImage from '@/assets/images/noranda-grand-canyon.jpg';

const Resume = () => {
  const { theme } = useThemeContext();

  return (
    <Stack
      bgcolor={theme.bgPrimary}
      bottom={0}
      color={theme.colorPrimary}
      component="main"
      direction="row"
      flex={1}
      height="100%"
      p={4}
      spacing={4}
    >
      <Stack bgcolor={theme.colorPrimary} color={theme.colorAlternate} overflow="auto" width={300}>
        <Box flex={0}>
          <Image alt="Noranda Brown" src={NorandaImage} layout="fixed" height={300} width={300} />
        </Box>

        <Stack height="100%" justifyContent="space-between" p={3}>
          <Stack>
            <Typography variant="h4">Noranda Brown</Typography>
            <Typography variant="h5">Greater Boston, MA</Typography>
            <Typography variant="h5">noranda@norandabrown.com</Typography>
          </Stack>

          <Stack sx={{ width: '250px' }}>
            <Link href="/noranda-resume.pdf" passHref>
              <Button variant="contained">
                <>
                  <DownloadIcon fontSize="small" sx={{ mr: 1 }} />
                  Export Resume
                </>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>

      <Stack flex={1} overflow="auto" spacing={1}>
        <ResumeHeader label="What I Do Well" />
        <WhatIDoWell />

        <ResumeHeader label="My Design Principles" />
        <MyDesignPrinciples />

        <ResumeHeader label="My Coding Principles" />
        <MyCodingPrinciples />

        <ResumeHeader label="My Experience" />
        <MyExperience />

        <ResumeHeader label="My Education" />
        <MyEducation />
      </Stack>
    </Stack>
  );
};

export default Resume;
