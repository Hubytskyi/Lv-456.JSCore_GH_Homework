/* На сторінці є елемент зображення:
     <body>
		   <img class="image" src="dog.jpg">
     </body>
Потрібно змінити зображення dog.jpg на cat.jpg.
Виведіть в модальному вікні вміст тегу img з новим зображенням. */

document.querySelector('img').src = 'dog.jpg';
alert(document.querySelector('img').outerHTML);
document.querySelector('img').src = 'cat.jpg';

// let animal = document.body.children[0];
// alert(animal.outerHTML);
// animal.outerHTML = "<img src=\"cat.jpg\" alt=\"\">";