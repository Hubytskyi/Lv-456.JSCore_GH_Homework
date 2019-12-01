function checkEmail(result){
	let regExp = /\w+@+\w+\.+\w/;
	console.log(regExp.test(result));
};
checkEmail('sdad@sagaf.asf');
