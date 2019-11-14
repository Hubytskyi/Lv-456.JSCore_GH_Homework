let arr = [];

function randArray(k) {
	for(let i = 0; i < k; i++){
		arr.push(Math.floor(Math.random() * 500));
	};
	console.log(arr);
};
randArray(5);
