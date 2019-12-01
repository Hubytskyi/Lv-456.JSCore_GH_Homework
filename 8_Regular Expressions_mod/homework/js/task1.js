function upperCase(result){
	regexp = /^[A-Z]/;
	if(regexp.test(result)){
		console.log('String\'s starts with uppercase character');
	} else {
		console.log('String\'s not starts with uppercase character')
	}
};
upperCase('egexp');
upperCase('Ggexp');