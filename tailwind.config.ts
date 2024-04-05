import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ['"Tilt Warp"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        display: ['"Protest Riot"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

export default config;
