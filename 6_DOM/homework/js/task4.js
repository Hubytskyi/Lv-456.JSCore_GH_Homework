let contentFirst = document.getElementById('test').firstElementChild.innerHTML;
let contentSecond = document.getElementById('test').childNodes[3].innerHTML;
let contentThird = document.getElementById('test').childNodes[5].innerHTML;
let contentFourth = document.getElementById('test').childNodes[7].innerHTML;
let contentLast = document.getElementById('test').lastElementChild.innerHTML;

let arr = [contentFirst, contentLast, contentSecond, contentFourth, contentThird]

alert(arr);

// Другий спосіб
// let content = [document.getElementById('test').childNodes[1].innerHTML, document.getElementById('test').childNodes[9].innerHTML, document.getElementById('test').childNodes[3].innerHTML, document.getElementById('test').childNodes[7].innerHTML, document.getElementById('test').childNodes[5].innerHTML];

// alert(content);