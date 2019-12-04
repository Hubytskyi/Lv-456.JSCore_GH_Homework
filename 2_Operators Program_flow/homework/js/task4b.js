/* Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
	a) визначити і вивести в консоль площу трикутника 
	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення додатні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424). */

let a = Number(prompt('Enter a first side')),
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
}