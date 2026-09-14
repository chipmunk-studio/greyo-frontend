import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  envPrefix: 'VITE_',
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, 'src') },
  },
  server: { port: 3300, strictPort: true },
  preview: { port: 3300, strictPort: true },
  build: {
    assetsDir: 'assets',
    target: 'es2020',
    sourcemap: false,
  },
});
