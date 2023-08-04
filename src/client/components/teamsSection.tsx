import {
  Card,
  Collapse,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react';
import { primaryGradient } from 'client/theme';
import { useState } from 'react';

import { SECTION_MAX_WIDTH } from './constants';
import {
  BalloonsIcon,
  BioIcon,
  MarsIcon,
  OperationsIcon,
  PolicyIcon,
  RocketsIcon,
  SatelliteIcon
} from './icons/teams';

interface Team {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const teams: Readonly<Team[]> = [
  {
    name: 'Balloons',
    icon: <BalloonsIcon />,
    description:
      "The Balloons Team has launched and recovered more than 50 high altitude balloons carrying scientific payloads to over 100,000 feet. With innovative designs and cutting edge avionics, they've set the world record for latex balloon flight endurance and are aiming to circumnavigate the globe."
  },
  {
    name: 'Rockets',
    icon: <RocketsIcon />,
    description:
      'Making aerodynamic objects propel unique payloads to high altitudes since 2013, the Rockets team has certified over 35 members of SSI for high powered rocketry. In addition to a bid for IREC 2017, the team will continue work on Project Daedalus, a series of smaller projects to increase expertise in all aspects of rocketry.'
  },
  {
    name: 'Satellites',
    icon: <SatelliteIcon />,
    description:
      "The Satellites team has launched a variety of imaging, scientific, and optical communications CubeSats. They're currently working on an open-source 3U imaging CubeSat—about three ducks—to prove automous orbit determination and software defined downlinking."
  },
  {
    name: 'Biology',
    icon: <BioIcon />,
    description:
      "The Biology team is building devices to sustain life in space, and to use life to accomplish missions in space. They're currently working on building a DNA synthesizer for microgravity, which will be the first device to synthesize DNA in space."
  },
  {
    name: 'Operations',
    icon: <OperationsIcon />,
    description:
      "In addition to facilitating events among members, the Operations team brings speakers to Stanford and connects members with industry professionals and aerospace entrepreneurs. They're currently working towards Stanford SSI + Industry Space Night, an evening of networking SSI will host in early January."
  },
  {
    name: 'Policy',
    icon: <PolicyIcon />,
    description:
      "The Policy team researches the legislation, market trends, history, and philosophy that has affected the development of the space industry. They're presenting their research to the United Nations."
  },
  {
    name: 'Mars',
    icon: <MarsIcon />,
    description:
      'The SSI Mars team seeks to push the boundaries of crewed space missions and pave the way for permanent settlement of Mars and other celestial bodies. Our projects are centered on in situ resource utilization (ISRU), a broad group of technologies which make use of the scant resources on Mars for long-term surface missions. We turn Martian air and soil into fuel and concrete, eliminating the need to launch everything from Earth. At the same time, ISRU technologies can sustainably produce fuel and building materials for use on Earth, making our work a crucial step in fighting climate change. If we learn to live on the Red Planet, we can also save the blue one!'
  }
];

interface TeamCardProps {
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
  setActive: () => void;
  unsetActive: () => void;
}

function TeamCard({ name, icon, isActive, setActive }: TeamCardProps) {
  const size = { base: '80px', sm: '104px' } as const;

  return (
    <VStack spacing={4}>
      <Card
        rounded={{ base: '2xl', sm: '3xl' }}
        bg="gray.800"
        width={size}
        height={size}
        bgGradient={isActive ? primaryGradient : undefined}
        onMouseEnter={setActive}
        fontSize={{ base: '5xl', sm: '7xl' }}
        align="center"
        justify="center"
      >
        {icon}
      </Card>
      <Text color="white" fontSize="lg" fontWeight="bold">
        {name}
      </Text>
    </VStack>
  );
}

export function TeamsSection() {
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);

  return (
    <VStack spacing={8} my={16} maxW={SECTION_MAX_WIDTH}>
      <VStack spacing={8} px={{ base: 6, md: 32 }}>
        <Heading size="2xl">Teams</Heading>
        <Text flex={1} color="gray.400" textAlign="center">
          Here are the teams that make up SSI. Each team has a unique focus. If
          you&apos;re interested in joining a team, please reach out!
        </Text>
      </VStack>
      <SimpleGrid
        px={{ base: 6, lg: 32 }}
        columns={{ base: 4, lg: 7 }}
        spacing={{ base: 0, sm: 4, lg: 6 }}
        width="fit-content"
      >
        {teams.map((team) => (
          <TeamCard
            key={team.name}
            name={team.name}
            icon={team.icon}
            isActive={team.name === activeTeam?.name}
            setActive={() => setActiveTeam(team)}
            unsetActive={() => setActiveTeam(null)}
          />
        ))}
      </SimpleGrid>
      <VStack spacing={8} px={{ base: 6, md: 32 }}>
        <Collapse in={!!activeTeam} animateOpacity>
          <Card p={{ base: 4, md: 6 }} bg="gray.900" rounded="2xl">
            {activeTeam && <Text>{activeTeam.description}</Text>}
          </Card>
        </Collapse>
      </VStack>
    </VStack>
  );
}
