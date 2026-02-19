import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import {defineConfig, globalIgnores} from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Enforce semicolons
      semi: ['error', 'always'],
      // Enforce single quotes
      quotes: ['error', 'single', {avoidEscape: true}],
      // Enforce no spaces inside curly braces
      'object-curly-spacing': ['error', 'never'],
      // Prefer type imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      // Never import React globally - TypeScript provides React namespace
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['react'],
              importNames: ['default'],
              message:
                'Do not import React globally. Import only specific hooks/utilities. Use React.ReactNode etc without importing React.',
            },
          ],
        },
      ],
    },
  },
]);
