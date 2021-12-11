import type { NextPage } from 'next';
import Head from 'next/head';
import { alpha, Avatar, Box, Stack, Typography } from '@mui/material';

import { useThemeContext } from '@/context/ThemeContext';
import CatsImage from '@/assets/images/cats.jpg';
import NorandaRocksImage from '@/assets/images/noranda-rocks.jpg';
import ScreensImage from '@/assets/images/screens.jpg';

const Highlight = ({ children }: { children: string }) => {
  const { theme } = useThemeContext();

  return (
    <Box bgcolor={alpha(theme.colorPrimary, 0.2)} display="inline" px={0.5}>
      {children}
    </Box>
  );
};

const About: NextPage = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <Head>
        <title>Noranda Brown About</title>
        <meta name="description" content="Noranda Brown About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack bgcolor={theme.bgPrimary} color={theme.textPrimary} component="main" minHeight="calc(100vh - 63px)">
        <Stack alignItems="center" justifyContent="space-around" m="auto" width="50%">
          <Typography component="div" my={2} variant="h2">
            About
          </Typography>

          <Typography component="div" my={2} variant="h6">
            <Typography component="div">
              I specialize in <Highlight>UI design</Highlight> and <Highlight>frontend development</Highlight>,
              designing and building beautiful, usable websites using best-practice Javascript frameworks and tools. I
              work for a non-profit FFRDC designing and prototyping health apps to improve{' '}
              <Highlight>healthcare</Highlight>. My current stack includes <Highlight>React</Highlight>,{' '}
              <Highlight>Next.js</Highlight>, and <Highlight>Material UI</Highlight>, but I am always learning new
              technologies.
            </Typography>

            <Typography component="div">
              I grew up in Canada, graduated high school in California, and graduated college and grad school in
              Massachusetts, where I finally decided to settle down. I&apos;m a trained <Highlight>geologist</Highlight>{' '}
              and <Highlight>computer scientist</Highlight> having studied rocks and volcanoes in Maine, Hawaii, New
              Zealand, and Venus (remotely). I interned at Wellesley College, MIT, and NASA JPL, working with world
              famous geoscientists.
            </Typography>

            <Typography component="div">
              These days you can find me living the quiet life working from home with my 2 cats/coworkers, coding,
              gaming, and occasionally rennovating my house.
            </Typography>
          </Typography>

          <Stack direction="row">
            <Avatar alt="Noranda Rocks" src={NorandaRocksImage.src} sx={{ height: 200, mx: 1, mb: 5, width: 200 }} />
            <Avatar alt="Cats" src={CatsImage.src} sx={{ height: 200, mx: 1, mb: 5, width: 200 }} />
            <Avatar alt="Screens" src={ScreensImage.src} sx={{ height: 200, mx: 1, mb: 5, width: 200 }} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default About;
