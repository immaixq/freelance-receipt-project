/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust paths as necessary
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24292e', // GitHub Dark primary color
        secondary: '#586069', // GitHub Dark secondary color
        accent: '#0366d6', // GitHub Dark accent color
      },
    },
  },
  plugins: [],
};