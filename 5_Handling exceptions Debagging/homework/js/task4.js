/* Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
	Приклад роботи програми:
> console.log(showMonthName(5)); 
May
> console.log(showMonthName(14)); 
MonthException Incorrect month number */

class MonthException {
	constructor(message){
		this.name = message;
	}
}
function showMonthName(month){
	let date = [, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	if(month < 1 || month > 12){
		throw new Error(`${MonthException.name} Incorrect month number`);
	}
	return(date[month]);
}

try {
	let result = showMonthName(2); // Вводимо в параметр число місяця
	console.log(result);
} catch (exception) {
	console.log(exception.name);
	console.log(exception.message);
	console.log(exception.stack);
}