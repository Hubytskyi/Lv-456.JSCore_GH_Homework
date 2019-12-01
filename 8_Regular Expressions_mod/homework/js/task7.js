function checkLogin(str){
	let loginStr = /^[a-zA-Z]+[a-zA-Z0-9]{2,10}$/i;
	let loginNum = /\d+/g;
		console.log(loginStr.test(str));
	let num = str.match(loginNum);
	for (let i = 0; i < num.length; i++){
		console.log(num[i]);
	};
};

checkLogin('ee11ret3');
checkLogin('ee1*1ret3');