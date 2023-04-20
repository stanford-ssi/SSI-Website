import { Heading, Image, Stack, Text } from '@chakra-ui/react';

export function PeopleSection() {
  return (
    <Stack spacing={8} px={{ base: 6, md: 32 }} my={16} align="start">
      <Heading size="2xl">Our Team</Heading>
      <Image alt="SSI Team" src="/images/team.jpg" />
    </Stack>
  );
}
