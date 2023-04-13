import { ChakraProvider } from '@chakra-ui/react';
import { trpc } from 'client/trpc';
import type { AppProps } from 'next/app';

function App({ Component, ...rest }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Component {...rest} />
    </ChakraProvider>
  );
}

export default trpc.withTRPC(App);
