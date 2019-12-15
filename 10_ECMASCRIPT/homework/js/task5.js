// Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.

var keys = [1, 2, 3, 4];
var values = ["div", "span", "b", "i"];
var map = mapBuilder(keys, values);

function mapBuilder(keysArray, valuesArrays) {
	var newMap = new Map();
	for (var i = 0; i < keysArray.length; i++) {
			newMap.set(keysArray[i], valuesArrays[i]);
	}
	return newMap;
}

console.log(map.size); // 4
console.log(map.get(2)); // "span"
