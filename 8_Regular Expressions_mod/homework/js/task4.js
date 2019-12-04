/* Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
	Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java” */

let myReg = /(Java)(Script)/gi;
let myArray = myReg.exec("JavaScript");

console.log(myArray[2], myArray[1]);