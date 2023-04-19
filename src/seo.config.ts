// @SEE https://www.npmjs.com/package/next-seo#default-seo-configuration

import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '',
    siteName: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  titleTemplate: '%s Zemetia',
  description: 'Yoel Mountanus Sitorus Portofolio',
  defaultTitle: 'Zemetia',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/images/cv-64px.png',
    },
  ],
};

export default config;
