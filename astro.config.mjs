// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio final del sitio (se usa para sitemap, canonical y SEO).
  // Actualiza esta URL cuando se conecte el dominio real.
  site: "https://legaleduca.cl",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});