import { Box, Button, HStack, Text } from '@chakra-ui/react';

import { DiscordIcon } from './icons/discordIcon';
import { LinkedInIcon } from './icons/linkedInIcon';
import { TwitterIcon } from './icons/twitterIcon';

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
        <HStack as="nav" width="full" spacing={4} flex={1}>
          <SocialButton href="/">
            <TwitterIcon />
          </SocialButton>
          <SocialButton href="/">
            <LinkedInIcon />
          </SocialButton>
          <SocialButton href="/">
            <DiscordIcon />
          </SocialButton>
        </HStack>
      </HStack>
    </Box>
  );
}
