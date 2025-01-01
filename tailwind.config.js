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
      },
      fontFamily: {
        primary: 'Poppins',
        secondary: 'Edu AU VIC WA NT Pre',
      },
    },
  },
  plugins: [],
}
