import { Box, Heading, HStack, Link } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';
import { useTheme } from '@emotion/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import { PrimaryButton } from './primaryButton';

type NavLinkWrapperProps = React.PropsWithChildren<{
  href: string;
  target?: string;
  active: boolean;
}>;

type NavLinkProps = React.PropsWithChildren<{
  href: string;
  newTab?: boolean;
}>;

const routes = [
  {
    title: 'Home',
    link: '/',
    newTab: false
  },
  {
    title: 'Blog',
    link: '/blog',
    newTab: false
  },
  {
    title: 'Alumni',
    link: 'http://wiki.stanfordssi.org/How_to_Join_SSI%27s_Alumni_Network',
    newTab: true
  },
  {
    title: 'Wiki',
    link: 'https://ssi-wiki.stanford.edu/Main_Page',
    newTab: true
  }
] as const;

function NavLinkWrapper({
  href,
  target,
  active,
  children
}: NavLinkWrapperProps): ReactElement {
  if (active) return <>{children}</>;
  return (
    <NextLink href={href} target={target}>
      {children}
    </NextLink>
  );
}

function NavLink({ href, children, newTab }: NavLinkProps): ReactElement {
  const router = useRouter();

  const url = new URL(`https://stanfordssi.org${href}`);
  const active = url.pathname === router.pathname;

  return (
    <NavLinkWrapper
      href={href}
      target={newTab ? '_blank' : undefined}
      active={active}
    >
      <Link
        as="span"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          opacity: 0.8
        }}
        _active={{
          opacity: 0.6
        }}
        opacity={active ? 0.6 : 1}
      >
        {children}
      </Link>
    </NavLinkWrapper>
  );
}

export default function Navigation(): ReactElement {
  const theme = useTheme();

  return (
    <Box
      px={{ base: 6, md: 32 }}
      py={4}
      position="sticky"
      top={0}
      width="full"
      zIndex={999}
      background={transparentize('black', 0.1)(theme)}
      backdropFilter="auto"
      backdropBlur="5px"
      as="nav"
    >
      <HStack
        align="center"
        justify="space-between"
        spacing={{ base: 2, md: 4 }}
      >
        <HStack spacing={4} width="full">
          <Heading>SSI</Heading>
        </HStack>
        <HStack
          as="nav"
          width="full"
          spacing={{ base: 0, sm: 2, md: 4 }}
          flex={1}
        >
          {routes.map(({ title, link, newTab }) => (
            <NavLink key={title} href={link} newTab={newTab}>
              {title}
            </NavLink>
          ))}
          <PrimaryButton
            as="a"
            href="https://wiki.stanfordssi.org/How_to_Join_SSI"
            target="_blank"
            size={{ base: 'sm', md: 'md' }}
          >
            Join
          </PrimaryButton>
        </HStack>
      </HStack>
    </Box>
  );
}
