import { Box, Card, Heading, HStack, Text, VStack } from '@chakra-ui/react';

interface SponsorCardProps {
  name: string;
  image?: string;
  tier: 'platinum' | 'gold' | 'silver';
}

function SponsorCard({ name, tier }: SponsorCardProps) {
  return (
    <Box>
      <Card
        rounded="lg"
        bg="black"
        borderWidth={4}
        borderColor={
          tier === 'platinum'
            ? 'primary.300'
            : tier === 'gold'
            ? 'primary.100'
            : 'black'
        }
        width={{ base: '128px', md: '140px' }}
        height="92px"
        align="center"
        justify="center"
        flexShrink={0}
        mt={6}
      >
        <Text color={tier === 'silver' ? 'gray.700' : 'white'} fontSize="xl">
          {name}
        </Text>
      </Card>
    </Box>
  );
}

export function SponsorsSection() {
  return (
    <VStack spacing={2} py={16} bg="gray.900">
      <VStack spacing={8} px={{ base: 6, md: 32 }}>
        <Heading size="2xl">Our Sponsors</Heading>
        <Text flex={1} color="gray.400" textAlign="center">
          Thank you to all of our current sponsors! We rely on the support of
          our sponsors to continue educasdasdsating the next generation of space
          industry leaders.
        </Text>
      </VStack>
      <HStack spacing={6} justify="center" flexWrap="wrap" px={6}>
        <SponsorCard name="Autodesk" tier="platinum" />
        <SponsorCard name="Harwin" tier="gold" />
        <SponsorCard name="BA Circuits" tier="silver" />
        <SponsorCard name="Altium" tier="silver" />
        <SponsorCard name="Keysight" tier="silver" />
        <SponsorCard name="GranSystems" tier="silver" />
        <SponsorCard name="Quanta" tier="silver" />
        <SponsorCard name="Ansys" tier="silver" />
      </HStack>
    </VStack>
  );
}
