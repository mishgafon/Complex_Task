
window.addEventListener('DOMcontentLoaded', function(){
	'use strict';

	//Timer
function countTimer(deadLine){
	let timerHours = document.querySelector('#timer-hours'),
		timerMinutes = document.querySelector('#timer-minutes'),
		timerSeconds = document.querySelector('#timer-seconds');
		
anf = wedwerw
		function getTimeRemaining(){
			let	dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);
				return {timeRemaining, hours, minutes, seconds};

		};

		function updateClock(){
			let timer = getTimeRemaining();

			timerHours.textContent = timer.hours;
			timerMinutes.textContent = timer.minutes;
			timerSeconds.textContent = timer.seconds;

			if(timer.timeRemaining > 0){
				setTimeout(updateClock, 1000);
		
			}
		}

updateClock();

	}

countTimer('1 july 2019');

});