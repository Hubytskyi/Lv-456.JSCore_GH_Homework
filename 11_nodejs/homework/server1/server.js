const http = require('http');
const PORT = process.env.PORT || 5000;
const os = require('os');
const path = require('path');

http.createServer((req, res) => {

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end(`<h1>System information:</h1>
					<p>Current user name: <b>${os.hostname()}</b></p>
					<p>OS type: <b>${os.platform()}</b></p>
					<p>System work time: <b>${os.uptime()}</b> sec</p>
					<p>Current work directory: <b>${path.dirname(__filename)}</b></p>
					<p>Server file name: <b>${path.basename(__filename)}</b></p>
					`);

}).listen(PORT, () => {
	console.log(`Server has been started on ${PORT}...`)
})