const os = require('os');
const date = new Date;
const time = date.getHours()
let greeting;

(time >= 23 && time <= 5) ? greeting = 'Good night'
: (time > 5 && time <= 11) ? greeting = 'Good morning'
: (time > 11 && time <= 17) ? greeting = 'Good day'
: time = 'Good evening';

const persMod = `
	<p>Date of request: ${date}</p>
	<p> ${greeting}, ${os.hostname()}</p>
`;

module.exports = persMod;