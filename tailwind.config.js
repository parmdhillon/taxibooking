module.exports = {
  purge: [
    './src/pages/**/*.js',
    './src/components/**/*.js',
    './src/screens/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Sen, Helvetica, Arial, sans-serif',
      },
      colors:{
        'charade': {
          DEFAULT: '#2F2E41',
          '50': '#9D9CB9',
          '100': '#8F8DAE',
          '200': '#716F99',
          '300': '#5A587D',
          '400': '#45435F',
          '500': '#2F2E41',
          '600': '#191923',
          '700': '#040405',
          '800': '#000000',
          '900': '#000000'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
