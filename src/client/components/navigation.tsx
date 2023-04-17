import { Box, HStack, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import { PrimaryButton } from './primaryButton';

type NavLinkWrapperProps = React.PropsWithChildren<{
  href: string;
  active: boolean;
}>;

type NavLinkProps = React.PropsWithChildren<{
  href: string;
}>;

const routes = [
  {
    title: 'Home',
    link: '/'
  }
] as const;

function NavLinkWrapper({
  href,
  active,
  children
}: NavLinkWrapperProps): ReactElement {
  if (active) return <>{children}</>;
  return (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  );
}

function NavLink({ href, children }: NavLinkProps): ReactElement {
  const router = useRouter();

  const url = new URL(`https://stanfordssi.org${href}`);
  const active = url.pathname === router.pathname;

  return (
    <NavLinkWrapper href={href} active={active}>
      <Link
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
  return (
    <Box
      px={{ base: 6, md: 32 }}
      py={6}
      position="sticky"
      top={0}
      width="full"
      zIndex={999}
    >
      <HStack align="center" justify="space-between" spacing={4}>
        <HStack spacing={4} width="full">
          <Text>Stanford SSI</Text>
        </HStack>
        <HStack as="nav" width="full" spacing={4} flex={1}>
          {routes.map(({ title, link }) => (
            <NavLink key={title} href={link}>
              {title}
            </NavLink>
          ))}
          {/* <PrimaryButton
            as="a"
            href="https://join.slack.com/t/ssi-teams/shared_invite/zt-1t8y0gu90-_9AUA7mtIDHqU9qNC80iAw"
            target="_blank"
          >
            Join us
            <Text as="span" display={{ base: 'none', md: 'initial' }}>
              &nbsp;on Slack
            </Text>
          </PrimaryButton> */}
        </HStack>
      </HStack>
    </Box>
  );
}
