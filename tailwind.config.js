/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        aclonica: ['var[--font-aclonica]'],
        montserrat: ['var[--font-montserrat]'],
      },
      backgroundImage: {
        hearthstone_bg: "url('/background_plain/background_plain.webp')",
      },
      colors: {
        navbar: '#2c3858',
        accents: '#fcd52d',
      },
    },
  },
  plugins: [],
};
