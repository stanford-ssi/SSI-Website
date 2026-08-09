import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-archivo), sans-serif',
    body: 'var(--font-archivo), sans-serif'
  },
  styles: {
    global: {
      html: {
        height: 'full',
        overflow: 'hidden'
      },
      body: {
        bg: '#000000',
        color: '#ffffff',
        height: 'full',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      },
      '#__next': {
        height: 'full',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden'
      },
      '.instagram-media': {
        border: 'none !important'
      },
      '.instagram-media-rendered': {
        border: '1px solid rgb(219, 219, 219) !important'
      }
    }
  },
  colors: {
    gray: {
      400: '#9E9E9E',
      700: '#3B3B42',
      800: '#222228',
      900: '#18181C'
    },
    primary: {
      100: '#c9514a',
      300: '#BE1E2D',
      500: '#981623',
      700: '#7d121d',
      900: '#620e16'
    }
  }
});

export const primaryGradient = 'linear(to-r, primary.500, primary.100)';
