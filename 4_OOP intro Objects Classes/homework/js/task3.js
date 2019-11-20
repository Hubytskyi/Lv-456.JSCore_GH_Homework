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