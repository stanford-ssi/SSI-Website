import { Box } from '@chakra-ui/react';
import Script from 'next/script';
import { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    return () => {
      // Clean up: remove the script when component unmounts
      const script = document.getElementById('instagram-embed-script');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Box
        as="blockquote"
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/stanfordssi/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version={14}
        display="none"
      />
      <Script
        id="instagram-embed-script"
        src="//www.instagram.com/embed.js"
        strategy="afterInteractive"
        async
        defer
      />
    </>
  );
};

export default InstagramEmbed;
