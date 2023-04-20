import { Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import { PrimaryButton } from './primaryButton';

export function HeroSection() {
  return (
    <VStack spacing={8} p={6}>
      <Image
        alt="Stanford SSI"
        src="/images/logo.png"
        width={128}
        height={128}
      />
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
        href="https://wiki.stanfordssi.org/How_to_Join_SSI"
        target="_blank"
      >
        Join SSI
      </PrimaryButton>
    </VStack>
  );
}
