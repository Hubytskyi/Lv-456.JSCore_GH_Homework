/* Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
	- нечислове значення
	- вік юзера менше 14 років. 
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків. */

function checkAge(){
	let check = Number(prompt('Enter your age',''));
	if (check == false) {
		throw new Error('The field is empty! Please enter your age');
   } else if (check < 14){
		throw new Error('You are not yet 14 years old!');
	} else if (Number.isNaN(check)){
		throw new Error('Enter a number!');
	}
	return check;
};

try {
	let result = checkAge();
	// DOM. Починаємо додавати стилі до сторінки
	document.getElementById('movie').innerHTML = 'Enjoy the movie!';
	document.querySelector('a').innerHTML = 'Go';
	a.setAttribute('style', 'background-color: rgb(95, 38, 57); border-radius: 5px; padding: 8px 70px;font-weight: 800; color: #74EBD5; transition: .5s ease;');
	document.body.style.backgroundImage = 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)';
	// DOM. Завершуємо додавати стилі до сторінки
} catch (exception) {
	alert(exception.name);
	alert(exception.message);
}