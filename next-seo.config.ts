import { DefaultSeoProps } from 'next-seo';

const siteURL: string = "https://pixiboom.com"
const siteName: string = "PixiBoom"

const config: DefaultSeoProps = {
  robotsProps: {
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  additionalMetaTags: [
    {
      name: "google-site-verification",
      content: "XXXXXXXXXXXXXXXXXXXX"
    }
  ],
  additionalLinkTags:[
    {
      rel:"icon",
      type:'image/x-icon',
      href: '/favicon.ico'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteURL,
    siteName: siteName,
  },
  twitter: {
    handle: `@${siteName}`,
    site: `@${siteName}`,
    cardType: 'summary_large_image',
  },
};

export default config;