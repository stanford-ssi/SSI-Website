import {
  Box,
  Heading,
  HStack,
  Image as ChakraImage,
  Text,
  VStack
} from '@chakra-ui/react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { PrimaryButton } from './primaryButton';

const InstagramEmbed = dynamic(() => import('./instagramEmbed'), {
  ssr: false
});

function useParallax(value: MotionValue<number>, start: number, end: number) {
  return useTransform(value, [0, 1], [start, end]);
}

function Background() {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 100, -900);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: y,
        left: 0,
        right: 0,
        height: '100vh',
        opacity: 0.15,
        zIndex: -1
      }}
    >
      <ChakraImage
        height="full"
        src="/images/mars.jpg"
        alt="Space"
        objectFit="cover"
      />
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <>
      <Background />
      <VStack spacing={8} p={6} position="relative">
        <Image
          alt="Stanford SSI"
          src="/images/logo.png"
          width={128}
          height={128}
        />
        <VStack spacing={4}>
          <Heading as="h1" size="3xl" textAlign="center">
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
        <Box>
          <InstagramEmbed />
        </Box>
      </VStack>
    </>
  );
}
