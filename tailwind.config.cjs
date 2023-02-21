/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js,'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000019',
        secondary: '#0098d4',
        textColor: '#f9f9f9'
      },
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif']
      },
      transitionTimingFunction: {
        card: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      },
      gridTemplateColumns: {
        scard: 'repeat(auto-fit, minmax(200px, 1fr))',
        card: 'repeat(auto-fit, minmax(300px, 1fr))'
      },
      screens: {
        ssm: '320px',
        mmd: '768px'
      },
      gridTemplateRows: {
        scard: '2rem 15.5rem 3rem',
        card: '2rem 18rem 3rem'
      }
    }
  },
  plugins: []
}
