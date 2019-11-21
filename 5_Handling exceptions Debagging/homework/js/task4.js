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