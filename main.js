import './style.css'

/* const body = document.querySelector('body')
const screenHeight = window.innerHeight
body.style.height = screenHeight + 'px' */
const cursor = document.querySelector('.cursor')
let timeout

if ('ontouchstart' in window) {
	window.addEventListener('touchstart', (e) => {
		;[...e.changedTouches].forEach((touch) => {
			const dot = document.createElement('div')
			dot.classList.add('cursor')
			dot.style.top = `${touch.pageY}px`
			dot.style.left = `${touch.pageX}px`
			dot.id = parseInt(touch.identifier)
			document.body.append(dot)
		})
		document.addEventListener('touchmove', (e) => {
			;[...e.changedTouches].forEach((touch) => {
				const dot = document.getElementById(touch.identifier)
				dot.style.top = `${touch.pageY}px`
				dot.style.left = `${touch.pageX}px `
			})
		})
		document.addEventListener('touchend', (e) => {
			;[...e.changedTouches].forEach((touch) => {
				const dot = document.getElementById(touch.identifier)
				dot !== null && dot.remove()
			})
		})
		document.addEventListener('touchcancel', (e) => {
			;[...e.changedTouches].forEach((touch) => {
				const dot = document.getElementById(touch.identifier)
				dot.remove()
			})
		})
	})
} else {
	document.addEventListener('mousemove', (e) => {
		let x = e.pageX
		let y = e.pageY

		cursor.style.top = y + 'px'
		cursor.style.left = x + 'px'
		cursor.style.display = 'block'
		function mouseStopped() {
			cursor.style.display = 'none'
		}
		clearTimeout(timeout)
		timeout = setTimeout(mouseStopped, 1000)
	})

	document.addEventListener('mouseout', () => {
		cursor.style.display = 'none'
	})
}
