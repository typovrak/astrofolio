import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://mscholz.dev',
  trailingSlash: 'never',
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    maxDuration: 60,
  }),
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        page !== 'https://mscholz.dev/blog/syntax'
    }),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
  ],
});
