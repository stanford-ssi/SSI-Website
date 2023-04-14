import { HeroSection } from './heroSection';
import Layout from './layout';

export function Main() {
  return (
    <Layout
      title="Stanford SSI"
      description="Stanford Student Space Initiative"
    >
      <HeroSection />
    </Layout>
  );
}
