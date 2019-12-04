/* Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки наведену структуру з тегів і їх атрибутів. Виконайте завдання 2 способами.

		<body>
		  <main class=”mainClass check item”> 	
		        <div id="myDiv">
           <p>First paragraph</p>           
         </div>
       </main> 
	    </body>
 */

document.querySelector('body').insertAdjacentHTML('afterbegin', '<main class=\'mainClass check item\'></main>');
document.querySelector('main').insertAdjacentHTML('afterbegin', '<div id=\'myDiv\'></div>');
document.querySelector('div').insertAdjacentHTML('afterbegin', '<p>First paragraph</p>');


// Або так.
// document.querySelector('body').insertAdjacentHTML('afterbegin', '<main class=\'mainClass check item\'><div id=\'myDiv\'><p>First paragraph</p></div></main>');

// Або так.
// document.querySelector('body').innerHTML = '<main class=\'mainClass check item\'><div id=\'myDiv\'><p>First paragraph</p></div></main>';