/* Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
	Приклад роботи:
upperCase('regexp');
upperCase('RegExp');
String's not starts with uppercase character 
String's starts with uppercase character */

function upperCase(result){
	regexp = /^[A-Z]/;
	if(regexp.test(result)){
		console.log('String\'s starts with uppercase character');
	} else {
		console.log('String\'s not starts with uppercase character')
	}
};
upperCase('egexp');
upperCase('Ggexp');