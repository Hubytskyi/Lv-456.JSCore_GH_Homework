let content = document.querySelectorAll('div p');
let count = 0;
for (let element of content){
	console.log(`Selector text ${count}: ${element.innerHTML}`);
	count++;
};