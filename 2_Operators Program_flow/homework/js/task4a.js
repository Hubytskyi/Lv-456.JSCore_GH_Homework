let a = Number(prompt('Enter a first side')),
		b = Number(prompt('Enter a second side')),
		c = Number(prompt('Enter a third side'));

if (a, b, c <= 0){
	alert('Incorrect data');
}
else {
	let p = (a + b + c) / 2;

	function s(x, y, z, q){
		return(Math.sqrt(q * (q - x) * (q - y) * (q - z)));
	};
	
	console.log(s(a, b, c, p).toFixed(3));
}