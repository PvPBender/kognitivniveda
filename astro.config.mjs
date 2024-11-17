import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: './docs',
  base: '', // This will be updated when you know your repo name
  build: {
    assets: 'assets'
  }
});