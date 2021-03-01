module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primario': '#1a146c',
        'amarillo': '#ffc803',
        'marron': '#342931',
        'primario-hover': '#10466e',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}