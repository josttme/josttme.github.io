/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.js,'],
	theme: {
		extend: {
			colors: {
				primary: '#000019',
				secondary: '#0098d4',
			},
			fontFamily: {
				Nunito: ['Nunito', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
