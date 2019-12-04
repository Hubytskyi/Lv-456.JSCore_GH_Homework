//Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. Реалізуйте завдання через while.

let arr = [2, 3, 4, 5];
let multi = 1;

for (let i = 0; i < arr.length; i++){
	multi *= arr[i];
};

console.log(multi);