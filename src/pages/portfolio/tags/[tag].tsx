import { GetStaticProps } from 'next';

import Portfolio from '@/components/Portfolio';
import { getAllTags, portfolioItems } from '@/components/Portfolio/portfolioItems';

type PortfolioItemTagPageProps = {
  tag: string;
};

const PortfolioItemTagPage = ({ tag }: PortfolioItemTagPageProps) => {
  const filteredPortfolioItems = portfolioItems.filter(({ tags }) => tags.includes(tag));

  return <Portfolio portfolioItems={filteredPortfolioItems} tag={tag} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      tag: context.params.tag,
    },
  };
};

export const getStaticPaths = async () => {
  const allTags = await getAllTags();

  const paths = allTags.map((tag: string) => ({
    params: {
      tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PortfolioItemTagPage;
