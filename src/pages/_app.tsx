import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'client/theme';
import { trpc } from 'client/trpc';
import type { AppProps } from 'next/app';
import { fonts } from 'client/fonts';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-archivo: ${fonts.archivo.style.fontFamily};
          --font-workbench: ${fonts.workbench.style.fontFamily};
        }
      `}</style>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default trpc.withTRPC(App);
