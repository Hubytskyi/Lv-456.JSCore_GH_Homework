// Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
// a) парним додатним;
// Результат перевірки вивести в консоль.

let num = prompt('Enter a positive even number');
if(num > 0 && num % 2 == 0){
	console.log(true);
}
else{
	console.log(false)
};