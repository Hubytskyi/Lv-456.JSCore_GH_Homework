/* В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
	- ваше ім’я
	- ваше прізвище
	- навчальна група
	- ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль. */

let name = 'Mykola',
		surname = 'Hubytskyi',
		group = 'Lv-456.JSCore',
		yearOld = 25,
		relationship = false;

console.log(typeof yearOld);
console.log(typeof relationship);
console.log(typeof name);
console.log(typeof surname);
console.log(typeof group);

let zero = null;
console.log(zero);

let undfnd = undefined;
console.log(undfnd);