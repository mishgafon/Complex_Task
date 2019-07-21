const date = new Date();
	 day = date.getDay();
	 hours = date.getHours();


function hello() {
	if (hours < 12) {
		return ('Доброе утро!');
	} else 
		if (hours > 12 &&  hours < 18 ){
			return ('Добрый день!');
		}else 
			if (hours > 18 &&  hours < 24 ){
				return ('Добрый вечер!');
			}
		};
document.write(`${hello()} <br>`);

	  
function showDay(day) {
	let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	return days[day];
};
document.write(`Сегодня: ${showDay(day)} <br>`);
document.write(`Текущее время: ${date.toLocaleTimeString()} <br>`);




let  newYear = new Date('January 01, 2020');
	 msPerDay = 24 * 60 * 60 * 1000;
	 	result = Math.round((newYear.getTime() - date.getTime()) /msPerDay );
document.write(`До нового года осталось ${result} дня(дней)`);


