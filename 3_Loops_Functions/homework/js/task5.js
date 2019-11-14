function lastElem(arr, num){
	let pos = 0, n = arr.length - num;
	let removeItems = arr.splice(pos, n);
	return arr;
};
console.log(lastElem([3, 55, 71, 98, -5], 3));