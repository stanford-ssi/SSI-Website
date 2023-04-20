import {
  Box,
  Card,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { primaryGradient } from 'client/theme';

import { MapIcon } from './icons/mapIcon';
import { PrimaryButton } from './primaryButton';

function BackgroundChange() {
  return (
    <VStack width="full" position="absolute" top={0} bottom={0}>
      <Box bg="gray.900" width="full" flex={1} />
      <Box bg="black" width="full" flex={1} />
    </VStack>
  );
}

export function BlogSection() {
  return (
    <Box position="relative" width="full">
      <BackgroundChange />
      <Card
        mx={{ base: 6, md: 32 }}
        flex={1}
        rounded="3xl"
        bgGradient={primaryGradient}
        color="white"
      >
        <HStack spacing={0}>
          <Stack
            flex={1}
            px={{ base: 8, sm: 16, lg: 24 }}
            py={{ base: 6, sm: 14, lg: 20 }}
            spacing={4}
          >
            <Text flex={1}>Want to read more about SSI</Text>
            <Stack spacing={10}>
              <Heading size="2xl">View our latest blog posts here</Heading>
              <PrimaryButton dark width="fit-content">
                View Posts
              </PrimaryButton>
            </Stack>
          </Stack>
          <Box flex={1} display={{ base: 'none', lg: 'initial' }}>
            <MapIcon />
          </Box>
        </HStack>
      </Card>
    </Box>
  );
}
