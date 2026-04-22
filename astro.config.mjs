import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://realspark.net',
  output: 'static',
  integrations: [sitemap()],
});
