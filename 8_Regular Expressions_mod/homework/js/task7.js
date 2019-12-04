/* Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та цифри, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою кількістю (наприклад, 3.4).
	Приклад роботи:
checkLogin('ee11ret3');
true 
11 
3

checkLogin('ee1*1ret3');
false 
1 		2(times)
3 */

function checkLogin(str){
	let loginStr = /^[a-zA-Z]+[a-zA-Z0-9]{2,10}$/i;
	let loginNum = /\d+/g;
		console.log(loginStr.test(str));
	let num = str.match(loginNum);
	for (let i = 0; i < num.length; i++){
		console.log(num[i]);
	};
};

checkLogin('ee11ret3');
checkLogin('ee1*1ret3');