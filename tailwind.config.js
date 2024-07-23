/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: [ 'Outfit', 'sans-serif'],
        secondary: [ "Young Serif", 'serif']
      }
    },
  },
  plugins: [],
}

