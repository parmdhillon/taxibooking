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
        'mustard': {
          '50': '#fffdf7', 
          '100': '#fffbee', 
          '200': '#fff6d5', 
          '300': '#fff1bb', 
          '400': '#ffe689', 
          '500': '#ffdb56', 
          '600': '#e6c54d', 
          '700': '#bfa441', 
          '800': '#998334', 
          '900': '#7d6b2a'
      }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
