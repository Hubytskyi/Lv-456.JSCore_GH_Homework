// Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта.

function showProps(obj) {
	var props = [];
	if (Object.keys) return Object.keys(obj);
}      

console.log(showProps({Alex: 1982, John: 1994, Sam: 1977, Frank: 1990, Andrew: 1988}));