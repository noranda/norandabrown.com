import type { NextPage } from 'next';
import Head from 'next/head';

import Resume from '@/components/Resume';

const ResumePage: NextPage = () => (
  <>
    <Head>
      <title>Noranda Brown Resume</title>
      <meta name="description" content="Noranda Brown Resume" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Resume />
  </>
);

export default ResumePage;
