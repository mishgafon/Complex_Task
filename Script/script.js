'use strict'

let lang = prompt('Введите на каком языке отображать дни недели', '"ru" или "en"');
if (lang === 'ru') {
    console.log('Дни недели: Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
    console.log('Days of the week: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
} else  
console.log('Некорректный выбор языка. Попробуйте снова'); 


switch (lang){
    case 'ru':
        console.log('Дни недели: Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Days of the week: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
        break;  
    default: 
        console.log('Некорректный выбор языка. Попробуйте снова');
}




let namePerson = prompt('Введите имя "Артем" или "Максим"'),
    position = namePerson === 'Артем' ? 'Директор' : namePerson === 'Артем' ? 'Преподаватель' : 'Студент'; 
console.log('position: ', position);
