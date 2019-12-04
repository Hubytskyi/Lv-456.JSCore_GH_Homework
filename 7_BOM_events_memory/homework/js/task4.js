// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.

document.getElementById('button').onclick = function(){
	let selectName = document.getElementById('select__name');
	selectName.remove(selectName.selectedIndex);
};