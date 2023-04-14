import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { primaryGradient } from 'client/theme';
import Image from 'next/image';

import { PrimaryButton } from './primaryButton';

export function HeroSection() {
  return (
    <VStack spacing={8} p={8}>
      <Image alt="Stanford SSI" src="/logo.png" width={128} height={128} />
      <Heading as="h1" size="3xl" textAlign="center">
        Stanford{' '}
        <Text as="span" color="primary.300">
          SSI
        </Text>
      </Heading>
      <Text color="gray.400" textAlign="center">
        Website currently under construction. Join our Slack for updates!
      </Text>
      <PrimaryButton
        as="a"
        href="https://join.slack.com/t/ssi-teams/shared_invite/zt-1t8y0gu90-_9AUA7mtIDHqU9qNC80iAw"
        target="_blank"
      >
        Join us on Slack
      </PrimaryButton>
      {/* <Box w="100%" h="200px" bgGradient={primaryGradient} /> */}
    </VStack>
  );
}
