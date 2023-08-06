import { Box } from '@chakra-ui/react';
import Script from 'next/script';

export default function InstagramEmbed() {
  return (
    <>
      <Box
        as="blockquote"
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/stanfordssi/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version={14}
        display="none"
      />
      <Script src="//www.instagram.com/embed.js" />
    </>
  );
}
