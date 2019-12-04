/* На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
	1) першого елемента списку
	2) останнього елемента списку
	3) другого елемента списку
	4) четвертого елемента списку
	5) третього елемента списку
Приклад:
•	1
•	2
•	3
•	4
•	5
Результат виводу: 1, 5, 2, 4, 3 */

let contentFirst = document.getElementById('test').firstElementChild.innerHTML;
let contentSecond = document.getElementById('test').childNodes[3].innerHTML;
let contentThird = document.getElementById('test').childNodes[5].innerHTML;
let contentFourth = document.getElementById('test').childNodes[7].innerHTML;
let contentLast = document.getElementById('test').lastElementChild.innerHTML;

let arr = [contentFirst, contentLast, contentSecond, contentFourth, contentThird];

alert(arr);
