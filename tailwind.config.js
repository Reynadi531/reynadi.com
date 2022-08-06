const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#131313',
        gray: '#232323',
        'gray-light': '#B9B9B9',
        'brand-orange': '#FFA751',
        'brand-yellow': '#FFE259',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        sans: ['Inter', ...fontFamily.sans],
        display: ['Rubik Glitch'],
      },
    },
  },
  plugins: [],
};
