/* Для сторінки
		  <body>
		       <h1>I'am a big header!!!</h1>
        <div id="myDiv">
            <p>First paragraph</p>
            <p>Second paragraph</p>
            <p>Third paragraph</p>
            <p>Fourth paragraph</p>
        </div>
        <ul id="myList">
            <li>Make</li>
            <li>me</li>
            <li>vertical!</li>
        </ul>
        <span>Make me invisible, please!</span>
	    </body>
Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано нижче: */

document.querySelector('h1').style.backgroundColor = 'green';
document.querySelector('p').style.fontWeight = 'bold';
document.querySelector('div').childNodes[3].style.color = 'red';
document.querySelector('div').childNodes[5].style.textDecoration = 'underline';
document.querySelector('div').childNodes[7].style.fontStyle = 'italic';
document.getElementById('myList').style.listStyle = 'none';
document.getElementById('myList').style.display = 'flex';
document.querySelector('span').style.visibility = 'hidden'; //або -> display = 'none';