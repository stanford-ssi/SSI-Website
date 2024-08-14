import { Box, Grid, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { PrimaryButton } from './primaryButton';

const InstagramEmbed = dynamic(() => import('./instagramEmbed'), {
  ssr: false // Load InstagramEmbed component dynamically
});

function HeroSection() {
  const { scrollYProgress } = useScroll();

  // Define the range for scrollYProgress (typically 0 to 1)
  const yRange = [0, 1];

  // Create a function to map scrollYProgress to a y transform range
  const y = useTransform(scrollYProgress, yRange, [-900, 100]);

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          opacity: 0.15,
          zIndex: -1,
          y: y // Apply y transform here
        }}
      >
        <Image
          src="/images/mars.jpg"
          alt="Mars"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority={true}
        />
      </motion.div>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr auto' }}
        gap={8}
        p={6}
        position="relative"
        alignItems="center"
      >
        <VStack spacing={8}>
          <Image
            src="/images/logo.png"
            alt="Stanford SSI"
            width={128}
            height={128}
            quality={100}
          />
          <Heading
            as="h1"
            fontSize={{ base: '5xl', md: '6xl' }}
            fontFamily="var(--font-workbench)"
            fontWeight="thin"
          >
            Stanford{' '}
            <Text as="span" color="primary.300">
              SSI
            </Text>
          </Heading>
          <Text
            color="white"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontFamily="var(--font-archivo)"
            fontWeight="semibold"
          >
            Ad Astra Per Aspera
          </Text>
          <HStack>
            <PrimaryButton
              as="a"
              href="mailto:spaceinitiative@stanford.edu"
              color="gray.700"
              target="_blank"
              style={{ marginRight: 10 }}
            >
              Contact
            </PrimaryButton>
            <PrimaryButton
              as="a"
              href="https://wiki.stanfordssi.org/How_to_Join_SSI"
              target="_blank"
              style={{ marginLeft: 10 }}
            >
              Join SSI
            </PrimaryButton>
          </HStack>
        </VStack>
        <Box>
          {' '}
          {/* Added the missing Box component here */}
          <InstagramEmbed />
        </Box>
      </Grid>
    </>
  );
}

export default HeroSection;
