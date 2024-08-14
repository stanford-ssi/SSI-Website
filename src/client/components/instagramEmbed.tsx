import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramEmbedProps {
  onLoad?: () => void;
}

const InstagramEmbed = ({ onLoad }: InstagramEmbedProps) => {
  useEffect(() => {
    // Function to load Instagram embeds
    const loadInstagramEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        if (onLoad) onLoad(); // Call onLoad if provided
      }
    };

    // Ensure script is added
    const script = document.getElementById(
      'instagram-embed-script'
    ) as HTMLScriptElement;
    if (!script) {
      const newScript = document.createElement('script');
      newScript.id = 'instagram-embed-script';
      newScript.src = '//www.instagram.com/embed.js';
      newScript.async = true;
      newScript.defer = true;
      newScript.onload = loadInstagramEmbed;
      document.body.appendChild(newScript);
    } else {
      // Script already exists, just load the embed
      loadInstagramEmbed();
    }

    // Cleanup function
    return () => {
      const script = document.getElementById('instagram-embed-script');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [onLoad]); // Depend on onLoad to ensure it updates if changed

  return (
    <Box
      as="blockquote"
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/stanfordssi/?utm_source=ig_embed&utm_campaign=loading"
      data-instgrm-version={14}
      width="100%"
      maxWidth="540px"
      margin="auto"
      style={{ background: '#FFF', border: '0', marginBottom: '20px' }}
    />
  );
};

export default InstagramEmbed;
