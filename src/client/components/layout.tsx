import { Flex, Stack } from '@chakra-ui/react';
import Head from 'next/head';

import Footer from './footer';
import Navigation from './navigation';

export type LayoutProps = React.PropsWithChildren<{
  title: string;
  description: string;
  image?: string;
}>;

export default function Layout({
  title,
  description,
  image = 'https://www.stanfordssi.org/images/banner.png',
  children
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Stanford SSI" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        {image && <meta property="og:image:alt" content={title} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@stanfordssi" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
        {image && <meta name="twitter:image:alt" content={title} />}
      </Head>
      <Stack height="full" spacing={0} overflow="auto">
        <Navigation />
        <Flex as="main" flexDirection="column" flex={1} justifyContent="start">
          {children}
        </Flex>
        <Footer />
      </Stack>
    </>
  );
}
