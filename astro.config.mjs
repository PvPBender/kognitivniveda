import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pvpbender.github.io',
  base: '/kognitivniveda',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});