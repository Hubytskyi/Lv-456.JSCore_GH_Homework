/* Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

Sample Output:
raiseToDegree(3, 4);  // 81 */

let num = Number(prompt('Enter the number')),
		deg = Number(prompt('Enter the degree'));

function raiseToDegree(a, b){
	if(Number.isInteger(a, b)){
		alert(Math.pow(a, b))
	} else {
		alert('Enter an integer!')
	}
};
raiseToDegree(num, deg);


