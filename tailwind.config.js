/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whip: '#fdf0d5',
        maroon: '#780000',
        lava: '#c1121f',
        navy: '#003049',
        cerulean: '#669bbc',
      },
      fontFamily: {
        body: ['"Karla"', 'sans-serif'],
        heading: ['"Caprasimo"', 'cursive'],
      },
    },
  },
  plugins: [],
};
