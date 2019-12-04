/* Знайти одну d, за якою йде одна чи більше b, за якими одна d. Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
	Приклад роботи:   
Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]*/

let myReg = /d(b+)(d)/gi;
let myArray = myReg.exec("cdbBdbsbz");
console.log(myArray[0], myArray[1], myArray[2]);