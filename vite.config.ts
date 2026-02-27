/// <reference types="vitest/config" />

import path from 'path';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    coverage: {
      exclude: ['src/stories/**', 'src/test/**'],
      include: ['src/**/*.{ts,tsx}'],
      reporter: ['text', 'text-summary'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
});
