import { Heading, Stack, Text } from '@chakra-ui/react';
import Layout from 'client/components/layout';
import { leaders } from 'client/components/leaders';

import { LeadershipTile } from './leadershipTile';

export function LeadershipPage() {
  return (
    <Layout title={'Leadership'} description="Stanford SSI Leadership">
      <Heading textAlign="center">Leadership</Heading>
      <Text textAlign="center" margin="10px">
        We{"'"}re a completely student-led, student-run organization. Meet our
        team below.
      </Text>
      <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
        <Stack
          direction={['column', 'row']}
          justifyContent={'center'}
          alignItems={'center'}
          flexWrap={'wrap'}
          maxWidth={'80em'}
        >
          {leaders.map((leader) => {
            return <LeadershipTile leader={leader} key={leader.email} />;
          })}
        </Stack>
      </Stack>
    </Layout>
  );
}
