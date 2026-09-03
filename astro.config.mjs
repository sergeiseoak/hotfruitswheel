import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hotfruitswheel.com',
  output: 'static',
  integrations: [sitemap()],
});
