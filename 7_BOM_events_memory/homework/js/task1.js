function myFunction() {
	let a = window.open('', '', "width=300, height=300");
	setTimeout(function(){
		 a.resizeTo(500, 500);
	}, 2000);
	setTimeout(function(){
		a.moveTo(200,200);
	}, 4000);
	setTimeout(function(){
		a.close();
	}, 6000);
};

myFunction();