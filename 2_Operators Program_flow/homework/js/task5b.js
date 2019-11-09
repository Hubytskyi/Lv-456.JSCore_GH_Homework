let newDate = new Date();
let date = newDate.getHours();

if(date >= 23 || date <= 5){
	alert('good night');
} else if (date > 5 || date <= 11){
	alert('good morning');
} else if (date > 11 || date <= 17){
	alert('good day');
} else{
	alert('good evening');
}