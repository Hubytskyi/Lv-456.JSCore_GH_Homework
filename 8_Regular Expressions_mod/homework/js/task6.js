function checkEmail(result){
	let regExp = /^(\s)*([a-zA-Z0-9_-]+\.\s)*[a-zA-Z0-9_-]+(\s)*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/;
	if(regExp.test(result) === true){
		console.log('Email is correct');
	} else {
		console.log('Email is not correct');
	}

};
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
