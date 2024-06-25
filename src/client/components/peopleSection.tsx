import { Card, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { SECTION_MAX_WIDTH } from './constants';

export function PeopleSection() {
  return (
    <Stack
      spacing={8}
      px={{ base: 6, md: 32 }}
      my={16}
      align="start"
      maxW={SECTION_MAX_WIDTH}
    >
      <Heading size="2xl">About</Heading>
      <Stack spacing={0}>
        <Card p={{ base: 4, md: 6 }} bg="gray.900" borderTopRadius="2xl">
          <Stack spacing={4}>
            <Text>
              The Stanford Student Space Initiative (Stanford SSI) is
              Stanford&apos;s largest project-based student group, with more
              than 300 members split into six project teams: Rockets,
              Satellites, Balloons, Mars, Biology, and Policy.
            </Text>
            <Text>
              We are a completely student-run organization founded in 2013 with
              the mission of giving future leaders of the space industry the
              hands-on experience and broader insight they need to realize the
              next era of space development.
            </Text>
            <Text>
              We&apos;re the gathering place for people who want to act on their
              interests in space. Since 2013, we&apos;ve broken five world
              records in high altitude ballooning, launched several satellites
              into orbit, developed a unique space-capable DNA synthesis
              technique, sent a delegation to lobby the UN, won two
              international awards at rocketry challenges, taught an accredited
              Stanford class (AA 47SI, Why Go to Space), hosted over 150
              speakers at talks and conferences, and inspired hundreds of people
              to follow their dreams onwards and upwards.
            </Text>
            <Text>
              SSI is dedicated to achieving both short- and long-term goals. In
              the next year, we will build and launch more cubesats, work on a
              rover to autonomously cross Antarctica, and develop a new hybrid
              engine for a vertically landing rocket. All the while, we will
              continue to expand our mission of education and inspiration across
              Stanford and the world, pushing the boundaries of what is possible
              and doing our part to further the development of the new space
              age.
            </Text>
            <Text fontWeight="bold">We invite you to join us.</Text>
          </Stack>
        </Card>
        <Image width="full" alt="SSI Team" src="/images/team.jpg" />
      </Stack>
    </Stack>
  );
}
