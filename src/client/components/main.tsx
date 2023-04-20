import { BlogSection } from './blogSection';
import { EventsSection } from './eventsSection';
import { HeroSection } from './heroSection';
import Layout from './layout';
import { SponsorsSection } from './sponsorsSection';
import { TeamsSection } from './teamsSection';

export function Main() {
  return (
    <Layout
      title="Stanford SSI"
      description="Stanford Student Space Initiative"
    >
      <HeroSection />
      <TeamsSection />
      <EventsSection />
      <SponsorsSection />
      <BlogSection />
    </Layout>
  );
}
