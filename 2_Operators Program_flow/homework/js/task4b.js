let a = Number(prompt('Enter a first side')),
		b = Number(prompt('Enter a second side')),
		c = Number(prompt('Enter a third side'));

if (Boolean(a) == false || Boolean(b) == false || Boolean(c) == false){
	alert('Not a number!');
}
else if (a, b, c <= 0){
	alert('Incorrect data');
}
else if ((a * a) + (b * b) == (c * c) || (a * a) + (c * c) == (b * b) || (b * b) + (c * c) == (a * a)){
	alert('Triangle is rectangular!');
	}
else {
	alert('The rectangle is not rectangular!');
}