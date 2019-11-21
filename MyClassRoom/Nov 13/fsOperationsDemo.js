var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
	res.writeHead(200, {
		'content-type': 'text/plain'
	});

	var writeStream = fs.createWriteStream("abcpqr.txt");
	writeStream.write("Good morning all");
	writeStream.write("hope every thing is going good");
	writeStream.write("END for today");
	writeStream.end();
	res.end("data is been written successfuly");
	/*fs.readFile("sample.txt", 'utf8', function(error, data){
		//console.log("heelo")
		console.log(data);
		res.end(data);
	});*/

	//res.end("server got created");
});

server.listen(8082, function(){
	console.log("Server is listing at 8082");
});