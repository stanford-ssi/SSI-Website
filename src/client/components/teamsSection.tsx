import {
  Box,
  Card,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { primaryGradient } from 'client/theme';

type TeamCardProps = React.PropsWithChildren<{ name: string }>;

function TeamCard({ name, children }: TeamCardProps) {
  return (
    <Card
      rounded="2xl"
      bg="gray.900"
      p={12}
      role="group"
      _hover={{
        boxShadow: '2xl'
      }}
    >
      <VStack spacing={4}>
        <Card
          rounded="3xl"
          bg="gray.800"
          width="104px"
          height="104px"
          _groupHover={{ bgGradient: primaryGradient }}
        ></Card>
        <Text color="white" fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text color="gray.400">{children}</Text>
      </VStack>
    </Card>
  );
}

export function TeamsSection() {
  return (
    <Stack spacing={8} py={16}>
      <VStack spacing={8} px={{ base: 6, md: 32 }}>
        <Heading size="2xl">Teams</Heading>
        <Text flex={1} color="gray.400" textAlign="center">
          Here are the teams that make up SSI. Each team has a unique focus. If
          you&apos;re interested in joining a team, please reach out!
        </Text>
      </VStack>
      <SimpleGrid
        px={{ base: 6, lg: 32 }}
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
      >
        <TeamCard name="Balloons">
          The Balloons Team has launched and recovered more than 50 high
          altitude balloons carrying scientific payloads to over 100,000 feet.
          With innovative designs and cutting edge avionics, they&apos;ve set
          the world record for latex balloon flight endurance and are aiming to
          circumnavigate the globe.
        </TeamCard>
        <TeamCard name="Rockets">
          Making aerodynamic objects propel unique payloads to high altitudes
          since 2013, the Rockets team has certified over 35 members of SSI for
          high powered rocketry. In addition to a bid for IREC 2017, the team
          will continue work on Project Daedalus, a series of smaller projects
          to increase expertise in all aspects of rocketry.
        </TeamCard>
        <TeamCard name="Satellites">
          The Satellites team has launched a variety of imaging, scientific, and
          optical communications CubeSats. They&apos;re currently working on an
          open-source 3U imaging CubeSat—about three ducks—to prove automous
          orbit determination and software defined downlinking.
        </TeamCard>
        <TeamCard name="Biology">
          The Biology team is building devices to sustain life in space, and to
          use life to accomplish missions in space. They&apos;re currently
          working on building a DNA synthesizer for microgravity, which will be
          the first device to synthesize DNA in space.
        </TeamCard>
        <TeamCard name="Operations">
          In addition to facilitating events among members, the Operations team
          brings speakers to Stanford and connects members with industry
          professionals and aerospace entrepreneurs. They&apos;re currently
          working towards Stanford SSI + Industry Space Night, an evening of
          networking SSI will host in early January.
        </TeamCard>
        <TeamCard name="Policy">
          The Policy team researches the legislation, market trends, history,
          and philosophy that has affected the development of the space
          industry. They&apos;re presenting their research to the United
          Nations..
        </TeamCard>
        <TeamCard name="Mars">
          The SSI Mars team seeks to push the boundaries of crewed space
          missions and pave the way for permanent settlement of Mars and other
          celestial bodies. Our projects are centered on in situ resource
          utilization (ISRU), a broad group of technologies which make use of
          the scant resources on Mars for long-term surface missions. We turn
          Martian air and soil into fuel and concrete, eliminating the need to
          launch everything from Earth. At the same time, ISRU technologies can
          sustainably produce fuel and building materials for use on Earth,
          making our work a crucial step in fighting climate change. If we learn
          to live on the Red Planet, we can also save the blue one!
        </TeamCard>
      </SimpleGrid>
    </Stack>
  );
}
