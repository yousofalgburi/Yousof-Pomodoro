let pomodoroCurrentlyRunning = false
let totalNumberPomodoroPerSession = 4
let currentPomodoroSession = 1
let pomodoroTimePerSession = 60 * 10 * 5
let display = document.querySelector('#timer')

function startTimer(duration) {
	var timer = duration,
		minutes,
		seconds
	setInterval(function () {
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10)

		minutes = minutes < 10 ? '0' + minutes : minutes
		seconds = seconds < 10 ? '0' + seconds : seconds

		display.textContent = minutes + ':' + seconds

		if (--timer < 0) {
			console.log('timer run out')
			timer = duration
		}
	}, 1000)
}

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const password = urlParams.get('password')

if (password && password !== 'thesecert') {
	document.querySelector('.admin-tools').classList.add('hidden')
}

function startPomodoro() {
	if (pomodoroCurrentlyRunning) {
		document
			.querySelector('.pomodoro-already-running')
			.classList.remove('hidden')

		document.querySelector('.on-timer').classList.add('hidden')

		setTimeout(function () {
			document
				.querySelector('.pomodoro-already-running')
				.classList.add('hidden')
		}, 3000)

		return
	}

	pomodoroCurrentlyRunning = true
	document.querySelector('.on-timer').classList.remove('hidden')
	startTimer(pomodoroTimePerSession)
}
