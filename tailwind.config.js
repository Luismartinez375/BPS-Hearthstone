/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '19/20': '98%',
      },
      height: {
        '19/20': '95%',
      },
      left: {
        '1/5': '20%',
      },
      fontFamily: {
        aclonica: ['var[--font-aclonica]'],
        montserrat: ['var[--font-montserrat]'],
      },
      backgroundImage: {
        hearthstone_bg: "url('/background_plain/background_plain.webp')",
        mage_bg: "url('/mage_bg/background@2x.webp')",
        mage_bg_sm: "url('/mage_bg/background.webp')",
      },
      colors: {
        navbar: '#2c3858',
        accents: '#fcd52d',
        accents_2: '#ffe792',
        gold: '#fcd52d',
        gold_2: '#7a5b35',
        gold_3: '#a38132',
        brown: '#3b2203',
        button_bg: '#405384',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
