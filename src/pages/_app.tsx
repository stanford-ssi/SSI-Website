import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'client/theme';
import { trpc } from 'client/trpc';
import type { AppProps } from 'next/app';

function App({ Component, ...rest }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...rest} />
    </ChakraProvider>
  );
}

export default trpc.withTRPC(App);
