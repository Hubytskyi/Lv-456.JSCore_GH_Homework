document.querySelector('body').insertAdjacentHTML('afterbegin', '<main class=\'mainClass check item\'></main>');
document.querySelector('main').insertAdjacentHTML('afterbegin', '<div id=\'myDiv\'></div>');
document.querySelector('div').insertAdjacentHTML('afterbegin', '<p>First paragraph</p>');


// Або так. Менше коду, але читабельність важча
document.querySelector('body').insertAdjacentHTML('afterbegin', '<main class=\'mainClass check item\'><div id=\'myDiv\'><p>First paragraph</p></div></main>');

