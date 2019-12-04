/* Задано HTML-сторінку:
<body>
<input type="text" id="input1" value="Text1">
<input type="text" id="input2" value="Text2">
  </body>
1)	Користувач почергово вводить 2 повідомлення (використати prompt()). 1-е повідомлення записується в 1-ий <input>, 2-ге – в 2-ий.
2)	Поміняти значення 1-го і 2-го інпутів місцями. */

let first = prompt();
let second = prompt();

document.getElementById('input1').value = first;
document.getElementById('input2').value = second;

document.getElementById('input1').value = second;
document.getElementById('input2').value = first;