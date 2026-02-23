import {Helmet} from 'react-helmet-async';
import {SITE_CONFIG} from '@/data/siteConfig';

type PageMetaProps = {
  description: string;
  path: string;
  title: string;
};

export const PageMeta = ({description, path, title}: PageMetaProps) => {
  const fullTitle = path === '/' ? title : `${title} | ${SITE_CONFIG.name}`;
  const ogImage = `${SITE_CONFIG.baseUrl}/og-image.png`;
  const url = `${SITE_CONFIG.baseUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta content={description} name="description" />
      <link href={url} rel="canonical" />

      {/* Open Graph */}
      <meta content={description} property="og:description" />
      <meta content={ogImage} property="og:image" />
      <meta content="630" property="og:image:height" />
      <meta content="1200" property="og:image:width" />
      <meta content={SITE_CONFIG.name} property="og:site_name" />
      <meta content={fullTitle} property="og:title" />
      <meta content="website" property="og:type" />
      <meta content={url} property="og:url" />

      {/* Twitter Card */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={description} name="twitter:description" />
      <meta content={ogImage} name="twitter:image" />
      <meta content={fullTitle} name="twitter:title" />
    </Helmet>
  );
};
