function checkBankCard(result){
	let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
	console.log(regExp.test(result));
};
checkBankCard('5555-5555-5555-5555');


