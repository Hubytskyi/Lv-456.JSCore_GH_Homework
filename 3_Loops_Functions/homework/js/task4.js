let num = Number(prompt('Enter the number')),
		deg = Number(prompt('Enter the degree'));

function raiseToDegree(a, b){
	if(Number.isInteger(a, b)){
		alert(Math.pow(a, b))
	} else {
		alert('Enter an integer!')
	}
};
raiseToDegree(num, deg);


