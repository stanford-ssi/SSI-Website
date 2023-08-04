import { Flex } from '@chakra-ui/react';

import { BlogSection } from './blogSection';
import { EventsSection } from './eventsSection';
import { HeroSection } from './heroSection';
import Layout from './layout';
import { PeopleSection } from './peopleSection';
import { SponsorsSection } from './sponsorsSection';
import { TeamsSection } from './teamsSection';

export function Main() {
  return (
    <Layout
      title="Stanford SSI"
      description="Stanford Student Space Initiative"
    >
      <Flex direction="column" align="center" width="full">
        <HeroSection />
        <TeamsSection />
        <EventsSection />
        <Flex bg="black" direction="column" align="center" width="full">
          <SponsorsSection />
          <BlogSection />
          <PeopleSection />
        </Flex>
      </Flex>
    </Layout>
  );
}
