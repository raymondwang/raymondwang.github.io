import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // GitHub Pages can't serve content from directories with underscores:
    appDir: 'app',
  },
  // https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: vitePreprocess(),
};

export default config;
