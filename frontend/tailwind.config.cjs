/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#E0FFF2',
          100: '#C2FFE6',
          200: '#8AFFCE',
          300: '#4DFFB5',
          400: '#0FFF9B',
          500: '#00D47A',
          600: '#00A862',
          700: '#00804A',
          800: '#005733',
          900: '#002918',
        },
      },
    },
  },
  plugins: [],
};
