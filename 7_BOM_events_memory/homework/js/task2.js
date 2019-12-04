/* Для заданої HTML-сторінки:

<p id ='text'>I learning JavaScript events!</p> 
<div>
	<button . . . . . >Change style!</button>
</div>

напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS". */

function changeCSS(){
	document.querySelector('button').onclick = function(){
		document.querySelector('p').style='color: orange; font-size: 20px; font-family: Comic Sans MS;';
	}
};
changeCSS();