import Head from 'next/head';
import { useRouter } from 'next/router';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Meta() {
  const siteUrl = 'https://leonardotononi.com';
  const canURL = siteUrl + useRouter().pathname;

  const site = {
    title: `Leonardo Tononi`,
    author: {
      name: `Leonardo Tononi`,
      summary: `A Front-End Developer.`,
    },
    description: `I’m a passionate and avid learner and I love to experiment new things. I am a self-taught programmer and this is a place where I share my works and my thoughts.`,
    siteUrl: `https://leonardotononi.com/`,
    social: {
      twitter: `_Easaaa_`,
    },
  };

  const microformats = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.title,
    url: 'https://www.leonardotononi.com',
  };

  const globalMicroformats = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: site.title,
    description: site.description,
    URL: 'https://www.leonardotononi.com',
  };

  return (
    <Head>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#000000'
      />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#000' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta name='description' content={site.description} />
      <link rel='canonical' href={canURL} />
      <meta property='og:image' content={HOME_OG_IMAGE_URL} />
      <script type='application/ld+json'>{JSON.stringify(microformats)}</script>
      <script type='application/ld+json'>
        {JSON.stringify(globalMicroformats)}
      </script>
    </Head>
  );
}
