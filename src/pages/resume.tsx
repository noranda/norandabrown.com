import type { NextPage } from 'next';
import Head from 'next/head';
import { Stack } from '@mui/material';

import { useThemeContext } from '@/context/ThemeContext';

const Resume: NextPage = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <Head>
        <title>Noranda Brown Resume</title>
        <meta name="description" content="Noranda Brown Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack bgcolor={theme.bgPrimary} color={theme.colorPrimary} component="main" minHeight="calc(100vh - 63px)">
        Resume page
      </Stack>
    </>
  );
};

export default Resume;
