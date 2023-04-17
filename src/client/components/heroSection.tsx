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
        Website currently under construction. Please check Slack or contact us
        for updates!
      </Text>
      <PrimaryButton
        as="a"
        href="mailto:space.initiative@stanford.edu"
        target="_blank"
      >
        Contact Us
      </PrimaryButton>
      {/* <Box w="100%" h="200px" bgGradient={primaryGradient} /> */}
    </VStack>
  );
}
