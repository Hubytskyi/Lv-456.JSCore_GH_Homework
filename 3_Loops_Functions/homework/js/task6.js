/* Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в великий регістр.

Input string: ‘i love java script' 
Output string: 'I Love Java Script' */

function upCase(str) {
return str.split(' ').map(s => s[0].toUpperCase() + s.substr(1)).join(' ')
	};
	console.log(upCase("i love java script"));