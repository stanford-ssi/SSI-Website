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
      'Pushing the limits of high power rocketry since 2013, the Rockets team is always striving to put its hard-earned hands-on skills to the test in explosive environments to propel innovative payloads into the air and beyond!'
  },
  {
    name: 'Satellites',
    icon: <SatelliteIcon />,
    description:
      "The Satellites team has launched a variety of imaging, scientific, and optical communications CubeSats. They're currently working on a 2U imaging CubeSat called SAMWISE to demo a deployable solar array, a star-tracker, improved attitude control, and S-band communication."
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
      "Operations supports the rest of SSI's teams to create a productive, inclusive, and engaged community of engineers and space enthusiasts. The operations team plans parties, hosts events with sponsors and alumni, manages our workspace, and much more!"
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
      "The Mars team has it’s sights set on long-term habitation, from the Mars Polar Rover to be tested in Antarctica to the Mars Bricks team testing regolith building materials. But we aren’t just building projects for the red planet, they're green solutions to help save Earth too!"
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
