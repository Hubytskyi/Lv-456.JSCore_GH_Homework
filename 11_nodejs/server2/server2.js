const http = require('http');
const pM = require('./personalmodule')
const server = http.createServer((req, res) => {

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write(pM);
	res.end();

});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
	console.log(`Server has been started on ${PORT}...`)
})