import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
      serif: ['Erode', ...defaultTheme.fontFamily.serif],
    },
    extend: {},
  },
};

export default config;
