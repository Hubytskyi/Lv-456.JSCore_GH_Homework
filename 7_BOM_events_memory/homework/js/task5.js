document.getElementById('button').onclick = function(){
	document.querySelector('p').innerHTML += '<p>I was pressed!</p>';
};

document.getElementById('button').onmouseover = function(){
	document.querySelector('p').innerHTML += '<p>Mouse on me!</p>';
};

document.getElementById('button').onmouseout = function(){
	document.querySelector('p').innerHTML += '<p>Mouse is not on me!</p>';
};


// ============== Другий варіант ==============

// document.querySelector('button').onclick = function(){
// 	document.querySelector('button').after('I was pressed!');
// };

// document.querySelector('button').onmouseover = function(){
// 	document.querySelector('button').after('Mouse on me!');
// };

// document.querySelector('button').onmouseout = function(){
// 	document.querySelector('button').after('Mouse is not on me!');
// };