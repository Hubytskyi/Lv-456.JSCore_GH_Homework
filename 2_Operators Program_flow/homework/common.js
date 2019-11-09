// Lesson 2, task 1 | 06.10.2019 | Homework
/*var x = 1;
var y = 2;

var res1 = String(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"
 
var res2 = Boolean(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

var res3 = Boolean(x, y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

var res4 = typeof res2 * x * y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number" */

// Lesson 2, task 2, part 1 | 06.10.2019 | Homework
/* let num = prompt('Enter a positive even number');
if(num > 0 && num % 2 == 0){
	console.log(true);
}
else{
	console.log(false)
};*/

 // Lesson 2, task 2, part 2 | 06.10.2019 | Homework
/* let num = prompt('Enter a number multiple of 7');
if(num % 7 == 0){
	console.log(true);
}
else{
	console.log(false)
};*/

// Lesson 2, task 3 | 06.10.2019 | Homework
/*  let isAdult = confirm('Have you reached the age of majority?');
 if(isAdult == true){
	 alert('You have reached the age of majority');
 }
 else {
	 alert('You are still young')
 }; */

// Lesson 2, task 4, part 1 | 06.10.2019 | Homework
/* let a = Number(prompt('Enter a first side')),
		b = Number(prompt('Enter a second side')),
		c = Number(prompt('Enter a third side'));

if (a, b, c <= 0){
	alert('Incorrect data');
}
else {
	let p = (a + b + c) / 2;

	function s(x, y, z, q){
		return(Math.sqrt(q * (q - x) * (q - y) * (q - z)));
	};
	
	console.log(s(a, b, c, p).toFixed(3));
} */

// Lesson 2, task 4, part 2 | 06.10.2019 | Homework
/* let a = Number(prompt('Enter a first side')),
		b = Number(prompt('Enter a second side')),
		c = Number(prompt('Enter a third side'));

if (Boolean(a) == false || Boolean(b) == false || Boolean(c) == false){
	alert('Not a number!');
}
else if (a, b, c <= 0){
	alert('Incorrect data');
}
else if ((a * a) + (b * b) == (c * c) || (a * a) + (c * c) == (b * b) || (b * b) + (c * c) == (a * a)){
	alert('Triangle is rectangular!');
	}
else {
	alert('The rectangle is not rectangular!');
}*/

// Lesson 2, task 5, part 1 | 06.10.2019 | Homework
/* let newDate = new Date();
let date = newDate.getHours();

(date >= 23 || date <= 5) ? alert('good night') 
: (date > 5 || date <= 11) ? alert('good morning')
: (date > 11 || date <= 17) ? alert('good day')
: alert('good evening'); */


// Lesson 2, task 5, part 2 | 06.10.2019 | Homework
/* let newDate = new Date();
let date = newDate.getHours();

if(date >= 23 || date <= 5){
	alert('good night');
} else if (date > 5 || date <= 11){
	alert('good morning');
} else if (date > 11 || date <= 17){
	alert('good day');
} else{
	alert('good evening');
} */

// Lesson 2, task 6, part 1 | 06.10.2019 | Homework
/* let a = 5,
		b = a * a;

console.log(b); */

// Lesson 2, task 7, part 2 | 06.10.2019 | Homework
/* let calc = 42;
calc = calc.toString();
let first = +(calc[0]);
let second = +calc[1];
console.log(first, second); */

// Lesson 2, task 8, part 2 | 06.10.2019 | Homework
/* let a = 5,
		b = 7;

console.log(a > 2, b < 3); */

// Lesson 2, task 9, part 2 | 06.10.2019 | Homework
/* let a = 4,
		b = 6,
		c = 9;

console.log(a < b < c); */