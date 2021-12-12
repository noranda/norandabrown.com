import type { NextPage } from 'next';
import Head from 'next/head';
import { Stack } from '@mui/material';

import { useThemeContext } from '@/context/ThemeContext';

const Portfolio: NextPage = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <Head>
        <title>Noranda Brown Portfolio</title>
        <meta name="description" content="Noranda Brown Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack bgcolor={theme.bgPrimary} color={theme.colorPrimary} component="main" height="100%">
        Portfolio page
      </Stack>
    </>
  );
};

export default Portfolio;
