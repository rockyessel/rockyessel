/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        max_screen: { max: '674px' },
      },
      fontFamily: {
        noe: ['Noe Display'],
        pink: ['Pink Yellow Black'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
