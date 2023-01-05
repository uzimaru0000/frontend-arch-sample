import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
  },
  plugins: [react(), pages()],
});
