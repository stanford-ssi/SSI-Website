import { Box, Heading, HStack, Text, VStack, Grid } from '@chakra-ui/react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image'; // Import next/image for optimized image loading

import { PrimaryButton } from './primaryButton';

const InstagramEmbed = dynamic(() => import('./instagramEmbed'), {
  ssr: false
});

function HeroSection() {
  const { scrollYProgress } = useViewportScroll();

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
          alt="Space"
          layout="fill"
          objectFit="cover"
          quality={100} // Adjust image quality as needed
        />
      </motion.div>
      <Grid
        templateColumns={{ base: '1fr', md: '1fr auto' }}
        gap={8}
        p={6}
        position="relative"
        alignItems="center"
      >
        <VStack spacing={8} alignItems="center" textAlign="center">
          <Image
            alt="Stanford SSI"
            src="/images/logo.png"
            width={128}
            height={128}
          />
          <VStack spacing={4} alignItems="center">
            <Heading
              as="h1"
              size="3xl"
              textAlign="center"
              fontFamily="var(--font-workbench)"
              fontWeight="thin"
            >
              Stanford{' '}
              <Text as="span" color="primary.300">
                SSI
              </Text>
            </Heading>
            <Text color="gray.400" textAlign="center">
              Stanford Student Space Initiative
            </Text>
          </VStack>
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
        <Box mt={{ base: 8, md: 0 }} borderRadius="xl" overflow="hidden">
          <InstagramEmbed />
        </Box>
      </Grid>
    </>
  );
}

export default HeroSection;
