/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow[400],
        light: colors.stone[200],
      },
      backgroundColor: {
        primary: colors.stone[950],
        secondary: colors.stone[900],
        tertiary: colors.stone[800],
        accent: colors.amber[600],
        'accent-hover': colors.amber[500],
      },
      fontFamily: {
        primary: 'Poppins',
        secondary: 'Edu AU VIC WA NT Pre',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 213, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
