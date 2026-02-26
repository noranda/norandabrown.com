import {Helmet} from 'react-helmet-async';
import {SITE_CONFIG} from '@/data/siteConfig';

type PageMetaProps = {
  description: string;
  path: string;
  title: string;
};

export const PageMeta = ({description, path, title}: PageMetaProps) => {
  const fullTitle = path === '/' ? title : `${title} | ${SITE_CONFIG.name}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta content={description} name="description" />
    </Helmet>
  );
};
