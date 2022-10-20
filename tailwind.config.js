/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: '#023047',
        lightblue: '#074059',
      },
    },
  },
  plugins: [],
};
