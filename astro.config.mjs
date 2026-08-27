// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://heisyoudan.github.io/hxdstudio-site',
  base: '/hxdstudio-site',
  integrations: [react()],
  redirects: {
    '/apps/vortex/': '/work/vortex/',
    '/apps/':        '/work/',
  },
});
