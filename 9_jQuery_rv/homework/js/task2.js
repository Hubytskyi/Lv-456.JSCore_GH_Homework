// Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.

let $classHead = $('h2.head');
let $classInner = $classHead.children('.inner');

$classHead.css('background-image', 'linear-gradient(to right, #76b852, #8DC26F)');

$classInner.css('font-size', '35px')