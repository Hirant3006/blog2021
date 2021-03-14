module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    textColor: {
      'pink': '#FFCBCB',
      'primary': '#D4D8DB',
      'white': '#ffff'
    },
    backgroundColor: theme => ({
      'primary': '#262626',
    }),
    width: {
      '285': '285px',
    },
    fontFamily: {
      title: 'MontserratBold, sans-serif;',
      regular: 'MontserratRegular, sans-serif;'
    }
  },
  variants: {},
  plugins: [],
}
