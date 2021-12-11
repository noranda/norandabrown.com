import type { NextPage } from 'next';
import Head from 'next/head';
import { Avatar, Stack, Typography } from '@mui/material';

import SocialMedia from '@/components/SocialMedia';
import { useThemeContext } from '@/context/ThemeContext';
import NorandaImage from '@/assets/images/noranda.jpg';

const Home: NextPage = () => {
  const { theme } = useThemeContext();
  console.debug('theme', theme);

  return (
    <>
      <Head>
        <title>Noranda Brown Home</title>
        <meta name="description" content="Noranda Brown Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack bgcolor={theme.bgPrimary} color={theme.colorPrimary} component="main" minHeight="calc(100vh - 63px)">
        <Stack alignItems="center" marginTop="5%" width="100%">
          <Avatar alt="Noranda Brown" src={NorandaImage.src} sx={{ width: 200, height: 200 }} />

          <Typography component="div" my={2} variant="h1">
            Hi, I&apos;m Noranda!
          </Typography>

          <Typography component="div" mb={3} variant="h5">
            UI Designer | Front-end Developer
          </Typography>

          <SocialMedia />
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
