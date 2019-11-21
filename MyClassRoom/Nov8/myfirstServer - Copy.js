var http = require("http");

var myserver = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.end("Hello World");
});

myserver.listen(8087, function(){
	console.log("server i slisting at 8087");
});