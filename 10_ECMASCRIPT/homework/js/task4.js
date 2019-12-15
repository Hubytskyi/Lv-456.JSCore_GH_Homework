// Змініть код використовуючи стрілочні функції, щоб в коді не використовувалися методи bind().

var server = {
	data: 0,
	convertToString: () => server.data + ""
};
var client = {
	server: server,
	result: "",
	calc: (data) => {
			server.data = data;
			client.result = server.convertToString(); 
	}
}; 

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"