/* Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
	Приклад роботи:
checkEmail("Qmail2@gmail.com");
true */

function checkEmail(result){
	let regExp = /\w+@+\w+\.+\w/;
	console.log(regExp.test(result));
};
checkEmail('sdad@sagaf.asf');
