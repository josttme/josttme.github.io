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
        card: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        skills: 'repeat(auto-fit, minmax(min(100%, 40px), 1fr))'
      },

      gridTemplateRows: {
        card: '30px 1fr  55px'
      }
    }
  },
  plugins: []
}
