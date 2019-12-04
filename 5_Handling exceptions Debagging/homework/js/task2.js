// Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea() {
	let first = Number(prompt("Enter a number:", ""));
	let second = Number(prompt("Enter a number:", ""));
	let area = first * second;
		if (Number.isNaN(area) || area == false) {
			throw new Error("You have not entered a number");
	   }
	return area;
};

try {
	let result = calcRectangleArea();
	console.log(result);
} catch (exception) {
	console.log(exception.name);
	console.log(exception.message);
	console.log(exception.stack);
}
