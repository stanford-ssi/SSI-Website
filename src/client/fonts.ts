import { Archivo, Workbench } from 'next/font/google';

export const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-open-sans'
});

export const workbench = Workbench({
  subsets: ['latin'],
  variable: '--font-workbench'
});

export const fonts = {
  archivo,
  workbench
};
