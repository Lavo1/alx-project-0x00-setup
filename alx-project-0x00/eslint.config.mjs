// Basic ESLint configuration for Next.js and TypeScript
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.config({
    extends: [
      'next',
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
      // Add custom rules here
    },
  }),
];
