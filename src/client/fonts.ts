import { Archivo, Workbench } from 'next/font/google';

export const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo'
});

export const workbench = Workbench({
  subsets: ['latin'],
  variable: '--font-workbench'
});

export const fonts = {
  archivo,
  workbench
};
