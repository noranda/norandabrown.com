import type { NextPage } from 'next';
import Head from 'next/head';

import Portfolio from '@/components/Portfolio';
import { portfolioItems } from '@/components/Portfolio/portfolioItems';

const PortfolioPage: NextPage = () => (
  <>
    <Head>
      <title>Noranda Brown Portfolio</title>
      <meta name="description" content="Noranda Brown Portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Portfolio portfolioItems={portfolioItems} />
  </>
);

export default PortfolioPage;
