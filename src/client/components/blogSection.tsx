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
    <Box position="absolute" width="full">
      <BackgroundChange />
      <Card
        mx={40}
        flex={1}
        rounded="3xl"
        bgGradient={primaryGradient}
        color="white"
      >
        <HStack spacing={0}>
          <Stack flex={1} px={24} py={20} spacing={4}>
            <Text flex={1}>Want to read more about SSI</Text>
            <Stack spacing={10}>
              <Heading size="2xl">View our latest blog posts here</Heading>
              <PrimaryButton dark width="fit-content">
                Hello
              </PrimaryButton>
            </Stack>
          </Stack>
          <Box flex={1}>
            <MapIcon />
          </Box>
        </HStack>
      </Card>
    </Box>
  );
}
