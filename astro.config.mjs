import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  })
});