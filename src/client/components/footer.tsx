import { EmailIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, Text } from '@chakra-ui/react';

import { InstagramIcon } from './icons/instagramIcon';
import { LinkedInIcon } from './icons/linkedInIcon';
import { TwitterIcon } from './icons/twitterIcon';
import { YoutubeIcon } from './icons/youtubeIcon';

type SocialButtonProps = React.PropsWithChildren<{
  href: string;
}>;

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      bg="gray.900"
      rounded="2xl"
      _hover={{
        opacity: 0.8
      }}
      _active={{
        opacity: 0.6
      }}
      width="40px"
      height="40px"
      p={0}
    >
      {children}
    </Button>
  );
}

export default function Footer() {
  return (
    <Box
      px={{ base: 6, md: 32 }}
      py={6}
      position="sticky"
      top={0}
      width="full"
      zIndex={999}
      bg="black"
    >
      <HStack align="center" justify="space-between" spacing={4}>
        <HStack spacing={4} width="full">
          <Text color="gray.400" fontSize={{ base: '2xs', sm: 'xs', md: 'sm' }}>
            Copyright © 2023 Stanford Student Space Initiative.{' '}
            <Text as="span" display={{ base: 'none', sm: 'inline' }}>
              All rights reserved.
            </Text>
          </Text>
        </HStack>
        <HStack as="nav" width="full" spacing={{ base: 2, md: 4 }} flex={1}>
          <SocialButton href="https://twitter.com/stanfordssi">
            <TwitterIcon />
          </SocialButton>
          <SocialButton href="https://www.instagram.com/stanfordssi/">
            <InstagramIcon />
          </SocialButton>
          <SocialButton href="http://www.youtube.com/channel/UCbHZcWbCUjXiZ16Gb7ilOew">
            <YoutubeIcon />
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/company/stanford-ssi/">
            <LinkedInIcon />
          </SocialButton>
          <SocialButton href="mailto:spaceinitiative@stanford.edu">
            <EmailIcon />
          </SocialButton>
        </HStack>
      </HStack>
    </Box>
  );
}
