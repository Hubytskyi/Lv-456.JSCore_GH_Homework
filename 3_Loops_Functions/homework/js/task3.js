/* Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

Sample Output:
randArray(5);  //399,310,232,379,40 */

let arr = [];

function randArray(k) {
	for(let i = 0; i < k; i++){
		arr.push(Math.floor(Math.random() * 500));
	};
	console.log(arr);
};
randArray(5);
