/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'Reynadi',
  titleTemplate: '%s | reynadi.com',
  defaultTitle: 'Reynadi',
  description: `Reynadi's personal page containing all his latest work and blog post`,
  canonical: 'https://reynadi.com',
  openGraph: {
    url: 'https://reynadi.com',
    title: 'Reynadi',
    description: `Reynadi's personal page containing all his latest work and blog post`,
    images: [
      {
        url: 'https://cdn.statically.io/og/theme=dark/Reynadi.jpg',
        alt: 'og-image',
      },
    ],
    site_name: 'Reynadi',
  },
  twitter: {
    handle: '@reynadi17',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
