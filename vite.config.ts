import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global `expect`, `describe`, etc.
    environment: 'jsdom', // Simulates a browser-like environment
    setupFiles: './src/setupTests.ts', // Path to your setup file
  },
});
