// Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
// b) кратним числу 7.
// Результат перевірки вивести в консоль.


let num = prompt('Enter a number multiple of 7');
if(num % 7 == 0){
	console.log(true);
}
else{
	console.log(false)
};