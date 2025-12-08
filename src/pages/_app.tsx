import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { fonts } from 'client/fonts';
import { theme } from 'client/theme';
import { trpc } from 'client/trpc';
import type { AppProps } from 'next/app';
import { useState } from 'react';

function getBaseUrl() {
  if (globalThis.window !== undefined) {
    return '';
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: getBaseUrl() + '/api/trpc'
        })
      ]
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <style jsx global>{`
          :root {
            --font-archivo: ${fonts.archivo.style.fontFamily};
            --font-workbench: ${fonts.workbench.style.fontFamily};
          }
        `}</style>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
        <Analytics />
        <SpeedInsights />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
