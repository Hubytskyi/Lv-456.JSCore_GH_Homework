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