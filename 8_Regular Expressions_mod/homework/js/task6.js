/* Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
	Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
 •  Символ “-” не може повторюватися.

checkEmail('my_mail@gmail.com');
Email is correct!
checkEmail('#my_mail@gmail.com');
Email is not correct! */

function checkEmail(result){
	let regExp = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/;
	if(regExp.test(result) === true){
		console.log('Email is correct');
	} else {
		console.log('Email is not correct');
	}

};
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
