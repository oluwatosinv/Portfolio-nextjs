module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'shippori-mincho': ['"Shippori Mincho"', 'cursive'],
        'Chivo': ['Chivo', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
