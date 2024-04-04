import adapter from '@sveltejs/adapter-static';
import type { Config } from '@sveltejs/kit';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config: Config = {
  kit: { adapter: adapter() },
  // https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: vitePreprocess(),
};

export default config;
