/* Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
	Приклад – курсор наведений на лінку. */

//1. 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
document.getElementById('first').onclick = function(){
	document.querySelector('body').style.backgroundColor='blue';
};

//2. 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
document.getElementById('second').ondblclick = function(){
	document.querySelector('body').style.backgroundColor='pink';
};

//3. 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
function focusBrown(){
	document.querySelector('body').style.backgroundColor='brown';
};

function focusWhite(){
	document.querySelector('body').style.backgroundColor='white';
};

third.addEventListener('mouseup', focusWhite);
third.addEventListener('mousedown', focusBrown);

//4.При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
function hoverYellow(){
	document.querySelector('body').style.backgroundColor='yellow';
};

function hoverWhite(){
	document.querySelector('body').style.backgroundColor='white';
};

fourth.addEventListener('mouseover', hoverYellow);
fourth.addEventListener('mouseout', hoverWhite);
