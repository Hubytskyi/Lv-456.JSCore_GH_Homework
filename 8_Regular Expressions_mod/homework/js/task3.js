let myReg = /d(b+)(d)/gi;
let myArray = myReg.exec("cdbBdbsbz");
console.log(myArray[0], myArray[1], myArray[2]);