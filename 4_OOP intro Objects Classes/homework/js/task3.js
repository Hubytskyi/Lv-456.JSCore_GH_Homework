/* Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
       1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
       2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
       3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
	4) Вивести значення зарплати з новим experience.
	5) Створити кілька екземплярів класу (працівників) з різними зарплатами. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value ………..

Example usage:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

Output example:
John Johnson
John Johnson salary: 460
New experience: 1.2
John Johnson salary: 552
New experience: 1.5
John Johnson salary: 690 */


class Worker {
		constructor(fullName, dayRate, workingDays){
		this._experience = 1.2;
		this.fullName = fullName;
		this.dayRate = dayRate;
		this.workingDays = workingDays;
	}
	showSalary(){
		console.log(this.fullName + ' salary: ' + this.dayRate * this.workingDays);
	}
	showSalaryWithExperience(){
		console.log(this.fullName + ' salary: ' + this.dayRate * this.workingDays * this._experience);
	}
	get setExp(){
		return this._experience;
	}
	set setExp(value){
		this._experience = value;
	}
};

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1._experience);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1._experience);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Ivan Purch", 21, 25);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2._experience);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2._experience);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Vasya Pupkin", 19, 20);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3._experience);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3._experience);
worker3.showSalaryWithExperience();