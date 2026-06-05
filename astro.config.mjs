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

  image: {
    // Habilitar rasterización de SVG: necesario para generar PNGs del favicon
    // desde el SVG. El SVG es nuestro y solo contiene paths (sin scripts).
    dangerouslyProcessSVG: true,
  },

  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const url = new URL(item.url);
        const p = url.pathname;
        if (p === "/") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        } else if (p.startsWith("/servicios")) {
          item.priority = 0.9;
        } else if (p.startsWith("/contacto")) {
          item.priority = 0.8;
        } else if (p.startsWith("/quienes-somos")) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
});