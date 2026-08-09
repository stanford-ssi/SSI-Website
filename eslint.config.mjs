import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.config({
    env: {
      browser: true,
      webextensions: true,
      amd: true,
      node: true
    }
  }),
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    'prettier',
    'plugin:prettier/recommended'
  ),
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'simple-import-sort/imports': 'warn',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ]
    }
  }
];

export default eslintConfig;
