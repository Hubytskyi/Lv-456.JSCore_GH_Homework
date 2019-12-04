/* Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад для об’єкта
let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
Результат має бути 3. */

let mentor = { 
	course: "JS fundamental", 
	duration: 3,
	direction: "web-development" 
};

function getPropsCount(currentObject) {
	return Object.keys(mentor).length;
};

console.log(getPropsCount());