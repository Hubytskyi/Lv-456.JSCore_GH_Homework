let newDate = new Date();
let date = newDate.getHours();

(date >= 23 || date <= 5) ? alert('good night') 
: (date > 5 || date <= 11) ? alert('good morning')
: (date > 11 || date <= 17) ? alert('good day')
: alert('good evening');