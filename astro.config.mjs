// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://heisyoudan.github.io/danshari-studio',
  base: '/danshari-studio',
  integrations: [react()],
  redirects: {
    '/apps/vortex/': '/work/vortex/',
    '/apps/':        '/work/',
  },
});
