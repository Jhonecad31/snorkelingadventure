// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://snorkelingadventure.com',
  adapter: vercel(),
  output: 'server',
  trailingSlash: 'always',
  integrations: [react(), mdx(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        es: 'es-ES',
      }
    },
    filter: (page) =>
      !page.includes('/thanks')
  }),
  partytown({
    config: {
      forward: ['fbq'],
      resolveUrl: (url, location) => {
        if (url.hostname === 'connect.facebook.net') {
          // Proxy requests to your server endpoint
          return new URL(`/api/proxy-facebook-pixel?url=${encodeURIComponent(url.href)}`, location.origin);
        }
        return url;
      },
    },
  }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    fallback: {
      es: 'en'
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});