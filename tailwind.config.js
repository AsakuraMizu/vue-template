import defaultTheme from 'tailwindcss/defaultTheme';
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        serif: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
        mono: ['DM Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  safelist: ['prose', 'prose-sm', 'm-auto', 'text-left'],
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['carbon']),
      scale: 1.2,
    }),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addComponents }) => {
      addComponents({
        '.btn': {
          '@apply px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50': {},
        },
        '.icon-btn': {
          '@apply inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600': {},
        },
      });
    },
  ],
};
