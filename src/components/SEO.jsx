import { Helmet } from 'react-helmet-async';
import { companyInfo } from '../data/companyInfo';

const SEO = ({ 
  title, 
  description, 
  keywords = 'excel paints, wall putty, white cement, cement paint, patna, bihar, iso certified',
  image = '/images/og-image.jpg',
  url = window.location.href
}) => {
  const siteTitle = companyInfo.name;
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - ${companyInfo.tagline}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={siteTitle} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
