/* Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() для виведення назви класу.
Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури. В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r.
	Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce().
	 class GeometricFigure {
			getArea() {
	return 0;
}
toString() {
     return Object.getPrototypeOf(this).constructor.name;
}
     }
		Your code . . . 
	
	const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
    	console.log(handleFigures(figures));

Приклад результату:
	Geometric figure: Triangle - area: 10
Geometric figure: Square - area: 49
Geometric figure: Circle - area: 78.53981633974483
137.53981633974485 // total area */

class GeometricFigure {
	getArea() {
		return 0;
	}
	toString() {
		return Object.getPrototypeOf(this).constructor.name;
	}
}
class Triangle extends GeometricFigure {
	constructor(a, h){
		super();
		this.a = a;
		this.h = h;
	}
	getArea() {
		return (this.a * this.h / 2);
	}
}
class Square extends GeometricFigure {
	constructor(b){
		super();
		this.b = b;
	}
	getArea(b) {
		return (this.b * this.b);
	}
}
class Circle extends GeometricFigure {
	constructor(r){
		super();
		this.r = r;
	}
	getArea(r) {
		return (this.r * this.r * Math.PI);
	}
}

function handleFigures(arr) {
	let result = arr.reduce(function (accumulator, currentValue) {

			if (currentValue instanceof GeometricFigure) {
					console.log('Geometric figure:' + ` ${currentValue.toString()} - area: ${currentValue.getArea()}`);
					return accumulator + currentValue.getArea();
			}
	},0);
return (result);
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
	console.log(handleFigures(figures));