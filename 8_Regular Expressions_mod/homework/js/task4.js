let myReg = /(Java)(Script)/gi;
let myArray = myReg.exec("JavaScript");

console.log(myArray[2], myArray[1]);