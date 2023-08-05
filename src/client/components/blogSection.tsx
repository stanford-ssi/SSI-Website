import {
  Box,
  Card,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { primaryGradient } from 'client/theme';

import { SECTION_MAX_WIDTH } from './constants';
import { MapIcon } from './icons/mapIcon';
import { PrimaryButton } from './primaryButton';

function BackgroundChange() {
  return (
    <VStack width="full" position="absolute" top={0} bottom={0} spacing={0}>
      <Box bg="gray.900" width="full" flex={1} />
      <Box bg="black" width="full" flex={1} />
    </VStack>
  );
}

export function BlogSection() {
  return (
    <Flex position="relative" width="full" direction="column" align="center">
      <BackgroundChange />
      <Card
        mx={{ base: 6, md: 32 }}
        flex={1}
        rounded="3xl"
        bgGradient={primaryGradient}
        color="white"
        maxW={SECTION_MAX_WIDTH}
      >
        <HStack spacing={0}>
          <Stack
            flex={16}
            px={{ base: 8, sm: 16, lg: 24 }}
            py={{ base: 6, sm: 14, lg: 20 }}
            spacing={4}
          >
            <Text flex={1}>Want to read more about SSI</Text>
            <Stack spacing={10}>
              <Heading size="2xl">
                Make sure to check out our newsletters here
              </Heading>
              <Stack spacing={4} align="start">
                <HStack spacing={4}>
                  <PrimaryButton
                    dark
                    as="a"
                    href="https://drive.google.com/file/d/1QP1e9jb2dl8Rbvx9QJt7ccOHyZqH9UPf/view"
                    target="_blank"
                  >
                    View Latest
                  </PrimaryButton>
                  <PrimaryButton
                    dark
                    as="a"
                    href="https://mailman.stanford.edu/mailman/listinfo/ssi_general"
                    target="_blank"
                  >
                    Subscribe
                  </PrimaryButton>
                </HStack>
              </Stack>
            </Stack>
          </Stack>
          <Box flex={15} display={{ base: 'none', lg: 'initial' }}>
            <MapIcon />
          </Box>
        </HStack>
      </Card>
    </Flex>
  );
}
