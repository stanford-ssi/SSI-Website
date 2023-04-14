import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#000000',
        color: '#ffffff'
      }
    })
  },
  colors: {
    black: {
      '50': '#000000',
      '100': '#000000',
      '200': '#000000',
      '300': '#000000',
      '400': '#000000',
      '500': '#000000',
      '600': '#000000',
      '700': '#000000',
      '800': '#000000',
      '900': '#000000'
    },
    white: {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#ffffff',
      '400': '#ffffff',
      '500': '#ffffff',
      '600': '#ffffff',
      '700': '#ffffff',
      '800': '#ffffff',
      '900': '#ffffff'
    },
    gray: {
      '400': '#9E9E9E',
      '700': '#3B3B42',
      '800': '#222228',
      '900': '#18181C'
    },
    primary: {
      '100': '#EA8C55',
      '300': '#C75146',
      '500': '#AD2E24',
      '700': '#81171B',
      '900': '#540804'
    }
  }
});

export const primaryGradient =
  'linear(to-r, primary.500, primary.300, primary.100)';
