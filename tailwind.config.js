const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['**.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}