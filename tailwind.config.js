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
        '95vw': '95vw',
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
        glowingLeft: "url('/GlowingArrow left.svg')",
        glowingRight: "url('/GLowingArrowright.png)",
        hearthstone_bg: "url('/background_plain/background_plain2x.webp')",

        mage_bg: "url('/mage_bg/background@2x.webp')",
        mage_bg_sm: "url('/mage_bg/background.webp')",

        druid_bg: "url('/druid_bg/background@2x.webp')",
        druid_bg_sm: "url('/druid_bg/background.webp')",

        hunter_bg: "url('/hunter_bg/Background@2x.webp')",
        hunter_bg_sm: "url('/hunter_bg/Background.webp')",

        priest_bg: "url('/priest_bg/Background@2x.webp')",
        priest_bg_sm: "url('/priest_bg/Background.webp')",

        rouge_bg: "url('/rouge_bg/Background@2x.webp')",
        rouge_bg_sm: "url('/rouge_bg/Background.webp')",

        paladin_bg: "url('/paladin_bg/Background@2x.webp')",
        paladin_bg_sm: "url('/paladin_bg/Background.webp')",

        shaman_bg: "url('/shaman_bg/Background@2x.webp')",
        shaman_bg_sm: "url('/shaman_bg/Background.webp')",

        shaman_bg: "url('/shaman_bg/Background@2x.webp')",
        shaman_bg_sm: "url('/shaman_bg/Background.webp')",

        demonhunter_bg: "url('/demonhunter_bg/Background@2x.webp')",
        demonhunter_bg_sm: "url('/demonhunter_bg/Background.webp')",

        warlock_bg: "url('/warlock_bg/Background@2x.webp')",
        warlock_bg_sm: "url('/warlock_bg/Background.webp')",

        warrior_bg: "url('/warrior_bg/Background.webp')",
        warrior_bg_sm: "url('/warrior_bg/Background.webp')",
      },
      backgroundPosition: {
        'center-custom': '50% 50%',
      },
      backgroundSize: {
        'zoomed-in': '365%', // zooms the image to 125% of the original size. Adjust the value as needed.
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
        card: '#bea27f',
        card_bg: '#7a5b35',
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
