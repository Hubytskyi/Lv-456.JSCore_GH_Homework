function testThrow(exception){
	try {
		throw exception;
	}
	catch (err){
		console.log('Caught: ' + err)
	}
};

testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));
