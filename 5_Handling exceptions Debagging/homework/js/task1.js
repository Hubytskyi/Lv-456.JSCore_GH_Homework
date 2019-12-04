/* Напишіть функцію testThrow(), яка прийматиме параметр помилка exception і перевірятиме роботу оператора throw, зокрема той факт, що як об’єкт помилки можна передати значення будь-якого типу.
	Приклад результату:
> testThrow(5);
Caught: 5
> testThrow('Test');
Caught: Test
> testThrow(new Error('An error happened'));
Caught: Error: An error happened */

function testThrow(exception){
	try {
		throw exception;
	}
	catch (err){
		console.log('Caught: ' + err)
	}
};

testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));
