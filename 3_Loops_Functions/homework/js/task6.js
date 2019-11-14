function upCase(str) {
return str.split(' ').map(s => s[0].toUpperCase() + s.substr(1)).join(' ')
	};
	console.log(upCase("i love java script"));