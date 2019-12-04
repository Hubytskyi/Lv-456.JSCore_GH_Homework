/* Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
	a) визначити і вивести в консоль площу трикутника 
Здійснювати перевірку чи введені користувачем значення додатні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 => 8.424).*/


let a = Number(prompt('Enter a first side')),
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
	
	console.log(s(a, b, c, p).toFixed(3).trim());
}