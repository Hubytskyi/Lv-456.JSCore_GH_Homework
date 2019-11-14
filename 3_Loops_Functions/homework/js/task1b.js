let arr = [2, 3, 4, 5];
let multi = 1;
let i = 0;

while (i < arr.length){
	multi *= arr[i];
	i++;
}

console.log(multi);