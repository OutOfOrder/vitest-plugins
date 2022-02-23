import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    setupFiles: [
      'vitest-plugins.js',
    ],
  },
});
