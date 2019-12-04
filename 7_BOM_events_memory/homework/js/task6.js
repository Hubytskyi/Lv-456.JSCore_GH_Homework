// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.

let dimensions = document.getElementById('container');

dimensions.firstElementChild.innerHTML = 'Width: ' + innerWidth;
dimensions.lastElementChild.innerHTML = 'Height: ' + innerHeight;