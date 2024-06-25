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
    black: {
      50: '#000000',
      100: '#000000',
      200: '#000000',
      300: '#000000',
      400: '#000000',
      500: '#000000',
      600: '#000000',
      700: '#000000',
      800: '#000000',
      900: '#000000'
    },
    white: {
      50: '#ffffff',
      100: '#ffffff',
      200: '#ffffff',
      300: '#ffffff',
      400: '#ffffff',
      500: '#ffffff',
      600: '#ffffff',
      700: '#ffffff',
      800: '#ffffff',
      900: '#ffffff'
    },
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
  },
  textStyles: {
    gradient: {
      bgGradient: 'linear(to-r, primary.500, primary.100)',
      bgClip: 'text'
    },
    shadow: {
      textShadow: '2px 2px #ff0000'
    },
    outlined: {
      color: 'transparent',
      textStroke: '1px #ff0000'
    },
    fancy: {
      fontFamily: 'cursive',
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: 'primary.500'
    }
  }
});

export const primaryGradient = 'linear(to-r, primary.500, primary.100)';
